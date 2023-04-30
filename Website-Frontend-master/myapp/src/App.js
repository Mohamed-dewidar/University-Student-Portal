import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./GeneralComponents/Login.component"
import Logout from "./GeneralComponents/Logout"
import Profile from "./GeneralComponents/Profile.component"
import UpdateProfile from "./GeneralComponents/UpdateProfile"
import ResetPassword from "./GeneralComponents/ResetPassword"

import HrHome from "./HrComponents/HrHome.component"
import AddLocation from "./HrComponents/AddLocation"
import UpdateLocation from "./HrComponents/UpdateLocation"
import DeleteLocation from "./HrComponents/DeleteLocation"
import AddFaculty from "./HrComponents/AddFaculty"
import UpdateFaculty from "./HrComponents/UpdateFaculty"
import DeleteFaculty from "./HrComponents/DeleteFaculty"
import AddDepartment from "./HrComponents/AddDepartment"
import UpdateDepartment from "./HrComponents/UpdateDepartment"
import DeleteDepartment from "./HrComponents/DeleteDepartment"
import AddCourse from "./HrComponents/AddCourse"
import UpdateCourse from "./HrComponents/UpdateCourse"
import DeleteCourse from "./HrComponents/DeleteCourse"
import AddStaff from "./HrComponents/AddStaff"
import UpdateStaff from "./HrComponents/UpdateStaff"
import DeleteStaff from "./HrComponents/DeleteStaff"
import UpdateSalary from "./HrComponents/UpdateSalary"
import StaffAttendace from "./HrComponents/StaffAttendace"

import HodHome from "./AcComponents/HodHome.component"
import AssignInstructor from "./AcComponents/AssignInstructor"
import UpdateInstructor from "./AcComponents/UpdateInstructor"
import DeleteInstructor from "./AcComponents/DeleteInstructor"
import ViewStaffDepartment from "./AcComponents/ViewStaffDepartment"
import AllStaffDayoff from "./AcComponents/AllStaffDayoff"
import SignleStaffDayoff from "./AcComponents/SignleStaffDayoff"
import ViewRequests from "./AcComponents/ViewRequests"
import ManageRequest from "./AcComponents/ManageRequest"



///////Coordinator//////
import CoordinatorHome from "./AcComponents/CoordinatorHome"
import ViewLinkReq from "./AcComponents/ViewLinkReq"
import ManageLinkReq from "./AcComponents/ManageLinkReq"
import AddCourseSlot from "./AcComponents/AddCourseSlot"
import DeleteCourseSlot from "./AcComponents/DeleteCourseSlot"
import UpdateCourseSlot from "./AcComponents/UpdateCourseSlot"




////Instructor////
import InstructorHome from "./AcComponents/InstructorHome"
import CourseCoverage from "./AcComponents/CourseCoverage"
import SlotAssignment from "./AcComponents/SlotAssignment"
import ViewSlots from "./AcComponents/ViewSlots"


///TA HOME//
import TaHome from "./AcComponents/TaHome"




//ALL ACADEMIC//
import ViewSchedule from "./AcComponents/ViewSchedule"
import LinkRequest from "./AcComponents/LinkRequest"
import ChangeDayoff from "./AcComponents/ChangeDayoff"
import LeaveRequest from "./AcComponents/LeaveRequest"

//404 NOT FOUND///
import NotFound from "./GeneralComponents/NotFound"








var flag = localStorage.getItem('auth')

export default function App() {

  console.log(localStorage.getItem('auth'))
  if (flag !== 'true') {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="*" component={Login} />
        </Switch>
      </Router>

    )
  }
  else {

    if (localStorage.getItem('role') === 'hr') {
      return (

        <Router>
          <Switch>
            <Route path="/HrHome" component={HrHome} />
            <Route  path="/AddLocation" component={AddLocation} />
            <Route path="/UpdateLocation" component={UpdateLocation} />
            <Route  path="/DeleteLocation" component={DeleteLocation} />
            <Route  path="/AddFaculty" component={AddFaculty} />
            <Route  path="/UpdateFaculty" component={UpdateFaculty} />
            <Route  path="/DeleteFaculty" component={DeleteFaculty} />
            <Route  path="/AddDepartment" component={AddDepartment} />
            <Route  path="/UpdateDepartment" component={UpdateDepartment} />
            <Route  path="/DeleteDepartment" component={DeleteDepartment} />
            <Route  path="/AddCourse" component={AddCourse} />
            <Route  path="/UpdateCourse" component={UpdateCourse} />
            <Route  path="/DeleteCourse" component={DeleteCourse} />
            <Route  path="/AddStaff" component={AddStaff} />
            <Route  path="/UpdateStaff" component={UpdateStaff} />
            <Route  path="/DeleteStaff" component={DeleteStaff} />
            <Route  path="/UpdateSalary" component={UpdateSalary} />
            <Route  path="/StaffAttendace" component={StaffAttendace} />
            <Route  exact path="/" component={Login} />
            <Route path="/Logout" component={Logout} />
            <Route path="/Profile" component={Profile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route  path="/ViewSchedule" component={ViewSchedule} />
            <Route  path="/LinkRequest" component={LinkRequest} />
            <Route  path="/ChangeDayoff" component={ChangeDayoff} />
            <Route  path="/LeaveRequest" component={LeaveRequest} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      )
    }
    if (localStorage.getItem('role') === 'hod') {
      return (
        <Router>
          <Switch>
            <Route path="/HodHome" component={HodHome} />
            <Route  path="/AssignInstructor" component={AssignInstructor} />
            <Route  path="/UpdateInstructor" component={UpdateInstructor} />
            <Route  path="/DeleteInstructor" component={DeleteInstructor} />
            <Route  path="/ViewStaffDepartment" component={ViewStaffDepartment} />
            <Route  path="/AllStaffDayoff" component={AllStaffDayoff} />
            <Route  path="/SignleStaffDayoff" component={SignleStaffDayoff} />
            <Route  path="/ViewRequests" component={ViewRequests} />
            <Route  path="/ManageRequest" component={ManageRequest} />
            <Route exact path="/" component={Login} />
            <Route path="/Logout" component={Logout} />
            <Route  path="/Profile" component={Profile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route  path="/ViewSchedule" component={ViewSchedule} />
            <Route  path="/LinkRequest" component={LinkRequest} />
            <Route  path="/ChangeDayoff" component={ChangeDayoff} />
            <Route  path="/LeaveRequest" component={LeaveRequest} />
            <Route path="*" component={NotFound} />

          </Switch>
        </Router>
      )
    }

    if (localStorage.getItem('role') === 'instructor') {
      return (
        <Router>
          <Switch>
            <Route  path="/InstructorHome" component={InstructorHome} />
            <Route  path="/CourseCoverage" component={CourseCoverage} />
            <Route  path="/SlotAssignment" component={SlotAssignment} />
            <Route  path="/ViewSlots" component={ViewSlots} />
            <Route exact path="/" component={Login} />
            <Route path="/Logout" component={Logout} />
            <Route path="/Profile" component={Profile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route  path="/ViewStaffDepartment" component={ViewStaffDepartment} />
            <Route  path="/ViewSchedule" component={ViewSchedule} />
            <Route  path="/LinkRequest" component={LinkRequest} />
            <Route  path="/ChangeDayoff" component={ChangeDayoff} />
            <Route  path="/LeaveRequest" component={LeaveRequest} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      )
    }

    if (localStorage.getItem('role') === 'coordinator') {
      return (
        <Router>
          <Switch>
            <Route  path="/CoordinatorHome" component={CoordinatorHome} />
            <Route  path="/ViewLinkReq" component={ViewLinkReq} />
            <Route  path="/ManageLinkReq" component={ManageLinkReq} />
            <Route exact path="/" component={Login} />
            <Route path="/Logout" component={Logout} />
            <Route path="/Profile" component={Profile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route  path="/ViewSchedule" component={ViewSchedule} />
            <Route  path="/LinkRequest" component={LinkRequest} />
            <Route  path="/ChangeDayoff" component={ChangeDayoff} />
            <Route  path="/LeaveRequest" component={LeaveRequest} />
            <Route  path="/AddCourseSlot" component={AddCourseSlot} />
            <Route  path="/DeleteCourseSlot" component={DeleteCourseSlot} />
            <Route  path="/UpdateCourseSlot" component={UpdateCourseSlot} />
            <Route path="*" component={NotFound} /> 
          </Switch>
        </Router>
      )
    }

    if (localStorage.getItem('role') === 'ta') {
      return (
        <Router>
          <Switch>
            <Route  path="/TaHome" component={TaHome} />
            <Route exact path="/" component={Login} />
            <Route path="/Logout" component={Logout} />
            <Route path="/Profile" component={Profile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route exact path="/ViewSchedule" component={ViewSchedule} />
            <Route exact path="/LinkRequest" component={LinkRequest} />
            <Route exact path="/ChangeDayoff" component={ChangeDayoff} />
            <Route exact path="/LeaveRequest" component={LeaveRequest} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      )
    }
  }

}


