/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

function Image({ id, download_url, onRemove }) {
	console.log(download_url)
	return (
		<div className="image">
		<img src={download_url} height="100" />
		<button className="remove" onClick={() => onRemove(id)}>X</button>
		</div>
	);
}

export function ImageGallery({ links, handleOnRemove }) {
	return (
		<div>
		{links && links.slice(0, 2).map((link) => <Image key={link.id} {...link} onRemove={handleOnRemove} />)}
		</div>
	);
}
