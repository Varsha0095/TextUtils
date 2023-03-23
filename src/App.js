import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [greenMode, setGreenMode] = useState('usual');
  // const [redMode, setRedMode] = useState('day');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#132a4c";
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-Dark Mode'

      setInterval(() => {
        document.title = 'TextUtils is Amazing!'
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtils Now !!'
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-Light Mode'
    }
  };
  // const toggleGreenMode = () => {
  //   if (greenMode === "usual") {
  //     setGreenMode("green");
  //     document.body.style.backgroundColor = "green";
  //     showAlert('Green mode has been enabled', 'success');
  //   } else {
  //     setGreenMode("usual");
  //     document.body.style.backgroundColor = "white";
  //     showAlert('Usual mode has been enabled', 'success');
  //   }
  // }
  // const toggleRedMode = () => {
  //   if (redMode === "day") {
  //     setRedMode("red");
  //     document.body.style.backgroundColor = "red";
  //     showAlert('Red mode has been enabled', 'success');
  //   } else {
  //     setRedMode("day");
  //     document.body.style.backgroundColor = "white";
  //     showAlert('Day mode has been enabled', 'success');
  //   }
  // }
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        // greenMode={greenMode}
        // toggleGreenMode={toggleGreenMode}
        // redMode={redMode}
        // toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
