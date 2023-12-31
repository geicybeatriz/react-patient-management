import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { PatientProvider } from "./contexts/PatientContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <PatientProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PatientProvider>
  );
}

export default App;
