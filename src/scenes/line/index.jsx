import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";


const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Line Chart Page" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )

}

export default Line;