import React from 'react';
import Screen from '@/components/layout/Screen';
import Navbar from '@/components/layout/Navbar';
import Subtitle from '@/components/layout/Subtitle';
import Form from '@/components/layout/Form/Form';



const Welcome = () => {
  return (
    <Screen>
        <Navbar />
        <Subtitle />
        <Form />
    </Screen>
  );
};

export default Welcome;