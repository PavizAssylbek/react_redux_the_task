import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './footer.css'

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    }
];


const Footer = ({ amount, activeFilter, changeFiler }) => (
    <div className="footer">
      <span className="amount">{`${amount} Tasks left`}</span>
      <div className="btn-group">
        {FILTERS_BTN.map(({ text, id }) => (
          <Button onClick={() => {changeFiler(id)}}
            key={id}
            className="mr-5"
          >{text}</Button>
        ))}
      </div>
    </div>
  );
  
  Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFiler: PropTypes.func
  }
  
  Footer.defaultProps = {
    changeFiler: () => {},
    amount: 0,
    activeFilter: 'all',
  }
  
  export default Footer;