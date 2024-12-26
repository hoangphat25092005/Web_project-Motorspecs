document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const motorbikeId = urlParams.get('id');
    const motorbikeDetails = document.getElementById('motorbikeDetails');

    try {
        const response = await fetch(`/api/motorbikes/${motorbikeId}`);
        const motorbike = await response.json();

        const template = `
            <!-- Image and Name -->
            <div class="container mx-auto px-4 mb-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-zinc-100 p-4 rounded-lg shadow-md h-100 my-6">
                        ${motorbike.imageUrl 
                            ? `<img src="${motorbike.imageUrl}" alt="${motorbike.name}" class="w-full rounded-lg">`
                            : '<div>No image available</div>'
                        }
                    </div>
                    <div class="space-y-6">
                        <div class="bg-zinc-100 p-6 rounded-lg shadow-md my-6">
                            <div class="">
                                <h1 class="text-3xl font-bold text-red-500">${motorbike.brand} ${motorbike.name}</h1>
                            </div>
                            <div class="text-2xl text-zinc-800 font-bold">
                                $${motorbike.price}
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
                                            <p class="text-red-500">${motorbike.cc || 'N/A'}cc</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <i class="fas fa-cogs"></i>
                                        <div>
                                            <p class="">Transmission</p>
                                            <p class="text-red-500">${motorbike.transmission || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3">
                                        <i class="fas fa-gas-pump"></i>
                                        <div>
                                            <p class="">Fuel Capacity</p>
                                            <p class="text-red-500">${motorbike.fuelCapacity || 'N/A'} milliliters</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <i class="fas fa-calendar"></i>
                                        <div>
                                            <p class="">Year with new update</p>
                                            <p class="text-red-500">${motorbike.year || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Description -->
                        <div class="bg-zinc-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-xl font-bold mb-4">Description</h2>
                            <p class="">
                                ${motorbike.description || 'No description available'}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <!-- Footer -->
    <footer class="bg-zinc-100 mt-12 p-8">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <!-- Contact Info -->
            <div>
                <h3 class="text-xl font-bold mb-4 text-red-500">Contact Us</h3>
                <div class="space-y-2">
                    <p class="flex items-center">
                        <i class="fas fa-envelope mr-2"></i>
                        <a href="mailto:info@motorspecs.com" class="hover:text-red-500">info@motorspecs.com</a>
                    </p>
                    <p class="flex items-center">
                        <i class="fas fa-phone mr-2"></i>
                        <a href="tel:+1234567890" class="hover:text-red-500">+1 (234) 567-890</a>
                    </p>
                </div>
            </div>

            <!-- Introduction -->
            <div>
                <h3 class="text-xl font-bold mb-4 text-red-500">About Motorspecs</h3>
                <p class="text-sm leading-relaxed">
                    Your trusted source for comprehensive motorcycle information. 
                    Browse, compare, and find your perfect ride with detailed specifications 
                    and expert insights.
                </p>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-xl font-bold mb-4 text-red-500">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-red-500">Home</a></li>
                    <li><a href="#" class="hover:text-red-500">About Us</a></li>
                    <li><a href="#" class="hover:text-red-500">Terms of Service</a></li>
                </ul>
            </div>
            </div>

            <div class="container mx-auto mt-8 pt-4 border-t border-white/20 text-center">
            <p>&copy; 2024 <span class="text-red-500">Motor</span>specs. All rights reserved.</p>
            </div>
            </footer>
        `;

        motorbikeDetails.innerHTML = template;
    } catch (error) {
        console.error('Error fetching motorbike details:', error);
        motorbikeDetails.innerHTML = '<p class="text-red-500">Error fetching motorbike details.</p>';
    }
});