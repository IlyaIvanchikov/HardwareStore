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
            resolve(users);
        }
                }
            )
        })
    };

async search() {
    const users = await Users.allInfo();
    const result = users.find(item => 
    (item.log === this.log) && (item.pass === this.pass));
    return result;
}

async userSave() {
    const user = await Users.allInfoUser();
    user.pop();
    user.push(this.toJSON());
    return new Promise((resolve, reject) => {
        fs.writeFile
        (path.join(__dirname, 'data', 'user.json'),
        JSON.stringify(user),
        (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(user);
        }
                }
            )
        })
    };

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

    static allInfoUser() {
        return new Promise((resolve, reject) => {
            fs.readFile
            (path.join(__dirname, 'data', 'user.json'),
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

export default Users;
