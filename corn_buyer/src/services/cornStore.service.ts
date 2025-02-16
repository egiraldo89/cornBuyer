'use server'
import { Purchase } from "@/app/dtos/purchase.dto";
import { api } from "@/axiosConfig";

export const cornPurchase = async(purchase:Purchase)=>{
    const purchaseResponse = await api.post('/purchase', purchase);
    return purchaseResponse.data;
}