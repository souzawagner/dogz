import Head from 'next/head'
import DogsList from "../components/Dog/List";
import { useContext } from "react";
import dogs from '../data/dogs.json';
import { DogsContext } from "../providers/DogsProvider";

export default function Homepage() {
  const api = useContext(DogsContext);

  return (
    <>
      <Head>
        <title>mydogz - comida dos pets</title>
        <meta name="description" content="Controle alimentação dos pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'h-full'}>
        {
          api.dogs.length < 8 ? <DogsList list={dogs} /> : (
            <div className={'flex justify-center items-center w-full h-full fixed'}>
              <button
                type={'button'}
                className={'dark:text-white p-3 bg-green-400 rounded-full ring-4 ring-white/20 z-30'}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20">
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            )
        }
      </main>

      {
        api.dogs.length >= 8 && document.body.parentElement.classList.add('overflow-hidden')
      }
    </>
  )
}
