export class SyncQueue extends Queue {

    constructor() {
        super();
    }

    processQueue(): void {
        
    }

    snapShot(): QueStatus {
        const obj: QueStatus = {size: 34, inProcess: 45};
        return obj;
    }

    addWork(name: QueueEvents, work: QueueValue): void {
        this.queue.set(name, work);
    }

    deferWork(): void {
        
    }

    resumeWork(): void {
        
    }

    subscribe(): void {
        
    }
}
