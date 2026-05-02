export const dynamic = "force-dynamic";
import ProductList from "../components/ProductList";
import style from "./products.module.css"
import { ProductService } from "../services/productservice";

export default async function products() {
  const product = await ProductService.getProducts();
  console.log(product);
 
  return (
    <div>
          <div className="container mt-5">
          <h1 >Our Products</h1>
          <p>Explore our wide range of products and find the perfect fit for you.</p>
          
          <div className={style.productDisplay}>
            <ProductList prod={product|| []} />
                    
            </div>
        
          

          </div>
    </div>
  );
}
