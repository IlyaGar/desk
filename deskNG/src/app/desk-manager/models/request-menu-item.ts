import { RequestTask } from './request-task';
import { MenuItem } from 'src/app/vertical-menu/models/enum-menu-item';
// import { MenuItem } from 'src/app/vertical-menu/vertical-menu-form/vertical-menu-form.component';

export class RequestMenuItem{
    constructor(
        public requestTask: RequestTask,
        public menuItem: MenuItem,
    ){}
}