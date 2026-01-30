import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, children, className = "" }) => {
    return (
        <Link
            to={to}
            className={`group relative inline-flex items-center justify-center bg-[#0f172a] text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${className}`}
        >
            <span className="relative z-10">{children}</span>
        </Link>
    );
};

export default CTAButton;
