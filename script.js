// Main JavaScript for PrixCompare Pro

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('PrixCompare Pro initialized');
    
    // Add any global event listeners
    setupSearchFunctionality();
    setupPriceAlerts();
    setupProductComparisons();
}

// Search functionality
function setupSearchFunctionality() {
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.querySelector('button.bg-orange-500');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}
function performSearch(query) {
    if (query.trim() === '') return;
    
    // Show loading state
    showLoading();
    
    // In a real application, this would make an API call
    setTimeout(() => {
        hideLoading();
        // Redirect to search results or update page
        console.log('Searching for:', query);
        // For demo purposes, we'll just show an alert
        alert(`Recherche pour: ${query}`);
    }, 1000);
}

// Admin Panel Functionality
class AdminPanel {
    constructor() {
        this.products = [];
        this.competitors = [];
        this.comparisons = [];
    }
    
    addProduct(product) {
        this.products.push(product);
        this.saveToLocalStorage();
        this.updateDashboard();
    }
    
    addCompetitor(competitor) {
        this.competitors.push(competitor);
        this.saveToLocalStorage();
    }
    
    compareProducts() {
        // This would typically call an API to get comparison data
        this.comparisons = this.products.map(product => {
            return {
                product: product,
                myPrice: product.price,
                competitorPrice: Math.floor(Math.random() * 200) + 600; // Mock data
            };
        });
        
        this.updateComparisonTable();
    }
    
    updateDashboard() {
        console.log('Dashboard updated with products:', this.products);
    }
    
    updateComparisonTable() {
        console.log('Comparison table updated:', this.comparisons);
    }
    
    saveToLocalStorage() {
        localStorage.setItem('adminProducts', JSON.stringify(this.products));
        localStorage.setItem('adminCompetitors', JSON.stringify(this.competitors));
    }
    
    loadFromLocalStorage() {
        const savedProducts = localStorage.getItem('adminProducts');
        const savedCompetitors = localStorage.getItem('adminCompetitors');
        
        if (savedProducts) {
            this.products = JSON.parse(savedProducts);
        }
        
        if (savedCompetitors) {
            this.competitors = JSON.parse(savedCompetitors);
        }
        
        this.updateDashboard();
    }
}

// Initialize admin panel
const adminPanel = new AdminPanel();

// Admin form handlers
function setupAdminFunctionality() {
    const addProductForm = document.getElementById('add-product-form');
    const addCompetitorForm = document.getElementById('add-competitor-form');
    
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const productData = {
                name: this.querySelector('input[name="product-name"]').value,
                price: parseInt(this.querySelector('input[name="product-price"]').value,
                specifications: {}
            };
            
            adminPanel.addProduct(productData);
            this.reset();
        });
    }
    
    if (addCompetitorForm) {
        addCompetitorForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const competitorData = {
                    name: this.querySelector('input[name="competitor-name"]').value,
                    url: this.querySelector('input[name="competitor-url"]').value
                };
                
                adminPanel.addCompetitor(competitorData);
                this.reset();
            });
        }
    }
    
    // Call this in initializeApp
    document.addEventListener('DOMContentLoaded', function() {
        adminPanel.loadFromLocalStorage();
        setupAdminFunctionality();
    });
// Admin Panel Functionality
class AdminPanel {
    constructor() {
        this.products = [];
        this.competitors = [];
        this.comparisons = [];
    }
    
    addProduct(product) {
        this.products.push(product);
        this.saveToLocalStorage();
        this.updateDashboard();
    }
    
    addCompetitor(competitor) {
        this.competitors.push(competitor);
        this.saveToLocalStorage();
    }
    
    compareProducts() {
        // This would typically call an API to get comparison data
        this.comparisons = this.products.map(product => {
            return {
                product: product,
                myPrice: product.price,
                competitorPrice: Math.floor(Math.random() * 200) + 600; // Mock data
            };
        });
        
        this.updateComparisonTable();
    }
    
    updateDashboard() {
        console.log('Dashboard updated with products:', this.products);
    }
    
    updateComparisonTable() {
        console.log('Comparison table updated:', this.comparisons);
    }
    
    saveToLocalStorage() {
        localStorage.setItem('adminProducts', JSON.stringify(this.products));
        localStorage.setItem('adminCompetitors', JSON.stringify(this.competitors));
    }
    
    loadFromLocalStorage() {
        const savedProducts = localStorage.getItem('adminProducts');
        const savedCompetitors = localStorage.getItem('adminCompetitors');
        
        if (savedProducts) {
            this.products = JSON.parse(savedProducts);
        }
        
        if (savedCompetitors) {
            this.competitors = JSON.parse(savedCompetitors);
        }
        
        this.updateDashboard();
    }
}

// Initialize admin panel
const adminPanel = new AdminPanel();

// Admin form handlers
function setupAdminFunctionality() {
    const addProductForm = document.getElementById('add-product-form');
    const addCompetitorForm = document.getElementById('add-competitor-form');
    
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const productData = {
                name: this.querySelector('input[name="product-name"]').value,
                price: parseInt(this.querySelector('input[name="product-price"]').value,
                specifications: {}
            };
            
            adminPanel.addProduct(productData);
            this.reset();
        });
    }
    
    if (addCompetitorForm) {
        addCompetitorForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const competitorData = {
                    name: this.querySelector('input[name="competitor-name"]').value,
                    url: this.querySelector('input[name="competitor-url"]').value
                };
                
                adminPanel.addCompetitor(competitorData);
                this.reset();
            });
        }
    }
    
    // Call this in initializeApp
    document.addEventListener('DOMContentLoaded', function() {
        adminPanel.loadFromLocalStorage();
        setupAdminFunctionality();
    });
// Price alert functionality
function setupPriceAlerts() {
    const priceAlertButtons = document.querySelectorAll('.price-alert-btn');
    
    priceAlertButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            const currentPrice = this.closest('.product-card').querySelector('.price').textContent;
            
            createPriceAlert(productName, currentPrice);
        });
    });
}

function createPriceAlert(productName, currentPrice) {
    // In a real application, this would save to a database
    console.log(`Price alert created for ${productName} at ${currentPrice}`);
    
    // Show success notification
    showNotification('Alerte prix créée avec succès !', 'success');
}

// Product comparison functionality
function setupProductComparisons() {
    const compareButtons = document.querySelectorAll('.compare-btn');
    
    compareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            toggleProductComparison(productId);
        });
    });
}

function toggleProductComparison(productId) {
    // In a real application, this would manage a comparison list
    console.log(`Toggling comparison for product: ${productId}`);
}

// Loading states
function showLoading() {
    const loadingElement = document.createElement('div');
    loadingElement.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loadingElement.innerHTML = `\
        <div class="bg-white rounded-lg p-6 flex items-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span class="ml-3 text-gray-700">Recherche en cours...</span>
        </div>
    `;
    loadingElement.id = 'loading-overlay';
    document.body.appendChild(loadingElement);
}

function hideLoading() {
    const loadingElement = document.getElementById('loading-overlay');
    if (loadingElement) {
        loadingElement.remove();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-blue-500';
    
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Price tracking functionality
class PriceTracker {
    constructor() {
        this.trackedProducts = new Map();
    }
    
    addProduct(productId, targetPrice) {
        this.trackedProducts.set(productId, {
            targetPrice: targetPrice,
            currentPrice: null,
            lastUpdate: null
        });
    }
    
    updatePrice(productId, newPrice) {
        const product = this.trackedProducts.get(productId);
        if (product && newPrice <= product.targetPrice) {
            this.notifyPriceDrop(productId, newPrice);
        }
    }
    
    notifyPriceDrop(productId, price) {
        console.log(`Price drop alert! Product ${productId} now at ${price}`);
        // In a real application, this would trigger email/push notifications
    }
}

// Initialize price tracker
const priceTracker = new PriceTracker();

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR').format(date);
}
// Export for use in other modules if needed
window.PrixComparePro = {
    PriceTracker: PriceTracker,
    formatPrice: formatPrice,
    formatDate: formatDate,
    AdminPanel: adminPanel
};

// Product Management Functions
function loadSupplierProducts() {
    // This would typically fetch from an API
    const products = JSON.parse(localStorage.getItem('adminProducts') || [];
    
    if (products.length === 0) {
        console.log('No products found for supplier');
        return;
    }
    
    console.log('Supplier products loaded:', products);
    return products;
}

function updateProductComparison() {
    const products = loadSupplierProducts();
    
    if (products.length > 0) {
        // Update comparison data
        products.forEach(product => {
            // Simulate competitor price data
            const competitorPrice = Math.floor(Math.random() * 200) + product.price - 100;
    product.competitorPrice = competitorPrice;
    product.difference = competitorPrice - product.price;
    product.performance = Math.floor(Math.random() * 40) + 60; // 60-100%
    });
    
    localStorage.setItem('adminProducts', JSON.stringify(products)));
    console.log('Product comparisons updated');
}

// API Synchronization Functions
async function syncAllProducts(supplierId) {
    try {
        const api = new PrixCompareAPI();
        const products = await api.getProducts(supplierId);
    updateProductTable(products);
} catch (error) {
    console.error('Error syncing products:', error);
    showNotification('Erreur lors de la synchronisation', 'error');
}
}

// Initialize admin dashboard data
document.addEventListener('DOMContentLoaded', function() {
    updateProductComparison();
    
    // Setup automatic synchronization
    setInterval(() => {
        syncAllProducts('current-supplier-id');
    }, 300000); // Sync every 5 minutes
});

// Real-time WebSocket connection for live updates
function setupRealTimeUpdates() {
    const api = new PrixCompareAPI();
    api.setupWebhook('current-supplier-id', function(data) {
        if (data.type === 'price_update') {
            updateProductPriceInUI(data.productId, data.newPrice);
        }
    });
}
