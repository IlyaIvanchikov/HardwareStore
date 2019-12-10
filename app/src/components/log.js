<<<<<<< HEAD
// import Router from 'express';
// import express from 'express';
 import fs from 'fs';
// // import path from 'path';
=======
const fs = require('fs');
const path = require('path');
// const express = require('express');
>>>>>>> 5b360b9cf2ebee21ca148e9f61fe1d772d332b1b


// const router = Router();
const logButton = document.querySelector('.log-button');
<<<<<<< HEAD
const login = document.getElementById('Login');
// const arr = ['hello'];
// const app = express();
// const jsonParser = express.json();



=======
const login = document.querySelector('.login');
const pass = document.querySelector('.pass');
// const arr = ['hello'];
const users = {
  login: '',
  pass: '',
};

function save() {
  console.log(login.value);
}
>>>>>>> 5b360b9cf2ebee21ca148e9f61fe1d772d332b1b

// const getAll = () => new Promise((resolve, reject) => {
//   if (arr === 'null') {
//     reject(console.log('err'));
//   }
//   resolve(alert('hello'));
// });

if (logButton) {
<<<<<<< HEAD
  logButton.addEventListener('click', () => {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
  });
})
};
=======
  logButton.addEventListener('click', save());
}
>>>>>>> 5b360b9cf2ebee21ca148e9f61fe1d772d332b1b
