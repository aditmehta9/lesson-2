import { createSelector } from 'reselect';

const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart) => cart.cartItems

);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.price * cartItem.quantity, 0)

);