import React from 'react';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold gradient-text">
          MemeCoin Radar 🇷🇺
        </h1>
        <input
          type="text"
          placeholder="Поиск токена..."
          className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </header>
  );
};

export default Header;
