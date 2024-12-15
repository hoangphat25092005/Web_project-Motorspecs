function submitChanges() {
    const bikeName = document.getElementById('bike-name').value;
    const bikePrice = document.getElementById('bike-price').value;
    const engineType = document.getElementById('engine-type').value;
    const maxPower = document.getElementById('max-power').value;
    const transmission = document.getElementById('transmission').value;
    const fuelCapacity = document.getElementById('fuel-capacity').value;
    const weight = document.getElementById('weight').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
  
    const updatedPage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Honda Winner X - Motorspecs</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
      </head>
      <body class="bg-white">
        <!-- Menu -->
        <nav class="bg-zinc-100 p-4">
          <div class="container mx-auto flex justify-between items-center">
            <div class="flex space-x-4">
              <a class="cursor-pointer text-zinc-800 hover:text-red-500 transition-colors text-xl">Eng</a>
            </div>
            <h1 class="text-2xl font-bold text-zinc-800">
              <span class="text-red-500">Motor</span>specs
            </h1>
            <a href="login/login2.html" class="cursor-pointer text-zinc-800 hover:text-red-500 transition-colors text-xl font-bold">Login</a>
          </div>
          <div class="container mx-auto px-4 py-6">
            <a href="#" class="text-zinc-800 hover:text-red-500 transition-colors flex items-center gap-2">
              <i class="fas fa-arrow-left"></i>
              Back to all bikes
            </a>
          </div>
        </nav>
        <!-- Image and Name -->
        <div class="container mx-auto px-4 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-zinc-100 p-4 rounded-lg shadow-md h-100 my-6">
              <img src="bikeimg/winner.png" alt="Honda Winner X" class="w-full rounded-lg" />
            </div>
            <div class="space-y-6">
              <div class="bg-zinc-100 p-6 rounded-lg shadow-md my-6">
                <div class="">
                  <h1 id="bike-name" class="text-3xl font-bold text-red-500">${bikeName}</h1>
                </div>
                <div id="bike-price" class="text-2xl text-zinc-800 font-bold">
                  ${bikePrice}
                </div>
              </div>
              <!-- Spec -->
              <div class="bg-zinc-100 p-6 rounded-lg shadow-md">
                <div class="flex justify-between items-start mb-4">
                  <h2 class="text-xl font-bold mb-4">Specifications</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <i class="fas fa-engine"></i>
                      <div>
                        <p class="">Engine Type</p>
                        <p id="engine-type" class="text-red-500">${engineType}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-tachometer-alt "></i>
                      <div>
                        <p class="">Max Power</p>
                        <p id="max-power" class="text-red-500">${maxPower}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-cogs "></i>
                      <div>
                        <p class="">Transmission</p>
                        <p id="transmission" class="text-red-500">${transmission}</p>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <i class="fas fa-gas-pump "></i>
                      <div>
                        <p class="">Fuel Capacity</p>
                        <p id="fuel-capacity" class="text-red-500">${fuelCapacity}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-weight "></i>
                      <div>
                        <p class="">Weight</p>
                        <p id="weight" class="text-red-500">${weight}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-calendar "></i>
                      <div>
                        <p class="">Year</p>
                        <p id="year" class="text-red-500">${year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-zinc-100 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold mb-4">Description</h2>
                <p id="description">
                  ${description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-zinc-100 py-8">
          <div class="container mx-auto px-4">
            <h2 class="text-xl font-bold mb-4 text-zinc-800 block text-center">More information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-bold mb-2 text-red-500">About us:</h3>
                <p class="text-zinc-600 leading-relaxed">
                  We are freshmen of HCM UIT, this is a website dedicated to 
                  providing information regarding popular motorcycle models in 
                  Viet Nam. We hope that this provides value to the community 
                  in choosing and comparing bikes for your specific needs.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2 text-red-500">Contact us:</h3>
                <div class="space-y-2">
                  <p class="text-zinc-600 flex items-center gap-2">
                    <i class="fas fa-envelope text-red-500"></i>
                    abc@gmail.com
                  </p>
                  <p class="text-zinc-600 flex items-center gap-2">
                    <i class="fas fa-phone text-red-500"></i>
                    0123456789
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-8 text-center flex justify-center items-center gap-4">
              <a href="#" class="text-red-500 hover:text-red-600 transition-colors">
                <i class="fas fa-envelope text-2xl"></i>
              </a>
              <a href="#" class="text-red-500 hover:text-red-600 transition-colors">
                <i class="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
      </html>
    `;
  
    const newWindow = window.open();
    newWindow.document.write(updatedPage);
    newWindow.document.close();
  }