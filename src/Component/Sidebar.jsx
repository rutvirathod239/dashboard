import { Drawer, List } from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const Sidebar = ({open}) => {
    
    return (
        <Drawer variant="permanent" open={open}
        sx={{
            width: open ? drawerWidth : 60,
            flexShrink: 0,
            transition: "width 0.3s",
            "& .MuiDrawer-paper": {
                width: open ? drawerWidth : 60,
                transition: "width 0.3s",
                overflowX: "hidden",
                marginTop: '8%',
                borderTopRightRadius: "40px",
                boxShadow: '5px 20px 14px rgba(46, 55, 164, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                "@media (max-width: 1024px)": {
                  marginTop: '10%',
                },
                "@media (max-width: 730px)": {
                  marginTop: '12%',
                },
                "@media (max-width: 485px)": {
                  marginTop: "16%"
                },
                "@media (max-width: 420px)": {
                  marginTop: "19%",
                },
                "@media (max-width: 355px)": {
                  marginTop: "23%",
                }
            }
        }}>
        <List>
          
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <DashboardRoundedIcon style={{color: '#2e37a4'}}/>
                </ListItemIcon>
                <ListItemText
                  primary={'Dashboard'}
                  style={{color: '#2e37a4'}}
                  sx={[                    
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          
        </List>
        
      </Drawer>

    )
}
export default Sidebar;