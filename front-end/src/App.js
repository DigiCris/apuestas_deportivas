import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import Home from "./views/home/home";
import Bets from "./views/bets/bets";
import MyBets from "./views/myBets/myBets";

import SetBets from "./views/setBets/setBets";
import PageNotFound from "./views/pageNotFound/pageNotFound";

import MainLayout from "./layouts/main/main";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/my-bets" exact element={<MyBets />} /> 
            <Route path="/bet"  element={<Bets />} />
            <Route path="/set-bet" element={<SetBets />} /> 
            <Route path="*" element={<PageNotFound />} />
          </Routes>  
        </MainLayout>
      </BrowserRouter>    
    </ChakraProvider>
  );
}

export default App;
