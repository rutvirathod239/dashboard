import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from '../assets/img/logo.png';
import baricon from '../assets/img/bar-icon.svg';
import { Box } from '@mui/material';
const Header = ({toggleSidebar, open}) => {
    
    return (
        <AppBar position="fixed" sx={{ zIndex: 1000, backgroundColor: 'white' }}>
            <Toolbar>
                <Box width={!open ? '60px' : '220px'} display={'flex'} alignItems={'center'}>
                <img src={logo} width={35} height={35} alt="" />{" "}
                {open && <Typography className='logo-text'>Pre Clinic</Typography>}
                </Box>
                <IconButton color="inherit" onClick={toggleSidebar}>
                    <img src={baricon} alt="" />
                </IconButton>                
            </Toolbar>
        </AppBar>
    );
}
export default Header;