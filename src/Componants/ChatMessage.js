import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center border-b'>
      <img
        className="h-8 rounded-full"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt=""
      />
     <span className='font-semibold text-[14px] text-gray-600 mx-1'>{name}</span>
     <span className='text-[14px] '>{message}</span>
    </div>
  )
}

export default ChatMessage
