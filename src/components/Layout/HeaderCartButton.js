import CartIcon from "../Cart/CartIcon";
import classes from '../../components/Layout/HeaderCartButton.module.css'
import {useContext} from "react";
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx=useContext(CartContext)
    const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0);
    return (
        <button className={classes.button} onClick={props.onClick}>
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