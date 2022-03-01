
import React, { useCallback, useEffect, useState } from "react";
import { Message } from "./components/Molecules/Message";
import { FocusableInput } from "./components/Molecules/FocusableInput";
import { ImageGallery } from "./components/Organisms/ImageGallery";
import { PlayerStatus } from "./components/Organisms/PlayerStatus";
import TeamList from "./components/TeamsList";
import GalleryService from './services/GalleryService'
import NavigationService from './services/NavigationService'
import './App.css';
import Wrapper from "./components/Atoms/Wrapper";
import { ListItemsForNavigation } from "./components/Organisms/ListItemsForNavigation";
import { Rating } from "./components/Organisms/Rating";



export default function App() {
  const [inputFocused, setInputFocused] =  useState(false);
  const [imageLinks,setImageLinks]=useState([])
  const handleFocus = useCallback((event) => {
    event.preventDefault();
    setInputFocused(!inputFocused)
  }, [inputFocused]);

  const handleOnRemove = React.useCallback((id) => {
    const items = [...imageLinks];
    items.splice(items.findIndex(item => item.id === id), 1)
    setImageLinks(items)
  }, [imageLinks])

  useEffect(()=>{
    async function getImages() {
      const response = await GalleryService.getImages();
      const images = await response.json()
      setImageLinks(images)
    }

    getImages()


  },[])

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <Wrapper title="Message' test" >
      <Message />
      </Wrapper>
      <Wrapper title="'FocusableInput' test" >
      <FocusableInput focused={inputFocused} />
      <button onClick={handleFocus}>Focus input</button>
      </Wrapper>
      <Wrapper title="'ImageGallery' test" >
      <ImageGallery links={imageLinks} handleOnRemove={handleOnRemove} />
      </Wrapper>
      <Wrapper title="'ListItemsForNavigation' test" >
      <ListItemsForNavigation listItems={NavigationService.getNavigationItems()} />
      </Wrapper>
      <Wrapper title="'Rating' test" >
        <Rating />
      </Wrapper>
  
    </div>
  );
}