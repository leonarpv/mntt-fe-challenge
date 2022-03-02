import { donwVoteActionType, upVoteActionType } from "./groceryActions"

export const upvoteProduct = ({ product }) => ({
  ...product,
  votes: product.votes + 1,
})
export const downvoteProduct = ({ product }) => ({
  ...product,
  votes: product.votes - 1,
})

const updateProduct = ({ newState, product, updateMethod }) => {
  const { id } = product
  const productToUpdateId = newState.findIndex((p) => p.id === id)

  const updatedProduct = updateMethod({ product: newState[productToUpdateId] })

  newState[productToUpdateId] = updatedProduct
  return newState
}

const groceryReducer = (state, action) => {
  const newState = [...state]
  const { product } = action

  switch (action.type) {
    case upVoteActionType: {
      return updateProduct({
        newState,
        product,
        updateMethod: upvoteProduct,
      })
    }
    case donwVoteActionType: {
      return updateProduct({
        newState,
        product,
        updateMethod: downvoteProduct,
      })
    }
    default:
      return state
  }
}

export default groceryReducer
