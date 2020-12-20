import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/original.svg'; 
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
const CartIcon = ({ toggleCartHidden, cartItems }) => {
    
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
    <span className='cart-count'>{cartItems.length}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);