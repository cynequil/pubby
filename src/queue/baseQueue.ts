import * as Q from './typing';


export abstract class Queue{
    
    protected queue: Q.CustomQueue = new Map<string, Q.WorkObject>();
    protected bufferQueue: Q.CustomQueue = new Map<string, Q.WorkObject>();
    protected errorQueue:  Q.CustomQueue = new Map<string, Q.WorkObject>(); 
    
    channel: EventTarget = new EventTarget();

    abstract processQueue(): void;
    abstract snapShot(): Q.QueStatus;
    abstract pauseQueue(): void;
    abstract resumeWork(): void;
    abstract subscribe(): void;  

    protected notify(eventName: Q.QueueEvents, message: any | Error){
        const check: boolean = (eventName === 'success') ? true:  false;

        const eventInformation: Q.MessageObject = {
            eventName,
            status: check,
            error: !check ? message : null,
            data: check ? message : null,
        }
        this.channel.dispatchEvent(new CustomEvent(eventName, {detail: eventInformation}));
    };

    protected addWork(name: string, work: Q.QueueValue){
        this.queue.set(name,this.createWorkObject(name, work));
    }

    protected deferWork(name:string, timeOut?: number | null = null){
        if(!this.queue.has(name)){
            /**
             * Some syntax to throw warning
             */
        }
        if(this.bufferQueue.has(name)){
            /**
             * Return with some warning
             */
        }

        const work: Q.WorkObject = this.queue.get(name);

        work.state = Q.WorkState.DEFERRED;

        this.bufferQueue.set(name, )


    }

    protected createWorkObject(name: string, work: Q.QueueValue): Q.WorkObject{
        return {
            id: name,
            state: Q.WorkState.NOTSTARTED,
            work,
        }
    }

}