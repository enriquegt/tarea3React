import React from 'react';

const Account = (props) => {
    return (
        <div className="t-profile-img">
            <img src={props.profileUrl} alt="icono" />
        </div>
    )
}

export default Account;