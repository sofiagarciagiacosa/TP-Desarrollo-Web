const {Router} = require("express");
const { sendSignupForm, getSignupData, sendSigninForm, getSigninData } = require("../controllers/authControllers");
const router= Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true}));

router.get("/signup", sendSignupForm);

router.post("/signup", getSignupData );

router.get("/signin",sendSigninForm );


router.post("/signin", getSigninData);

module.exports= router;