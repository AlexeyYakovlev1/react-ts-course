import React from "react";
import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Product from "../components/Product";
import Modal from "../components/UI/Modal";
import ModalContext from "../context/modal.context";
import { useProducts } from "../hooks/products.hook";
import { IProduct } from "../models/product.model";

function ProductPage() {
	const { products, error, load, addProduct } = useProducts();
	const { visibleModal, close, open } = React.useContext(ModalContext);

	function createHandler(product: IProduct) {
		close();
		addProduct(product)
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{load && <Loader />}
			{error && <ErrorMessage error={error} />}
			{products && products.map((product: IProduct) => <Product product={product} key={product.id} />)}

			{visibleModal && <Modal title="Create new product" onClose={close}>
				<CreateProduct onCreate={createHandler} />
			</Modal>}

			<button
				onClick={open}
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
			>
				Add
			</button>
		</div >
	);
}

export default ProductPage;