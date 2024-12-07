import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import GroupsPanel from '../Components/App/GroupPanel/GroupPanel'
// import GroupTasks from '../Components/App/GroupPanel/GroupTask2'
// import Dashboard from '../Components/App/Dashboard/Dashboard'
import Authentication from '../Components/Home/Authentication'
import LoginComponent from '../Components/Home/Login'
// import GroupTasks from '../Components/App/GroupPanel/GroupTask2'
import LandingPage from '../Components/Home/Landing Page/LandingPage'
import AppLayout from '../Components/App/Layout'
import SignUpComponent from '../Components/Home/Signup'

export default function CustomRoutes() {
    return (
        <Routes>
            
            <Route path="/" exact element={< LandingPage/>} />
            <Route path="/auth/" exact element={< Authentication/>} />
            <Route path="/login/" exact element={<LoginComponent/>} />
            <Route path="/signup/" exact element={<SignUpComponent/>} />
            <Route path="/app/*" exact element={<AppLayout/>} />
            {/* <Route path="/app/" exact element={< Dashboard/>} />
            <Route path="/app/dashboard" exact element={< Dashboard/>} />
            <Route path="/app/groups" exact element={< GroupsPanel/>} />
            <Route path="/app/groups/:id" exact element={< GroupTasks/>} /> */}
        </Routes>
    )
}
