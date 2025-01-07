import React from 'react'
import SideBar from '../../Components/SlideBar'

const SellerSideBar = () => {
    const items = ["Bookings","Edit Profile"]
  return (
    <SideBar details={items} />
  )
}

export default SellerSideBar