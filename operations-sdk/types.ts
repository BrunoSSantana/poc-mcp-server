export default {
    "scalars": [
        0,
        3,
        6,
        9,
        10,
        13,
        16,
        17,
        20,
        22,
        25,
        28,
        30,
        33,
        36,
        39
    ],
    "types": {
        "BigFloat": {},
        "BigFloatFilter": {
            "eq": [
                0
            ],
            "gt": [
                0
            ],
            "gte": [
                0
            ],
            "in": [
                0
            ],
            "is": [
                16
            ],
            "lt": [
                0
            ],
            "lte": [
                0
            ],
            "neq": [
                0
            ],
            "__typename": [
                33
            ]
        },
        "BigFloatListFilter": {
            "containedBy": [
                0
            ],
            "contains": [
                0
            ],
            "eq": [
                0
            ],
            "is": [
                16
            ],
            "overlaps": [
                0
            ],
            "__typename": [
                33
            ]
        },
        "BigInt": {},
        "BigIntFilter": {
            "eq": [
                3
            ],
            "gt": [
                3
            ],
            "gte": [
                3
            ],
            "in": [
                3
            ],
            "is": [
                16
            ],
            "lt": [
                3
            ],
            "lte": [
                3
            ],
            "neq": [
                3
            ],
            "__typename": [
                33
            ]
        },
        "BigIntListFilter": {
            "containedBy": [
                3
            ],
            "contains": [
                3
            ],
            "eq": [
                3
            ],
            "is": [
                16
            ],
            "overlaps": [
                3
            ],
            "__typename": [
                33
            ]
        },
        "Boolean": {},
        "BooleanFilter": {
            "eq": [
                6
            ],
            "is": [
                16
            ],
            "__typename": [
                33
            ]
        },
        "BooleanListFilter": {
            "containedBy": [
                6
            ],
            "contains": [
                6
            ],
            "eq": [
                6
            ],
            "is": [
                16
            ],
            "overlaps": [
                6
            ],
            "__typename": [
                33
            ]
        },
        "Cursor": {},
        "Date": {},
        "DateFilter": {
            "eq": [
                10
            ],
            "gt": [
                10
            ],
            "gte": [
                10
            ],
            "in": [
                10
            ],
            "is": [
                16
            ],
            "lt": [
                10
            ],
            "lte": [
                10
            ],
            "neq": [
                10
            ],
            "__typename": [
                33
            ]
        },
        "DateListFilter": {
            "containedBy": [
                10
            ],
            "contains": [
                10
            ],
            "eq": [
                10
            ],
            "is": [
                16
            ],
            "overlaps": [
                10
            ],
            "__typename": [
                33
            ]
        },
        "Datetime": {},
        "DatetimeFilter": {
            "eq": [
                13
            ],
            "gt": [
                13
            ],
            "gte": [
                13
            ],
            "in": [
                13
            ],
            "is": [
                16
            ],
            "lt": [
                13
            ],
            "lte": [
                13
            ],
            "neq": [
                13
            ],
            "__typename": [
                33
            ]
        },
        "DatetimeListFilter": {
            "containedBy": [
                13
            ],
            "contains": [
                13
            ],
            "eq": [
                13
            ],
            "is": [
                16
            ],
            "overlaps": [
                13
            ],
            "__typename": [
                33
            ]
        },
        "FilterIs": {},
        "Float": {},
        "FloatFilter": {
            "eq": [
                17
            ],
            "gt": [
                17
            ],
            "gte": [
                17
            ],
            "in": [
                17
            ],
            "is": [
                16
            ],
            "lt": [
                17
            ],
            "lte": [
                17
            ],
            "neq": [
                17
            ],
            "__typename": [
                33
            ]
        },
        "FloatListFilter": {
            "containedBy": [
                17
            ],
            "contains": [
                17
            ],
            "eq": [
                17
            ],
            "is": [
                16
            ],
            "overlaps": [
                17
            ],
            "__typename": [
                33
            ]
        },
        "ID": {},
        "IDFilter": {
            "eq": [
                20
            ],
            "__typename": [
                33
            ]
        },
        "Int": {},
        "IntFilter": {
            "eq": [
                22
            ],
            "gt": [
                22
            ],
            "gte": [
                22
            ],
            "in": [
                22
            ],
            "is": [
                16
            ],
            "lt": [
                22
            ],
            "lte": [
                22
            ],
            "neq": [
                22
            ],
            "__typename": [
                33
            ]
        },
        "IntListFilter": {
            "containedBy": [
                22
            ],
            "contains": [
                22
            ],
            "eq": [
                22
            ],
            "is": [
                16
            ],
            "overlaps": [
                22
            ],
            "__typename": [
                33
            ]
        },
        "JSON": {},
        "Mutation": {
            "deleteFromareasCollection": [
                44,
                {
                    "filter": [
                        46
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "deleteFromform_responsesCollection": [
                54,
                {
                    "filter": [
                        56
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "deleteFromformsCollection": [
                64,
                {
                    "filter": [
                        66
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "deleteFromloomersCollection": [
                74,
                {
                    "filter": [
                        76
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "deleteFromprojectsCollection": [
                84,
                {
                    "filter": [
                        86
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "insertIntoareasCollection": [
                48,
                {
                    "objects": [
                        47,
                        "[areasInsertInput!]!"
                    ]
                }
            ],
            "insertIntoform_responsesCollection": [
                58,
                {
                    "objects": [
                        57,
                        "[form_responsesInsertInput!]!"
                    ]
                }
            ],
            "insertIntoformsCollection": [
                68,
                {
                    "objects": [
                        67,
                        "[formsInsertInput!]!"
                    ]
                }
            ],
            "insertIntoloomersCollection": [
                78,
                {
                    "objects": [
                        77,
                        "[loomersInsertInput!]!"
                    ]
                }
            ],
            "insertIntoprojectsCollection": [
                88,
                {
                    "objects": [
                        87,
                        "[projectsInsertInput!]!"
                    ]
                }
            ],
            "updateareasCollection": [
                51,
                {
                    "set": [
                        50,
                        "areasUpdateInput!"
                    ],
                    "filter": [
                        46
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "updateform_responsesCollection": [
                61,
                {
                    "set": [
                        60,
                        "form_responsesUpdateInput!"
                    ],
                    "filter": [
                        56
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "updateformsCollection": [
                71,
                {
                    "set": [
                        70,
                        "formsUpdateInput!"
                    ],
                    "filter": [
                        66
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "updateloomersCollection": [
                81,
                {
                    "set": [
                        80,
                        "loomersUpdateInput!"
                    ],
                    "filter": [
                        76
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "updateprojectsCollection": [
                91,
                {
                    "set": [
                        90,
                        "projectsUpdateInput!"
                    ],
                    "filter": [
                        86
                    ],
                    "atMost": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                33
            ]
        },
        "Node": {
            "nodeId": [
                20
            ],
            "on_areas": [
                42
            ],
            "on_form_responses": [
                52
            ],
            "on_forms": [
                62
            ],
            "on_loomers": [
                72
            ],
            "on_projects": [
                82
            ],
            "__typename": [
                33
            ]
        },
        "Opaque": {},
        "OpaqueFilter": {
            "eq": [
                28
            ],
            "is": [
                16
            ],
            "__typename": [
                33
            ]
        },
        "OrderByDirection": {},
        "PageInfo": {
            "endCursor": [
                33
            ],
            "hasNextPage": [
                6
            ],
            "hasPreviousPage": [
                6
            ],
            "startCursor": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "Query": {
            "areasCollection": [
                43,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        46
                    ],
                    "orderBy": [
                        49,
                        "[areasOrderBy!]"
                    ]
                }
            ],
            "form_responsesCollection": [
                53,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        56
                    ],
                    "orderBy": [
                        59,
                        "[form_responsesOrderBy!]"
                    ]
                }
            ],
            "formsCollection": [
                63,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        66
                    ],
                    "orderBy": [
                        69,
                        "[formsOrderBy!]"
                    ]
                }
            ],
            "loomersCollection": [
                73,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        76
                    ],
                    "orderBy": [
                        79,
                        "[loomersOrderBy!]"
                    ]
                }
            ],
            "node": [
                27,
                {
                    "nodeId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "projectsCollection": [
                83,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        86
                    ],
                    "orderBy": [
                        89,
                        "[projectsOrderBy!]"
                    ]
                }
            ],
            "__typename": [
                33
            ]
        },
        "String": {},
        "StringFilter": {
            "eq": [
                33
            ],
            "gt": [
                33
            ],
            "gte": [
                33
            ],
            "ilike": [
                33
            ],
            "in": [
                33
            ],
            "iregex": [
                33
            ],
            "is": [
                16
            ],
            "like": [
                33
            ],
            "lt": [
                33
            ],
            "lte": [
                33
            ],
            "neq": [
                33
            ],
            "regex": [
                33
            ],
            "startsWith": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "StringListFilter": {
            "containedBy": [
                33
            ],
            "contains": [
                33
            ],
            "eq": [
                33
            ],
            "is": [
                16
            ],
            "overlaps": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "Time": {},
        "TimeFilter": {
            "eq": [
                36
            ],
            "gt": [
                36
            ],
            "gte": [
                36
            ],
            "in": [
                36
            ],
            "is": [
                16
            ],
            "lt": [
                36
            ],
            "lte": [
                36
            ],
            "neq": [
                36
            ],
            "__typename": [
                33
            ]
        },
        "TimeListFilter": {
            "containedBy": [
                36
            ],
            "contains": [
                36
            ],
            "eq": [
                36
            ],
            "is": [
                16
            ],
            "overlaps": [
                36
            ],
            "__typename": [
                33
            ]
        },
        "UUID": {},
        "UUIDFilter": {
            "eq": [
                39
            ],
            "in": [
                39
            ],
            "is": [
                16
            ],
            "neq": [
                39
            ],
            "__typename": [
                33
            ]
        },
        "UUIDListFilter": {
            "containedBy": [
                39
            ],
            "contains": [
                39
            ],
            "eq": [
                39
            ],
            "is": [
                16
            ],
            "overlaps": [
                39
            ],
            "__typename": [
                33
            ]
        },
        "areas": {
            "nodeId": [
                20
            ],
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "loomersCollection": [
                73,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        76
                    ],
                    "orderBy": [
                        79,
                        "[loomersOrderBy!]"
                    ]
                }
            ],
            "__typename": [
                33
            ]
        },
        "areasConnection": {
            "edges": [
                45
            ],
            "pageInfo": [
                31
            ],
            "__typename": [
                33
            ]
        },
        "areasDeleteResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                42
            ],
            "__typename": [
                33
            ]
        },
        "areasEdge": {
            "cursor": [
                33
            ],
            "node": [
                42
            ],
            "__typename": [
                33
            ]
        },
        "areasFilter": {
            "id": [
                40
            ],
            "created_at": [
                14
            ],
            "name": [
                34
            ],
            "nodeId": [
                21
            ],
            "and": [
                46
            ],
            "or": [
                46
            ],
            "not": [
                46
            ],
            "__typename": [
                33
            ]
        },
        "areasInsertInput": {
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "areasInsertResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                42
            ],
            "__typename": [
                33
            ]
        },
        "areasOrderBy": {
            "id": [
                30
            ],
            "created_at": [
                30
            ],
            "name": [
                30
            ],
            "__typename": [
                33
            ]
        },
        "areasUpdateInput": {
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "areasUpdateResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                42
            ],
            "__typename": [
                33
            ]
        },
        "form_responses": {
            "nodeId": [
                20
            ],
            "id": [
                3
            ],
            "created_at": [
                13
            ],
            "form_id": [
                3
            ],
            "loomer_id": [
                3
            ],
            "responses": [
                25
            ],
            "forms": [
                62
            ],
            "loomers": [
                72
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesConnection": {
            "edges": [
                55
            ],
            "pageInfo": [
                31
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesDeleteResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                52
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesEdge": {
            "cursor": [
                33
            ],
            "node": [
                52
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesFilter": {
            "id": [
                4
            ],
            "created_at": [
                14
            ],
            "form_id": [
                4
            ],
            "loomer_id": [
                4
            ],
            "nodeId": [
                21
            ],
            "and": [
                56
            ],
            "or": [
                56
            ],
            "not": [
                56
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesInsertInput": {
            "created_at": [
                13
            ],
            "form_id": [
                3
            ],
            "loomer_id": [
                3
            ],
            "responses": [
                25
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesInsertResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                52
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesOrderBy": {
            "id": [
                30
            ],
            "created_at": [
                30
            ],
            "form_id": [
                30
            ],
            "loomer_id": [
                30
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesUpdateInput": {
            "created_at": [
                13
            ],
            "form_id": [
                3
            ],
            "loomer_id": [
                3
            ],
            "responses": [
                25
            ],
            "__typename": [
                33
            ]
        },
        "form_responsesUpdateResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                52
            ],
            "__typename": [
                33
            ]
        },
        "forms": {
            "nodeId": [
                20
            ],
            "id": [
                3
            ],
            "created_at": [
                13
            ],
            "title": [
                33
            ],
            "description": [
                33
            ],
            "form_responsesCollection": [
                53,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        56
                    ],
                    "orderBy": [
                        59,
                        "[form_responsesOrderBy!]"
                    ]
                }
            ],
            "__typename": [
                33
            ]
        },
        "formsConnection": {
            "edges": [
                65
            ],
            "pageInfo": [
                31
            ],
            "__typename": [
                33
            ]
        },
        "formsDeleteResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                62
            ],
            "__typename": [
                33
            ]
        },
        "formsEdge": {
            "cursor": [
                33
            ],
            "node": [
                62
            ],
            "__typename": [
                33
            ]
        },
        "formsFilter": {
            "id": [
                4
            ],
            "created_at": [
                14
            ],
            "title": [
                34
            ],
            "description": [
                34
            ],
            "nodeId": [
                21
            ],
            "and": [
                66
            ],
            "or": [
                66
            ],
            "not": [
                66
            ],
            "__typename": [
                33
            ]
        },
        "formsInsertInput": {
            "created_at": [
                13
            ],
            "title": [
                33
            ],
            "description": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "formsInsertResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                62
            ],
            "__typename": [
                33
            ]
        },
        "formsOrderBy": {
            "id": [
                30
            ],
            "created_at": [
                30
            ],
            "title": [
                30
            ],
            "description": [
                30
            ],
            "__typename": [
                33
            ]
        },
        "formsUpdateInput": {
            "created_at": [
                13
            ],
            "title": [
                33
            ],
            "description": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "formsUpdateResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                62
            ],
            "__typename": [
                33
            ]
        },
        "loomers": {
            "nodeId": [
                20
            ],
            "id": [
                3
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "email": [
                33
            ],
            "hire_date": [
                10
            ],
            "birthday": [
                10
            ],
            "area_id": [
                39
            ],
            "areas": [
                42
            ],
            "form_responsesCollection": [
                53,
                {
                    "first": [
                        22
                    ],
                    "last": [
                        22
                    ],
                    "before": [
                        9
                    ],
                    "after": [
                        9
                    ],
                    "offset": [
                        22
                    ],
                    "filter": [
                        56
                    ],
                    "orderBy": [
                        59,
                        "[form_responsesOrderBy!]"
                    ]
                }
            ],
            "__typename": [
                33
            ]
        },
        "loomersConnection": {
            "edges": [
                75
            ],
            "pageInfo": [
                31
            ],
            "__typename": [
                33
            ]
        },
        "loomersDeleteResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                72
            ],
            "__typename": [
                33
            ]
        },
        "loomersEdge": {
            "cursor": [
                33
            ],
            "node": [
                72
            ],
            "__typename": [
                33
            ]
        },
        "loomersFilter": {
            "id": [
                4
            ],
            "created_at": [
                14
            ],
            "name": [
                34
            ],
            "email": [
                34
            ],
            "hire_date": [
                11
            ],
            "birthday": [
                11
            ],
            "area_id": [
                40
            ],
            "nodeId": [
                21
            ],
            "and": [
                76
            ],
            "or": [
                76
            ],
            "not": [
                76
            ],
            "__typename": [
                33
            ]
        },
        "loomersInsertInput": {
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "email": [
                33
            ],
            "hire_date": [
                10
            ],
            "birthday": [
                10
            ],
            "area_id": [
                39
            ],
            "__typename": [
                33
            ]
        },
        "loomersInsertResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                72
            ],
            "__typename": [
                33
            ]
        },
        "loomersOrderBy": {
            "id": [
                30
            ],
            "created_at": [
                30
            ],
            "name": [
                30
            ],
            "email": [
                30
            ],
            "hire_date": [
                30
            ],
            "birthday": [
                30
            ],
            "area_id": [
                30
            ],
            "__typename": [
                33
            ]
        },
        "loomersUpdateInput": {
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "email": [
                33
            ],
            "hire_date": [
                10
            ],
            "birthday": [
                10
            ],
            "area_id": [
                39
            ],
            "__typename": [
                33
            ]
        },
        "loomersUpdateResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                72
            ],
            "__typename": [
                33
            ]
        },
        "projects": {
            "nodeId": [
                20
            ],
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "projectsConnection": {
            "edges": [
                85
            ],
            "pageInfo": [
                31
            ],
            "__typename": [
                33
            ]
        },
        "projectsDeleteResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                82
            ],
            "__typename": [
                33
            ]
        },
        "projectsEdge": {
            "cursor": [
                33
            ],
            "node": [
                82
            ],
            "__typename": [
                33
            ]
        },
        "projectsFilter": {
            "id": [
                40
            ],
            "created_at": [
                14
            ],
            "name": [
                34
            ],
            "nodeId": [
                21
            ],
            "and": [
                86
            ],
            "or": [
                86
            ],
            "not": [
                86
            ],
            "__typename": [
                33
            ]
        },
        "projectsInsertInput": {
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "projectsInsertResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                82
            ],
            "__typename": [
                33
            ]
        },
        "projectsOrderBy": {
            "id": [
                30
            ],
            "created_at": [
                30
            ],
            "name": [
                30
            ],
            "__typename": [
                33
            ]
        },
        "projectsUpdateInput": {
            "id": [
                39
            ],
            "created_at": [
                13
            ],
            "name": [
                33
            ],
            "__typename": [
                33
            ]
        },
        "projectsUpdateResponse": {
            "affectedCount": [
                22
            ],
            "records": [
                82
            ],
            "__typename": [
                33
            ]
        }
    }
}