const gableProducts = [
    {
        id: 1,
        name: "Round Gable Vent",
        category: "round",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },
    {
        id: 2,
        name: "Tombstone Gable Vent",
        category: "tombstone",
        image: "/gallery_images/danmurphy2.jpg",
        description: "Custom shutters that add both charm and functionality to your windows."
    },
    {
        id: 3,
        name: "Octagon Gable Vent",
        category: "octagon",
        image: "/product_images/octagon_group_thumb.gif",
        description: "Sleek and modern gable vent designed for better airflow and style."
    },
    {
        id: 4,
        name: "Rectangle/Square Gable Vent",
        category: "rectangle",
        image: "/product_images/rectanglevents.jpg",
        description: "A traditional design that enhances the exterior of any home."
    },
    {
        id: 5,
        name: "Triangle Gable Vent",
        category: "triangle",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },

    // Add More If Needed
];

window.onload = function() {
    displayGableProducts('all');
};

function displayGableProducts(category) {
    const gableList = document.getElementById('gable-list');
    gableList.innerHTML = '';  // Clear current list
    
    const filteredGableProducts = category === 'all' 
        ? gableProducts 
        : gableProducts.filter(gableProduct => gableProduct.category === category);
    
    filteredGableProducts.forEach(gableProduct => {
        const gableProductElement = document.createElement('div');
        gableProductElement.classList.add('gableProduct');
        
        gableProductElement.innerHTML = `
            <img src="${gableProduct.image}" alt="${gableProduct.name}" class="product-image">
            <h4 class="product-name">${gableProduct.name}</h4>
            <button class="more-info-btn" onclick="showGableProductInfo(${gableProduct.id})">More Info</button>
        `; 
        
        gableList.appendChild(gableProductElement);
    });
}

function filterGableProducts() {
    const gableFilterValue = document.getElementById('gable-filter').value;
    displayGableProducts(gableFilterValue);
}

function showGableProductInfo(gableProductId) {
    const gableProduct = gableProducts.find(p => p.id === gableProductId);
    
    if (gableProduct) {
        document.getElementById('gablemodal-product-image').src = gableProduct.image;
        document.getElementById('gablemodal-product-name').innerText = gableProduct.name;
        document.getElementById('gablemodal-product-description').innerText = gableProduct.description;

        document.getElementById('gableProductModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('gableProductModal').style.display = 'none';
}