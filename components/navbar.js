class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                
                .navbar {
                    background: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: relative;
                    z-index: 40;
                }
                
                .nav-link {
                    color: #4b5563;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                }
                
                .nav-link:hover {
                    color: #3b82f6;
                }
                
                .nav-link.active {
                    color: #3b82f6;
                    background-color: #eff6ff;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    flex-direction: column;
                    padding: 1rem;
                }
                
                .mobile-menu.open {
                    display: flex;
                }
                
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                    
                    .mobile-toggle {
                        display: flex;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-toggle {
                        display: none;
                    }
                }
            </style>
            <nav class="navbar border-b border-gray-200">
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-between h-16">
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center">
                            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center mr-3">
                            <i data-feather="trending-up" style="color: white;"></i>
                        </div>
                        <span class="text-xl font-bold text-gray-800">PrixCompare Pro</span>
                        </a>
                        <!-- Desktop Navigation -->
                        <div class="desktop-nav flex items-center space-x-2">
                            <a href="index.html" class="nav-link">Accueil</a>
                            <a href="categories.html" class="nav-link">Catégories</a>
                            <a href="admin.html" class="admin-badge flex items-center">
                                <i data-feather="settings" class="mr-1" style="color: white;"></i>
                                Admin
                            </a>
                            <a href="#" class="nav-link">Comparateur</a>
                            <a href="#" class="nav-link">Alertes Prix</a>
                            <a href="#" class="nav-link flex items-center">
                                <i data-feather="heart" class="mr-1"></i>
                                Favoris
                            </a>
                        </div>
<!-- Mobile Toggle -->
                        <button class="mobile-toggle p-2 rounded-lg text-gray-600 hover:text-gray-800 hover