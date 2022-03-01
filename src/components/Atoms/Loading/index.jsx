import { Dot, LoadingWrapper } from "./styles"

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
