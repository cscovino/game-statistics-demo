import React, { useEffect, useState } from 'react';
import { Box, Meter } from 'grommet';

function Spinner() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setValue(value => value + 1 >= 100 ? 0 : value + 1);
        }, 10);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <Box fill='horizontal' justify='center' align='center' margin='medium'>
            <Meter 
                type='circle'
                values={[{value, color: 'neutral-3'}]}
                thickness='medium'
                size='150px'
            />
        </Box>
    );
}

export default Spinner;