/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import Button from "../../Atoms/Button"
import { GalleryImage, ImageContainer } from "./styles.css"

function Image({ id, src, onRemove }) {
  return (
    <ImageContainer>
      <GalleryImage src={src} />
      <Button className="remove" onClick={() => onRemove(id)}>
        X
      </Button>
    </ImageContainer>
  )
}

export function ImageGallery({ links, handleOnRemove }) {
  return (
    <>
      {links &&
        links
          .slice(0, 1)
          .map((link, keyId) => (
            <Image key={`image-${keyId}`} {...link} onRemove={handleOnRemove} />
          ))}
    </>
  )
}
