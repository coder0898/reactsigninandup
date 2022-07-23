import express from "express";
import { getSignupDetails, validateLoginDetails, getuserDetails} from "../controller/controls.js";

const router = express.Router();

router.get("/user", getuserDetails);

router.post("/signup",getSignupDetails);

router.post("/login",validateLoginDetails);

export default router;