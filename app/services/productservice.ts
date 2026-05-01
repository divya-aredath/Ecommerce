export class ProductService {
static getProducts=async()=>{{
    const url = "https://fakestoreapi.com/products";
    console.log("Fetching:", url);
    const response = await fetch(url,{
  cache: "no-store"
});
    console.log(response);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
}
}
static async getProductDetails({ id }: { id: string }) {
    const url = `https://fakestoreapi.com/products/${id}`;
    console.log("Fetching:", url);
    const response = await fetch(url{
  cache: "no-store"
});
    console.log(response);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
}

}