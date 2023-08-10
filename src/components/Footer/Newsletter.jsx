import React from "react"
import { SubHeading } from "../SubHeading/SubHeading"

import "./Newsletter.scss"

export const Newsletter = () => (
	<div className="app__newsletter">
		<div className="app__newsletter-heading">
			<SubHeading title="Newsletter" styles="flex flex-col items-center" />
			<h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
			<p className="p__opensans">And never miss latest Updates!</p>
		</div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter Your Email Adress" />
      <button className="custom__button bg-[--color-crimson]">Subscribe</button>
    </div>
	</div>
)

export default Newsletter
