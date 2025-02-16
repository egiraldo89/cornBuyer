'use server'
import { api } from "@/axiosConfig";

export const rateLimiter = async()=>{
    const rateLimiterResponse = await api.get('');
    return rateLimiterResponse.data;
}