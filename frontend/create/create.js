function submitForms() {
    const brand = document.getElementById('brand').value;
    const bikeName = document.getElementById('bikename').value;
    const price = document.getElementById('price').value;
    const specifications = document.getElementById('specifications').value;
    const maxPower = document.getElementById('power').value;
    const transmission = document.getElementById('transmission').value;
    const fuelCapacity = document.getElementById('fuel').value;
    const weight = document.getElementById('weight').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;

    const resultPage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bike Details</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
      </head>
      <body class="bg-white">
        <div class="container mx-auto px-4 mb-12">
          <h1 class="text-3xl font-bold text-red-500">${brand} ${bikeName}</h1>
          <p class="text-2xl text-zinc-800 font-bold">${price}</p>
          <div class="bg-zinc-100 p-6 rounded-lg shadow-md my-6">
            <h2 class="text-xl font-bold mb-4">Specifications</h2>
            <p>${specifications}</p>
            <p><strong>Max Power:</strong> ${maxPower}</p>
            <p><strong>Transmission:</strong> ${transmission}</p>
            <p><strong>Fuel Capacity:</strong> ${fuelCapacity}</p>
            <p><strong>Weight:</strong> ${weight}</p>
            <p><strong>Year:</strong> ${year}</p>
          </div>
          <div class="bg-zinc-100 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Description</h2>
            <p>${description}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(resultPage);
    newWindow.document.close();
  }