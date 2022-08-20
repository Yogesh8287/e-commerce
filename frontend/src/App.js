import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/item";
import Createitem from "./components/createitem";
import Updateitem from "./components/updateitem";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container pt-4">
          <Routes>
            <Route path="/" element={<Item />} />
            <Route path="/add" element={<Createitem />} />
            <Route path="/update/:id" element={<Updateitem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
