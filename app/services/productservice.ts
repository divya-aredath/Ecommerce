import { error } from "console";

export class ProductService {
   static getProducts=async()=>{
      try {
              const url = "https://fakestoreapi.com/products";
              const response = await fetch(url,{
            cache: "no-store"
          });
         if (!response.ok)
          {
                throw new Error("Failed to fetch products");
          }
         return await response.json();
      }catch (err) 
      {  
                    console.error("getProducts error:", error);
                    return []; // ✅ prevents crash
      }
     
}
static async getProductDetails({ id }: { id: string }) {
  try {
                const url = `https://fakestoreapi.com/products/${id}`;
                const response = await fetch(url,{
              cache: "no-store"
            });
    if (!response.ok) 
      {throw new Error("Failed to fetch product");}
    return  await response.json();
  } catch (error) {
    console.error("getProductDetails error:", error);
    return null; // ✅ prevents crash
  }
}

}