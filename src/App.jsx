import Cart from "./components/Cart"
import Products from "./components/Products"
import { CartProvider } from './context/cart.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <div className="flex flex-row justify-around  w-[100%] h-[100vh]">
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <Products />
          </QueryClientProvider>
          <Cart />
        </CartProvider>
      </div>
    </> 
  )
}
export default App