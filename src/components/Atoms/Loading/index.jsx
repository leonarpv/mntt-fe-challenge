import { Dot, LoadingWrapper } from "./styles.css"

export default function Loading() {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  )
}
