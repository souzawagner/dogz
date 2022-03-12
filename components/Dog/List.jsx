import { useContext, useEffect, useState } from "react";
import { DogsContext } from "../../providers/DogsProvider";
import Loading from "../Loading";

export default function DogsList(props) {
  const api = useContext(DogsContext);
  const [dogs, setDogs] = useState(props.list);

  const onToggleDog = (index) => {
    const dogList = [...dogs];
    dogList[index].isFed = !dogList[index].isFed;
    setDogs(dogList);
  }

  const getPortionsFromToday = (dogName) => api.dogs.filter((dog) => dog.name === dogName).length;

  const onFeedDogs = () => {
    const dogList = dogs.filter((dog) => dog.isFed);
    api.feedDogs(dogList)
      .then(() => {
        api.setDogs([...api.dogs, ...dogList]);
        setDogs(dogs.map((dog) => ({ ...dog, isFed: false })));
      })
      .catch(console.error);
  }

  useEffect(() => {
    if (!dogs.length) {
      // setDogs(api.dogs);
      console.warn("api ->", api);
    }
  }, [api]);

  if (!dogs.length) {
    return <Loading isLoading={true} />;
  }

  return (
    <>
      <ul>
        {
          dogs.map((dog, index) => {
            const portionsToday = getPortionsFromToday(dog.name);
            return (
              <li key={index}>
                <button
                  className={`${portionsToday >= 2 ? 'opacity-30' : ''} bg-sky-700 bg-opacity-75 w-full text-white relative shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`}
                  onClick={() => onToggleDog(index)}
                  disabled={portionsToday >= 2}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-left">
                      <div className="text-sm">
                        <p className="text-lg font-bold text-white">{dog.name}</p>
                        <p className="text-white">Porções: {portionsToday.toString().padStart(2, '0')}</p>
                      </div>
                    </div>

                    {
                      portionsToday < 2 && (
                        <div className="flex-shrink-0 text-white">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2" />

                            {
                              dog.isFed && (
                                <path
                                  d="M7 13l3 3 7-7"
                                  stroke="#fff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              )
                            }
                          </svg>
                        </div>
                      )
                    }
                  </div>
                </button>
              </li>
            )
          })
        }
      </ul>

      <button
        type={'button'}
        className={'dark:text-white fixed p-3 bottom-5 right-5 bg-sky-500 rounded-full focus:ring-4 focus:ring-white/20 z-30'}
        onClick={() => onFeedDogs()}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  )
}