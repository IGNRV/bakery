import React from 'react';

import Screen from '@/components/layout/Screen';
import { Col, Row } from "@/components/layout/Generic";

import Logo from "@/components/ui/Logo";
import InputText from '@/components/ui/InputText';
import Button from '@/components/ui/Button';
import ButtonLink from '@/components/ui/ButtonLink';

const Login = () => {
  return (
  <Screen>
    <Col gap="65px">
      <Logo />
      <Col gap="20px">
        <Col gap="5px">
          <InputText type="text" label="Correo electrónico" width="300px"/>
          <InputText type="password" label="Contraseña" width="300px"/>
        </Col>
        <Button text="Ingresar" width="200px"/>
        <ButtonLink text="Olvidé mi contraseña" url="#"/>
      </Col>
    </Col>
  </Screen>
  );
};

export default Login;