import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import BETER from "../../config/web3/contracts/BETER";

const { abi, address } = BETER;

const useBETER = () => {
    const { active, library, chainId } = useWeb3React();

    const BETER = useMemo(() => {
        if (active) return new library.eth.Contract(abi, address[chainId]);
    }, [library?.eth?.Contract, active, chainId]);

    return BETER;
};

export default useBETER;