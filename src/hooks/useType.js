export const useType = (data) => {
  // get keys from the array
  let keys = Object.keys(data[0])

  // categorise types
  const types = keys.map((key) => {
    const isNumeric = data
      .map((d) => d[key])
      .filter((d) => d !== undefined || d !== null)
      .every((d) => typeof d === "number")

    return {
      variable: key,
      type: isNumeric ? "number" : "character",
    }
  })

  return { types }
}
