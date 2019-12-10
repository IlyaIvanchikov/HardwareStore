// import Router from 'express';
// import express from 'express';
 import fs from 'fs';
// // import path from 'path';


// const router = Router();
const logButton = document.querySelector('.log-button');
const login = document.getElementById('Login');
// const arr = ['hello'];
// const app = express();
// const jsonParser = express.json();




// const getAll = () => new Promise((resolve, reject) => {
//   if (arr === 'null') {
//     reject(console.log('err'));
//   }
//   resolve(alert('hello'));
// });

if (logButton) {
  logButton.addEventListener('click', () => {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
  });
})
};
