import { ProductModel } from "../models/product-schema.js";


export const getProducts= (req, res) => {
    ProductModel.find()
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message || "An error occurred while retrieving the order history." });
        });
};

    export const getProduct= (req,res)=>{
        res.status(200).json();
    }

    export const addProduct = async (req,res)=>{
        const product= req.body;
        try{
        const doc= await ProductModel.create(product);
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