import React, { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <a href="#home" className="brand-link">
                        <span className="brand-text">Diploy</span>
                    </a>
                </div>

                <div className={`navbar-menu ${isMenuOpen ? "is-open" : ""}`}>
                    <a
                        href="https://calendly.com/yinglonglin/diploy-product-demo"
                        className="nav-link"
                    >
                        Book a Demo
                    </a>
                    <a href="mailto:sales@diploy.io" className="nav-link">
                        Contact
                    </a>
                </div>

                <button
                    className={`navbar-toggle ${isMenuOpen ? "is-open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
export default Navbar
