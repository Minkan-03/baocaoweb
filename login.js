// chuyển from
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

  
//validate form 
const form = document.getElementById('myForm');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value === '') {
    alert('Bạn chưa nhập email');
    return;
  }
  
  if (passwordInput.value === '') {
    alert('Bạn chưa nhập mật khẩu');
    return;
  }
  
  if (passwordInput.value.length < 8) {
    alert('Mật khẩu phải có ít nhất 8 ký tự');
    return;
  }
  

  form.submit();
});

//regiter-from
const register = document.getElementById('Register-Form');
const nameRegiter = document.getElementById('name');
const emailRegiter = document.getElementById('Email');
const passwordRegiter = document.getElementById('Password');

register.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if(nameRegiter.value === ''){
    alert('Bạn chưa nhập tên người dùng');
    return;
  }

  if (emailRegiter.value === '') {
    alert('Bạn chưa nhập email');
    return;
  }
  
  if (passwordRegiter.value === '') {
    alert('Bạn chưa nhập mật khẩu');
    return;
  }
  
  if (passwordRegiter.value.length < 8) {
    alert('Mật khẩu phải có ít nhất 8 ký tự');
    return;
  }
  

  register.submit();
});


