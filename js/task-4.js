/*
відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  const emailEnter = event.target.elements.email.value.trim();
  const passwordEnter = event.target.elements.password.value.trim();

    if (emailEnter === "" || passwordEnter === "") {
        return alert("All form fields must be filled in");
    }

    const userInfo = {
        email: emailEnter,
        password: passwordEnter,
    };
    console.log(userInfo);
    registerForm.reset();
}