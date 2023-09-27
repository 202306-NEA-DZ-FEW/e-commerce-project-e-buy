import React, { useEffect, useState } from "react"

export default function Api({ apiRoute }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/${apiRoute}`,
        )
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [apiRoute])
}
