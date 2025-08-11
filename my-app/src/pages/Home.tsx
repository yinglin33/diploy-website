import React, { useState, useEffect } from "react"
import { Row, Col, Card, Button, Container } from "react-bootstrap"
import { AnimatePresence, motion } from "framer-motion"
import Logo from "../assets/logo.png"
import jobsImg from "../assets/jobs.png"
import customersImg from "../assets/customers.png"
import quotesImg from "../assets/quotes.png"
import { Carousel } from "react-bootstrap"

const Home: React.FC = () => {
    const headlines = [
        "Missed Tasks and Miscommunication",
        "Bulky, Overpriced Software",
        "Endless Onboarding and Training",
        "Field Teams Falling Out of Sync",
        "Switching Between Ten Different Apps",
        "Paying for Features You Don’t Use",
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headlines.length)
        }, 3500) // 3s per headline
        return () => clearInterval(interval)
    }, [])
    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>
            {/* HERO SECTION */}
            <section 
                className="border-bottom"
                style={{
                    minHeight: "95vh",
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "10rem",
                    paddingBottom: "3rem"
                }}
            >
                <Container className="text-center">
                    {/* Fixed headline */}
                    <h1
                        className="fw-bold mb-4"
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)", // responsive
                            letterSpacing: "-1px",
                            background:
                                "linear-gradient(90deg, #007bff, #00c4ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Wave Goodbye to
                    </h1>

                    {/* Rotating subheadline */}
                    <div style={{ height: "3.5rem", overflow: "hidden" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={headlines[index]}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="fw-semibold text-secondary"
                                style={{
                                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                    lineHeight: "1.2",
                                }}
                            >
                                {headlines[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Logo and description */}
                    <p
                        style={{
                            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                            color: "#6c757d",
                            maxWidth: "750px",
                            margin: "1.5rem auto 0 auto",
                            lineHeight: "1.6",
                        }}
                    >
                        Diploy:{" "}
                        <b> Your Copilot for Field Service Management </b> —
                        from scheduling to AI-powered team management.
                    </p>

                    <Button
                        variant="primary"
                        size="lg"
                        href="#contact"
                        style={{ marginTop: "2rem" }}
                    >
                        Book a Demo
                    </Button>
                </Container>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-5 border-bottom bg-white">
                <Container className="text-center">
                    <img
                        src={Logo}
                        alt="Diploy Logo"
                        className="img-fluid my-4"
                        style={{ maxWidth: "200px" }}
                    />
                    <p
                        className="fs-5 mb-3 mx-auto"
                        style={{ maxWidth: "800px", lineHeight: "1.7" }}
                    >
                        Diploy is an AI-native field service
                        management platform. With Diploy, you get
                        smart scheduling, AI-powered quoting,
                        automated dispatching, lead generation, 
                        and more — in one easy-to-use system.
                    </p>
                    <p
                        className="fs-5 text-muted mx-auto fw-bold"
                        style={{ maxWidth: "800px", lineHeight: "1.7" }}
                    >
                        Use just what you need. Pay for just what you use. Scale
                        confidently.
                    </p>
                    <p className="text-muted fst-italic mt-3">
                        Version 1.0: Workspace & Frontline Team Management
                        System
                    </p>
                </Container>
            </section>

            {/* FEATURE HIGHLIGHT SECTION */}
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Left: Image */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <Carousel
                            className="my-4"
                            interval={3000}
                            controls={true}
                            indicators={true}
                            pause="hover"
                            wrap={true}
                            fade={false}
                            style={{
                                maxWidth: "min(1200px, calc(100vw - 3rem))",
                                margin: "0 auto",
                                outline: "5px solid #ccc",
                                outlineOffset: "6px",
                                borderRadius: "12px",
                                overflow: "hidden"
                            }}
                        >
                            <Carousel.Item style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <img
                                    className="d-block w-100"
                                    src={customersImg}
                                    alt="Customer management interface"
                                    style={{
                                        borderRadius: "12px",
                                        display: "block",
                                        objectFit: "cover",
                                        height: "auto"
                                    }}
                                />
                            </Carousel.Item>
                            <Carousel.Item style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <img
                                    className="d-block w-100"
                                    src={quotesImg}
                                    alt="Quotes management interface"
                                    style={{
                                        borderRadius: "12px",
                                        display: "block",
                                        objectFit: "cover",
                                        height: "auto"
                                    }}
                                />
                            </Carousel.Item>
                            <Carousel.Item style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <img
                                    className="d-block w-100"
                                    src={jobsImg}
                                    alt="Jobs management interface"
                                    style={{
                                        borderRadius: "12px",
                                        display: "block",
                                        objectFit: "cover",
                                        height: "auto"
                                    }}
                                />
                            </Carousel.Item>
                        </Carousel>

                    </Col>

                    {/* Right: Header + 3 pointers */}
                    <Col
                        md={6}
                        style={{
                            paddingLeft: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start", // align left
                            // Removed justifyContent to avoid vertical centering
                            gap: "1.8rem",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 700,
                                color: "#007bff",
                                marginBottom: 0,
                                textAlign: "left", // explicitly left align heading
                            }}
                        >
                            Streamline Your Field Service Workflow
                        </h2>

                        <ul
                            style={{
                                listStyle: "none",
                                paddingLeft: 0,
                                margin: 0,
                                fontSize: "clamp(1.05rem, 1.2vw, 1.3rem)",
                                color: "#333",
                                lineHeight: 1.6,
                            }}
                        >
                            {[
                                "AI-powered scheduling and dispatching to save time",
                                "Automated quoting and lead generation built-in",
                                "Simple, all-in-one platform designed for small & midsize teams",
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        marginBottom: idx === 2 ? 0 : "1.25rem",
                                        gap: "0.75rem",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="#007bff"
                                        viewBox="0 0 16 16"
                                        style={{
                                            flexShrink: 0,
                                            marginTop: "3px",
                                        }}
                                    >
                                        <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06L6.97 10.565 3.454 7.05a.75.75 0 1 1 1.06-1.06l2.456 2.455 6.515-6.515z" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* BOOK A DEMO SECTION */}
            <section className="py-5 border-bottom">
                <Container className="text-center">
                    <h2 className="h3 fw-semibold text-secondary mb-4">
                        Ready to See Diploy in Action?
                    </h2>
                    <p
                        className="fs-5 text-muted mb-4 mx-auto"
                        style={{ maxWidth: "700px", lineHeight: "1.6" }}
                    >
                        Schedule a personalized demo to see how Diploy can
                        streamline your frontline operations and help your
                        business run smoother.
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        href="https://calendly.com/yinglonglin/diploy-product-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Demo
                    </Button>
                </Container>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact">
                <Container
                    className="text-center"
                    style={{
                        backgroundColor: "transparent",
                        paddingBottom: "4rem",
                    }}
                >
                    <h2
                        className="h3 fw-semibold text-secondary mb-4"
                        style={{ paddingTop: "2rem" }}
                    >
                        Contact Us
                    </h2>
                    <Row className="justify-content-center g-4">
                        <Col xs={12} md={5}>
                            <a
                                href="mailto:sales@diploy.io"
                                className="text-decoration-none"
                                style={{ color: 'inherit' }}
                            >
                                <Card className="h-100 shadow-sm border-0" style={{ cursor: 'pointer' }}>
                                    <Card.Body className="p-4">
                                        <Card.Title className="text-primary fs-4 mb-3 fw-bold">
                                            Email
                                        </Card.Title>
                                        <Card.Text className="fs-5 text-dark">
                                            sales@diploy.io
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col xs={12} md={5}>
                            <a
                                href="tel:+19097189852"
                                className="text-decoration-none"
                                style={{ color: 'inherit' }}
                            >
                                <Card className="h-100 shadow-sm border-0" style={{ cursor: 'pointer' }}>
                                    <Card.Body className="p-4">
                                        <Card.Title className="text-primary fs-4 mb-3 fw-bold">
                                            Phone
                                        </Card.Title>
                                        <Card.Text className="fs-5 text-dark">
                                            +1 (909) 718-9852
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Home
