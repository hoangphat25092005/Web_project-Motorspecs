const validUsers = {
"khai": "12345678",
"khiem": "87654321"
};

function validlogform() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username.trim() === '' || password.trim() === '') {
  alert('Please fill all the blank fields.');
  return false;
}
if (validUsers[username] === password) {

alert("Login successful!")

return true;
} else {

alert("Invalid username or password.")
return false;
}
}
