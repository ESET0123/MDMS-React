# MDMS-React

A modern React application built with Vite, featuring a robust dashboard, interactive maps, and internationalization support. This project demonstrates advanced React patterns, state management with Redux Toolkit, and responsive design with Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19 and Vite for lightning-fast development and build performance.
- **State Management**: Centralized state management using Redux Toolkit and Redux Persist.
- **Responsive Design**: Beautiful, mobile-first UI components styled with Tailwind CSS.
- **Interactive Maps**: Integrated maps using Leaflet and Google Maps for location-based data visualization.
- **Data Visualization**: Dynamic charts and graphs powered by Recharts.
- **Internationalization**: Multi-language support using i18next.
- **Routing**: Client-side routing with React Router v7.
- **Mock Backend**: JSON Server integration for simulating REST API endpoints.
- **Export Capabilities**: Support for exporting data to CSV and PDF.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Routing**: [React Router](https://reactrouter.com/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/), [React Google Maps](https://visgl.github.io/react-google-maps/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **I18n**: [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
- **Utilities**: [React Hot Toast](https://react-hot-toast.com/) (Notifications), [jsPDF](https://github.com/parallax/jsPDF), [React CSV](https://github.com/react-csv/react-csv)

## 📂 Project Structure

```
MDMS-React/
├── api/                # API related files
├── public/             # Static assets
├── src/
│   ├── Components/     # Reusable UI components
│   ├── config/         # Configuration files
│   ├── context/        # React Context definitions
│   ├── hooks/          # Custom React hooks
│   ├── Pages/          # Application pages/routes
│   ├── redux/          # Redux slices and store setup
│   ├── router/         # Router configuration
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── ...
├── db.json             # JSON Server database file
└── ...
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd MDMS-React
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

This project requires both the frontend and a mock backend (JSON Server) to run.

1.  **Start the JSON Server (Mock Backend):**
    Open a terminal and run:
    ```bash
    npx json-server --watch db.json --port 8000
    ```

2.  **Start the Frontend Development Server:**
    Open a new terminal and run:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📜 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 📄 License

This project is for educational and training purposes.
