import { MESSAGES } from '@/app/constants/generalConstants'

interface Props {
  timeToMakerequest: number
}

const HeaderStore = ({ timeToMakerequest }: Props) => {
  return (
    <div className="min-w-0 flex-1">
      <h2 className="text-2xl/7 font-bold text-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Tienda de maíz
      </h2>
      <span >
        {Math.round(timeToMakerequest) == 0 ?
          <p className='text-sm text-green-500'>{MESSAGES.YOU_CAN_BUY}</p>
          :
          <p className='text-sm text-red-500'>Puedes hacer una nueva compra en {Math.round(timeToMakerequest)} segundos</p>
        }

      </span>
    </div>
  )
}

export default HeaderStore