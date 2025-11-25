// API Service for PrixCompare Pro - Frontend/Backend Synchronization

class PrixCompareAPI {
    constructor() {
        this.baseURL = 'https://api.prixcompare-pro.com/v1';
        this.authToken = localStorage.getItem('authToken');
    }

    // Headers configuration
    getHeaders() {
        const headers = {
            'Content-Type': 'application/json',
        };
        
        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }
        
        return headers;
    }

    // Product Management APIs
    async getProducts(supplierId) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    async createProduct(supplierId, productData) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(productData),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    }

    async updateProduct(supplierId, productId, productData) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products/${productId}`, {
                method: 'PUT',
                headers: this.getHeaders(),
                body: JSON.stringify(productData),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    }

    async deleteProduct(supplierId, productId) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products/${productId}`, {
                method: 'DELETE',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    }

    // Competitor Tracking APIs
    async getCompetitors(supplierId) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/competitors`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching competitors:', error);
            throw error;
        }
    }

    async addCompetitor(supplierId, competitorData) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/competitors`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(competitorData),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error adding competitor:', error);
            throw error;
        }
    }

    // Price Comparison APIs
    async getPriceComparison(supplierId, productId) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products/${productId}/comparison`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching price comparison:', error);
            throw error;
        }
    }

    // Real-time price updates
    async syncProductPrices(supplierId, productId) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products/${productId}/prices`, {
                method: 'POST',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error syncing product prices:', error);
            throw error;
        }
    }

    // Product preview API
    async getProductPreview(productId) {
        try {
            const response = await fetch(`${this.baseURL}/products/${productId}/preview`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching product preview:', error);
            throw error;
        }
    }

    // Batch operations
    async bulkUpdateProducts(supplierId, productsData) {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/products/bulk`, {
                method: 'PUT',
                headers: this.getHeaders(),
                body: JSON.stringify(productsData)),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error with bulk update:', error);
            throw error;
        }
    }

    // Analytics and Reporting APIs
    async getSupplierAnalytics(supplierId, period = '7d') {
        try {
            const response = await fetch(`${this.baseURL}/suppliers/${supplierId}/analytics?period=${period}`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching analytics:', error);
            throw error;
        }
    }

    // Webhook for real-time updates
    setupWebhook(supplierId, callback) {
        const eventSource = new EventSource(`${this.baseURL}/suppliers/${supplierId}/events`);
        
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            callback(data);
        };
        
        return eventSource;
    }

    // Authentication APIs
    async login(email, password) {
        try {
            const response = await fetch(`${this.baseURL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.token) {
            this.authToken = result.token;
            localStorage.setItem('authToken', result.token);
        }
        
        return result;
    }

    async logout() {
        this.authToken = null;
        localStorage.removeItem('authToken');
    }
}

// Export the API service
window.PrixCompareAPI = PrixCompareAPI;