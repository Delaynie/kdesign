const products = [
    {
        id: 1,
        name: "Round Gable Vent",
        category: "vent",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },
    {
        id: 2,
        name: "Bahama Shutter",
        category: "shutter",
        image: "/product_images/bahamashutter.jpeg",
        description: "Custom shutters that add both charm and functionality to your windows."
    },
    {
        id: 3,
        name: "Octagon Gable Vent",
        category: "vent",
        image: "/product_images/octagon_group_thumb.gif",
        description: "Sleek and modern gable vent designed for better airflow and style."
    },
    {
        id: 4,
        name: "Traditional Shutter",
        category: "shutter",
        image: "/product_images/shutters.jpg",
        description: "A traditional design that enhances the exterior of any home."
    }
];

window.onload = function() {
    displayProducts('all');
};

function displayProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear current list
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4 class="product-name">${product.name}</h4>
            <button class="more-info-btn" onclick="showProductInfo(${product.id})">More Info</button>
        `;
        
        productList.appendChild(productElement);
    });
}

function filterProducts() {
    const filterValue = document.getElementById('product-filter').value;
    displayProducts(filterValue);
}

function showProductInfo(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-name').innerText = product.name;
        document.getElementById('modal-product-description').innerText = product.description;

        document.getElementById('productModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}