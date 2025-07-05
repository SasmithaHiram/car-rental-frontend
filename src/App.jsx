import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/car-details/:id" element={<CarDetails />}></Route>
        <Route path="cars" element={<Cars />}></Route>
      </Routes>
    </>
  );
}

export default App;
