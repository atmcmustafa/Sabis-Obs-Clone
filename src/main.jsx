import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainpage from "./pages/Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjects from "./pages/Subjects";
import Program from "./pages/Program";
import Transkript from "./pages/Transkript";
import Errorpage from "./pages/Errorpage";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import { ButtonContextProvider } from "./context/ButtonContext";
import Examdate from "./pages/Examdate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonContextProvider>
      <BrowserRouter>
        <div className="flex relative">
          <Leftbar />
          <div className="flex-1 w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="subjects" element={<Subjects />} />
              <Route path="subjectprogram" element={<Program />} />
              <Route path="examdate" element={<Examdate />} />
              <Route path="transkript" element={<Transkript />} />
              <Route path="*" element={<Errorpage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ButtonContextProvider>
  </React.StrictMode>
);
