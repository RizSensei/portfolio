import Link from 'next/link';
import React from 'react'

const CustomSocialLink = ({ href, icon, tooltip }) => {
    return (
      <Link href={href} target={"_blank"} className="group relative ">
        <iconify-icon icon={icon} width="24px"></iconify-icon>
      </Link>
    );
  };

export default CustomSocialLink