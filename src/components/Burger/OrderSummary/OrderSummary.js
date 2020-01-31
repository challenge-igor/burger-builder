import React from 'react'

import Aux from '../../../hoc/Aux'
import Buttton from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>Burger with ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Buttton btnType='Danger' clicked={props.purchaseCancelled}>
                Cancel
            </Buttton>
            <Buttton btnType='Success' clicked={props.purchaseContinued}>
                Continue
            </Buttton>
        </Aux>
    )
}

export default orderSummary