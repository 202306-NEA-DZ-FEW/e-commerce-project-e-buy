import React, { useEffect, useState } from "react"

export default function Api({ apiRoute, children }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/${apiRoute}`)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [apiRoute])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>
  }

  if (!data) {
    return <div>No data available.</div>
  }

  return <>{children(data)}</>
}
