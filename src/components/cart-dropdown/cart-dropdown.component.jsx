import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {

    const navigateToCheckoutPage = () => {
        history.push(`/checkout`);
        dispatch(toggleCartHidden());
    }

    return(
        <div className='cart-dropdown'>
            <div className='cart-items' >
                { cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem item={cartItem} key={cartItem.id} />
                    ))
                )  : (
                    <span className='empty-message'>Your cart is empty</span>
                )
                }
            </div>
            <CustomButton onClick={navigateToCheckoutPage}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));