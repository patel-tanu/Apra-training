import {appSchema, tableSchema} from '@nozbe/watermelondb'

export const mySchema = appSchema({
    version : 1,
    tables:[
        tableSchema({
            name: 'task_table',
            columns:[
                
                {name: 'task', type:'string'},
                {name: 'is_completed', type:'boolean'},
               
            ]
        })
    ]
});