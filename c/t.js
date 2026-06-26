// LOGIN FUNCTION
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid Credentials ❌";
  }
}

// DASHBOARD LOAD
if (window.location.pathname.includes("dashboard.html")) {
  let user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("user").innerText = "Hello, " + user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}