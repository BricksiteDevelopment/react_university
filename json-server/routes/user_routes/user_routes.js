// handlers
const userLogin = require('../../handlers/users/login/login');

module.exports = function(server) {

  server.post('/users/login', userLogin);

};