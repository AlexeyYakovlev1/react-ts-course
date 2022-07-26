import React from "react";

interface IModalContext {
	visibleModal: boolean;
	open: () => void;
	close: () => void;
}

const ModalContext = React.createContext<IModalContext>({
	visibleModal: false,
	open: () => { },
	close: () => { }
});

export default ModalContext;

export function ModalState({ children }: { children: React.ReactNode; }) {
	const [visibleModal, setVisibleModal] = React.useState<boolean>(false);

	function open() {
		setVisibleModal(true);
	}

	function close() {
		setVisibleModal(false);
	}

	return (
		<ModalContext.Provider value={{ visibleModal, open, close }}>
			{children}
		</ModalContext.Provider>
	);
}