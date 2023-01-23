const {Router} = require("express");
const { sendSignupForm, getSignupData, sendSigninForm, getSigninData, signOut } = require("../controllers/authControllers");
const router= Router();
const bodyParser = require("body-parser");
const { checkUserNotSigned, checkUserId } = require("../middlewares/checkUserId");
const { sign } = require("crypto");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

router.get("/signup",
 sendSignupForm);

router.post("/signup", getSignupData );

router.get("/signin"
,sendSigninForm );

router.post("/signin", getSigninData);

router.get("/signout"
, [checkUserId]
, signOut);

module.exports= router;