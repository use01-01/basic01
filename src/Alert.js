import React, { useEffect } from 'react';

const Alert = ({ removeAlert, textAlert, color, items }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [items]);
  return (
    <h2 className={`section__alert section__alert-${color}`}>{textAlert}</h2>
  );
};

export default Alert;
