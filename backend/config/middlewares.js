const bodyParser = require('bodyParse');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
}