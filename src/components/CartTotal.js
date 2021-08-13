import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
// react number format
function CartTotal({ getTotalPrice, getCount }) {
    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): 
                
                <NumberFormat value={getTotalPrice()}  displayType={'text'} thousandSeparator={true} prefix={'$'} />;
            </Subtotal>
            <CheckoutButton> Proceed to checkout </CheckoutButton>
        </Container>
    );
}

export default CartTotal;

const Container = styled.div `
    height: 200px;
    background-color: white;
    flex: 0.2;
    padding: 20px;
`
const Subtotal = styled.h2 `
    margin-bottom: 16px;
`
const CheckoutButton = styled.button `
    width: 100%;
    background-color: #f0c14b;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #ddb347;
    }
`
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `
// const Container = styled.div `

// `