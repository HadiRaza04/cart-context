import Cart from "./components/Cart"
import Products from "./components/Products"
import { CartProvider } from './context/cart.jsx'
function App() {
  return (
    <>
      <div className="flex flex-row justify-around  w-[100%] h-[100vh]">
        <CartProvider>
          <Products />
          <Cart />
        </CartProvider>
      </div>
    </> 
  )
}
export default App