import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



//백엔드에서 날라온 데이터가 성공적으로 프론트에 왔습니다!
function App () {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  // },[])
  return (
      <div className="App">
          <form action="/action_page.php">
              <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" placeholder="Enter email" id="email">
              </div>
              <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" id="pwd">
              </div>
              <div className="form-group form-check">
                  <label className="form-check-label">
                      <input className="form-check-input" type="checkbox"> Remember me
                  </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
  )
}


export default App;