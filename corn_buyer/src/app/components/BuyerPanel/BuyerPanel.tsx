'use client'
import { MESSAGES } from '@/app/constants/generalConstants';
import { Purchase } from '@/app/dtos/purchase.dto';
import {
    CheckIcon
} from '@heroicons/react/20/solid';
import { ChangeEvent, useState } from 'react';
import Toast from '../Toast/Toast';

interface emitProps {
    emitDocument: (mensaje: Purchase) => void;
}

const BuyerPanel = ({ emitDocument }: emitProps) => {

    const [document, setDocument] = useState<string>('')
    const [renderToast, setRenderToast] = useState(0)
    const [message, setMessage] = useState<{
        type: "info" | "error" | "success",
        message: string
    }>({ type: 'info', message: MESSAGES.YOU_CAN_BUY })

    const handleOnChangeDocument = (event: ChangeEvent<HTMLInputElement>) => {
        setDocument(event.target.value)
    }

    const handleOnClick = () => {
        if (!document) {
            setMessage({ type: 'info', message: 'debes ingresar tu documento para hacer la compra' })
            setRenderToast(renderToast + 1)
            return;
        }
        emitDocument({ document: document })
    }

    return (
        <div className="mt-3 mb-3 flex items-center">
            <input
                type="text"
                placeholder="Documento de identidad"
                className="border border-gray-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleOnChangeDocument}
            />

            <span className="sm:ml-3 pt-1">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleOnClick}
                >
                    <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
                    Comprar
                </button>
            </span>
            <Toast type={message.type} message={message.message} renderToast={renderToast} />
        </div>
    )
}

export default BuyerPanel