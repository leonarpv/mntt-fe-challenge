import { downVoteAction, upVoteAction } from "../../../state/groceryActions"
import { ProductContainer } from "./styles.css"

export function Product({ info, dispatch }) {
  function handlePlus() {
    dispatch(upVoteAction({ product: info }))
  }

  function handleMinus() {
    dispatch(downVoteAction({ product: info }))
  }

  return (
    <ProductContainer>
      <span className="name">{info.name}</span>
      <span className="votes">{info.votes}</span>
      <div className="buttons">
        <button onClick={handlePlus}>+</button>
        <button disabled={info.votes === 0} onClick={handleMinus}>
          -
        </button>
      </div>
    </ProductContainer>
  )
}
