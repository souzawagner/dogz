import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from "../components/Header";

class MyDocument extends Document {
	render() {
		return (
			<Html className={'dark h-full'} lang={'pt-br'}>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/logo-128x128.png" />
					<link rel="theme-color" href="#fff" />
				</Head>

				<body className={'dark:bg-zinc-900 dark:text-gray-200 text-lg h-full'}>
					<Header />

					<Main />

					<div className="site-background fixed bottom-0 opacity-40">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="Uma imagem de cachorro com seu dono"
							src="/images/background.svg"
						/>
					</div>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
