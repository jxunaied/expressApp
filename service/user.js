const userDAO = require('../dao/user');

class UserService {
    createUser(userDto) {
        const { name, email, password, phone, user_type } = userDto;
        return userDAO.createUser(name, email, password, phone, user_type);
    }

    updateUser(userDto, id) {
        const {name, email, phone, user_type } = userDto;
        return userDAO.updateUser(id, name, email, phone, user_type);
    }

    getUser() {
        return userDAO.getUser();
    }

    getUserById(id) {
        return userDAO.getUserById(id);
    }

    deleteUser(userDto) {
        const {id} = userDto;
        return userDAO.deleteUser(id);
    }
}

module.exports = new UserService();