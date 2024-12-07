import { MARK_TASK_COMPLETED, SET_CURRENT_USER, SET_GROUP_DETAILS, SET_GROUPS, SET_SELECTED_GROUP } from "../Action/actionTypes";

  
  const initialState = {
    groups: [],
    selectedGroupId: null,
    groupDetails: {},
    currentUserId: localStorage.getItem('currentUserId') || null, // Initialize from localStorage
  };
  
  const groupReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_GROUPS:
        return {
          ...state,
          groups: action.payload,
        };
      case SET_SELECTED_GROUP:
        return {
          ...state,
          selectedGroupId: action.payload,
        };
      case SET_GROUP_DETAILS:
        return {
          ...state,
          groupDetails: action.payload,
        };
      case SET_CURRENT_USER:
        return {
          ...state,
          currentUserId: action.payload,
        }
      case MARK_TASK_COMPLETED:
        return {
          ...state,
          groupDetails: {
            ...state.groupDetails,
            tasks: state.groupDetails.tasks.map((task) =>
              task.id === action.payload ? { ...task, completed: true } : task
            ),
          },
        };
      default:
        return state;
    }
  };
  
  export default groupReducer;
  