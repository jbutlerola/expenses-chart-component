import React from "react";
import logo from "../logo.svg";

function Balance() {
  return (
    <div className="balance-wrapper text-white grid grid-cols-2">
      <div>
        <p className="text-xs mb-2">My Balance</p>
        <h2 className="text-2xl font-bold">$921.48</h2>
      </div>
      <div className="grid justify-items-end pr-2 mt-1">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Balance;
