import React from 'react';

import InputField from '../../components/InputField';
import Nav from '../../components/Nav';

import { useState } from 'react';

interface data {
  data: object;
  id: number;
}

const Home = () => {
  const [inputFieldData, setInputFieldData] = useState<any>([]);

  const handleSubmit = (data: data) => {
    if (data) {
      setInputFieldData([
        ...inputFieldData,
        { id: Math.floor(Math.random() * 1000), data },
      ]);
      console.log('done');
    }
  };
  console.log(inputFieldData);

  return (
    <>
      <div className='home-nav-cnt'>
        <Nav />
      </div>
      <div className='home-inputField-cnt'>
        <InputField handleSubmit={handleSubmit} />
      </div>
      <div className='home-display-cnt'>
        {inputFieldData ? (
          inputFieldData?.map((item: any) => {
            return <div key={item.id}>{item.data.todo}</div>;
          })
        ) : (
          <div>
            <p>note your task</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
