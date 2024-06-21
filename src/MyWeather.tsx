import React from 'react';

type Myprops = {
  weather: string;
  children: React.ReactNode;
};

const MyWeather: React.FC<Myprops> = ({ weather, children }) => {
  return (
    <div>
      {children}
      <p>오늘의 날씨는 {weather} 입니다.</p>
    </div>
  );
};

export default MyWeather;
