import React from "react";
import "../assets/styles/desktop-footer.css";
import { ReactComponent as FacebookLogo } from "../assets/shared/icons8-facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/shared/icons8-twitter.svg";
import { ReactComponent as InstagramLogo } from "../assets/shared/icons8-instagram.svg";
import { ReactComponent as LinkedInLogo } from "../assets/shared/icons8-linkedin-2.svg";

const DesktopFooter = () => {
	return (
		<div className="desktop-footer">
			<div className="m-h5">
				<h5>
					copyright &copy; <span>2022 my guy MuzardeMoses</span>{" "}
				</h5>
			</div>
			<div className="bottons">
				<button className="linkbtn">
					<a href="https://facebook.com/soccerplanetom" target=" _blank">
						{" "}
						<FacebookLogo />
					</a>
				</button>
				<button className="linkbtn">
					<a href="https://twitter.com/Muzarde1" target=" _blank">
						<TwitterLogo />
					</a>
				</button>
				<button className="linkbtn">
					<a href="https://www.instagram.com/ademuzardemoses/" target=" _blank">
						<InstagramLogo />
					</a>
				</button>
				<button className="linkbtn">
					<a href="https://www.linkedin.com/in/muzardemoses/" target=" _blank">
						<LinkedInLogo />
					</a>
				</button>
			</div>
		</div>
	);
};

export default DesktopFooter;
