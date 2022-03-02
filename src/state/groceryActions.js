export const upVoteActionType = "upVote"
export const donwVoteActionType = "downVote"

export const upVoteAction = ({ product }) => ({
  type: upVoteActionType,
  product,
})
export const downVoteAction = ({ product }) => ({
  type: donwVoteActionType,
  product,
})
