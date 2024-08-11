import Footer from "./components/sections/Footer/Footer";
import Download from "./components/sections/Download/Download";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function App(){
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <Download />
      <Footer />
    </div>
  )
}