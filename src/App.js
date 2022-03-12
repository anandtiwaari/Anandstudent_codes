// import logo from "./logo.svg";
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
// import fire from "./fire";
import { Login } from "./Login";
import { Fromula } from "./components/Fromula";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } f  rom "./components/Home";
import { About } from "./components/About";
import { Whole } from "./algebracomponents/Whole";
import { Wholeminus } from "./algebracomponents/Wholeminus";
import { Allbtns } from "./algebracomponents/Allbtns";
import { Areacircle } from "./algebracomponents/Areacircle";
import { useEffect, useState } from "react";
import { Circumference } from "./algebracomponents/Circumference";
import { Findgram } from "./algebracomponents/Findgram";
import { Findprice } from "./algebracomponents/Findprice";
import { Allsurfacebtn } from "./surfaceArea/Allsurfacebtn";
import { Cube } from "./surfaceArea/Cube";
import { Tcube } from "./surfaceArea/Tcube";
import { Vcube } from "./surfaceArea/Vcube";
import { Cdcurve } from "./surfaceArea/Cdcurve";
import { Wholecube } from "./algebracomponents/Wholecube";
import { Wholemcube } from "./algebracomponents/Wholemcube";
import { Cuboidtotalsurface } from "./surfaceArea/Cuboidtotalsurface";
import { Cuboidvolume } from "./surfaceArea/Cuboidvolume";
import { RccCurved } from "./surfaceArea/RccCurved";
import { RccTotal } from "./surfaceArea/RccTotal";
import { RccVolume } from "./surfaceArea/RccVolume";
import { HemisphereCurved } from "./surfaceArea/HemisphereCurved";
import { Hemispheretotalsurface } from "./surfaceArea/Hemispheretotalsurface";
import { Hemispherevolume } from "./surfaceArea/Hemispherevolume";
import { Sphere } from "./surfaceArea/Sphere";
import { Spheretotal } from "./surfaceArea/Spheretotal";
import { Spherevolume } from "./surfaceArea/Spherevolume";
import { Alltrigobtns } from "./Trigonometry/Alltrigobtns";
import { SinTrigo } from "./Trigonometry/SinTrigo";
import { CosTrigo } from "./Trigonometry/CosTrigo";
import { Tantheta } from "./Trigonometry/Tantheta";
import { ToastContainer } from "react-toastify";

function App() {
  // const app = initializeApp(app);
  // const auth = getAuth(app);
  //for Login only
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  //function for Clear Inputs

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };
  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };
  // //function for Handle Login

  // const handleLogin = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };
  // //signup handle function

  // const handleSignup = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };

  // //function for Logout

  // const handleLogout = () => {
  //   fire.auth().signOut();
  // };

  // const authListener = () => {
  //   fire.default.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // //using UseEffect

  // useEffect(() => {
  //   authListener();
  // }, []);

  const [color, setcolor] = useState("light");
  const modechange = () => {
    if (document.body.style.backgroundColor === "black") {
      setcolor("light");
      document.body.style.backgroundColor = "white";
    } else {
      setcolor("dark");
      document.body.style.backgroundColor = "black";
    }
  };
  // document.body.style.backgroundColor = "black";
  return (
    <>
      <Login />
      {/* <h1>Kaam chaalu hai bhaisahab</h1> */}
      <Router>
        <Navbar modechange={modechange} color={color} />
        <Switch>
          <Route exact path="/formula">
            <Fromula title="Studentzone-Formula" />
          </Route>
          <Route exact path="/">
            <Fromula title="Studentzone-Formula" />
            {/* <Home title="Studentzone-Home" color={color} /> */}
          </Route>
          <Route exact path="/about">
            <About title="Studentzone-About" color={color} />
          </Route>
          <Route exact path="/btnoption">
            <Allbtns title="Studentzone-Algebra_Btns" />
          </Route>
          <Route exact path="/surfacecube">
            <Allsurfacebtn title="Studentzone-Allsurfacebtn" />
            {/* <Allbtns title="Studentzone-Algebra_Btns" /> */}
          </Route>
          <Route exact path="/whole">
            <Whole title="Studentzone-wholesqr" color={color} />
          </Route>
          <Route exact path="/wholeminus">
            <Wholeminus title="Studentzone-whole-min-sqr" color={color} />
          </Route>
          <Route exact path="/area">
            <Areacircle title="Studentzone-Area-circle" />
          </Route>
          <Route exact path="/Circumference">
            <Circumference title="Studentzone-Surface-Area" />
          </Route>
          <Route exact path="/findprice">
            <Findprice title="studentzone-Find-Price" />
          </Route>
          <Route exact path="/findgram">
            <Findgram title="studentzone-Find-Gram" />
          </Route>
          <Route exact path="/cube">
            <Cube title="studentzone-surfacecube" />
          </Route>
          <Route exact path="/totalsurface">
            <Tcube title="studentzone-Tcube" />
          </Route>
          <Route exact path="/volume">
            <Vcube title="studentzone-vcube" />
          </Route>
          <Route exact path="/cdcurved">
            <Cdcurve title="studentzone-cdCurved" />
          </Route>
          <Route exact path="/wholecube">
            <Wholecube title="studentZone-Whole-Cube" />
          </Route>
          <Route exact path="/wholemcube">
            <Wholemcube title="studentZone-Whole-minus-Cube" />
          </Route>
          <Route exact path="/cuboidtotal">
            <Cuboidtotalsurface title="Studentzone-cuboidTotal" />
          </Route>
          <Route exact path="/cuboidvolume">
            <Cuboidvolume title="Studentzone-cuboidvolume" />
          </Route>
          <Route exact path="/rcccurved">
            <RccCurved title="Right-circular-curved" />
          </Route>
          <Route exact path="/rcctotal">
            <RccTotal />
          </Route>
          <Route exact path="/rccVolume">
            <RccVolume />
          </Route>
          <Route exact path="/hemispherecurved">
            <HemisphereCurved />
          </Route>
          <Route exact path="/hemispheretotal">
            <Hemispheretotalsurface />
          </Route>
          <Route exact path="/hemispherevolume">
            <Hemispherevolume />
          </Route>
          <Route exact path="/spherecurved">
            <Sphere />
          </Route>
          <Route exact path="/spheretotal">
            <Spheretotal />
          </Route>
          <Route exact path="/spherevolume">
            <Spherevolume />
          </Route>
          <Route exact path="/trigo">
            <Alltrigobtns />
          </Route>
          <Route exact path="/sintrigo">
            <SinTrigo />
          </Route>
          <Route exact path="/costrigo">
            <CosTrigo />
          </Route>
          <Route exact path="/tantrigo">
            <Tantheta />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
