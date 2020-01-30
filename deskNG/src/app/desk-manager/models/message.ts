import { Picture } from './picture';

export class Message{
    constructor(
        public id: number,
        public messageText: string,
        public autor: string,
        public date: string,
        public requestTaskId: number,
        public pictures: Array<Picture>,
    ){}
}