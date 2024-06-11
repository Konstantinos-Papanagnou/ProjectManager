import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Route to login page */}
        <Route path="/login" exact component={LoginPage} />
        {/* Redirect all other routes to login */}
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;


//const App = (): React.ReactElement => {
  //const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  //useEffect(() => {
    //buildGraphQLProvider
    //  .then((provider: any) => {
    //    setDataProvider(() => provider);
    //  })
    //  .catch((error: any) => {
    //    console.log(error);
   //   });
  //}, []);
  //if (!dataProvider) {
   // return <div>Loading</div>;
  //}
 // return (
  //  <div className="App">
  //    <Admin
  //      title={"CyberSecurityResourceManager"}
  //      dataProvider={dataProvider}
//        authProvider={jwtAuthProvider}
  //      theme={theme}
  //      dashboard={Dashboard}
  //      loginPage={Login}
  //    >
  //      <Resource
  //        name="Employee"
//          list={EmployeeList}
//          edit={EmployeeEdit}
//          create={EmployeeCreate}
 //         show={EmployeeShow}
 //       />
 //       <Resource
 //         name="Project"
 //         list={ProjectList}
 //         edit={ProjectEdit}
 //         create={ProjectCreate}
 //         show={ProjectShow}
 //       />
 //       <Resource
 //         name="Assignment"
 //         list={AssignmentList}
 //         edit={AssignmentEdit}
 //         create={AssignmentCreate}
 //         show={AssignmentShow}
//        />
//        <Resource
//          name="File"
//          list={FileList}
//          edit={FileEdit}
//          create={FileCreate}
//          show={FileShow}
//        />
//        <Resource
//          name="User"
//          list={UserList}
//          edit={UserEdit}
 //         create={UserCreate}
//          show={UserShow}
//        />
//      </Admin>
//    </div>
 // );
//};

//export default App;
