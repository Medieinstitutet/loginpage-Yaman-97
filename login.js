// switching forms
//
//
let loginForm = document.querySelector("#loginForm");
let creatAccountForm = document.querySelector("#creatAccountForm");
let CreatAccountLink = document.querySelector("#creatAccountLink");
let loginInsteadLink = document.querySelector("#loginInsteadLink");
let forgotPasswordForm = document.querySelector("#forgotPasswordForm");
let forgotPasswordLink = document.querySelector("#forgotPasswordLink");
let backToLogin = document.querySelector("#backToLogin");
let submitResetPassword = document.querySelector("#submitResetPassword");

// switch to creat account form
CreatAccountLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form-hidden");
  creatAccountForm.classList.remove("form-hidden");
});
// switch to log in form
loginInsteadLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form-hidden");
  creatAccountForm.classList.add("form-hidden");
});
// switch to forgot password form
forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form-hidden");
  creatAccountForm.classList.add("form-hidden");
  forgotPasswordForm.classList.remove("form-hidden");
});
// back to log in form
backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form-hidden");
  creatAccountForm.classList.add("form-hidden");
  forgotPasswordForm.classList.add("form-hidden");
});
// Sumbit reset password
submitResetPassword.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form-hidden");
  creatAccountForm.classList.add("form-hidden");
  forgotPasswordForm.classList.add("form-hidden");
});

// sign up (creat account)

let firstNameSignup = document.querySelector("#firstName");
let lastNameSignup = document.querySelector("#lastName");
let submitCreatAccount = document.querySelector("#submitCreatAccount");
let passwordSignup = document.querySelector("#passwordSignup");
let userNameSignup = document.querySelector("#userNameSignup");
let emailSignup = document.querySelector("#emailSignup");

submitCreatAccount.addEventListener("click", (e) => {
  e.preventDefault();

  if (passwordSignup.value.length == 0) {
    userNameSignup.classList.add("form-input-error");
    emailSignup.classList.add("form-input-error");
    passwordSignup.classList.add("form-input-error");
    document.querySelector("#creatAccountP").style.visibility = "visible";

    document.querySelector("#incorrectPassword").style.visibility = "visible";
  } else if (userNameSignup.value.length == 0) {
    userNameSignup.classList.add("form-input-error");
    emailSignup.classList.add("form-input-error");
    passwordSignup.classList.add("form-input-error");
    document.querySelector("#incorrectUserName").style.visibility = "visible";
    document.querySelector("#creatAccountP").style.visibility = "visible";
  } else if (emailSignup.value.length == 0) {
    userNameSignup.classList.add("form-input-error");
    emailSignup.classList.add("form-input-error");
    passwordSignup.classList.add("form-input-error");
    document.querySelector("#incorrectEmail").style.visibility = "visible";
    document.querySelector("#creatAccountP").style.visibility = "visible";
  } else {
    localStorage.setItem("userName", userNameSignup.value);
    localStorage.setItem("password", passwordSignup.value);
    alert("Your account has been created");
    location.reload();
  }
});

// log in
//
//
let usernameLogin = document.querySelector("#userNameLogin");
let passwordLogin = document.querySelector("#passwordLogin");
let submitLogin = document.querySelector("#submitLogin");

// Saved users

let users = [
  { name: "janne", password: "test" },
  { name: "user1", password: "1111" },
  { name: "user2", password: "2222" },
  { name: "user3", password: "3333" },
  { name: "user4", password: "4444" },
];

submitLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let givenName = usernameLogin.value;
  let givenPassword = passwordLogin.value;
  let storedUserName = localStorage.getItem("userName");
  let storedPassword = localStorage.getItem("password");

  for (let i = 0; i < users.length; i++) {
    if (givenName === users[i].name && givenPassword === users[i].password) {
      loginForm.classList.add("form-hidden");

      document.querySelector("main").style.visibility = "hidden";
      document.querySelector("article").style.display = "block";
      document.querySelector("#logedinP").innerText =
        "Welcome " + users[i].name + " !";
    } else if (
      givenName === storedUserName &&
      givenPassword === storedPassword
    ) {
      document.querySelector("main").style.visibility = "hidden";
      document.querySelector("article").style.display = "block";
      document.querySelector("#logedinP").innerText =
        "Welcome " + givenName + " !";
    } else {
      document.querySelector("#formMassage").style.visibility = "visible";
      usernameLogin.classList.add("form-input-error");
      passwordLogin.classList.add("form-input-error");
    }
  }
});

// log out
//
//
document.querySelector("#logoutButton").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("article").style.display = "none";
  document.querySelector("main").style.visibility = "visible";
  loginForm.classList.remove("form-hidden");
  location.reload();
});
