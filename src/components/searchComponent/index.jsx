/**
 * @descriptionA search bar component for the home page
 */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postReq } from '@/api';

import Loader from '@/components/loader';
import constants from './constants';

import './styles.scss';
export default function SearchComponent() {
  const [searchKey, setSearchKey] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * A function to validate the address entered via the API
   */
  const validateAddress = () => {
    if (loading) return;
    setLoading(true);
    postReq('/address/validate', {
      address: searchKey
    })
      .then((res) => {
        const { value } = res?.data || {};
        if (!value) {
          // if its an invalid address
          setVerificationSuccess(false); //set the highlight to error
          return toast.error('The address passed in is a correct ethereum address.');
        }
        // otherwise of successfull
        setSearchKey(''); //clear search bar
        setVerificationSuccess(true); //set success highlight
        toast.success('The address passed is an incorrect ethereum address');
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false); //clear loader
        // make the success or error highlight go away after time elapses
        setTimeout(() => {
          setVerificationSuccess(null);
        }, constants.TIMEOUT_DURATION);
      });
  };
  const isButtonDisabled = loading || !searchKey.length;

  return (
    <div className="search__component">
      <aside className="search__component__input">
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={`e.g ${constants.ETH_ZERO_ADDRESS}`}
          type="text"
          data-success={verificationSuccess}
          disabled={loading}
        />
      </aside>
      <button
        onClick={validateAddress}
        disabled={isButtonDisabled}
        data-success={verificationSuccess}>
        {loading ? (
          <>
            Validating <Loader />
          </>
        ) : (
          constants.BUTTON_CTA
        )}
      </button>
    </div>
  );
}
