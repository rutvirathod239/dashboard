import { useEffect, useState } from "react";
import { Box, Grid2, styled, useMediaQuery } from "@mui/material";
import Header from "./Header"
import Sidebar from "./Sidebar";
import useFetch from "./hooks/useFetch";
import './style.css';
import DailyStats from "./DailyStats";
import SplineAreaChart from "./SplineAreaChart";
import UserList from "./UserList";
import OrderData from "./OrderData";

const CustomGrid = styled(Grid2)(({ theme }) => ({
        
    [theme.breakpoints.down("sm")]: {
      maxWidth: '95%'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: '94%'
    },
  }))

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const orderData = {
        orders: 95,
        visitors: 83,
        sale: 64,
        profit: 98,
    }
    
    const isTablet = useMediaQuery('(max-width:720px)');
    const { data, loading } = useFetch('https://67a5d88b510789ef0df97452.mockapi.io/api/v1/orders');
    const { data: userData, loading: userLoading } = useFetch('https://67a5d88b510789ef0df97452.mockapi.io/api/v1/users');
    
    useEffect(() => {
        if (isTablet) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTablet])

    const toggleSidebar = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: "flex"}}>
            <Header toggleSidebar={toggleSidebar} open={open}/>
            <Sidebar open={open}/>
            <Box 
                component="main"
                className="main-content"
            >
                <DailyStats data={orderData} />
                <CustomGrid container spacing={2} sx={{marginTop: '5%'}}>
                    <Grid2 size={{xs: 12, sm: 12, md: 8, lg: 8}}>
                        <SplineAreaChart />
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 12, md:4, lg: 4}}>
                        <UserList usersList={userData} loading={userLoading}/>
                    </Grid2>
                </CustomGrid>
                <CustomGrid container spacing={2} sx={{marginTop: '5%'}}>
                    <Grid2 size={12}>
                        <OrderData orderData={data} loading={loading} />
                    </Grid2>
                </CustomGrid>
            </Box>
            
        </Box>
    )
}
export default Dashboard;