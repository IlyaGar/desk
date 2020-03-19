import { Department } from './departnent';

export class Shop{
    constructor(
        public id: number,
        public name: string,
        public departments: Array<Department>,
    ){}
}