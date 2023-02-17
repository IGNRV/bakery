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
          <InputText label="Correo electrónico" width="300px"/>
          <InputText label="Contraseña" width="300px"/>
        </Col>
        <Button text="Ingresar" width="200px"/>
        <ButtonLink text="Olvidé mi contraseña" url="#"/>
      </Col>
    </Col>
  </Screen>
          //<div 
          //  style={{ 
          //    width: "100%", 
          //    backgroundColor: "black", 
          //    height: "50px", 
          //    padding: "0 20px"
          //  }}>      
          //  <Row align="space-between">
          //    <span class="material-symbols-outlined" style={{ color: "white" }}>
          //      menu
          //    </span>
          //    <Row gap="10px">
          //      <span className="material-symbols-outlined" style={{ color: "white" }}>
          //        monitoring
          //      </span>
          //      <span class="material-symbols-outlined" style={{ color: "white" }}>
          //        qr_code_2
          //      </span>
          //      <span class="material-symbols-outlined" style={{ color: "white" }}>
          //        inbox
          //      </span>
          //      <span class="material-symbols-outlined" style={{ color: "white" }}>
          //        person
          //      </span>
          //    </Row>
          //  </Row>
          //</div>
  );
};

export default Login;