import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { tooggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

const CartIcon = ({ tooggleCartHidden }) => {
	return (
		<div className="cart-icon">
			<ShoppingIcon className="shopping-icon" onClick={tooggleCartHidden} />
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	tooggleCartHidden: () => dispatch(tooggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
