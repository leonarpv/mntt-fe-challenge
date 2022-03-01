const getImages = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/3")
  const parsedResponse = await response.json()

  if (parsedResponse.status !== "success") {
    throw Error("Error getting images")
  }

  const result = parsedResponse.message.map((image, keyImage) => {
    return { src: image, id: keyImage }
  })

  return result
}

export default {
  getImages,
}
