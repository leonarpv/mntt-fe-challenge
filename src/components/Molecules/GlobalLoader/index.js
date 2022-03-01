import React from "react"
import Loading from "../../Atoms/Loading"

function GlobalLoader(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return <Loading />
  }
}
export default GlobalLoader
