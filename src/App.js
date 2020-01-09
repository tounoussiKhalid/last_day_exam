import React from 'react';
import './App.css';
import StudentList from './components/StudentsList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
  render()
  {
    return(
        <div className="App">
          <StudentList></StudentList>
        </div>
    );
  }
}


export default App;
