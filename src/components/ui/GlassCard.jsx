import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] rounded-2xl  ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
