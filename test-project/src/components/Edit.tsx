import React from 'react';

const Edit = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='write your note' name='todo' />
        <button type='submit'>Save</button>
      </form>
      <button>Cancel</button>
    </div>
  );
};

export default Edit;
