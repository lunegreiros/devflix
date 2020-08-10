import React from 'react';
import ReactLoading from 'react-loading';
import './style.css';

// eslint-disable-next-line react/prop-types
const LoadingIcon = () => (
  <ReactLoading type="spin" color="#fff" className="loadingIcon" width={30} delay={200} />
);

export default LoadingIcon;
