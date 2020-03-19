export class MessageToService{
    constructor(
        public token: string,
        public requestId: number,
        public user: string,
        public theme: string,
        public message: string,
        public objectId: number,
        public departmentId: number,
        public phone: string,
    ){}
}