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

function submitForms() {
    // Get form data
    const brand = document.getElementById('brand').value;
    const bikename = document.getElementById('bikename').value;
    const price = document.getElementById('price').value;
  
    const engineType = document.querySelector('input[name="stroke"]:checked').value;
    const coolingType = document.querySelector('input[name="cool"]:checked').value;
    const engineCapacity = document.getElementById('engine').value;
    const maxPower = document.getElementById('power').value;
    const transmission = document.getElementById('transmission').value;
    const fuelCapacity = document.getElementById('fuel').value;
    const weight = document.getElementById('weight').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
  
    // Use Fetch API for asynchronous form submissions (consider using a library like Axios for easier handling)
    const promises = []; // Array to hold promises for each form submission
  
    // Submit form 1 (brand, bikename, price)
    promises.push(
      fetch('submit_form1.php', {
        method: 'POST',
        body: new URLSearchParams({
          brand,
          bikename,
          price
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 1 response:', data); // Handle response from submit_form1.php
      })
      .catch(error => {
        console.error('Error submitting form 1:', error);
      })
    );
  
    // Submit form 2 (engine data and others)
    promises.push(
      fetch('submit_form2.php', {
        method: 'POST',
        body: new URLSearchParams({
          engineType,
          coolingType,
          engineCapacity,
          maxPower,
          transmission,
          fuelCapacity,
          weight,
          year
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 2 response:', data); // Handle response from submit_form2.php
      })
      .catch(error => {
        console.error('Error submitting form 2:', error);
      })
    );
  
    // Submit form 3 (description)
    promises.push(
      fetch('submit_form3.php', {
        method: 'POST',
        body: new URLSearchParams({
          description
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 3 response:', data); // Handle response from submit_form3.php
      })
      .catch(error => {
        console.error('Error submitting form 3:', error);
      })
    );
  
    // Handle all form submissions asynchronously using Promise.all
    Promise.all(promises)
      .then(() => {
        console.log('All forms submitted successfully!');
        // Optionally display a success message to the user
      })
      .catch(error => {
        console.error('Error submitting forms:', error);
        // Optionally display an error message to the user
      });
  }

  function updateForms() {
    // Get form data
    const brand = document.getElementById('brand').value;
    const bikename = document.getElementById('bikename').value;
    const price = document.getElementById('price').value;
  
    const engineType = document.querySelector('input[name="stroke"]:checked').value;
    const coolingType = document.querySelector('input[name="cool"]:checked').value;
    const engineCapacity = document.getElementById('engine').value;
    const maxPower = document.getElementById('power').value;
    const transmission = document.getElementById('transmission').value;
    const fuelCapacity = document.getElementById('fuel').value;
    const weight = document.getElementById('weight').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
  
    // Use Fetch API for asynchronous form submissions (consider using a library like Axios for easier handling)
    const promises = []; // Array to hold promises for each form submission
  
    // Submit form 1 (brand, bikename, price)
    promises.push(
      fetch('submit_form1.php', {
        method: 'POST',
        body: new URLSearchParams({
          brand,
          bikename,
          price
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 1 response:', data); // Handle response from submit_form1.php
      })
      .catch(error => {
        console.error('Error submitting form 1:', error);
      })
    );
  
    // Submit form 2 (engine data and others)
    promises.push(
      fetch('submit_form2.php', {
        method: 'POST',
        body: new URLSearchParams({
          engineType,
          coolingType,
          engineCapacity,
          maxPower,
          transmission,
          fuelCapacity,
          weight,
          year
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 2 response:', data); // Handle response from submit_form2.php
      })
      .catch(error => {
        console.error('Error submitting form 2:', error);
      })
    );
  
    // Submit form 3 (description)
    promises.push(
      fetch('submit_form3.php', {
        method: 'POST',
        body: new URLSearchParams({
          description
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form 3 response:', data); // Handle response from submit_form3.php
      })
      .catch(error => {
        console.error('Error submitting form 3:', error);
      })
    );
  
    // Handle all form submissions asynchronously using Promise.all
    Promise.all(promises)
      .then(() => {
        console.log('All forms submitted successfully!');
        // Optionally display a success message to the user
      })
      .catch(error => {
        console.error('Error submitting forms:', error);
        // Optionally display an error message to the user
      });
  }

  function validRegisterForms() {}
  document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match.";
        messageDiv.classList.add("text-red-500");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            messageDiv.textContent = "Registration successful!";
            messageDiv.classList.remove("text-red-500");
            messageDiv.classList.add("text-green-500");
        } else {
            messageDiv.textContent = data.error || "Registration failed.";
            messageDiv.classList.add("text-red-500");
        }
    } catch (error) {
        messageDiv.textContent = "An error occurred. Please try again.";
        messageDiv.classList.add("text-red-500");
    }
});