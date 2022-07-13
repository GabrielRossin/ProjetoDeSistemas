import React, { memo } from 'react'

interface Props {
  profile: any
  provider: string
  // onLogout: () => void
}

export const User = memo(({ provider, profile }: Props) => {
  const avatar =
    profile?.avatar ||
    profile?.avatar_url ||
    profile?.picture?.data?.url ||
    profile?.profile_image_url_https 

  return (
    <div className='card'>
      <div className='avt'>
        <img alt='141' src={avatar} />
      </div>

      <h3 className='provider'>{provider.toUpperCase()}</h3>

      <div className='content'>
        <div className='data'>
          {Object.entries(profile).map(([key, value]: any) => (
            <div className='field' key={key}>
              <div className='label'>{key}: </div>
              <div className='value'>{JSON.stringify(value)}</div>
            </div>
          ))}
        </div>
        <button className='btnLogout'>
          Logout
        </button>
      </div>
    </div>
  )
})
