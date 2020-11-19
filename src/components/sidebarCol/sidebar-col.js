import React from 'react';
import Trends from '../trends/trends'
import SearchBar from '../search/searchBar'
import SearchDropdown from '../users/users'

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <SearchBar  />
            <SearchDropdown />
            < Trends />
            
        </div>
    )
}

export default SidebarCol;