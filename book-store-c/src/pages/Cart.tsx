import styled from "styled-components";
import Title from "../Components/common/Title";
import CartItem from "../Components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

function Cart () {    
    const { carts, deleteCartItem } = useCart();

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const handleCheckItems = (id : number) => {
        if (checkedItems.includes(id)) {
            //언체크
            setCheckedItems(checkedItems.filter((item) => item !== id));
        } else {
        // 체크
        setCheckedItems([...checkedItems, id]);

        }
    };

    const handleItemDelete = (id : number) => {
        // 삭제 행위
        deleteCartItem(id);
    }


    return (
        <>  
        <Title size="large">장바구니</Title>
        <CartStyle>
            <div className="content">
                {carts.map((item) => ( 
                    <CartItem key={item.id} cart={item}
                    checkedItems={checkedItems} onCheck={handleCheckItems} onDelete={handleItemDelete}/> 
                ))}
            </div>
            <div className="summary">summary</div>
        </CartStyle>
    </>
    );
}

const CartStyle = styled.div``;

export default Cart;