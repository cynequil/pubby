type FunctionPromise = () => Promise<any>;

type QueueValue = Promise<any> | FunctionPromise;

type QueStatus = {
    size: number,
    inProcess: number,
}

interface QueueInterface {
    queue: Map<string, QueueValue>;
    startProcessing: () => void;
    queStatus: () => QueStatus;
    addWork: (name: string, work: QueueValue) => void
}

export class SyncQueue extends EventTarget implements QueueInterface {

    queue: Map<string, QueueValue>;

    constructor() {
        super();
        this.queue = new Map();
    }

    startProcessing(): void {
        this
    }

    queStatus(): QueStatus {
        return {
            size: 0,
            inProcess: 0,
        }
    }

    addWork(name: string, work: QueueValue): void {
        this.queue.set(name, work);
    }
}

// export class AsyncQueue extends Queue {
//     protected queue: Map<string, Function | Promise<any>>;

//     constructor() {
//         super();
//         this.queue = new Map();
//     }
// }