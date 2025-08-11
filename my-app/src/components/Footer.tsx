import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-row footer-headings">
                        <div className="footer-brand-heading">
                            <span className="brand-text">Diploy</span>
                        </div>
                        <div className="footer-links-headings">
                            <h4>Product</h4>
                            <h4>Company</h4>
                        </div>
                    </div>
                    
                    <div className="footer-row footer-content-row">
                        <div className="footer-brand-content">
                            <p className="footer-description">
                                Your Copilot for Field Service Management
                            </p>
                        </div>
                        <div className="footer-links-content">
                            <div className="footer-section-content">
                                <a href="https://calendly.com/admin-diploy/30min">
                                    Book Demo
                                </a>
                            </div>
                            <div className="footer-section-content">
                                <a href="mailto:sales@diploy.io">Contact</a>
                                <a href="tel:+19097189852">Phone</a>
                            </div>
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
