import React from "react"

import "./Chef.scss"
import { SubHeading } from "../../components"
import { images } from "../../constants"

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef} alt="Chef" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title="Chef's Word" />
			<h1 className="headtext__cormorant">What We Believe In</h1>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="Quote" />
					<p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
				</div>

				<p className="p__opensans">
					{" "}
					Voluptatum sint voluptates nulla, maxime aspernatur molestias possimus mollitia impedit atque blanditiis minima quos, ipsa ab quo nemo fuga
					ipsum. Cumque, minus?
				</p>
			</div>

			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={images.sign} alt="Sign" />
			</div>
		</div>
	</div>
)

export default Chef
