import React from 'react'

const SectionEducacion = ({tittle, subTittle, content }) => {
  return (
    <>
        <h2 className='fw-bold mt-5'>{tittle}</h2>
        <h5 className='text-secondary m-0'>{subTittle}</h5>
        <p className='mt-4 fs-5 mt-0 fw-bolder'>{content}</p>
    </>
  )
}

export default SectionEducacion;
