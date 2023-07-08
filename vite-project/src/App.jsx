import React from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = React.useState("");

  React.useEffect(() => {
    fetchAdvice();
  }, []);

  const givMeAdvice = () => {
    fetchAdvice();
  };

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip.advice;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="btn" onClick={givMeAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
