import { useTonWallet } from "@tonconnect/ui-react";
import React, { useEffect, useState } from "react";

const BalanceUI = () => {
  const [tonBalance, setTonBalance] = useState(0);
  const wallet = useTonWallet();
  const address = wallet?.account?.address;
  const url = `https://testnet.toncenter.com/api/v2/getAddressInformation?address=${address}`;

  useEffect(() => {
    if (address) {
      getBalance();
    } else {
      setTonBalance(0);
    }
  }, [address]);

  const getBalance = async () => {
    fetch(url)
      .then(async (response) => {
        const res = await response.json();
        console.log(res.result.balance);

        setTonBalance(parseFloat(res.result.balance) / 1e9);
      })
      .catch((error) => {
        setTonBalance(0);
        console.error(error);
      });
  };

  return <p>Balance: {tonBalance} TON</p>;
};

export default BalanceUI;
