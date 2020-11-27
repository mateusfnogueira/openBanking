const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.login || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!');
        }

        const user = await app.db('users')
            .where({ login: req.body.login })
            .first();

        if (!user) return res.status(400).send('Usuário não encontrado');

        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) return res.status(401).send('Senha inválida');

        const now = Math.floor(Date.now() / 1000);

        const payload = {
            id: user.id,
            name: user.name,
            login: user.login,
            balance: user.balance,
            iat: now,
            exp: now + (60 * 60) /* token irá expirar em uma hora */
        };

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) {

        }

        res.send(false)
    };

    return { signin, validateToken }
};