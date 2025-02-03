import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Database } from "@nozbe/watermelondb";
import { mySchema } from './schema';
import TaskModel from './Task';

const adapter = new SQLiteAdapter({
    schema: mySchema,
    onSetUpError: error => { 
        console.error("Database setup failed!", error);
    }
});

export const database = new Database({
    adapter,
    modelClasses:[TaskModel],
    actionEnabled:true,
});