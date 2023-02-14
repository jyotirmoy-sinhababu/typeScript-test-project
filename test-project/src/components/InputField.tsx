import React from 'react';

import { useState } from 'react';

interface props {
  inputFieldData: Array<object>;
  setInputFieldData: React.Dispatch<any>;
}

const InputField = ({ setInputFieldData, inputFieldData }: props) => {
  const [todo, setTodo] = useState<object>({});

  const handleChange = (e: any) => {
    setTodo({ ...(todo as object), [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInputFieldData(...inputFieldData, todo);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type='text'
          placeholder='write your note'
          onChange={handleChange}
          name='todo'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default InputField;
