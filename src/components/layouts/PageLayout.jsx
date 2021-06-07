import React from 'react'
import NavbarTop from '../navbar/NavbarTop'
import Sidebar from '../sidebar/Sidebar'
const PageLayout = ({ children }) => {
    return (
        <div>
            <NavbarTop />
            <Sidebar />
            {children}
        </div>
    )
}
export default PageLayout;