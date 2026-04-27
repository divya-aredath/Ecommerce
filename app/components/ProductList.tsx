import Link from "next/link"
import style from "./ProductList.module.css"

export default function ProductList({ prod}: any) {
    console.log("from prod list", prod);
    return (
        <div className="container mt-5">
          <div className={`col-12 ${style.productinfo}`}>
                {prod.map((p:any) =>(
                    <div key={p.id} className={`col-12 col-md-6 col-lg-4 ${style.productItem}`}>
                        <img src={p.image} alt="product Image" height={50} width={50} />
                        <Link href={`/products/${p.id}`}>
                            <h6>{p.title}</h6>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}