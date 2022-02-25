import React from 'react';
import SearchComponent from '@/components/searchComponent';

import './styles.scss';
import { useSelector } from 'react-redux';

export default function SearchPage() {
  const { verificationSuccess } = useSelector((state) => state.status);

  return (
    <div data-success={verificationSuccess} className="searchpage">
      {/* header section */}
      <header>
        <h3 data-success={verificationSuccess}>
          valid<span>Eth.</span>
        </h3>
      </header>
      {/* header section */}

      {/* content section */}
      <section>
        <div>
          <h1 data-testid="header">
            Validate your <br /> Ethereum address
          </h1>
          <span>
            Please input your ethereum public address, in order to ensure it is a valid ethereum
            public address.
          </span>
          <div data-testid="searchwrapper" className="searchpage__inputwrapper">
            <SearchComponent />
          </div>
        </div>
      </section>
      {/* content section */}
    </div>
  );
}
