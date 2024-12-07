import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GroupsPanel from '../Components/App/GroupPanel/GroupPanel'
import Dashboard from '../Components/App/Dashboard/Dashboard'
import GroupTasks from '../Components/App/GroupPanel/GroupTask2'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={< Dashboard/>} />
            <Route path="/dashboard" exact element={< Dashboard/>} />
            <Route path="/groups" exact element={< GroupsPanel/>} />
            <Route path="/groups/:id" exact element={< GroupTasks/>} />
        </Routes>
    )
}
