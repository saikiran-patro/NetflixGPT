import React from 'react'

const Header = () => {
  return (
    <header className='max-w-[calc(83.33333333333334%-1.5rem)] px-[3rem] py-[1.5rem] m-auto relative'>
    <div className='w-[ 9.25rem]  h-[2.5rem] absolute z-[2] box-border  inherit h-auto'>
        
        <img src={require('../utils/images/logo.svg').default} className="w-[100%]" alt="Logo" />
    </div>
    </header>
  )
}

export default Header