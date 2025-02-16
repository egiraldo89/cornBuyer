"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props{
    type: "info" | "error" | "success", 
    message: string,
    renderToast:number
}

export default function Toast({type, message, renderToast}:Props) {

    useEffect(()=>{
        console.log('renderToast', renderToast);
        
        handleShowAlert(type, message)
    }, [renderToast])

    const handleShowAlert = (type: "info" | "error" | "success", message: string) => {
        switch (type) {
            case "success":
                toast.success(message, { position: "top-right" });
                break;
            case "error":
                toast.error(message, { position: "top-right" });
                break;
            case "info":
                toast.info(message, { position: "top-right" });
                break;
            default:
                toast(message, { position: "top-right" });
        }
    };

    return (
        <>
            <ToastContainer />
        </>
    );
}
