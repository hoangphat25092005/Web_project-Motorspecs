function validlogform() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      alert("Please fill all the blank fields.");
      return false;
    }
  
    // Send a request to the server-side login endpoint
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.message === 'Login successful') {
        alert('Login successful!');
        // Redirect to the desired page or perform other actions
        window.location.href = "your_dashboard_url";
      } else {
        alert('Invalid username or password.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  
    return false; // Prevent default form submission
}

  document.getElementById("CreateBike").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Convert form data to a URLSearchParams object
    const urlSearchParams = new URLSearchParams(formData);

    // Create a URL with query parameters
    const url = "your_server_side_script.php?" + urlSearchParams.toString();

    // Send a fetch request to the server-side script
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data); // Handle the server's response
        // You might want to display a success message or redirect the user here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors, like displaying an error message to the user
      });
  });