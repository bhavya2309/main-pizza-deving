import axios from 'axios';
export const getApi = async()=>{
    const response = await axios.get(import.meta.env.VITE_PRODUCT_URL);
    return response.data;
}