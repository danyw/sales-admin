import { useState } from 'react';
// import { useMode } from './hooks/useMode';
// import { ColorModeContext } from './contexts/ColorModeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import { ColorModeContext, useMode } from './config/theme';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
