import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsList } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<>
			<nav className="navbar flex">
				<div className="logo">
					<h1>
						<span className="logo-color">N</span>aseem
						<span className="logo-color">.</span>
					</h1>
				</div>

				<div className="nav-links">
					<ul className="flex" style={{ top: menu ? "70px" : "-100%" }}>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/services">Services</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>

				<div className="social-links">
					<ul className="flex">
						<li>
							<a href="#">
								<BsFacebook />
							</a>
						</li>
						<li>
							<a href="#">
								<BsInstagram />
							</a>
						</li>
						<li>
							<a href="#">
								<BsGithub />
							</a>
						</li>
					</ul>
					<li className="bars" onClick={() => setMenu(!menu)}>
						<BsList />
					</li>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
