import { Container, Box, Stack } from "@mui/material";
import HospitalSearchBar from "../../components/HospitalSearchBar/HospitalSearchBar";
import Faq from "../../components/sections/Faq/Faq";
import About from "../../components/sections/About/About";
import Blogs from "../../components/sections/Blogs/Blogs";
import Mission from "../../components/sections/Mission/Mission";
import Specialists from "../../components/sections/Specialists/Specialists";
import Specialization from "../../components/sections/Specializations/Specializations";
import Offers from "../../components/sections/Offers/Offers"; 
import NavBar from "../../components/Navbar/Navbar";
import IconContainer from "../../components/IconContainer/IconContainer";
import Hero from "../../components/sections/Hero/Hero";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <Hero />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <HospitalSearchBar />
            <IconContainer />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <Mission />

      <Blogs />

      <About />

      <Faq />
    </Box>
  );
}
