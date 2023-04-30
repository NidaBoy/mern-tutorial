import express from "express"
import cors from  "cors"
import mongoose from "mongoose";
// import restaurants from "./api/restaurants.route.js"

// const express = require("express")
// const mongoose = require("mongoose");
const app = express();

//app.use(cors());

mongoose.connect("mongodb+srv://NidaBoy:RbPjEhBs99*@cluster0.swvszsr.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001, () => console.log("SERVER RUNS PERFECTLY"));