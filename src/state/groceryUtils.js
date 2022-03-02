export const updateProduct = (state, productId, productUpdater) => {
  const stateCopy = [...state]
  const idx = stateCopy.findIndex((p) => p.id === productId)
  const productCopy = productUpdater(stateCopy[idx])
  stateCopy[idx] = productCopy
  return stateCopy
}
