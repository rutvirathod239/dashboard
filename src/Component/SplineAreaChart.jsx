import { Card, useTheme } from "@mui/material"
import Chart from 'react-apexcharts'

const SplineAreaChart = () => {
    const theme = useTheme();
    const chartOptions = {
        chart: {
            type: "area",
            toolbar: {
                show: true,
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#283593", "#03A9F4"],
                fontSize: "12px",
            },
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        colors: ["#283593", "#03A9F4"],
        markers: {
            size: 5,
            colors: ["#283593", "#03A9F4"],
            strokeColors: "#fff",
            strokeWidth: 3,
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: {
                style: { color: theme.palette.text.primary }, 
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: theme.palette.text.primary,
                },
            },
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            labels: { colors: theme.palette.text.primary },
        },
        tooltip: {
            theme: theme.palette.mode,
        },
    };
    
    const chartSeries = [
    {
        name: "Orders",
        data: [120, 150, 300, 400, 200, 350, 450, 400, 300, 350, 150, 100],
    },
    {
        name: "Sales",
        data: [90, 130, 250, 330, 180, 290, 420, 443, 270, 300, 150, 100],
    },
    ];
    return (
        <Card sx={{borderRadius: '20px'}}>
            <Chart options={chartOptions} series={chartSeries} type="area" height={500} />
        </Card>
    )
}
export default SplineAreaChart;