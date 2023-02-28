// import React from "react";
// import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
// import {Link, Route, Routes} from "react-router-dom";
// import Home from "../pages/Home";
// import Store from "../pages/Store";
// import Contacts from "../pages/Contacts";
// import NavbarCollapse from "react-bootstrap/NavbarCollapse";
// import NavbarToggle from "react-bootstrap/NavbarToggle";
//
// export function NavbarMenu() {
//     return (
//         <>
//             <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
//                 <Container>
//                     <NavbarToggle area-controls="responsive-navbar-nav"/>
//                     <NavbarCollapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
//                         <Link to="/store" style={{ marginRight: '10px' }}>Store</Link>
//                         <Link to="/contacts" style={{ marginRight: '10px' }}>Contacts</Link>
//                     </Nav>
//
//                     <Button>
//                         style={{width: "3rem", height: "3rem", position: "relative"}}
//                         variant="outline-primary"
//                         className="bi bi-cart"
//                         >
//                         <div
//                             className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
//                             style={{
//                                 color: "white",
//                                 width: "1.5rem",
//                                 height: "1.5rem",
//                                 position: "absolute",
//                                 bottom: 0,
//                                 right: 0,
//                                 transform: "translate(25%, 25%)",
//                             }}
//                         >
//                         </div>
//                     </Button>
//                     </NavbarCollapse>
//                 </Container>
//             </Navbar>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<Store />} />
//                 <Route path="/contacts" element={<Contacts />} />
//             </Routes>
//         </>
//     );
// }