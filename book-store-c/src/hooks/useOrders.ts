import { useEffect, useState } from "react";
import { Order, OrderDetailItem, OrderListItem } from "../models/order.model";
import { fetchOrder, fetchOrders } from "../api/order.api";

export const useOrders = () => {
    const [orders, setOrders ] = useState<OrderListItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    useEffect(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        });
    }, []);

    const selectOrderItem = (orderId: number) => {
        //요청 방어
        if (orders.filter((item) => item.id === orderId)[0].detail) {
            setSelectedItemId(orderId);
            return;
        }


        fetchOrder(orderId).then((orderDetail) => {
            setSelectedItemId(orderId);
            setOrders(

                orders.map((item) => {
                    if (item.id === orderId) {
                        return{
                            ...item,
                            detail:orderDetail
                        }
                    }
                    return item;
                })
            )
            //detail 정보를 어디에 저장할까???
            //console.log('orderDetail', orderDetail);
        });
    };

    return { orders, selectedItemId, selectOrderItem };
};