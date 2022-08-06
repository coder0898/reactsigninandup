import express from "express";
import { getSignupDetails, validateLoginDetails, getuserDetails, createUser, getUser, getSingleUser, deleteUsers, updateUsers } from "../controller/controls.js";

const router = express.Router();

// router.get("/user1", getuserDetails);

router.post("/signup",getSignupDetails);

router.post("/login",validateLoginDetails);

// USM API

router.post("/user", createUser);//for adding new user

router.get("/users",getUser);//for getting all users

router.get("/users/:id", getSingleUser);//for getting users based on id

router.delete("/users/:id", deleteUsers);//for deleting users based on id

router.put("/users/:id", updateUsers);//for updating users

export default router;