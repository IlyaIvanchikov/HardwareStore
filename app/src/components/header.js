/* eslint-disable no-undef */
$(document).ready(() => {
  $('.header').height($(window).height());
});


const other1 = document.querySelector('.other1');

other1.addEventListener("click", (e) => {
  let target = e.target;

  let id = target.getAttribute('data-toggle-id');
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
})
other1.insertAdjacentHTML('afterbegin', '<p id="other-id1" hidden> Hello </p>');

const other2 = document.querySelector('.other2');

other2.addEventListener("click", (e) => {
  let target = e.target;

  let id = target.getAttribute('data-toggle-id');
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
})
other2.insertAdjacentHTML('afterbegin', '<p id="other-id2" hidden> Hello </p>');

const other3 = document.querySelector('.other3');

other3.addEventListener("click", (e) => {
  let target = e.target;

  let id = target.getAttribute('data-toggle-id');
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
})
other3.insertAdjacentHTML('afterbegin', '<p id="other-id3" hidden> Hello </p>');
window.addEventListener('DOMContentLoaded', () => {

  const user = document.querySelector('.user');
function req() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:8080/data/user.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  request.addEventListener("load", function() {
    if (request.status == 200) {
      let data = JSON.parse(request.response);
      if(user) {
        user.innerHTML = `Добро пожаловать ${data[0].log}`;
      }
    } else {
      console.log("Что-то пошло не так");
    }
  })
}
req();
});


// const submit = document.getElementById('submit');
// if(submit) {
// submit.addEventListener('click', req);
// }