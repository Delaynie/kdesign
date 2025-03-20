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
        name: "Tombstone Gable Vent",
        category: "vent",
        image: "/gallery_images/danmurphy2.jpg",
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
        name: "Rectangle/Square Gable Vent",
        category: "vent",
        image: "/product_images/rectanglevents.jpg",
        description: "A traditional design that enhances the exterior of any home."
    },
    {
        id: 5,
        name: "Triangle Gable Vent",
        category: "vent",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },

    {
        id: 6,
        name: "Access Doors",
        category: "access",
        image: "/gallery_images/danmurphy2.jpg",
        description: "Custom shutters that add both charm and functionality to your windows."
    },
    {
        id: 7,
        name: "Foundation Vent",
        category: "foundation",
        image: "/product_images/octagon_group_thumb.gif",
        description: "Sleek and modern gable vent designed for better airflow and style."
    },
    {
        id: 8,
        name: "Board and Batten Shutters",
        category: "shutter",
        image: "/product_images/rectanglevents.jpg",
        description: "A traditional design that enhances the exterior of any home."
    },
    {
        id: 9,
        name: "Louvered Shutters", 
        category: "shutter",
        image: "/product_images/round cedar vents.jpg",
        description: "A classic design that ensures ventilation and aesthetic appeal for your home."
    },
    {
        id: 10,
        name: "Panel Shutters",
        category: "shutter",
        image: "/gallery_images/danmurphy2.jpg",
        description: "Custom shutters that add both charm and functionality to your windows."
    },
    {
        id: 11,
        name: "Quarter Round Shutters",
        category: "shutter",
        image: "/product_images/octagon_group_thumb.gif",
        description: "Sleek and modern gable vent designed for better airflow and style."
    },

    {
        id: 12,
        name: "Bahama Shutter",
        category: "shutter",
        image: "/product_images/bahamashutter.jpeg",
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
            <button class="more-info-btn" onclick="showProductInfo(${product.id})">Info</button>
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