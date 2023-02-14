import React from 'react';

import { useState } from 'react';

const InputField = () => {
  const [todo, setTodo] = useState<object>({});

  const handleChange = (e: any) => {
    setTodo({ ...(todo as object), [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='write your note'
          onChange={handleChange}
          name='todo'
        />
      </form>
    </div>
  );
};

export default InputField;
