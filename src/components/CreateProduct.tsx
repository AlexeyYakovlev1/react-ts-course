import axios from "axios";
import React from "react";
import { IProduct } from "../models/product.model";
import ErrorMessage from "./ErrorMessage";

interface ICreateProductProps {
	onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: ICreateProductProps) {
	const [info, setInfo] = React.useState({
		id: 0,
		title: "",
		price: 0,
		description: "",
		image: "",
		category: "",
		rating: {
			rate: 42,
			count: 10
		}
	});
	const [error, setError] = React.useState<string>("");

	async function submitHandler(event: React.FormEvent) {
		event.preventDefault();
		setError("");

		if (!info.title.trim() || !info.price || !info.description.trim() || !info.image.trim() || !info.category.trim()) {
			setError("Check values of data");
			return;
		}

		const response = await axios.post<IProduct>("https://fakestoreapi.com/products", info);
		onCreate(response.data);
	}

	return (
		<form onSubmit={submitHandler}>
			{error && <ErrorMessage error={error} />}
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title..."
				value={info.title}
				onChange={event => setInfo({ ...info, title: event.target.value })}
			/>
			<input
				type="number"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product price..."
				value={info.price}
				onChange={event => setInfo({ ...info, price: +event.target.value })}
			/>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product description..."
				value={info.description}
				onChange={event => setInfo({ ...info, description: event.target.value })}
			/>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product image url..."
				value={info.image}
				onChange={event => setInfo({ ...info, image: event.target.value })}
			/>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product category..."
				value={info.category}
				onChange={event => setInfo({ ...info, category: event.target.value })}
			/>
			<button
				type="submit"
				className="py-2 px-4 border bg-yellow-400"
			>
				Create
			</button>
		</form>
	);
}

export default CreateProduct;