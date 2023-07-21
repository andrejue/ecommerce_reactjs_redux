import cartActionTypes from "./action-types";

const initialState = {
   products: [],
   totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case (cartActionTypes.addProduct):
         const productIsInCart = state.products.some(
            (product) => product.name === action.payload.name
         )

         if (productIsInCart) {
            return {
               ...state,
               products: state.products.map((product) =>
                  product.name === action.payload.name
                     ? {...product, quantity: product.quantity + 1}
                     : product
                  )
            }
         }
         return {
            ...state,
            products: [...state.products, {...action.payload, quantity: 1}]
         };

      case cartActionTypes.removeProduct:
         return {
            ...state,
            products: state.products.filter(product => product.name !== action.payload)
         }

      case cartActionTypes.increaseProduct:
         return {
            ...state,
            products: state.products.map(product =>
               product.name === action.payload
               ? { ...product, quantity: product.quantity + 1}
               : product
            )
         }

      case cartActionTypes.decreaseProduct:
         return {
            ...state,
            products: state.products.map(product =>
               product.name === action.payload
               ? { ...product, quantity: product.quantity - 1}
               : product
            ).filter((product) => product.quantity > 0)
         }
      default:
         return state;
   }

};

export default cartReducer;
