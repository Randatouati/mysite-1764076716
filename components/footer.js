class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                
                .footer {
                    background: #1f2937;
                    color: white;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    justify-content: space-between;
                }
                
                .footer-section h4 {
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                
                .footer-section a {
                    color: #d1d5db;
                    text-decoration: none;
                    display: block;
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                
                .footer-section a:hover {
                    color: white;
                }
                
                @media (max-width: 768px) {
                    .footer-links {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }
            </style>
            <footer class="footer border-t border-gray-700">
                <div class="footer-content">
                    <div class="footer-links">
                        <div class="footer-section">
                            <h4>PrixCompare Pro</h4>
                            <p class="text-gray-400">Le comparateur intelligent pour acheter malin</p>
                </div>
                
                <div class="border-t border-gray-700 py-4">
                    <div class="container mx-auto px-4 text-center">
                        <p class="text-gray-400">&copy; 2024 PrixCompare Pro. Tous droits réservés.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);