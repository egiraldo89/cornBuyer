import {
    BriefcaseIcon,
    CalendarIcon
} from '@heroicons/react/20/solid'

interface Props {
    numberOfPurchase: number,
    lastDateRequest: number
}

const Indicators = ({ numberOfPurchase, lastDateRequest }: Props) => {
    return (
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
                <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                Haz comprado {numberOfPurchase} veces
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                Última compra: {new Date(lastDateRequest).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
            </div>
        </div>
    )
}

export default Indicators