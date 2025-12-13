import React from 'react'
import toast from 'react-hot-toast'

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <button className='btn btn-secondary' onClick={() => toast.error("Success Toast")}>Click</button>
        </div>
    )
}

export default HomePage