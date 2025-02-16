'use client'
import { cornPurchase } from '@/services/cornStore.service'
import { rateLimiter } from '@/services/rateLimiter.service'
import { HttpStatusCode } from 'axios'
import { useEffect, useState } from 'react'
import BuyerPanel from './components/BuyerPanel/BuyerPanel'
import HeaderStore from './components/Header/HeaderStore'
import Indicators from './components/Indicators/Indicators'
import Toast from './components/Toast/Toast'
import { MESSAGES } from './constants/generalConstants'
import { Purchase } from './dtos/purchase.dto'


export default function Home() {

  const [lastDateRequest, setLastDateRequest] = useState(0)
  const [numberOfPurchase, setNumberOfPurchase] = useState(0)
  const [rate, setRateLimiter] = useState(0)
  const [timeToMakerequest, setTimeToMakerequest] = useState(0)
  const [messageToast, setMessage] = useState<{
    type: "info" | "error" | "success",
    message: string
  }>({ type: 'info', message: MESSAGES.YOU_CAN_BUY })
  const [renderToast, setRenderToast] = useState(0)

  useEffect(() => {
    getRateLimiter();
  }, [])

  useEffect(() => {
    if (timeToMakerequest <= 0) return;
    const intervalId = setInterval(() => {
      setTimeToMakerequest(timeToMakerequest - 1)
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeToMakerequest])


  const getRateLimiter = async () => {
    const { code, data } = await rateLimiter()
    if (code == HttpStatusCode.Ok) {
      setRateLimiter(data)
    }
  }

  const getDocument = async (document: Purchase) => {
    try {
      const { code, message, data } = await cornPurchase(document)
      const currentDateLessrate = (Date.now() - rate);

      if (code == HttpStatusCode.Ok && data) {
        setTimeToMakerequest((data.lastDateRequest - currentDateLessrate) / 1000)
        setMessage({ type: 'success', message: message })
        setRenderToast(renderToast + 1)

        setLastDateRequest(data.lastDateRequest)
        setNumberOfPurchase(data.numberOfPurchase)
      }

      if (code == HttpStatusCode.TooManyRequests) {
        setTimeToMakerequest((lastDateRequest - currentDateLessrate) / 1000)
        setMessage({ type: 'error', message: message })
        setRenderToast(renderToast + 1)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <HeaderStore timeToMakerequest={timeToMakerequest} />
      <BuyerPanel emitDocument={getDocument} />
      <Indicators lastDateRequest={lastDateRequest} numberOfPurchase={numberOfPurchase} />
      <Toast type={messageToast.type} message={messageToast.message} renderToast={renderToast} />
    </div>
  )
}
