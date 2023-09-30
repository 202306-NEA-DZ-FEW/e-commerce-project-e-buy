export async function fetchProductById(apiRoute) {
  try {
    const response = await fetch(`https://dummyjson.com/${apiRoute}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
