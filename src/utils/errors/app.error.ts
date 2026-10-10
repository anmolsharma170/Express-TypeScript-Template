export interface AppError extends Error{
    statusCode: number; 
}
//we cannot have multiple inhertence in typescript and also in java therefore we use interface
export class InternalServerError implements AppError{
    statusCode: number;
    message: string;
    name: string;
    constructor(message:string){
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalServerError";
    }
}

export class NotFoundError implements AppError{
    statusCode: number;
    message:string;
    name:string;
    constructor(message:string){
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError";
    }
}

export class BadRequestError implements AppError{
    statusCode: number;
    message:string  ;
    name:string;
    constructor(message:string){
        this.statusCode = 400;
        this.message = message;
        this.name = "BadRequestError";
    }   
}

export class UnauthorizedError implements AppError{
    statusCode: number;
    message:string  ;
    name:string;
    constructor(message:string){
        this.statusCode = 401;
        this.message = message;
        this.name = "UnauthorizedError";
    }
}
