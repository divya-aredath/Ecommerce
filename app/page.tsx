import Carousel from "./components/carousel"
import Login from "./login/page"


export default function Home() {
  return (
    <div>
          <div className="container mt-15 d-flex flex-column align-items-center"  >
            <Carousel />
          <h1 >Welcome to our Store</h1>
          <p>Browse our products and add them to your cart.</p>
          
          
         </div>
    </div>
  );
}
