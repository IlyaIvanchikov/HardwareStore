const fs = require('fs');
const path = require('path');

const logButton = document.querySelector('.log-button');
const arr = ['hello'];
// const getAll = () => new Promise((resolve, reject) => {
//   fs.readFile(
//     path('../users.json'),
//     'utf-8',
//     (err, content) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(alert(JSON.parse(content)));
//       }
//     },
//   );
// });

// const getAll = (event) => new Promise((resolve, reject) => {
//   fs.writeFile('message.txt', 'hello', (err) => {
//     if (err) reject(err);
//     resolve(alert('alert'));
//   });
//   event.preventDefault();
// });


function getAll() {
  return new Promise((resolve, reject) => {
    fs.readFile
    (path.join(__dirname, 'assets', 'data', 'users.json'),
    'utf-8',
    (err, content) => {
    if (err) {
        reject(err);
    } else {
        resolve(alert(JSON.parse(content)));
    }
            }
        )
    })
  };

  getAll();
// const getAll = () => new Promise((resolve, reject) => {
//   if (arr === 'null') {
//     reject(console.log('err'));
//   }
//   resolve(alert('hello'));
// });

if (logButton) {
  logButton.addEventListener('click', getAll);
}
