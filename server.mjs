import Balon from "./models/Car.mjs";
import mongoose from "mongoose";
import express from "express";
const dbURI = 'mongodb+srv://englishlearning362:kiritoEnglish@cluster0.4dz3let.mongodb.net/node_auth?retryWrites=true&w=majority';
mongoose.connect(dbURI)
const app = express()


const createUser = async() => {

    var balon = new Balon({
        name:"Surxandaryo viloyati",
        imageurl:"https://olcha.uz/image/original/products/2022-09-19/zavodskaya-perednyaya-fara-avtomobilya-dlya-matiz-komplekty-119922-0.jpeg",
        type:"Matiz Balon",
        price:"1 227 000  so'm"
    });

    const userData = await balon.save();
    console.log(userData)
}
createUser()


