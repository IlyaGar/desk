export class MessageToService{
    constructor(
        public token: string,
        public requestId: number,
        public user: string,
        public theme: string,
        public message: string,
        public shop: string,
        public phone: string,
    ){}
}