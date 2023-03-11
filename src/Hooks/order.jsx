import { createContext, useContext, useState, useEffect } from 'react';

export const OrderContext = createContext({});

export function OrderProvider({ children }){
    const [ cart, setCart ] = useState([])

    async function handleCart(product, quantities) {
        const newOrder = { ...product, quantities };
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
          setCart(prevState => {
            const updatedCart = [...prevState];
            updatedCart[index].quantities += quantities;
            return updatedCart;
          });
        } else {
          setCart(prevState => [...prevState, newOrder]);
        };
      };
      
      function deleteFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    };

    return(
        <OrderContext.Provider value={{
            handleCart,
            cart: cart,
            deleteFromCart
        }}>
            {children}
        </OrderContext.Provider>
    )
};

export function useCart(){
    const context = useContext(OrderContext);

    return context;
}
