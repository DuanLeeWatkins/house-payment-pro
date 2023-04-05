import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 10000 * 0.2,
    loanAmount: 10000 * 0.8,
    loanTerm: 5,
    interestRate: 2,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Results data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
