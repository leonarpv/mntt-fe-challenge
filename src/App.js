import React, { useCallback, useState } from "react"
import NavigationService from "./services/NavigationService"
import CroceryService from "./services/CroceryService"
import "./App.css"
import Button from "./components/Atoms/Button"
import Wrapper from "./components/Atoms/Wrapper"
import { Message } from "./components/Molecules/Message"
import { FocusableInput } from "./components/Molecules/FocusableInput"
import { TeamsList } from "./components/Organisms/TeamsList"
import { ListItemsForNavigation } from "./components/Organisms/ListItemsForNavigation"
import { ImageGallery } from "./components/Organisms/ImageGallery"
import { Rating } from "./components/Organisms/Rating"
import { Grocery } from "./components/Organisms/Grocery"
import { PlayerStatus } from "./components/Organisms/PlayerStatus"

export default function App() {
  const [inputFocused, setInputFocused] = useState(false)
  const handleFocus = useCallback(
    (event) => {
      event.preventDefault()
      setInputFocused(!inputFocused)
    },
    [inputFocused]
  )

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <Wrapper title="Message' test">
        <Message />
      </Wrapper>
      <Wrapper title="'FocusableInput' test">
        <FocusableInput focused={inputFocused} />
        <Button onClick={handleFocus}>Focus input</Button>
      </Wrapper>
      <Wrapper title="'ImageGallery' test">
        <ImageGallery />
      </Wrapper>
      <Wrapper title="'ListItemsForNavigation' test">
        <ListItemsForNavigation
          listItems={NavigationService.getNavigationItems()}
        />
      </Wrapper>
      <Wrapper title="'Grocery' test">
        <Grocery products={CroceryService.getGroceries()} />
      </Wrapper>
      <Wrapper title="'Rating' test">
        <Rating />
      </Wrapper>
      <Wrapper title="'PlayerStatys' test">
        <PlayerStatus />
      </Wrapper>
      <Wrapper title="'TeamsList' test">
        <TeamsList />
      </Wrapper>
    </div>
  )
}
