import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupList from './GroupList';
import { fetchUserGroups, setSelectedGroup } from '../../../Redux/Action/actions';
import Modal from '../Modal';
import { HitApi } from '../../../Utils/ApiCall';
import { createGroup, joinGroup } from '../../../Constants/ApiEndPoints';

const GroupsPanel = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groupReducer?.groups);
  // const selectedGroupId = useSelector((state) => state.groupReducer.selectedGroupId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'join' or 'create'

  useEffect(() => {
    dispatch(fetchUserGroups());
  }, [dispatch]);

  const handleGroupSelect = (groupId) => {
    dispatch(setSelectedGroup(groupId));
  };

  const handleModalOpen = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleJoinGroupSubmit = (e) => {
    e.preventDefault();
    const groupId = e.target.groupId.value;
    HitApi({groupId: groupId}, joinGroup, 'post').then(() => {
      dispatch(fetchUserGroups());
    console.log('Joining group:', groupId);
    // After successful API call:
    handleModalClose();
    })
    
  };

  const handleCreateGroupSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    HitApi({name: title, description: description},createGroup, 'post').then(() => {
      dispatch(fetchUserGroups());
    console.log('Creating group:', title, description);
    // After successful API call:
    handleModalClose();
    })
    
  };

  return (
    <div className="w-full h-screen p-6 max-w-6xl mx-auto bg-gray-100 shadow-lg relative">
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-extrabold text-4xl '>My Groups</h1>
          <p className='text-sm'>You have joined {groups?.length} groups</p>
        </div>
        <div className='flex space-x-4'>
          <button 
            onClick={() => handleModalOpen('join')} 
            className="bg-white text-black border border-black px-4 py-2 rounded-xl hover:bg-slate-50"
          >
            Join Group
          </button>
          <button 
            onClick={() => handleModalOpen('create')} 
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-slate-900"
          >
            Create Group
          </button>
        </div>
      </div>

      <div className='mt-10 w-10/12'>
        <GroupList groups={groups} onGroupSelect={handleGroupSelect} />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} title={modalType === 'join' ? 'Join Group' : 'Create Group'}>
        {modalType === 'join' ? (
          <form onSubmit={handleJoinGroupSubmit}>
            <label className="block mb-2">
              Group ID:
              <input type="text" name="groupId" className="mt-1 p-2 w-full border rounded" required />
            </label>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Join Group
            </button>
          </form>
        ) : (
          <form onSubmit={handleCreateGroupSubmit}>
            <label className="block mb-2">
              Title:
              <input type="text" name="title" className="mt-1 p-2 w-full border rounded" required />
            </label>
            <label className="block mb-2">
              Description:
              <textarea name="description" className="mt-1 p-2 w-full border rounded" required />
            </label>
            <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Create Group
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default GroupsPanel;
