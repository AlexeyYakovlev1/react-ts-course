import React from "react";
import { IProduct } from "../models/product.model";

interface IProductProps {
	product: IProduct;
}

function Product({ product }: IProductProps) {
	const [details, setDetails] = React.useState<boolean>(false);
	const btnBgClassName = !details ? "bg-yellow-400" : "bg-blue-400";
	const btnClasses = [`py-2 px-4 border`, btnBgClassName];

	return (
		<div
			className="border py-2 px-4 rounded flex flex-col items-center mb-2"
		>
			<img src={product.image} className="w-1/6" alt={product.title} />
			<p>{product.title}</p>
			<span className="font-bold">{product.price}</span>
			<button
				onClick={() => setDetails(!details)}
				className={btnClasses.join(" ")}
			>
				{!details ? "Show details" : "Hide details"}
			</button>
			{details && <div>
				<p>{product.description}</p>
				{product.rating && <p>Rate: <span className="font-bold">{product?.rating?.rate}</span></p>}
			</div>}
		</div>
	);
}

export default Product;