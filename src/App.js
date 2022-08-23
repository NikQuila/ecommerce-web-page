import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1> Im the shop pageee</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
