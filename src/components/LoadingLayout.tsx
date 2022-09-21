import React from 'react';

type TLoadingLayoutProps = {
  loading?: boolean;
  error?: string;
  children: JSX.Element,
}

export const LoadingLayout: React.FC<TLoadingLayoutProps> = ({
  loading,
  error,
  children
}) => {
  return (
    <div>
      {loading && <p> Loading, please wait... </p>}
      {error && <p className="error-wrapper" >Error: {error} </p>}
      {!loading && !error && children}
    </div>
  )
}