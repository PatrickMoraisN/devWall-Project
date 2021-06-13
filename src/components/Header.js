import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ email, total = 0 }) => (
  <header className="header">
    <div className="login-title header-title">dev<span className="wall">Wall</span></div>
    <div className="info">
      <span data-testid="email-field">
        {email}
      </span>
      <div className="total-field">
        Despesa Total: R$
        <span data-testid="total-field">{total.toFixed(2)}</span>
      </div>
      <div data-testid="header-currency-field">
        BRL
      </div>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
