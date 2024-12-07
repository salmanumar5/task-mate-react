import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
// import { FaRegCircle } from "react-icons/fa6";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { FaRegCalendarCheck, FaRegFlag, FaBell, FaEllipsisH, FaInbox, FaChevronDown } from 'react-icons/fa';
// import { GiCircle } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { PiPencilSimpleLineThin, PiTrashSimpleThin } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupDetails } from '../../../Redux/Action/actions';
import { HitApi } from '../../../Utils/ApiCall';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../Utils/Firebase';

const GroupTasks = () => {
    const selectedGroupId = useSelector(state => state.groupReducer?.selectedGroupId);
    const currentUserId = useSelector(state => state.groupReducer?.currentUserId);
    console.log("Grp Id", selectedGroupId);
    console.log("user Id", currentUserId);
    const dispatch = useDispatch();
    const groupDetails = useSelector((state) => state.groupReducer?.groupDetails);
    console.log("GroupDetails", groupDetails);
    const [addTask, setAddTask] = useState(false);
    const [taskData, setTaskData] = useState({});

    const [isDropdownOpen, setIsDropdownOpen] = useState({});
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [file, setFile] = useState(null);

    const handleDropdownToggle = (taskId) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (taskId) => {
        if (!file) return;
    
        try {
            // Step 1: Upload file to Firebase Storage
            const storageRef = ref(storage, `tasks/${taskId}/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const fileUrl = await getDownloadURL(snapshot.ref);
            console.log("Resource url::", fileUrl);
            
            // Step 2: Save the resource URL to the task
            await HitApi({ resources: { name: file.name, url: fileUrl} }, `http://localhost:5001/api/tasks/task/${taskId}`, 'post').then((response) => {
                // Step 3: Refresh task details
            dispatch(fetchGroupDetails(selectedGroupId));
            setFile(null); // Reset file state
            console.log(response);
            
            })
    
            
        } catch (err) {
            console.error("Error uploading file:", err);
        }
    };

    //   const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            await dispatch(fetchGroupDetails(selectedGroupId));
            //   setLoading(false);
        };

        fetchDetails();
    }, [dispatch, selectedGroupId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        HitApi(taskData, `http://localhost:5001/api/tasks/group/${selectedGroupId}/task`, 'post').then(() => {
            dispatch(fetchGroupDetails(selectedGroupId));
            setAddTask(false);
            setTaskData({});
        }).catch((err) => {
            console.log("Error:", err);
        })

    }

    const toggle = () => {
        setAddTask(!addTask)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevState) => ({
            ...prevState,  // Keep all previous key-value pairs
            [name]: value, // Update the specific key with the new value
        }));
    };

    const toggleTaskCompletion = async (taskId) => {
        try {
            console.log("taskId coming:", taskId);

            const response = await HitApi({}, `http://localhost:5001/api/tasks/${taskId}/complete`, 'post');
            console.log("Response from hitApi", response);

            dispatch(fetchGroupDetails(selectedGroupId));
        } catch (err) {
            console.log("Error:", err);
        }
    };

    const handleTaskDelete = async (taskId) => {
        try {
            await HitApi({}, `http://localhost:5001/api/tasks/task/delete/${taskId}`, 'post').then((response) => {
                dispatch(fetchGroupDetails(selectedGroupId));
                console.log("Response from hitApi", response);
            })
        } catch (error) {
            console.log("Error:", error);
            
        }
    }
    console.log("Task Form", taskData);

    return (
        <div className='flex flex-col mx-60 my-20'>
            <div>
                <h1 className='text-2xl font-bold mb-2'>{groupDetails?.name}</h1>
                <div className='flex items-center gap-2 text-gray-400 text-sm font-light'>
                    <div className=''><FaRegCheckCircle /></div>
                    <div>{groupDetails?.tasks?.length} Tasks</div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex items-center gap-1'>
                    <div className=''><IoIosArrowDown /></div>
                    <div className='font-bold'>Tasks</div>
                </div>

                <div className='h-[1px] bg-gray-200 rounded-3xl' />
                {groupDetails?.tasks?.map((task) => (
                    <div>

                        <div key={task?._id} className='flex gap-3 p-2 group'>
                            <div className='pt-1'>
                                <div
                                    onClick={() => toggleTaskCompletion(task?._id)}
                                    className={`flex items-center justify-center w-4 h-4 rounded-full border transition-all ${task?.completedUsers?.some(user => user.user === currentUserId) ? 'border-green-500' : 'group-hover:border-blue-500'}`}
                                >
                                    <IoMdCheckmark className={`text-lg ${task?.completedUsers?.some(user => user.user === currentUserId) ? 'text-green-500' : 'text-gray-400 opacity-0 group-hover:opacity-50'}`} />
                                </div>
                            </div>
                            <div className='flex w-full justify-between'>
                                <div>
                                    <div className={`font-light ${task?.status === "completed" ? "line-through text-gray-400" : ""}`}>{task?.title}</div>
                                    <div className={`text-xs font-light ${task?.status === "completed" ? "line-through" : ""} text-gray-400`}>{task?.description}</div>
                                    <div className='flex gap-1 items-center text-xs text-red-400 mt-1'>
                                        <div><SlCalender /></div>
                                        <div className='font-light'>{task?.dueData}</div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <button
                                        onClick={() => handleDropdownToggle(task._id)}
                                        className='text-blue-500 hover:underline'>
                                        Resources
                                    </button>
                                    {isDropdownOpen[task._id] && (
                                        <div className='absolute bg-white border p-2 rounded shadow-md z-10'>
                                            <div className='flex'>
                                            <input type="file" onChange={handleFileChange} />
                                            <button
                                                onClick={() => handleFileUpload(task._id)}
                                                className='bg-blue-500 text-white px-2 py-1 mt-2 rounded'>
                                                Upload
                                            </button>
                                            </div>
                                            <ul className='mt-2'>
                                                {task.resources.map((resource, index) => (
                                                    <li key={index}>
                                                        <a href={resource.url} target='_blank' rel='noopener noreferrer'>
                                                            {resource.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className=''>
                                    <div className='flex'>
                                        <div onClick={() => handleTaskDelete(task._id)} className='hover:text-red-500'><PiTrashSimpleThin /></div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className='h-[1px] bg-gray-200 px-10 rounded-3xl' />
                    </div>
                ))}
                <button onClick={toggle} className="mt-4 text-sm text-blue-500 hover:text-blue-600">
                    + Add new task
                </button>
                {addTask && <div className='border-[1px] w-full rounded-lg'>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 w-full">
                        <input
                            type="text"
                            name='title'
                            placeholder="Task name"
                            value={taskData.title || ""}
                            onChange={handleOnChange}
                            className="w-full mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            name='description'
                            placeholder="Description"
                            value={taskData.description || ""}
                            onChange={handleOnChange}
                            className="w-full mb-4 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-2">
                                <label>Due Date: </label>
                                <input
                                    type='date'
                                    name='dueData'
                                    placeholder='Due Date'
                                    value={taskData.dueData || ""}
                                    onChange={handleOnChange} />
                                <label>Prioirity: </label>
                                <select name="priority" onChange={handleOnChange}>
                                    <option default></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <div>
                                <button onClick={toggle} type="button" className="mr-2 text-gray-500 hover:text-gray-700">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                >
                                    Add task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
            </div>
        </div>
    );
};

export default GroupTasks;
