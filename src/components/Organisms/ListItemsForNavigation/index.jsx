/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	/** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
});


export function ListItemsForNavigation({listItems}) {
	const [
		selectedIndex,
		setSelectedIndex,
	] = useState(null);
	const activeItemRef = useRef();

	useEffect(
		function () {
			activeItemRef?.current?.focus();
		},
		[
			selectedIndex
		]
	);

	// Add the proper logic to calculate the index that correspond to the item that should be focused.
	const handleKeyDown= (event)=> {
		event.preventDefault();
		if (event.keyCode === 38 || event.keyCode === 39 )
		{
			setSelectedIndex(prevState => (prevState > 0 ? prevState - 1 : prevState));
		}else if (event.keyCode === 37 || event.keyCode === 40  )
		{
			setSelectedIndex(prevState =>prevState < itemsList.length - 1 ? prevState + 1 : prevState);
		}	
	}

	return (
		<ul onKeyDown={handleKeyDown} tabIndex={0} >
			{/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
			{/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
			{/** Do not forget to pass the reference to the selected item */}
			{listItems.map((i, idx) => {
        const isFocused = selectedIndex === idx;
        return (
          <li
            key={`focusable-list-item-${i.id}`}
            className="focusable-list-item"
          >
            <div
              className={`item-list-card ${isFocused ? "item-focused" : ""}`}
              ref={isFocused ? activeItemRef : null}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="item-navigation-avatar">
                <img src={i.avatar} alt={`${i.name} ${i.lastName}`} />
              </div>
              <div className="item-navigation-info">
                <div className="item-navigation-field">
                  <label>Name:</label>
                  <div>{i.name}</div>
                </div>
                <div className="item-navigation-field">
                  <label>Last name:</label>
                  <div>{i.lastName}</div>
                </div>
                <div className="item-navigation-field">
                  <label>Address</label>
                  <div>{i.address}</div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
		</ul>
	);
}
