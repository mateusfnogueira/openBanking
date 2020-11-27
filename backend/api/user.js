const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validate;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt)
    };

    const save = async (req, res) => {
        const user = { ...req.body };
        if (req.params.id) user.id = req.params.id;

        try {
            existsOrError(user.name, 'nome não informado');
            existsOrError(user.email, 'Email não informado');
            existsOrError(user.login, 'Username não informado');
            existsOrError(user.balance, 'Informe seu depósito inicial');
            existsOrError(user.password, 'Senha não informada');

            const userFromDb = await app.db('users')
                .where({ email: user.email }).first();
            if (user.id) {
                notExistsOrError(userFromDb, 'Usúario já cadastrado')
            }
        } catch (msg) {
            return res.status(400).send(msg);
        }

        user.password = encryptPassword(user.password);

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    };

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'lastname', 'email', 'login', 'balance')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    };

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'lastname', 'email', 'login', 'balance')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err));
    };




    return { save, get, getById };
}