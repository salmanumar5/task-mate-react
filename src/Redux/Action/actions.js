/* eslint-disable no-unused-vars */

import { BaseUrl, groupDetails, userGroups } from '../../Constants/ApiEndPoints';
import { HitApi } from '../../Utils/ApiCall';
import { 
    SET_GROUPS, 
    SET_SELECTED_GROUP, 
    SET_GROUP_DETAILS, 
    SET_CURRENT_USER,
    MARK_TASK_COMPLETED, 
    CLEAR_STATE
  } from './actionTypes';
  
  // Action to set the list of groups the user has joined
  export const setGroups = (groups) => ({
    type: SET_GROUPS,
    payload: groups,
  });
  
  // Action to set the selected group ID
  export const setSelectedGroup = (groupId) => ({
    type: SET_SELECTED_GROUP,
    payload: groupId,
  });
  
  // Action to set the details of a specific group
  export const setGroupDetails = (groupDetails) => ({
    type: SET_GROUP_DETAILS,
    payload: groupDetails,
  });
  // Action to set the current userId
  export const setCurrentUserId = (userId) => ({
    type: SET_CURRENT_USER,
    payload: userId,
  });
  
  // Thunk action to fetch all groups the user has joined
  export const fetchUserGroups = () => async (dispatch) => {
    try {
      const response = await HitApi({}, userGroups, 'POST'); // Pass an empty object if no body is needed
      console.log("User Groups:", response);
      
      dispatch(setGroups(response));
    } catch (error) {
      console.error('Failed to fetch groups', error);
    }
  };
  
  // Thunk action to fetch the details of a specific group
  export const fetchGroupDetails = (groupId) => async (dispatch) => {
    try {
      console.log("Hittin in");
      
      const response = await HitApi(null, `${BaseUrl}groups/${groupId}`, 'get'); // Pass an empty object if no body is needed
      console.log("Response", response)
      dispatch(setGroupDetails(response));
    } catch (error) {
      console.error('Failed to fetch group details', error);
    }
  };

  
  // Thunk action to mark a task as completed
  export const markTaskAsCompleted = (taskId) => async (dispatch, getState) => {
    const state = getState();
    const updatedTasks = state.group.groupDetails.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
  
    dispatch(setGroupDetails({ ...state.group.groupDetails, tasks: updatedTasks }));
  
    try {
      await HitApi({}, `/api/tasks/${taskId}/complete`); // Pass an empty object if no body is needed
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };
  
  export const clearState = () => {
    return {
      type: CLEAR_STATE,
    };
  };