const fs = require('fs');
const path = require('path');
// const express = require('express');

const logButton = document.querySelector('.log-button');
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

// const getAll = () => new Promise((resolve, reject) => {
//   if (arr === 'null') {
//     reject(console.log('err'));
//   }
//   resolve(alert('hello'));
// });

if (logButton) {
  logButton.addEventListener('click', save());
}
