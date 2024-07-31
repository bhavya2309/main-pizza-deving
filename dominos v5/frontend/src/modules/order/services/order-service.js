import axios from 'axios';
export const orderService = async (email, paymentid, status, name, address, total)=>{
    const order = {email, paymentid, status, name, address, total};
    const URL = import.meta.env.VITE_ORDER_URL;
    const response = await axios.post(URL, order);
    console.log('Order Book ', response.data);
    return response.data;
}