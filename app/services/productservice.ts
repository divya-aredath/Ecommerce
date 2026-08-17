import { error } from "console";

export class ProductService {
   static getProducts=async()=>{
      try {
              const url = "https://dummyjson.com/products";
              const response = await fetch(url,{
            cache: "no-store"
          });
         if (!response.ok)
          {
                throw new Error("Failed to fetch products");
          }
          const data = await response.json();
         return data.products;
      }catch (err) 
      {  
                    console.error("getProducts error:", err);
                    return []; 
      }
     
}
static async getProductDetails({ id }: { id: string }) {
  try {
                const url = `https://dummyjson.com/products/${id}`;
                const response = await fetch(url,{
              cache: "no-store"
            });
    if (!response.ok) 
      {throw new Error("Failed to fetch product");}
    const data = await response.json();
    return  data;
  } catch (err) {
    console.error("getProductDetails error:", err);
    return null; 
  }
}

}