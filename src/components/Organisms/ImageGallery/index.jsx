/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import React, { useState, useEffect, useCallback } from "react"
import Button from "../../Atoms/Button"
import { Gallery } from "../../Molecules/Gallery"
import GlobalLoader from "../../Molecules/GlobalLoader"
import GalleryService from "../../../services/GalleryService"
import { GalleryContainer } from "./styles.css"
const GalleryLoading = GlobalLoader(Gallery)

export function ImageGallery() {
  const [loadingGallery, setLoadingGallery] = useState(false)
  const [imageLinks, setImageLinks] = useState([])
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

  const getImages = useCallback(async () => {
    try {
      setLoadingGallery(true)
      const images = await GalleryService.getImages()
      setImageLinks(images)
      setLoadingGallery(false)
    } catch (error) {}
  }, [])

  useEffect(() => {
    getImages()
  }, [getImages])

  return (
    <GalleryContainer>
      <GalleryLoading
        isLoading={loadingGallery}
        links={imageLinks}
        handleOnRemove={handleOnRemove}
      />
      {imageLinks.length === 0 && !loadingGallery && (
        <Button onClick={() => getImages()}>Get more images</Button>
      )}
    </GalleryContainer>
  )
}
