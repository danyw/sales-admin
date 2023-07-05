import { useState } from 'react';
import { useMode } from './hooks/useMode';
import { ColorModeContext } from './contexts/ColorModeContext';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Team from './views/team';
import Contacts from './views/contacts';
import Invoices from './views/invoices';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="main">
            <Topbar setIsSidebar={setIsSidebar} />

            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
