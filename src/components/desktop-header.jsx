import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/desktop-header.css";
import {ReactComponent as CloseLogo} from "../assets/shared/icon-close.svg";
import { ReactComponent as MenuLogo } from "../assets/shared/icon-hamburger.svg";



const DesktopHeader = () => {
	
const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const handleClick = () => {
		const navLinks = document.querySelector(".nav-links");
		navLinks.classList.toggle("open");
		// const linkItems = document.querySelectorAll(".link-item");

		// linkItems.forEach((item) =>
		// 	item.addEventListener("click", () => navLinks.classList.remove("open"))
		// );

		setIsMenuOpen( prev => !prev);
	};

	return (
		<header className="desktop-header">
			<div className="header-icon">
				<Link to="/">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
						<g fill="none" fillRule="evenodd">
							<circle cx="24" cy="24" r="24" fill="#FFF" />
							<path
								fill="#0B0D17"
								d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
							/>
						</g>
					</svg>
				</Link>
			</div>
			<div className="l-link">
				<div className="the-line" />
				<div className="nav-links ">
					<NavLink to="/home"  className={({isActive})=> isActive ? "selected" : null}  >
						<span className="link-num">00</span> Home
					</NavLink>
					<NavLink to="/destination" className={({isActive})=> isActive ? "selected" : null}>
						{" "}
						<span className="link-num">01</span> Destination
					</NavLink>
					<NavLink to="/crew" className={({isActive})=> isActive ? "selected" : null}>
						{" "}
						<span className="link-num">02</span> Crew
					</NavLink>
					<NavLink to="/technology" className={({isActive})=> isActive ? "selected" : null}>
						{" "}
						<span className="link-num">03</span>Technology{" "}
					</NavLink>
				</div>
				<div className="open-tab">
					<button onClick={handleClick} className="menu-btn" >
					{ isMenuOpen ? <CloseLogo/> : <MenuLogo/>}
					</button>
				</div>
			</div>
		</header>
	);
};



export default DesktopHeader;
