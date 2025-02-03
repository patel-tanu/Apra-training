import {appSchema, tableSchema} from '@nozbe/watermelondb'

export const mySchema = appSchema({
    version : 1,
    tables:[
        tableSchema({
            name: 'task_table',
            columns:[
                // {name: "uuid", type: 'string', isPrimaryKey: true },
                {name: 'task', type:'string'},
                {name: 'is_completed', type:'boolean'},
                {name: 'date', type: 'number'}
            ]
        })
    ]
});