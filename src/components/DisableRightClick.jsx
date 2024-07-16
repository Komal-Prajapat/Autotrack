import React, { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return null; // or you can return a div to occupy space
};

export default DisableRightClick;
