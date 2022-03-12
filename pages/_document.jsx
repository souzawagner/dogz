import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from "../components/Header";

class MyDocument extends Document {
	render() {
		return (
			<Html className={'dark h-full'} lang={'pt-br'}>
				<Head>
					<link rel="manifest" href="/dogz/manifest.json" />
					<link rel="apple-touch-icon" href="/dogz/image/dog-128.png" />
					<link rel="theme-color" href="#0ea5e9" />
				</Head>

				<body className={'dark:bg-zinc-900 dark:text-gray-200 text-lg h-full'}>
					<Header />

					<Main />

					<div className="site-background fixed bottom-0 opacity-40">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="Uma imagem de cachorro com seu dono"
							src="/dogz/images/background.svg"
						/>
					</div>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
