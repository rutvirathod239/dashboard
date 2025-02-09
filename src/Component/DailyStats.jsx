import { Stack, Grid2, styled } from "@mui/material";
import StatCard from "./statCard";

const CustomGrid = styled(Grid2)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: '96%'
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: '95%'
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: '94%'
  },
}))

const DailyStats = ({data}) => {
    return (
      <CustomGrid container spacing={{ xs: 3, lg: 2 }}>
        {data && Object.keys(data)
          .map((key) => (
            <Grid2 key={key} size={{ xs: 12, sm: 6 , md: 6, lg: 3 }}>
              <StatCard key={key} title={key} number={data[key]} />
            </Grid2>
          ))}
      </CustomGrid>
    )
}
export default DailyStats;