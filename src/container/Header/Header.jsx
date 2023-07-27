import React from "react"

import "./Header.scss"
import { images } from "../../constants"
import { SubHeading } from "../../components"

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Chase the new flavour" />
			<h1 className="app__header-h1">The Key to Fine Dining</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem quis harum assumenda soluta fugit laborum maiores repellat omnis
				molestias culpa.
			</p>
			<button type="button" className="custom__button bg-[--color-crimson]">Know More</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.welcome} alt="Welcome" />
		</div>
	</div>
)

export default Header
