import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import Footer from '../components/Footer';

const Wallet = () => {
  const email = useSelector((state) => state.user.email);
  const total = useSelector((state) => state.wallet.total);
  const expenses = useSelector((state) => state.wallet.expenses);
  const loading = useSelector((state) => state.wallet.loading);
  return (
    <div className="wallet-page">
      <Header email={ email } total={ total } />
      <Form />
      <Table expenses={ expenses } loading={ loading } />
      <Footer />
    </div>);
};

export default Wallet;
