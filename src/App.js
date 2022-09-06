import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Portal from "./Component/Portal/Portal";
import Dashboard from "./Component/Portal/Dashboard";
import Newbook from "./Component/Portal/Newbook";
import Bookview from "./Component/Portal/Bookview";
import EditBook from "./Component/Portal/Editbook";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portal />}>
              <Route index element={<Newbook />} />
              <Route path="Dashboard" element={<Dashboard />}/>
              <Route path="Dashboard/View/:id" element={<Bookview/>}/>
              <Route path="Dashboard/Edit/:id" element={<EditBook/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
