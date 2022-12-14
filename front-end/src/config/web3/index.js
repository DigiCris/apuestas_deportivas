import Web3 from "web3/dist/web3.min";
import { InjectedConnector } from "@web3-react/injected-connector";

const connector = new InjectedConnector({
  supportedChainIds: [
    80001, 
  ],
});

const getLibrary = (provider) => {
  return new Web3(provider);
};

export { connector, getLibrary };
