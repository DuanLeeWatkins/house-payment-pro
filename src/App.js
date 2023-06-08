import { useState } from "react";
import { Container, Grid } from "@mui/material";

import Navbar from "./components/Navbar";
import Results from "./components/Results";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import MonthlyIncome from "./components/MonthlyIncome";

function App() {
  const [result, setResult] = useState(0);
  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 10000 * 0.2,
    loanAmount: 10000 * 0.8,
    loanTerm: 5,
    interestRate: 2,
    monthlyIncome: 0,
  });

  const handleClick = () => {
    const affordableMortgage = Math.floor(data.monthlyIncome * 0.28);

    setResult(affordableMortgage);
  };


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Results data={data} result={result} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MonthlyIncome data={data} setData={setData} handleClick={handleClick} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
 
export default App;
