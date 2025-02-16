import { HttpStatus } from "@nestjs/common";
import { GENERAL_RESPONSES_MESSAGES } from "../constants/generalConstants";
import { Response } from './Response';
export class GeneralResponse {

    public static SUCCESFULL_RESPONSE(message?, data?): Response<any> {
        return {
            code: HttpStatus.OK,
            message: message ? message : '',
            data: data ? data : ''
        }
    }

    public static BAD_REQUEST(message?, data?): Response<any> {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: message ? message : '',
            data: data ? data : []
        }
    }

    public static NOT_FOUND(message): Response<any> {
        return {
            code: HttpStatus.NOT_FOUND,
            message: message ? message : '',
        }
    }

    public static INTERNAL_SERVER_ERROR(message?, data?): Response<any> {
        return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            message: message ? message : '',
            data: data ? data : []
        }
    }

    public static TOO_MANY_REQUESTS(): Response<any> {
        return {
            code: HttpStatus.TOO_MANY_REQUESTS,
            message: GENERAL_RESPONSES_MESSAGES.EXCESSIVE_REQUESTS,
        }
    }
}