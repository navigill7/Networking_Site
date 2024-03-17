import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import { Box, Container, Stack } from "@mui/material";
import Divider from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme} from "./theme.js"


function App() {
  const [mode , setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}color={"text.primary"} >
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
     <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
