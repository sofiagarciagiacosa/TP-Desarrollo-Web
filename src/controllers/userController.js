
const getUserById= (req,res) => {
    const {id} = req.params;

    res.status(200).send('User id: $(id)');
}

module.exports= {
    getUserById,

}