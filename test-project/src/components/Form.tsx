import React from 'react';

import { useState } from 'react';

const Form = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div>
      <form>
        <input type='text' placeholder='write your note' />
      </form>
    </div>
  );
};

export default Form;
