import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import FaqAccordion from "../../FaqAccordion/FaqAccordion";

export default function Faq() {
  const faqs = [
    {
      brief: "Why choose our medical services for your family?",
      details:
        "Our medical services are tailored to provide comprehensive care for your entire family. We offer personalized treatment plans, advanced medical technology, and a compassionate approach to ensure the best possible outcomes for every member of your family.",
    },
    {
      brief: "What makes us different from other healthcare providers?",
      details:
        "We stand out due to our commitment to patient-centered care, cutting-edge medical practices, and a dedicated team of experienced professionals. Our holistic approach ensures that we address not just the physical health, but also the emotional and psychological well-being of our patients.",
    },
    {
      brief: "Why should you trust our senior care services?",
      details:
        "With years of experience in senior care, our team is dedicated to providing compassionate and specialized care tailored to the unique needs of the elderly. We focus on promoting independence, enhancing quality of life, and delivering care with dignity and respect.",
    },
    {
      brief: "How can you get an appointment for emergency cases?",
      details:
        "In case of an emergency, we offer a streamlined appointment process to ensure quick and efficient access to medical care. Our 24/7 emergency helpline and online appointment system make it easy to get the urgent care you need, whenever you need it.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box maxWidth={450}>
              <FaqAccordion data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
