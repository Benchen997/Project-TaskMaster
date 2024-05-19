import React from 'react';

function HeaderButton({ children, onClick }) {
  return (
    <button 
        className='text-my-header-text-1 font-roboto text-4xl m-2 font-bold 
        p-5 hover:text-my-header-text-2'
        onClick={onClick}>{children}</button>
  );
}

export default HeaderButton;