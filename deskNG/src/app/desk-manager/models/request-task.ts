import { Message } from './message';

export class RequestTask{
    constructor(
        public id: number,
        public theme: string,
        public user: string,
        public admin: string,
        public status: string,
        public shop: string,
        public phone: string,
        public dateOpen: string,
        public dateClose: string,
        public messages: Array<Message>,
    ){}
}