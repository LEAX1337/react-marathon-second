import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { FooterOverlay, Newsletter } from "../../components"

import { images } from "../../constants"

import "./Footer.scss"

const Footer = () => (
	<div className="app__footer section__padding">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">Lorem ipsum dolor sit amet.</p>
				<p className="p__opensans">+7 959 149 03 09</p>
				<p className="p__opensans">+7 959 149 03 09</p>
			</div>
			<div className="app__footer-links_logo">
				<img src={images.gericht} alt="Logo" />
				<p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
				<img src={images.spoon} alt="Spoon" style={{ marginTop: 15 }} />
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footer-links_work">
			<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday - Friday:</p>
				<p className="p__opensans">08:00 am - 12:00 am</p>
				<p className="p__opensans">Saturday - Sunday</p>
				<p className="p__opensans">07:00 am - 11:00 am</p>
			</div>
		</div>
		<div className="app__footer-copyright">
			<p className="p_opensans">2023 Gericht. All Rights Reserved</p>
		</div>
	</div>
)

export default Footer
