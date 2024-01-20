import { createContext, useContext, useReducer} from "react"
import DataReducer from "../../reducers/DataReducer/DataReducer";

const initialDataState = {
    name: '',
}

const DataContext = createContext(null);

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const [dataState, dataDispatch] = useReducer(initialDataState, DataReducer);

    return(
        <DataContext.Provider value={{dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider, useData};
