import React from 'react';
// import PropTypes from 'prop-types';
import { Popover } from '@mui/material';

// PopoverPlay.propTypes = {
    
// };

function PopoverPlay({sx,open,anchorEl,anchorOrigin,transformOrigin,onClose, child}) {
    return (
        <>
             <Popover
              sx={sx}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={anchorOrigin}
              transformOrigin={transformOrigin}
              onClose={onClose}
              disableRestoreFocus
            >
             {child}
            </Popover>
        </>
    );
}

export default PopoverPlay;