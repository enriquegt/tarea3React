import React from "react";
import {users} from './usersDB';
import './styles.css';

class TwitterUsers extends React.Component {
    constructor() {
      super();
      this.state = {
        searchUser: "",
        users: users
      };
    }
  
    handleSearch = (evento) => {
      //Capturar lo que está escribiendo el usuario
      const user = evento.target.value;
      this.setState({ searchUser: user });
    };
  
    render() {
      return (
        <div className="container">
          <div className="row">
            
            <div className="col-md-7">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Buscar en Tweeter"
                  onChange={this.handleSearch}
                  value={this.state.searchUser}
                />
              </div>
            </form>
              <div className="list-group">
                {this.state.users
                  .filter((user) =>
                    user.profile
                      .toLowerCase()
                      .includes(this.state.searchUser.toLowerCase())
                  )
                  .map((user) => {
                    return (
                        <div className="tweet-container">
                        <div className="row">
                    
                                   <div className="c1">
                                           <img src={user.profileImg} alt="profile" />
                                       </div>
                    
                                      <div className="c2">
                                      <h6>{user.profile}</h6>
                                            <h6>{user.username}</h6>
                                  </div>
                    
                        </div>
                    </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default TwitterUsers;