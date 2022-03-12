import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import DogsProvider from "../providers/DogsProvider";

function Dogz({ Component, pageProps }) {
	return (
		<DogsProvider>
			<Component {...pageProps} />
		</DogsProvider>
	);
}

export default Dogz;
