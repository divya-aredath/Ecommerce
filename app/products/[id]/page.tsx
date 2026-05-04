 export const dynamic = "force-dynamic";
import { ProductService } from "@/app/services/productservice";
//import styles from "./id.module.css";
import ProductDetails from "@/app/components/ProductDetails";
export default async function ProductPage({ params }: { params: { id: string } }) {
    try {
        const {id} = await params;
        const data = await ProductService.getProductDetails({ id });
        console.log(data);
        if (!data) {
              return <div>Product not found</div>;
          }
       
        return <ProductDetails product={data}/>;
    } catch (err) {
        console.error("Product fetch failed:", err);
        return <div>Failed to load product</div>;
    }
}
       