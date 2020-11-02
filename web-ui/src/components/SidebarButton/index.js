import { Box, Button, Drop } from 'grommet';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ routes, index, iconsMap }) => {
    const [over, setOver] = useState();
    const tooltipColor = { color: 'neutral-3', opacity: 0.9 };
  
    const ref = useRef();
    return (
      <Box fill="horizontal">
        <Button
          ref={ref}
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
          onFocus={() => setOver(false)}
          onBlur={() => setOver(false)}
          hoverIndicator={tooltipColor}
          fill='horizontal'
          plain
        >
          {({ hover }) => (
            <Link to={routes.path} style={{textDecoration: 'none'}}>
              <Box pad={{ vertical: 'small', horizontal: 'medium' }} align="center">
                {iconsMap(hover ? 'black' : 'brand')[index]}
              </Box>
            </Link>
          )}
        </Button>
        {ref.current && over && (
          <Drop align={{ left: 'right' }} target={ref.current} plain>
            <Box
              animation="slideRight"
              margin="xsmall"
              pad="small"
              background={tooltipColor}
              round={{ size: 'medium', corner: 'right' }}
            >
              {routes.name}
            </Box>
          </Drop>
        )}
      </Box>
    );
};

export default SidebarButton