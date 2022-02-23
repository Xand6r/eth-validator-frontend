import React, { useState } from 'react';
import Loader from '@/components/loader';
import './styles.scss';

export const ETH_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const BUTTON_CTA = 'Validate Address';

export default function SearchComponent() {
  const [searchKey, setSearchKey] = useState('');
  const [verificationSuccess] = useState(null);
  const [loading] = useState(true);

  return (
    <div className="search__component">
      <aside className="search__component__input">
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={`e.g ${ETH_ZERO_ADDRESS}`}
          type="text"
          data-success={verificationSuccess}
          disabled={loading}
        />
      </aside>
      <button disabled={loading} data-success={verificationSuccess}>
        {loading ? (
          <>
            Validating <Loader />
          </>
        ) : (
          { BUTTON_CTA }
        )}
      </button>
    </div>
  );
}
