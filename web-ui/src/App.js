import React, { useState } from 'react';
import { Box, Collapsible, Grommet } from 'grommet';
import { Achievement, Book, Menu } from 'grommet-icons';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './Routes';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const routes = [
  {
    name: 'History',
    path: '/'
  },
  {
    name: 'Top Ten',
    path: '/top'
  }
];

const iconsMap = color => [
  <Book color={color} />,
  <Achievement color={color} />
];

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Header 
          title='PSh Game' 
          icon={<Menu />} 
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Box direction='row' fill>
          <Collapsible direction='horizontal' open={showMenu}>
            <Box direction='row' height={{ min: '100%' }}>
              <Sidebar
                routes={routes}
                iconsMap={iconsMap}
              />
            </Box>
          </Collapsible>
          <Routes />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
