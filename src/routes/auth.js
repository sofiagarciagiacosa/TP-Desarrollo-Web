const {Router} = require("express");
const { sendSignupForm, getSignupData, sendSigninForm, getSigninData, signOut } = require("../controllers/authControllers");
const router= Router();
const bodyParser = require("body-parser");
const { checkUserNotSigned, checkUserId } = require("../middlewares/checkUserId");
const { sign } = require("crypto");
router.use(bodyParser.urlencoded({ extended: true}));

router.get("/signup",[checkUserNotSigned], sendSignupForm);

router.post("/signup", getSignupData );

router.get("/signin",[checkUserNotSigned],sendSigninForm );

router.post("/signin", getSigninData);

router.get("/signout", [checkUserId], signOut);

module.exports= router;