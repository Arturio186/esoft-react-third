import React from 'react';
import './Loader.scss'; // Подключаем стили для компоненты

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
