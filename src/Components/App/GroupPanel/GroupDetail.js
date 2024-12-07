/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/GroupsPanel/GroupDetail.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupDetails, markTaskAsCompleted } from '../../../Redux/Action/actions';

const GroupDetail = ({ groupId }) => {
  const dispatch = useDispatch();
  const groupDetails = useSelector((state) => state.group?.groupDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      await dispatch(fetchGroupDetails(groupId));
      setLoading(false);
    };

    fetchDetails();
  }, [dispatch, groupId]);

  const handleTaskCompletion = (taskId) => {
    dispatch(markTaskAsCompleted(taskId));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="group-detail">
      <h2>{groupDetails?.name}</h2>
      <p>{groupDetails?.description}</p>
      <h3>Tasks</h3>
      <ul>
        {groupDetails?.tasks &&
          groupDetails?.tasks.map((task) => (
            <li key={task?.id}>
              <span>{task?.title}</span>
              <button
                onClick={() => handleTaskCompletion(task?.id)}
                disabled={task?.completed}
              >
                {task?.completed ? 'Completed' : 'Mark as Completed'}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GroupDetail;
