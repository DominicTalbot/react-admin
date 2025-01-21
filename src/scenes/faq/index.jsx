import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
                    Can you tell us about a project you’re particularly proud of?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                    I’m especially proud of my work deploying a CRM solution for Trentham at TOR Systems.
                    I contributed to creating an intuitive campaign wizard and email template editor.
                     It was fulfilling to see how my work directly improved customer engagement in the visitor attraction industry.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
                How do you stay motivated when learning new skills or tackling tough challenges?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                I approach challenges as opportunities to solve complex puzzles, breaking them down into manageable steps to find effective solutions. 
                Whether it’s debugging code or developing new features, I enjoy the process of problem-solving and take pride in continuously expanding my skills along the way.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
                What do you do if you’re stuck on a technical issue for too long?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                If I’m stuck, I’ll step away for a moment, maybe go for a walk to clear my head. 
                Then I’ll revisit the problem, break it down into smaller parts, and if needed, I’ll research online or ask a colleague for a fresh perspective.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
                If you could work on any project, what would it be?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                I’d love to work on a project that mixes technology and storytelling, like making an app or game that tells a great story and pulls people into it. 
                I’ve always enjoyed stories, whether they’re from books, games, or even the coding projects I’ve worked on.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ;