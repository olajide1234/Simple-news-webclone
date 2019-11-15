import React from 'react';
import loader from '../../assets/images/fluid-loader.gif';

function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="loading gif" id="loading-gif" />
      <p>Loading could take 5 - 10 mins, please wait.</p>
    </div>
  );
}

export default Loader;
