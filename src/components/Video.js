import React from 'react'

export default function Video({ title, views, like }) {

    return (
        <div className='videoWrap'>
            <div className='videoBox'>
                <img src="https://live.staticflickr.com/6171/6157929047_24fd39fd14_z.jpg" />
                <div className='title'>{title}</div>
                <div className='views'>Views {views}</div>
                <div className='like'>Like {like}</div>
            </div>
        </div>
    )
}
