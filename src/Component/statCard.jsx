import { Card, styled, Typography, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import Chart from 'react-apexcharts';
import CountUp from "react-countup";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#fff",
  ...theme.typography.body2,
  padding: '10px',
  textAlign: 'left',
  color: theme.palette.text.primary,
  boxShadow: theme.palette.mode === "dark"
    ? "0px 4px 10px rgba(255, 255, 255, 0.1)"
    : "0px 4px 10px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.palette.mode === "dark"
    ? "0px 6px 15px rgba(255, 255, 255, 0.15)"
    : "0px 6px 15px rgba(0,0,0,0.15)",
  },
  
}));

const StatCard = ({ title, number }) => {
  const theme = useTheme();
  const chartColors = {
    orders: "#1E90FF",
    visitors: "#FF5733",
    sale: "#28A745",
    profit: "#FFC107"
  };
  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  };
  const chartOptions = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: [chartColors[title] || "#000"],
    tooltip: {
      theme: theme.palette.mode,
    },
  };
    
  const chartSeries = [
    {
      data: generateRandomData(),
    },
  ];
  return (
    <StyledCard>
      <div className="stat-header">
        {title === 'orders' ? <ShoppingCartOutlinedIcon className="stat-icons"/> : title === 'visitors' ? <PersonOutlineOutlinedIcon className="stat-icons"/> : title === 'sale' ? <ShoppingBagOutlinedIcon className="stat-icons"/> : <CurrencyRupeeRoundedIcon className="stat-icons"/> }
        <div>
          <Typography variant="h6" fontWeight={'500'} sx={{ color: theme.palette.text.secondary }}>
            <CountUp delay={0.5} end={number} duration={0.7} />
          </Typography>
          <p className="text">Today's {title}</p>
        </div>
      </div>
      <Chart options={chartOptions} series={chartSeries} type="line" height={50} />
    </StyledCard>
  )
}
export default StatCard;