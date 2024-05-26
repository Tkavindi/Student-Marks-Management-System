import React from 'react'
import TeacherSidebar from '../Sidebar/TeacherSidebar'
import NavigationBar from '../NavigationBar/NavigationBar'

import AddMarks from './AddMarks'
import ViewMarks from './ViewMarks'

const Teacherdashboard = () => (
  <>
    <TeacherSidebar></TeacherSidebar>

    <div className='w-100'>
      <NavigationBar Role='Teacher' Name='Ms.Tharusha Kavindi' />
      <AddMarks/>
    </div>

  </>
)

export default Teacherdashboard

