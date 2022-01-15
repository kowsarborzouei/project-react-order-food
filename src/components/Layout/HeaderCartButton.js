import CartIcon from "../Cart/CartIcon";
import classes from '../../components/Layout/HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);


    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setBtnHighlighted(true)
        const timer=setTimeout(()=>{
            setBtnHighlighted(false)
        },300)

        return()=>{
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>
                {numberOfCartItem}
            </span>
        </button>
    )
}

export default HeaderCartButton