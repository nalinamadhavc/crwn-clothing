import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // in cents
  const publishableKey = 'pk_test_51I1lwbD2fcsQpBpZxvaepmPO5mu1cGqsefJHlxiVpTg9dUmMck485D5qtR0l1oKzFNdLXSdElDEPGCOoNZM8X3F1006Twiso3X';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <div className='stripe-checkout-button'>
      <StripeCheckout 
        label='Pay Now'
        name='Clothing Ltd.'
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        shippingAddress
        billingAddress
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeCheckoutButton;