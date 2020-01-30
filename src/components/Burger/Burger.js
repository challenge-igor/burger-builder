import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    let transormedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transormedIngredients.length === 0) {
        transormedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transormedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger