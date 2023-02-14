import React from 'react';

import InputField from '../../components/InputField';

import { useState } from 'react';

interface data {
  data: object;
  id: number;
}

const Home = () => {
  const [inputFieldData, setInputFieldData] = useState<any>([]);

  const handleSubmit = (data: Object) => {
    if (data) {
      setInputFieldData([
        ...inputFieldData,
        { id: Math.floor(Math.random() * 1000), data: Object },
      ]);
    }
  };
  console.log(inputFieldData);

  return (
    <>
      {inputFieldData?.map((item: any) => {
        return <div key={item.id}></div>;
      })}
      <div>
        <InputField handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Home;
