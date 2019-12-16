const path = require('path');
const fs = require('fs');

class Users {
    constructor(log, pass) {
        this.log = log;
        this.pass = pass;
    }

toJSON() {
    return {
    log: this.log,
    pass: this.pass,
    }
};

 async save() {
    const users = await Users.allInfo();
    users.push(this.toJSON());
    return new Promise((resolve, reject) => {
        fs.writeFile
        (path.join(__dirname, 'data', 'users.json'),
        JSON.stringify(users),
        (err) => {
        if (err) {
            reject(err);
        } else {
            console.log(users);
            resolve(users);
        }
                }
            )
        })
    };

static async search(user) {
    const users = await Users.allInfo();
    const result = users.find(item => item.log === user.log);
    return result;
}

static allInfo() {
    return new Promise((resolve, reject) => {
        fs.readFile
        (path.join(__dirname, 'data', 'users.json'),
        'utf-8',
        (err, content) => {
        if (err) {
            reject(err);
        } else {
            resolve(JSON.parse(content));
        }
                }
            )
        })
    };

};
console.log(path.join(__dirname, 'data', 'users.json'));
export default Users;
