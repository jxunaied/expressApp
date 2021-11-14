const userService = require('../service/user');

class UserController {
    async createUser(req, res) {
        try {
           const id = await userService.createUser(req.body);
            res.status(201).json(id);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async getUser(req, res) {
        try {
            const users = await userService.getUser();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async getUserById(req, res) {
        try {
            let id = req.params.id
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async updateUser(req, res) {
        try {
            let id = req.params.id
            const result = await userService.updateUser(req.body, id);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async deleteUser(req, res) {
        try {
            let id = req.params.id
            const result = await userService.deleteUser(req.body, id);
            res.status(204).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = new UserController();