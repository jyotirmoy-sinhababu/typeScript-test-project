import React from 'react';

import InputField from '../../components/InputField';
import Nav from '../../components/Nav';

import { useState } from 'react';

interface data {
  data: object;
  id: number;
}

interface lists {
  lists: object;
  id: number;
}

const Home = () => {
  const [inputFieldData, setInputFieldData] = useState<any>([]);
  const [isEdit, setEdit] = useState<boolean>(false);

  const handleSubmit = (data: data) => {
    if (data) {
      setInputFieldData([
        ...inputFieldData,
        { id: Math.floor(Math.random() * 1000), data },
      ]);
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = (param: any) => {
    const filterData = inputFieldData.filter((lists: lists) => {
      return lists.id != param.id;
    });
    setInputFieldData(filterData);
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
            return (
              <div key={item.id}>
                <p> {item.data.todo}</p>
                <div>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-x-lg'
                      viewBox='0 0 16 16'
                    >
                      <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                    </svg>
                  </button>
                  <button onClick={handleEdit}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-check2'
                      viewBox='0 0 16 16'
                    >
                      <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                    </svg>
                  </button>
                </div>
              </div>
            );
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
