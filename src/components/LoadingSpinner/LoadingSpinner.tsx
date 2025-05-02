import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const LoadingSpinner: React.FC<{ loading?: boolean }> = ({ loading = true }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MoonLoader size={50} color="#3b82f6" loading={loading} />
  </div>
);

export default LoadingSpinner;