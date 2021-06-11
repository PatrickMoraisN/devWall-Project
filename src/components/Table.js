import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import headers from './headers';

const Table = ({ expenses, loading }) => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch({
      type: 'RESET_EXPENSES',
    });
  }
  const newTotal = (totalTarg) => {
    dispatch({
      type: 'NEW_TOTAL',
      payload: { total: +(totalTarg)}
    });
  }

  const deleteContent = ({ target }) => {
    const expTarg = target.parentNode.parentNode;
    expTarg.remove();
    newTotal(expTarg.getAttribute('data-total'))
  }

  if (!loading) {
    console.log(expenses)
    return (
      <table>
        <thead>
          <tr>
            { headers.map((th) => (
              <th key={ th }>{ th }</th>
            )) }
            <th><button onClick={ deleteAll }>Apagar tudo</button></th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((exp) => (
            <tr key={ exp.description } data-id={ exp.description } data-total={ parseFloat(exp.value).toFixed(2) }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ exp.valueOriginal }</td>
              <td>{ exp.currency }</td>
              <td>{ exp.method }</td>
              <td>{ parseFloat(exp.value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => deleteContent(e) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
  return (<p>Adicione uma nova despesa!</p>);
};

export default Table;

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
