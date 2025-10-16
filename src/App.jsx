import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/navbar.jsx';
import ActionBody from './components/ActionBody.jsx';
import Dashboard from './components/Dashboard.jsx';


function App() {

  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Dashboard />
    </>
  );
}

export default App
