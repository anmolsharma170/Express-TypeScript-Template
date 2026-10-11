import  {AsyncLocalStorage} from "async_hooks";

type AsyncLocalStorageType = {
    correlationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>(); // created an instance of async local storage

export const getCorrelationId=()=>{
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || 'Unknown error while creating correlation id';
}




