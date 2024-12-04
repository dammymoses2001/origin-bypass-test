import React from 'react'

export default function Origin1() {
  return (
    <div>
      <div className='text-center text-3xl mt-3'>this is different origin without access</div>
      <iframe src="https://form-iframer.vercel.app/dashboard" title="Example iframe" frameBorder="0" width="100%" height="700"></iframe>
    </div>
  )
}
