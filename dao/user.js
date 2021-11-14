const bcrypt = require('bcrypt');
const db = require('../database/db_connection');

class UserDAO {
     createUser(name, email, password, phone, user_type) {
        let id;
        bcrypt.hash(password, 10, async (err, hashedPassword) => {
                id = await db('users')
                    .insert({
                        email,
                        name: name,
                        password: hashedPassword,
                        phone: phone,
                        user_type: user_type
                    }).then( ([id]) => id);

        });
        return id;
    }

    async getUser() {
        const [users] = await db.select('id', 'name', 'phone', 'email', 'user_type', 'status', 'created_at', 'updated_at').from('users').returning('*')
        return users;
    }

    async getUserById(id) {
        const [user] = await db
            .select('id', 'name', 'phone', 'email', 'user_type', 'status', 'created_at', 'updated_at')
            .from('users')
            .where('id', '=', id)
            .returning('*');
        return user;
    }

    async updateUser(id, name, email, phone, user_type) {
            const [idx] = await db('users')
                .where('id', '=', id)
                .update({
                    email,
                    name: name,
                    phone: phone,
                    user_type: user_type
                });
        return idx;
    }

    async deleteUser(id) {
        const [idx] = await db('users')
            .where('id', '=', id)
            .where('user_type', '!=', 'admin')
            .del();
        return idx;
    }
}

module.exports = new UserDAO();