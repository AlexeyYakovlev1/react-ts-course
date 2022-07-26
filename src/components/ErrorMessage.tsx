interface IErrorProps {
	error: string;
}

function ErrorMessage({ error }: IErrorProps) {
	return (
		<span className="text-center text-red-600">{error}</span>
	);
}

export default ErrorMessage;