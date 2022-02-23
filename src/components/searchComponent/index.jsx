import React, { useState } from "react";
import "./styles.scss";

const ETH_ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export default function Index() {
  const [searchKey, setSearchKey] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(null);

  return (
    <div className="search__component">
      <aside className="search__component__input">
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={`e.g ${ETH_ZERO_ADDRESS}`}
          type="text"
          data-success={verificationSuccess}
        />
      </aside>
      <button data-success={verificationSuccess}>
        Validate Address
      </button>
    </div>
  );
}
