

const sendHomeView= (req,res) => {

    res.render("vistas/home.ejs",{user: req.user});
};
module.exports={sendHomeView};
