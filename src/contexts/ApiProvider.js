
import { createContext, useContext } from 'react';
import BeatboxApiClient from '../BeatboxApiClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new BeatboxApiClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}