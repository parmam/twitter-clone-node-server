const { userDAO } = require('../dao');



const createUser = (req, res) => {
    let user = userDAO.getUserByEmail(req.body);
    if(user) return res.json({ error: 'User already exists' })
    else return res.json({message: 'User created'})
}

const getUserByEmail = (req, res) => {

}

module.exports = {
    createUser,
    getUserByEmail
}