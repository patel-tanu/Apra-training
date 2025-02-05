// import {Model} from '@nozbe/watermelondb';
// import { text, field } from '@nozbe/watermelondb/decorators';

// export default class TaskModel extends Model{
//     static table = 'task_table'

    
    
//     @text('task') task
//     @field('is_completed') isCompleted
    
// }

import { Model } from '@nozbe/watermelondb';
import { text, field } from '@nozbe/watermelondb/decorators';

export default class TaskModel extends Model {
    static table = 'task_table';
    //@ts-ignore
    @field('task') task 
    // @ts-ignore
    @field('is_completed') isCompleted 
}
