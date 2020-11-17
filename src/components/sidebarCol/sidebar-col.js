import React from 'react';
import Trends from '../trends/trends'
import SearchBar from '../search/searchBar'
import TwitterUsers from '../users/users'

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            {/* <SearchBar  /> */}
            < Trends />
            <TwitterUsers />
        </div>
    )
}

export default SidebarCol;