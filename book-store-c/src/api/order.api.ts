import { Order, OrderDetailItem, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

// export const order = async (orderData: OrderSheet) => {
//     const response = await httpClient.post("/orders", orderData);
//     return response.data;
// };

export const order = async (orderData: OrderSheet) => {
    return await requestHandler<OrderSheet>('post', "/orders", orderData);
};

export const fetchOrders = async () => {
    // const response = await httpClient.get<Order[]>("/orders");
    // return response.data;
    //안쓰는 코드, 중복코드 제거한것
    return await requestHandler("get", "/orders");
};

export const fetchOrder = async (orderId: number) => {
    // const response = await httpClient.get<OrderDetailItem[]>
    // (`/orders/${orderId}`);
    // return response.data;
    // 안쓰는 코드 ,중복코드 제거한것
    return await requestHandler("get", `/orders/${orderId}`);

};