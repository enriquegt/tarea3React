import React from "react";
import Icon from '../icon/icon';
import {users} from '../users/usersDB';
import SearchDropdown from '../users/users'
import {
    SearchSolid
} from "@graywolfai/react-heroicons";
import './styles.css'

class searchBar extends React.Component {
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
            <div className="container-search">
                <div className="icoBuscar"> <Icon source={< SearchSolid />}/> </div>
                <form className="form-search">
                <input placeholder=  "Buscar en Twitter" 
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    onChange={this.handleSearch}
                    value={this.state.searchUser}
                />

                    {this.state.users
                  .filter((user) =>
                    user.profile
                      .toLowerCase()
                      .includes(this.state.searchUser.toLowerCase())
                  )
                  .map((user, index) => {
                      return ( 
                        <SearchDropdown key={index} 
                            profileImg= {user.profileImg}
                            profile= {user.profile}
                            username= {user.username}
                        /> 
                        )
                  })}
        
                </form>

            </div>
        );
    }
}

export default searchBar;