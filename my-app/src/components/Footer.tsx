import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="brand-text">Diploy</span>
                        <p className="footer-description">
                            Your Copilot for Field Service Management
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Product</h4>
                            <a href="https://calendly.com/yinglonglin/diploy-product-demo">
                                Book Demo
                            </a>
                        </div>

                        <div className="footer-section">
                            <h4>Company</h4>
                            <a href="mailto:sales@diploy.io">Contact</a>
                            <a href="tel:+19097189852">Phone</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Diploy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
