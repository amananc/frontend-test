import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>

        <div className="descriptionbox-description">
            <p>This is the description of the descriptionbox-description div in DescriptionBox.jsx</p>
            <p>This is the 2nd description</p>
        </div>
    </div>
  )
}

export default DescriptionBox