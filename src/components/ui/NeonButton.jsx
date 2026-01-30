import React from 'react';

const NeonButton = ({ children, onClick, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        relative px-8 py-3 font-bold text-white transition-all duration-300
        bg-transparent border border-white/50 rounded-lg
        shadow-[0_0_10px_rgba(255,255,255,0.2)]
        hover:shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.2)]
        hover:bg-white/10 hover:text-white
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default NeonButton;
