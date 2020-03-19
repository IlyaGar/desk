import { Shop } from './object-item';

export class Department{
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public shopId: number,
    ){}
}