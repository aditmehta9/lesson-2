import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'
const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IFJV1GoEe9cUrLJuYkVezjARaZfNiq3phj6PAkGqnk7abFLGwDpZEJJR8VdkslBLb9zf2mG3bfoWlBimXunWz0M001IZYKqbo'
    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    return (
        <StripeCheckOut
            label='Pay Now'
            name='Project'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckOutButton;