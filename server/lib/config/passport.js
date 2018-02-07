'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configurePassport = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { readByEmail } from '../procedures/users.proc';

function configurePassport(app) {
    _passport2.default.use(new _passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {}));

    app.use(_passport2.default.initialize());
}

exports.configurePassport = configurePassport;