import React from 'react';

import Edit from './Edit';

import { useState } from 'react';

interface props {
  handleSubmit: (todo: any) => void;
}

const InputField = ({ handleSubmit }: props) => {
  const [todo, setTodo] = useState<object>({});
  const [isEdit, setEdit] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setTodo({ ...(todo as object), [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(todo);
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
      {isEdit ? (
        <div>
          <Edit />
        </div>
      ) : null}
    </div>
  );
};

export default InputField;
