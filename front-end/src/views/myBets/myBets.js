import {useState, useEffect} from "react"
import PageNotFound from "../pageNotFound/pageNotFound"

import {useParams} from "react-router-dom";
import {useWeb3React } from "@web3-react/core";


const MyBets = () => {

    return (
      <> My Bets
      <PageNotFound /> 
      </>
    );
};

export default MyBets;