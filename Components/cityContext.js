import React, { createContext, useState, useContext } from 'react';
// flatlistteki şehirlerde bulunan git tuşuna basıldığında anasayfada o şehrin bilgileri bulunuyor.
const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cityList, setCityList] = useState([]);

  return (
    <CityContext.Provider value={{ cityList, setCityList }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
