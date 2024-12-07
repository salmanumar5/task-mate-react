import React from 'react';
import { FaUsers, FaTasks } from 'react-icons/fa';
import { IoExitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { HitApi } from '../../../Utils/ApiCall';
import { useDispatch } from 'react-redux';
import { fetchUserGroups } from '../../../Redux/Action/actions';
import { leaveGroup } from '../../../Constants/ApiEndPoints';

const GroupList = ({ groups, onGroupSelect }) => {
  const dispatch = useDispatch();

  const handleDelete = (e, groupId) => {
    e.preventDefault(); // Prevent the Link from being triggered
    e.stopPropagation(); // Stop the event from bubbling up
    console.log("Delete", groupId);
    // Add your delete logic here
    HitApi({ groupId: groupId }, leaveGroup, 'post').then(() => {
      dispatch(fetchUserGroups());
    })
  }

  return (
    <ul className="space-y-4">
      {Array.isArray(groups) && groups.length > 0 ? (
        groups.map((group) => (
          <li key={group?._id} className="bg-white border-[1px] rounded-xl overflow-hidden hover:drop-shadow-md">
            <Link to={`/app/groups/${group?._id}`}>
              <div
                className="p-4 flex justify-between items-start hover:cursor-pointer hover:shadow-xl"
                onClick={() => onGroupSelect(group?._id)}
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-xl font-bold text-gray-800">{group.name}</h2>
                    <div className="flex gap-3 items-center">
                      <span className="text-sm font-medium text-gray-500">ID: {group.groupId}</span>
                      <span
                        onClick={(e) => handleDelete(e, group?.groupId)}
                        className="text-sm font-medium text-gray-500 hover:text-red-500 z-40"
                      >
                        <IoExitOutline />
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-3">{group.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaUsers className="mr-1" />
                      <span>{group.members.length} members</span>
                    </div>
                    <div className="flex items-center">
                      <FaTasks className="mr-1" />
                      <span>{group.tasks.length} tasks</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p className="text-gray-500">No groups joined yet.</p>
      )}
    </ul>

  );
};

export default GroupList;
