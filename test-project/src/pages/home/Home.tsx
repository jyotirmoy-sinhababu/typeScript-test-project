import React from 'react';

import InputField from '../../components/InputField';

import { useState } from 'react';

const Home = () => {
  const [inputFieldData, setInputFieldData] = useState<any>([]);

  return (
    <div>
      <InputField />
    </div>
  );
};

export default Home;
