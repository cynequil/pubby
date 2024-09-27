export class AsyncQueue extends Queue{

    constructor(){
        super();
    }

    processQueue(): void {
        
    }

    snapShot(): QueStatus {
        return {size: 12, inProcess: 56};
    }

    deferWork(): void {
    }
    
    
    resumeWork(): void {
        
    }

    subscribe(): void {
        
    }
}