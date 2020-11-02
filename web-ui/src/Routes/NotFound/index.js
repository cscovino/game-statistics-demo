import React from 'react';
import { Box } from 'grommet';
import Lottie from 'lottie-react-web';
import anim from '../../assets/not-found.json';

function NotFound() {
    return (
        <Box fill='horizontal' justify='center' align='center'>
            <Lottie 
                options={{
                    animationData: anim
                }}
            />
        </Box>
    );
}

export default NotFound;