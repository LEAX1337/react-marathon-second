import React from "react"

import { images } from "../../constants"

export const SubHeading = ({ title, styles }) => (
	<div style={{ marginBottom: "1rem" }} className={`${styles}`}>
		<p className="p__cormorant">{title}</p>
		<img src={images.spoon} alt="spoon" className="spoon__img" />
	</div>
)

export default SubHeading
