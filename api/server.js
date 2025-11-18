// module.exports = (req, res) => {
//   try {
//     const fs = require('fs');
//     const path = require('path');
    
//     // Try multiple possible locations for db.json
//     const possiblePaths = [
//       path.join(process.cwd(), 'db.json'),
//       path.join(__dirname, '..', 'db.json'),
//       path.join(__dirname, 'db.json')
//     ];
    
//     let dbPath = null;
//     let db = null;
    
//     for (const testPath of possiblePaths) {
//       if (fs.existsSync(testPath)) {
//         dbPath = testPath;
//         db = JSON.parse(fs.readFileSync(testPath, 'utf8'));
//         break;
//       }
//     }
    
//     if (!db) {
//       return res.status(500).json({ 
//         error: 'db.json not found',
//         triedPaths: possiblePaths,
//         cwd: process.cwd(),
//         files: fs.readdirSync(process.cwd())
//       });
//     }
    
//     // Parse the URL path
//     const urlPath = req.url.replace('/api', '').replace(/^\//, '');
//     const [resource, id] = urlPath.split('/').filter(Boolean);
    
//     // Set CORS headers
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Content-Type', 'application/json');
    
//     if (req.method === 'OPTIONS') {
//       return res.status(200).end();
//     }
    
//     // Root endpoint - return all resources
//     if (!resource) {
//       return res.status(200).json(db);
//     }
    
//     // Get specific resource
//     if (db[resource]) {
//       if (id) {
//         const item = db[resource].find(item => item.id == id);
//         if (item) {
//           return res.status(200).json(item);
//         } else {
//           return res.status(404).json({ error: 'Item not found' });
//         }
//       }
//       return res.status(200).json(db[resource]);
//     }
    
//     res.status(404).json({ 
//       error: 'Resource not found',
//       availableResources: Object.keys(db),
//       requestedResource: resource
//     });
    
//   } catch (error) {
//     res.status(500).json({ 
//       error: error.message,
//       stack: error.stack
//     });
//   }
// };

module.exports = (req, res) => {
  // Set CORS headers FIRST, before any other logic
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    const fs = require('fs');
    const path = require('path');
    
    // Try multiple possible locations for db.json
    const possiblePaths = [
      path.join(process.cwd(), 'db.json'),
      path.join(__dirname, '..', 'db.json'),
      path.join(__dirname, 'db.json')
    ];
    
    let dbPath = null;
    let db = null;
    
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        dbPath = testPath;
        db = JSON.parse(fs.readFileSync(testPath, 'utf8'));
        break;
      }
    }
    
    if (!db) {
      return res.status(500).json({ 
        error: 'db.json not found',
        triedPaths: possiblePaths,
        cwd: process.cwd()
      });
    }
    
    // Parse the URL path
    const urlPath = req.url.replace('/api', '').replace(/^\//, '');
    const [resource, id] = urlPath.split('/').filter(Boolean);
    
    // Root endpoint - return all resources
    if (!resource) {
      return res.status(200).json(db);
    }
    
    // Handle different HTTP methods
    if (req.method === 'GET') {
      if (db[resource]) {
        if (id) {
          const item = db[resource].find(item => item.id == id);
          if (item) {
            return res.status(200).json(item);
          } else {
            return res.status(404).json({ error: 'Item not found' });
          }
        }
        return res.status(200).json(db[resource]);
      }
      
      return res.status(404).json({ 
        error: 'Resource not found',
        availableResources: Object.keys(db),
        requestedResource: resource
      });
    }
    
    if (req.method === 'POST') {
      if (!db[resource]) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', () => {
        try {
          const newItem = JSON.parse(body);
          const maxId = db[resource].reduce((max, item) => 
            Math.max(max, parseInt(item.id) || 0), 0);
          newItem.id = String(maxId + 1);
          db[resource].push(newItem);
          
          fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
          return res.status(201).json(newItem);
        } catch (e) {
          return res.status(400).json({ error: 'Invalid JSON' });
        }
      });
      return;
    }
    
    if (req.method === 'PUT' || req.method === 'PATCH') {
      if (!db[resource] || !id) {
        return res.status(404).json({ error: 'Resource or ID not found' });
      }
      
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', () => {
        try {
          const updates = JSON.parse(body);
          const index = db[resource].findIndex(item => item.id == id);
          
          if (index === -1) {
            return res.status(404).json({ error: 'Item not found' });
          }
          
          db[resource][index] = { ...db[resource][index], ...updates };
          fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
          return res.status(200).json(db[resource][index]);
        } catch (e) {
          return res.status(400).json({ error: 'Invalid JSON' });
        }
      });
      return;
    }
    
    if (req.method === 'DELETE') {
      if (!db[resource] || !id) {
        return res.status(404).json({ error: 'Resource or ID not found' });
      }
      
      const index = db[resource].findIndex(item => item.id == id);
      if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
      }
      
      const deletedItem = db[resource].splice(index, 1)[0];
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
      return res.status(200).json(deletedItem);
    }
    
    res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};