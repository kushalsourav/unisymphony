import { createContext, useContext, useReducer} from "react"
import DataReducer from "../../reducers/DataReducer/DataReducer";

const initialDataState = {
    name: '',
    modal:false,
    jobPostData : {
        jobTitle: '',
        jobDescription: '',
        jobRequirements: '',
        jobLocation: '',
        jobType: '',
        jobSalary: '',
      },
    userProfile: {
        type: '',
        interests: [],
    },
    currentPath: "registration",
    roles: ['student','faculty', 'alumni'], 
    events_dates : [
        { day: 'mon', date:'', events: [{title: 'Securities Regulation', start: '2 PM', end: '5 PM'},{title: 'Securities', start: '10 PM', end: '12 PM'}]},
        { day: 'tues', date:'', events: [{title: 'Corporate Finance', start: '10 AM', end: '12 PM'}]},
        { day: 'wed', date:'', events: [{title: 'Writing Seminar', start: '11 AM', end: '1 PM'}]},
        { day: 'thurs', date:'', events: [{title: 'Corporate Finance', start: '10 AM', end: '12 PM'}]},
        { day: 'fri', date:'', events: [{title: '', start: '', end: ''}]}
      ],
    currentweekData : [],
    eventForm: {
      day: '',
      date: '',
      events: [
        {
            title: '',
            start: '',
            end: '',
        }
      ]
    }

      

}

const DataContext = createContext(null);

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const [dataState, dataDispatch] = useReducer(DataReducer, initialDataState);

    return(
        <DataContext.Provider value={{dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider, useData};
