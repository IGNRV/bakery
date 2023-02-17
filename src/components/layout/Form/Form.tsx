import React from 'react'

import { Col, Row } from "@/components/layout/Generic";

import InputText from '@/components/ui/InputText';
import InputSelect from '@/components/ui/InputSelect';
import InputDate from '@/components/ui/InputDate';
import InputHour from '@/components/ui/InputHour/InputHour';
import styles from './Form.module.scss';


const Form = () => {
  return (
    <Row gap="267px">    
      <Col gap="20px">

          <Col gap="5px">
            <Row gap="20px">
              <Row gap="5px">
                  <InputText label="Rut" width="140px"/>
                  <InputText label="Nombre" width="300px"/>
              </Row>
                  <InputSelect label="Sucursal" width="266px"/>
            </Row>

            <Row gap="20px">
              <Row gap="5px">
                  <InputText label="Correo electrónico" width="300px"/>
                  <InputText label="Teléfono" width="140px"/>
              </Row>
              <Row gap="5px">
                  <InputDate label="Fecha" width="160px"/>
                  <InputHour label="Hora" width="100px"/>
              </Row>
            </Row>
          </Col>

          <Col gap="5px">

            <Row gap="20px">
              <Row gap="5px">
                  <InputSelect label="Forma" width="220px"/>
                  <InputSelect label="Tamaño" width="220px"/>
              </Row>
              <Row gap="5px">
                  <InputText label="Precio" width="130px"/>
                  <InputHour label="Abono" width="131px"/>
              </Row>
            </Row>

            <Row gap="20px">
              <Row gap="5px">
                  <InputSelect label="Masa" width="220px"/>
                  <InputSelect label="Sabor" width="220px"/>
              </Row>    
                  <InputSelect label="Tipo de pago" width="266px"/>
            </Row>

            <Row gap="20px">
              <Row gap="5px">
                  <InputSelect label="Crema" width="220px"/>
                  <InputSelect label="Relleno" width="220px"/>
              </Row>
              <InputText label="Estado del pago" width="266px"/>
            </Row>

            <Row gap="245px">
              <InputSelect label="Extra" width="220px"/>
              <InputText label="Estado del pedido" width="266px"/>
            </Row>

          </Col>

          <Col gap="5px">
            
            

            <Row gap="20px">
              <InputText label="Mensaje" width="445px"/>
              <InputText label="Usuario" width="266px"/>
            </Row>

            <Row gap="20px">
              <InputText label="Adicional" width="445px"/>
                  <Row gap="5px">
                      <InputDate label="Fecha" width="160px"/>
                      <InputHour label="Hora" width="100px"/>
                  </Row>
            </Row>
          </Col>
      
      </Col>
    </Row>
  )
}

export default Form