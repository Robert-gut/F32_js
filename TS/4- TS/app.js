"use strict";
//? void 
const person = {
    name: 'tor',
    email: 'tor@gmail.com',
    login: 'odinson',
};
function isAdmin(user) {
    return 'role' in user;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        user;
        throw new Error('user is not admin');
    }
}
