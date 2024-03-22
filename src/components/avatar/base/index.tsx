import React from 'react'
import {DefaultAvatar, IAvatarProps} from "../";



const Avatar = ({src, className}: IAvatarProps) => {
  return (
    <div className="avatar">
      <div className={`${className? className : 'w-10 rounded-full object-cover'}`} >
        {
          src?
          <img src={src} alt='Avatar'/> :
          <DefaultAvatar /> 
        }
      </div>
    </div>
  )
}

export default Avatar
