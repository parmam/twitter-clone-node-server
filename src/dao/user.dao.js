const { db } = require('../../prisma/prisma-client')

const getUserByEmail = async ({ email }) => {
    console.log(email)
    try {
        let user = await db.User.findOne({
            data: {
                email: email
            }
        })
        console.log(user, 'user')
        return user
    } catch (error) {
        console.log(error)
        return error
    }
}

const createUser = async (user) => {

}

module.exports = {
    getUserByEmail,
    createUser
}