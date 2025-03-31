import React from 'react';

const AdBanner = () => {
  return (
    <div className="my-6 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg text-center">
      <p className="text-sm text-gray-300 mb-1">Спонсировано</p>
      <h3 className="text-xl font-bold">🚀 Купи $PEPE сейчас!</h3>
      <p className="text-gray-400 mt-1">Следующий x100 токен</p>
    </div>
  );
};

export default AdBanner;
