export class RequestToService{
    constructor(
        public token: string,
        public user: string,
        public theme: string,
        public message: string,
        public shop: string,
    ){}
}