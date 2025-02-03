import {Model} from '@nozbe/watermelondb';
import { text, field } from '@nozbe/watermelondb/decorators';

export default class TaskModel extends Model{
    static table = 'task_table'

    // @field('uuid') uuid
    @text('task') task
    @field('is_completed') isCompleted
    @date('date') date
}
