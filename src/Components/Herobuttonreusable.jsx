import React from 'react'

const Herobuttonreusable = ({ label }) => {
  return (
    <>
      <button
        className="px-5 py-2 bg-white text-black font-nicon text-[25px] font-bold rounded-lg capitalize"
      >
        {label}
      </button>
    </>
  )
}

export default Herobuttonreusable
