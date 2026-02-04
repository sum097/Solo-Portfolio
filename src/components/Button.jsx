import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a 
    onClick={(e) => {
      e.preventDefault();

      const target = document.getElementById('counter')

      if (target && id){
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo( {top, behavior: 'smooth'} )
      }

    }}
    className={`${className ?? ''} cta-wrapper group`} id={id}>
        <div className="cta-button min-w-48 md:min-w-60">
            <div className='bg-circle' />
            <p className='text whitespace-nowrap'>{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button