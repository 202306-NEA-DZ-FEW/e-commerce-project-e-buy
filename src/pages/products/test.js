import React from "react"
import Api from "@/util/API"

export default function AnotherComponent() {
  return (
    <Api apiRoute="products">
      {(data) => (
        <div>
          {/* Use the fetched data here */}
          {data ? (
            <div>
              <p>Data from API:</p>
              <ul>
                {data.map((item) => (
                  <li key={item.id}>
                    <p>Title: {item.title}</p>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    {/* Add more properties as needed */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      )}
    </Api>
  )
}
