const gableProducts = [
    {
        id: 1,
        name: "Round Gable Vent",
        category: "roundVent",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },
    {
        id: 2,
        name: "Tombstone Gable Vent",
        category: "tombstoneVent",
        image: "/gallery_images/danmurphy2.jpg",
        description: "Custom shutters that add both charm and functionality to your windows."
    },
    {
        id: 3,
        name: "Octagon Gable Vent",
        category: "octagonVent",
        image: "/product_images/octagon_group_thumb.gif",
        description: "Sleek and modern gable vent designed for better airflow and style."
    },
    {
        id: 4,
        name: "Rectangle Gable Vent",
        category: "rectangleVent",
        image: "/product_images/rectanglevent.jpg",
        description: "A traditional design that enhances the exterior of any home."
    }
];

window.onload = function() {
    displayGableProducts('all');
};

function displayGableProducts(category) {
    const gableList = document.getElementById('gable-list');
    gableList.innerHTML = '';  // Clear current list
    
    const filteredGableProducts = category === 'all' 
        ? gableProducts 
        : gableProducts.filter(gableProducts => gableProducts.category === category);
    
    filteredGableProducts.forEach(gableProducts => {
        const gableProductElement = document.createElement('div');
        gableProductElement.classList.add('gableProducts');
        
        gableProductElement.innerHTML = `
            <img src="${gableProducts.image}" alt="${gableProducts.name}" class="product-image">
            <h4 class="product-name">${gableProducts.name}</h4>
            <button class="more-info-btn" onclick="showProductInfo(${gableProducts.id})">More Info</button>
        `;
        
        gableProductList.appendChild(gableProductElement);
    });
}

function filterGableProducts() {
    const filterValue = document.getElementById('gable-filter').value;
    displayProducts(filterValue);
}

function showProductInfo(productId) {
    const gableProducts = gableProducts.find(p => p.id === productId);
    
    if (gableProducts) {
        document.getElementById('gablemodal-product-image').src = gableProducts.image;
        document.getElementById('gablemodal-product-name').innerText = gableProducts.name;
        document.getElementById('gablemodal-product-description').innerText = gableProducts.description;

        document.getElementById('gableProductModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}