export const prepareQuery = o => {
  o._id = o._id.toString()
  return o
}
