/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useReducer } from "react"
import groceryReducer from "../../../state/groceryReducer"
import { Product } from "../../Molecules/Product"
import { GroceryContainer, GroceryList, GroceryListItem } from "./styles.css"

export function Grocery({ products }) {
  const [productsState, dispatch] = useReducer(groceryReducer, products)

  return (
    <GroceryContainer>
      <GroceryList>
        {productsState.map((p) => (
          <GroceryListItem key={`product-item-${p.id}`}>
            <Product key={`product-${p.name}`} info={p} dispatch={dispatch} />
          </GroceryListItem>
        ))}
      </GroceryList>
    </GroceryContainer>
  )
}
