const { query } = require('../config/db')



const getUsers = async (request, response) => {
    try {
        const sql = 'SELECT * FROM users';
        await query(sql);
        response.status(200),send({})
        
    } catch (error) {
        console.log('Error : ',error);
        response.status(500).send({ message: 'Internal Server Error'})
    }
}

module.exports = {
    getUsers
}