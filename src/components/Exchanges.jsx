// In Exchanges.jsx
import React from 'react';
import { Row, Col, Card, Select, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useLazyGetExchangesQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const Exchanges = () => {
  const { data: exchangesData, isLoading, error } = useLazyGetExchangesQuery(); // Corrected hook

  if (isLoading) return 'Loading...';
  if (error) return 'Error while fetching exchanges data';

  const exchanges = exchangesData?.data?.exchanges;

  return (
    <Row>
      {/* Your component rendering logic for exchanges goes here */}
    </Row>
  );
};

export default Exchanges;
