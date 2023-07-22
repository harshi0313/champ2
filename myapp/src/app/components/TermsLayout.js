
import React from 'react';
import '../globals.css';

const TermsLayout = ({ children }) => {
  return (
    <div className="terms-container"> 
      <main>
        {children}
      </main>
    </div>
  );
};

export default TermsLayout;
