import React from 'react';

const NeonInput = ({ label, id, type = 'text', placeholder, value, onChange, name }) => {
    return (
        <div className="mb-4 group">
            {label && (
                <label htmlFor={id} className="block text-gray-300 text-sm font-bold mb-2 capitalize tracking-wide group-focus-within:text-white transition-colors duration-300">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="
          w-full px-4 py-3 text-white bg-black/40 border border-white/20 rounded-lg
          focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]
          placeholder-white/30 transition-all duration-300
          hover:border-white/40
        "
            />
        </div>
    );
};

export default NeonInput;
