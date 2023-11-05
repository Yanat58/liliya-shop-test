import {instagram, call} from '../assets'

const Advertisement = () => {
  return (
    <div className="max-w-full mx-auto flex justify-between items-center text-black font-montserrat font-normal  leading-normal ">
    <a
      className="flex flex-row gap-1"
      href="https://instagram.com/liliya.drohobych?igshid=OGQ5ZDc2ODk2ZA=="
    >
      <img src={instagram} alt="instagram" width={18} height={18} />
      &#64;liliya.drohobych
    </a>
    <p className="">
      Від сьогодні до кінця літа 50% на другу пару взуття!
    </p>
    <a
    className="flex flex-row gap-1" 
    href="tel: +380980000000">
    <img src={call} alt="call" width={18} height={18} />
      +38 098 00 00 000
    </a>
  </div>
  )
}

export default Advertisement
