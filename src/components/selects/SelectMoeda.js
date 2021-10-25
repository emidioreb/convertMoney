import PropTypes from 'prop-types';
import React from 'react';
import M from 'materialize-css';
// import { connect } from 'react-redux';

class SelectMoeda extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: ['USD','CAD','GBP','ARS','BTC','LTC','EUR','JPY','CHF','AUD','CNY','ILS','ETH','XRP','DOGE'],
    };
  }

  componentDidMount() {
     M.AutoInit();
  //   const moeda = async () => {
  //     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  //     const currencies = await response.json();
  //     this.setState({
  //       moedas: Object.keys(currencies).filter((item) => (item !== 'USDT')),
  //     });
  //   };
  //   moeda();
   }

  render() {
    const { moedas } = this.state;
    const { value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name={ name } value={ value } onChange={ onChange }>
            {moedas.map((item) => <option key={ item } value={ item }>{item}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

SelectMoeda.propTypes = {
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

// const mapStateToProps = (state) => ({
//   wallet: state.wallet,
// });

export default SelectMoeda;
