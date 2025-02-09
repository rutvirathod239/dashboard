import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from '../assets/img/baby-shop-logo.png';
import baricon from '../assets/img/bar-icon.svg';
import { Box } from '@mui/material';
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from './ThemeProvider';

const Header = ({toggleSidebar, open}) => {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <AppBar position="fixed" sx={{ zIndex: 1000, backgroundColor: 'white' }}>
            <Toolbar>
                <Box width={!open ? '60px' : '220px'} display={'flex'} alignItems={'center'}>
                <img src={logo} width={35} height={35} alt="" />{" "}
                {open && <Typography className='logo-text'>B a b y S h o p</Typography>}
                </Box>
                <IconButton color="inherit" onClick={toggleSidebar}>
                    <img src={baricon} alt="" />
                </IconButton>
                <IconButton onClick={toggleTheme} sx={{ ml: "auto" }}>
                    {darkMode ? <Brightness7 style={{color: 'rgba(0, 0, 0, 0.54)'}}/> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default Header;