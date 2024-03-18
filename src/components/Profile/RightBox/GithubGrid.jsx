import Bento from '@/components/Basic/Bento'
import CustomSocialLink from '@/components/Basic/CustomSocialLink'
import React from 'react'

const GithubGrid = () => {
  return (
    <Bento>
        <CustomSocialLink
          href="#"
          icon="codicon:github"
          tooltip="Github"
        />
        <h1>RizSensei</h1>
    </Bento>
  )
}

export default GithubGrid