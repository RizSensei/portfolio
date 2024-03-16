import CustomSocialLink from '@/components/Basic/CustomSocialLink'
import React from 'react'

const DiscordGrid = () => {
  return (
    <div className='flex justify-between'>
        <div className="flex items-center justify-center gap-2">
          <CustomSocialLink
            href="#"
            icon="skill-icons:discord"
            tooltip="Discord"
          />
          <h1 className="text-white text-sm font-normal">AlvarezTenshi#3575</h1>
        </div>
    </div>
  )
}

export default DiscordGrid