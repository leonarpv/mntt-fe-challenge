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

import { useEffect, useRef, useState } from "react"
import {
  Avatar,
  FocusableList,
  FocusableItem,
  FocusableContainer,
  AvatarSection,
  InfoSection,
  InfoList,
} from "./styles.css"

export function ListItemsForNavigation({ listItems }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const activeItemRef = useRef()

  useEffect(
    function () {
      activeItemRef?.current?.focus()
    },
    [selectedIndex]
  )

  // Add the proper logic to calculate the index that correspond to the item that should be focused.
  const handleKeyDown = (event) => {
    event.preventDefault()
    if (event.keyCode === 40 || event.keyCode === 37) {
      setSelectedIndex((prevState) =>
        prevState > 0 ? prevState - 1 : prevState
      )
    } else if (event.keyCode === 39 || event.keyCode === 38) {
      setSelectedIndex((prevState) =>
        prevState < listItems.length - 1 ? prevState + 1 : prevState
      )
    }
  }

  return (
    <FocusableList onKeyDown={handleKeyDown} tabIndex={0}>
      {/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
      {/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
      {/** Do not forget to pass the reference to the selected item */}
      {listItems.map((i, idx) => {
        const isFocused = selectedIndex === idx
        return (
          <FocusableItem key={`focusable-list-item-${i.id}`}>
            <FocusableContainer
              focused={isFocused}
              ref={isFocused ? activeItemRef : null}
              onClick={() => setSelectedIndex(idx)}
            >
              <AvatarSection>
                <Avatar src={i.avatar} alt={`${i.name} ${i.lastName}`} />
              </AvatarSection>
              <InfoSection className="item-navigation-info">
                <InfoList>
                  <label>Name:</label>
                  <div>{i.name}</div>
                </InfoList>
                <InfoList>
                  <label>Last name:</label>
                  <div>{i.lastName}</div>
                </InfoList>
                <InfoList>
                  <label>Birth</label>
                  <div>{i.birth}</div>
                </InfoList>
              </InfoSection>
            </FocusableContainer>
          </FocusableItem>
        )
      })}
    </FocusableList>
  )
}
