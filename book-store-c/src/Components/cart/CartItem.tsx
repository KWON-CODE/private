import styled from "styled-components";
import { Cart } from "../../models/cart.model";
import Button from "../common/Button";
import Title from "../common/Title";
import { formatNumber } from "../../utils/format";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";

interface Props {
    cart: Cart;
    checkedItems: number[];
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
}

function CartItem( { cart, checkedItems, onCheck, onDelete} : Props) {
   const { showConfirm } = useAlert();
   
    // checkedItems 목록에 내가 있는지 판단 = checked
    const isChecked= useMemo(() => {
        return checkedItems.includes(cart.id);
    }, [checkedItems, cart.id]);

    const handleCheck = () => {
        onCheck(cart.id);
    }

    const handleDelete = () => {
        // confirm을 받고 싶을때 = 실수로 장바구니 삭제버튼을 누를수도 있으니
        showConfirm("정말 삭제하시겠습니까?", () => {
            onDelete(cart.id);
        }); 
    };

    return (
        <CartItemStyle>
            <div className="info">
                <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
                <div>
                    <Title size="medium" color="text">{cart.title}</Title>
                    <p className="summary">{cart.summary}</p>
                    <p className="price">{formatNumber(cart.price)} 원</p>
                    <p className="quantity">{cart.quantity} 권</p>
                </div>
            </div>
            <Button size="medium" scheme="normal" onClick={handleDelete}>
                장바구니 삭제
            </Button>
        </CartItemStyle>
    )
}

const CartItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border: 1px solid ${({ theme}) => theme.color.border};
    border-radius: ${({ theme}) => theme.borderRadius.default};
    padding: 12px;

    p{
        padding: 0 0 8px 0;
        margin: 0;
    }
`;

export default CartItem;