import Head from 'next/head';
import Order from '@/components/functional/Order';
import { Row, Col } from '@/components/layout/Generic';

const order = () => {
  return (
    <>
      <Head>
      </Head>
    <Row gap="20000px">
      <Order />
    </Row>
    </>
  )
}

export default order;