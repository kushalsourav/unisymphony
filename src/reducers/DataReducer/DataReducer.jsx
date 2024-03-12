

const DataReducer = (state, action) => {
      
   switch(action.type) {

   case "JOB_INPUT":
         return {...state, jobPostData: {...state.jobPostData ,[action.name] :action.input } }
   case "MODAL":
         return {...state, modal:action.modal}
   case "SET_PATH" :
      console.log(action.type)
         return {...state,  currentPath: action.currentPath} 
   case "JOB":
      console.log("clicked")
         return {...state, jobPostData: {...state.jobPostData , jobTitle: '',
         jobDescription: '',
         jobRequirements: '',
         jobLocation: '',
         jobType: '',
         jobSalary: ''} }
    case "SETUP":
          return {...state, userProfile: {...state.userProfile , type:action.role, interests: state.userProfile.interests.concat(action.interests)}}
    case "GET_WEEKDATA": 
      return {...state, events_dates:    state.events_dates.map((e, i) => {return{...e, date : action.weekData[i]}})}
      case 'SET_EVENT_FORM':
      return {
        ...state,
        eventForm: action.eventForm
      };
    
    default : return state;
   }
}

export default DataReducer;
