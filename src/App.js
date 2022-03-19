import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import React, {useState} from 'react';
import './style/app.css'

function App() {
  const [currentPage, setCurrentPage] = useState('/home');
  
  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  }

  return (
    <BrowserRouter>
      <Navbar active={currentPage} updateCurrentPage={updateCurrentPage}/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
