import React from 'react';
import { Box, styled } from '@mui/system';
import { AppBar,  InputUnstyled, Stack,} from '@mui/material';
import { AccountCircle, Search, Settings } from '@mui/icons-material';
// import PropTypes from 'prop-types';
// Header.propTypes = {

// };
const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 240px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(244,246,248,0.5);
  background: #353535;
  border: none;
  
  padding: 12px 1px;
  transition: all 150ms ease;

  &:hover {
    background: #353535;
    border-color: #353535 ;
  }

  &:focus {
    outline: none;
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});
function HeaderBar(props) {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          height: '60px',
          backgroundColor: 'rgb(24, 35, 45)',
          width: {
            xs: 'calc(100% - 50px)',
            sm: 'calc(100% - 50px)',
            md: 'calc(100% - 50px)',
            lg: 'calc(100% - 560px)',
          },
          marginRight: { xs: '0px', sm: '0px', md: '0px', lg: '320px' },
          boxShadow: 'none',
          transition: 'width 0.2s ',
          
        }}
      >
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Stack
            sx={{
              backgroundColor: '#353535',
              marginLeft: '20px',
              paddingLeft: '8px',
              marginTop: '12px',
              width:'320px',
              borderRadius:'40px',
            }}
            direction="row"
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Search htmlColor="#626262" />
            <CustomInput
              size='small'
              placeholder="Nhập tên bài hát, ca sĩ"            
            />
          </Stack>
          <Stack sx={{paddingRight: '8px',}} direction="row" spacing={1} justifyContent="flex-end" alignItems="center">
          <Settings sx={{fontSize:'40px'}}/>
          <AccountCircle sx={{fontSize:'40px',}}/>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
}

export default HeaderBar;
