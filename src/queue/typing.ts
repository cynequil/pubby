export type FunctionPromise = () => Promise<any>;

export type QueueValue = Promise<any> | FunctionPromise;

export type CustomQueue = Map<string, WorkObject>;

export enum WorkState {
    NOTSTARTED = 'not-started',
    PENDING = 'pending',
    DEFERRED = 'deferred',
    STOPPED = 'stopped',
}

// export type WorkState = 'pending' | 'not-started' | 'deferred' | 'stopped' ;

export type WorkObject = {
    id: string,
    state: WorkState,
    work: QueueValue,
}

export type QueStatus = {
    size: number,
    inProcess: number,
}

export type MessageObject = {
    eventName: string;
    status: boolean;
    data: any;
    error: Error;
}

export type QueueEvents = 'success' | 'error';