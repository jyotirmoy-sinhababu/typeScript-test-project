import React from 'react';

const Edit = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='write your note' name='todo' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Edit;
