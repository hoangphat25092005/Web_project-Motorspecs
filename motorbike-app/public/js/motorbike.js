document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const motorbikeId = urlParams.get('id');
    const motorbikeDetails = document.getElementById('motorbikeDetails');

    try {
        const response = await fetch(`/api/motorbikes/${motorbikeId}`);
        const motorbike = await response.json();

        motorbikeDetails.innerHTML = `
            <img src="${motorbike.imageUrl}" alt="${motorbike.name}" class="w-full h-60 object-cover rounded-md mb-4">
            <h2 class="text-3xl font-bold text-zinc-800 mb-2">${motorbike.name}</h2>
            <p class="text-zinc-600 mb-2">Brand: ${motorbike.brand}</p>
            <p class="text-zinc-600 mb-2">CC: ${motorbike.cc}</p>
            <p class="text-zinc-600 mb-2">Price: $${motorbike.price}</p>
            <p class="text-zinc-600">${motorbike.description}</p>
        `;
    } catch (error) {
        console.error('Error fetching motorbike details:', error);
        motorbikeDetails.innerHTML = '<p class="text-red-500">Error fetching motorbike details.</p>';
    }
});