import useApi from "../hooks/useApi";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const DogsContext = createContext({});

export default function DogsProvider(props) {
  const api = useApi();
  const [dogs, setDogs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api.login().then(() => {
      api.getDogs()
        .then((data) => {
          setDogs(data);
          setLoading(false);
        })
        .catch(console.error);
    });
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <DogsContext.Provider value={{ dogs, setDogs, feedDogs: api.feedDogs, }}>
      {props.children}
    </DogsContext.Provider>
  )
}