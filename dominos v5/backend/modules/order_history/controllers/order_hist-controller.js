import { OrderHistoryModel } from "../models/order-history-schema.js";

export const getOrderHistory = (req, res) => {
    OrderHistoryModel.find()
        .then((orders) => {
            res.status(200).json(orders);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message || "An error occurred while retrieving the order history." });
        });
};

    export const getOrdersHistory = (req,res)=>{
        res.status(200).json();
    }

    export const addOrderHistory = async (req,res)=>{
        const order= req.body;
        try{
        const doc= await OrderHistoryModel.create(order);
        if(doc && doc._id){
            res.status(200).json({message:"New Order Created in DB"});
        }
        else{
            res.status(500).json({message:"Unable to create new order in DB"})
        }
    }catch(err){
        res.status(500).json({message:"Unable to create new order in DB"})
    }   
    }