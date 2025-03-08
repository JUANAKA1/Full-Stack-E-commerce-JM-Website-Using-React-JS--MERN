import React from 'react'
import { assets } from '../assets/assets'

const OutPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >Política de Cambio Fácil</p>
        <p className='text-gray-400' >Ofrecemos una política de cambio sin complicaciones.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >Política de Devolución</p>
        <p className='text-gray-400' >Dispones de 7 días para realizar devoluciones gratuitas.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >Mejor Atención al Cliente</p>
        <p className='text-gray-400' >Brindamos soporte al cliente las 24 horas, los 7 días de la semana.</p>
      </div>
    </div>
  )
}

export default OutPolicy
