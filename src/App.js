import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
};

class ShopItemClass extends React.Component {

  constructor(props){
    super(props);
    this.state = item;
  }

  render() {

    return (<div className="main-content">
      <h2>{this.state.brand}</h2>
      <h1>{this.state.title}</h1>
      <h3>{this.state.description}</h3>
      <div className="description">
        {this.state.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.state.currency}{this.state.price}</div>
        <button>Добавить в корзину</button>
      </div>
      </div>);
  }
};

ShopItemClass.propTypes ={
    item: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string
    })
}

function App() {
  return (<>
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass />
      </div>
    </div>
    </>
  )
}

export default App;
