import React from "react";
import './styles.css';

class SearchDropdown extends React.Component {
 
    render() {
        return (           
                <div className="tweet-container">
                <div className="row">  
                    <div className="c1">
                        <img src={this.props.profileImg} alt="profile"/>
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                </div>
            </div>

        )
    }
 
}
  export default SearchDropdown;