import { Box } from "@mui/material";
import Header from "../../components/header";
import BarChart from "../../components/BarChart";


const Bar = () => {
    return (
        <Box m="20px">
            <Header title="BAR" subtitle="Bar Chart Page" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )

}

export default Bar;