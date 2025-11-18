module.exports = (req, res) => {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const cwd = process.cwd();
    const dbPath = path.join(cwd, 'db.json');
    
    let rootFiles = [];
    try {
      rootFiles = fs.readdirSync(cwd);
    } catch (e) {
      rootFiles = ['Error reading directory: ' + e.message];
    }
    
    let dbContent = null;
    let dbExists = false;
    try {
      dbExists = fs.existsSync(dbPath);
      if (dbExists) {
        dbContent = fs.readFileSync(dbPath, 'utf8').substring(0, 200); // First 200 chars
      }
    } catch (e) {
      dbContent = 'Error reading db.json: ' + e.message;
    }
    
    res.status(200).json({
      cwd: cwd,
      dbPath: dbPath,
      dbExists: dbExists,
      dbContentPreview: dbContent,
      rootFiles: rootFiles,
      nodeVersion: process.version,
      platform: process.platform
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  }
};