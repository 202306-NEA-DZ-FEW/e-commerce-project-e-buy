import React, { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db, userId } from "../../firebaseConfig"

const CartState = () => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCart = async () => {
    try {
      if (!userId) {
        console.log("No userId available.")
        setLoading(false)
        return
      }

      // Assuming 'products' is the Firestore collection for products
      const q = query(collection(db, "carts"), where("userId", "==", userId))
      const querySnapshot = await getDoc(q)

      const cartItems = []
      querySnapshot.forEach((doc) => {
        cartItems.push(doc.data())
      })

      setCart(cartItems)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching cart data:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [userId])

  return (
    <div>
      <h2>Cart</h2>
      {loading ? (
        <p>Loading cart...</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartState
