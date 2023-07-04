import { useState } from 'react';
import { useMode } from './hooks/useMode';
import { ColorModeContext } from './contexts/ColorModeContext';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './views/global/Sidebar';
import Topbar from "./views/global/Topbar"

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className='main'>
          <Topbar setIsSidebar={setIsSidebar} />

          <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}

          </Routes>
          

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
