import React from 'react'
import Image from 'next/image'
import ProfileImage from "../../../../public/images/profile-2.jpg";

const ProfileImg = () => {
  return (
    <div>
        <Image
         src={ProfileImage}
         alt='Profile Image'
         loading="eager"
          priority="high"
         />
    </div>
  )
}

export default ProfileImg