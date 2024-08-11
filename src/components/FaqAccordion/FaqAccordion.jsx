import * as React from "react";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";

// export default function CustomizedAccordion({ data }) {
//   let faqs = data;
//   return (
//     <div>
//       {faqs.map((item) => {
//         return (
//           <div>
//             <Accordion>
//               <AccordionSummary
//                 expandIcon={<AddIcon />}
//                 aria-controls={`panel{index}-content`}
//                 id={`panel{index}-header`}
//               >
//                 <Typography>{item.brief}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography>{item.details}</Typography>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&::before": {
    display: "none",
  },
  "&:not(:last-child)": {
    marginBottom: 24,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: false,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
  padding: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

export default function FaqAccordion({ data }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.brief}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14}>{item.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
