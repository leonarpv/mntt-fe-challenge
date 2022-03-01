import React, { useCallback, useEffect, useState } from "react"
import { Message } from "./components/Molecules/Message"
import { FocusableInput } from "./components/Molecules/FocusableInput"
import { ImageGallery } from "./components/Organisms/ImageGallery"
import { TeamsList } from "./components/Organisms/TeamsList"
import GalleryService from "./services/GalleryService"
import NavigationService from "./services/NavigationService"
import "./App.css"
import Wrapper from "./components/Atoms/Wrapper"
import { ListItemsForNavigation } from "./components/Organisms/ListItemsForNavigation"
import { Rating } from "./components/Organisms/Rating"
import Button from "./components/Atoms/Button"
import GlobalLoader from "./components/Molecules/GlobalLoader"
const GalleryLoading = GlobalLoader(ImageGallery)
export default function App() {
  const [inputFocused, setInputFocused] = useState(false)
  const [loadingGallery, setLoadingGallery] = useState(false)
  const [imageLinks, setImageLinks] = useState([])
  const handleFocus = useCallback(
    (event) => {
      event.preventDefault()
      setInputFocused(!inputFocused)
    },
    [inputFocused]
  )

  const handleOnRemove = React.useCallback(
    (id) => {
      const items = [...imageLinks]
      items.splice(
        items.findIndex((item) => item.id === id),
        1
      )
      setImageLinks(items)
    },
    [imageLinks]
  )

  useEffect(() => {
    async function getImages() {
      try {
        setLoadingGallery(true)
        const images = await GalleryService.getImages()
        setImageLinks(images)
        setLoadingGallery(false)
      } catch (error) {}
    }

    getImages()
  }, [])

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
        <GalleryLoading
          isLoading={loadingGallery}
          links={imageLinks}
          handleOnRemove={handleOnRemove}
        />
      </Wrapper>
      <Wrapper title="'ListItemsForNavigation' test">
        <ListItemsForNavigation
          listItems={NavigationService.getNavigationItems()}
        />
      </Wrapper>
      <Wrapper title="'Rating' test">
        <Rating />
      </Wrapper>
      <Wrapper title="'TeamsList' test">
        <TeamsList />
      </Wrapper>
    </div>
  )
}
