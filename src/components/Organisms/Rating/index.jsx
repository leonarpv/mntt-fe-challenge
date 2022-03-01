/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";
import Star from "../../Atoms/Star";
import { StarsContainer } from "./styles.css";

 export function Rating() {
	const [selectedStar, setSelectedStar] = useState(null);
	const starItems = new Array(5).fill("*");
	const handleStarClick = ({id}) => () => {

		setSelectedStar(id);
	};
  
	return (
	  <StarsContainer>
		{starItems.map((star, id) => (
		  <Star
			onClick={handleStarClick({id})}
			active={selectedStar !== null && id <= selectedStar}
			key={`star-${id}`}
			content={star}
		  />
		))}
	  </StarsContainer>
	);
  }
  