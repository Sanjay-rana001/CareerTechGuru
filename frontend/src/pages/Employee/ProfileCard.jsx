import React from 'react'

const ProfileCard = () => {
  return (
    <div className='card my-3'>
        <div className="card-body flex flex-col items-center justify-center gap-2">
            <div className="col flex justify-center">
                <img src="https://i.pravatar.cc/300" alt="" className='size-36 rounded-circle' />
            </div>
            <button className='btn btn-primary'>Update profile</button>
        </div>
    </div>
  )
}

export default ProfileCard