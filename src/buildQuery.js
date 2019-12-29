{
    types: [
        {
            name: 'Post',
            kind: 'OBJECT',
            fields: [
                { name: 'id', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'ID' } } },
                { name: 'title', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'String' } } },
                ...
            ]
        },
        ...
    ],
    queries: [
        {
            name: 'createPost',
            args: [
                { name: 'title', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'String' } } }
            ],
            type : { kind: 'OBJECT', name: 'Category' }
        },
        ...
    ],
    resources: [
        {
            type: {
                name: 'Post',
                kind: 'OBJECT',
                fields: [
                    { name: 'id', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'ID' } } },
                    { name: 'title', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'String' } } },
                    ...
                ]
            },
            GET_LIST: {
                name: 'createPost',
                args: [
                    { name: 'title', type: { kind: 'NON_NULL', ofType: { kind: 'SCALAR', name: 'String' } } }
                ],
                type : { kind: 'OBJECT', name: 'Category' }
            },
            ...
        }
    ],
    schema: {} // Omitting for brevity
}