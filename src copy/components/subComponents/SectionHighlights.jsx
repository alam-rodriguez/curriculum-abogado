import React from 'react'

const SectionHighlights = ({tittle, level}) => {
  return (
    <>
        <p className='mt-4 fs-4 fw-bolder'>{tittle}</p>
        <div className="progress rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'25px', border: '#3254ab 3px solid'}}>
            <div className="progress-bar" style={{width:`${level}%`, background:'#3254ab'}}></div>
        </div>
    </>
  )
}

export default SectionHighlights
