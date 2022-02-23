import React from "react";
import SearchComponent from "@/components/searchComponent";

import "./styles.scss";

export default function SearchPage() {
  return (
    <div className="searchpage">
      <header>
        <h3>
          valid<span>Eth.</span>
        </h3>
      </header>

      <section>
        <div>
          <h1>
            Validate your <br /> Ethereum address
          </h1>
          <span>
            Please input your ethereum public address, in order to ensure it is
            a valid ethereum public address.
          </span>
          <div className="searchpage__inputwrapper">
            <SearchComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
