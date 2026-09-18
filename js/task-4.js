const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const userInfo = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };
  if (userInfo.email == '' || userInfo.password == '') {
    alert('All form fields must be filled in');
  } else {
    console.log(userInfo);
    loginForm.reset();
  }
  
});
