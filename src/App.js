import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function App() {
  const [temp, updateTemp] = React.useState({ f: 0, c: 0 });

  const updateC = (ev) =>
    updateTemp({
      c: ev.target.value,
      f: ((+ev.target.value * 9) / 5 + 32).toFixed(2),
    });

  const updateF = (ev) =>
    updateTemp({
      c: (((+ev.target.value - 32) * 5) / 9).toFixed(2),
      f: ev.target.value,
    });
  return (
    <Container>
      <Box sx={{}}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 1000 }}>
          Temperature converter
        </Typography><br></br>
        <Paper
          elevation={24}
          sx={{ padding: "20px", width: "500px", margin: "auto" }}
        >
          <Box sx={{ margin: "auto", width: "300px" }}>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              Celcius
            </Typography>
            <br></br>
            <input type="number" value={temp.c} onChange={updateC}></input>
            <br></br>
            <br></br>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              Fahrenheit
            </Typography>
            <br></br>
            <input type="number" value={temp.f} onChange={updateF}></input>
            <br></br>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
