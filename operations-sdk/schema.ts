// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    BigFloat: any,
    BigInt: any,
    Boolean: boolean,
    Cursor: any,
    Date: any,
    Datetime: any,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    Opaque: any,
    String: string,
    Time: any,
    UUID: any,
}

export type FilterIs = 'NULL' | 'NOT_NULL'


/** The root type for creating and mutating data */
export interface Mutation {
    /** Deletes zero or more records from the `areas` collection */
    deleteFromareasCollection: areasDeleteResponse
    /** Deletes zero or more records from the `form_responses` collection */
    deleteFromform_responsesCollection: form_responsesDeleteResponse
    /** Deletes zero or more records from the `forms` collection */
    deleteFromformsCollection: formsDeleteResponse
    /** Deletes zero or more records from the `loomers` collection */
    deleteFromloomersCollection: loomersDeleteResponse
    /** Deletes zero or more records from the `projects` collection */
    deleteFromprojectsCollection: projectsDeleteResponse
    /** Adds one or more `areas` records to the collection */
    insertIntoareasCollection: (areasInsertResponse | null)
    /** Adds one or more `form_responses` records to the collection */
    insertIntoform_responsesCollection: (form_responsesInsertResponse | null)
    /** Adds one or more `forms` records to the collection */
    insertIntoformsCollection: (formsInsertResponse | null)
    /** Adds one or more `loomers` records to the collection */
    insertIntoloomersCollection: (loomersInsertResponse | null)
    /** Adds one or more `projects` records to the collection */
    insertIntoprojectsCollection: (projectsInsertResponse | null)
    /** Updates zero or more records in the `areas` collection */
    updateareasCollection: areasUpdateResponse
    /** Updates zero or more records in the `form_responses` collection */
    updateform_responsesCollection: form_responsesUpdateResponse
    /** Updates zero or more records in the `forms` collection */
    updateformsCollection: formsUpdateResponse
    /** Updates zero or more records in the `loomers` collection */
    updateloomersCollection: loomersUpdateResponse
    /** Updates zero or more records in the `projects` collection */
    updateprojectsCollection: projectsUpdateResponse
    __typename: 'Mutation'
}

export type Node = (areas | form_responses | forms | loomers | projects) & { __isUnion?: true }


/** Defines a per-field sorting order */
export type OrderByDirection = 'AscNullsFirst' | 'AscNullsLast' | 'DescNullsFirst' | 'DescNullsLast'

export interface PageInfo {
    endCursor: (Scalars['String'] | null)
    hasNextPage: Scalars['Boolean']
    hasPreviousPage: Scalars['Boolean']
    startCursor: (Scalars['String'] | null)
    __typename: 'PageInfo'
}


/** The root type for querying data */
export interface Query {
    /** A pagable collection of type `areas` */
    areasCollection: (areasConnection | null)
    /** A pagable collection of type `form_responses` */
    form_responsesCollection: (form_responsesConnection | null)
    /** A pagable collection of type `forms` */
    formsCollection: (formsConnection | null)
    /** A pagable collection of type `loomers` */
    loomersCollection: (loomersConnection | null)
    /** Retrieve a record by its `ID` */
    node: (Node | null)
    /** A pagable collection of type `projects` */
    projectsCollection: (projectsConnection | null)
    __typename: 'Query'
}

export interface areas {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['UUID']
    created_at: Scalars['Datetime']
    name: (Scalars['String'] | null)
    loomersCollection: (loomersConnection | null)
    __typename: 'areas'
}

export interface areasConnection {
    edges: areasEdge[]
    pageInfo: PageInfo
    __typename: 'areasConnection'
}

export interface areasDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: areas[]
    __typename: 'areasDeleteResponse'
}

export interface areasEdge {
    cursor: Scalars['String']
    node: areas
    __typename: 'areasEdge'
}

export interface areasInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: areas[]
    __typename: 'areasInsertResponse'
}

export interface areasUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: areas[]
    __typename: 'areasUpdateResponse'
}

export interface form_responses {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['BigInt']
    created_at: Scalars['Datetime']
    form_id: (Scalars['BigInt'] | null)
    loomer_id: (Scalars['BigInt'] | null)
    responses: (Scalars['JSON'] | null)
    forms: (forms | null)
    loomers: (loomers | null)
    __typename: 'form_responses'
}

export interface form_responsesConnection {
    edges: form_responsesEdge[]
    pageInfo: PageInfo
    __typename: 'form_responsesConnection'
}

export interface form_responsesDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: form_responses[]
    __typename: 'form_responsesDeleteResponse'
}

export interface form_responsesEdge {
    cursor: Scalars['String']
    node: form_responses
    __typename: 'form_responsesEdge'
}

export interface form_responsesInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: form_responses[]
    __typename: 'form_responsesInsertResponse'
}

export interface form_responsesUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: form_responses[]
    __typename: 'form_responsesUpdateResponse'
}

export interface forms {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['BigInt']
    created_at: Scalars['Datetime']
    title: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    form_responsesCollection: (form_responsesConnection | null)
    __typename: 'forms'
}

export interface formsConnection {
    edges: formsEdge[]
    pageInfo: PageInfo
    __typename: 'formsConnection'
}

export interface formsDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: forms[]
    __typename: 'formsDeleteResponse'
}

export interface formsEdge {
    cursor: Scalars['String']
    node: forms
    __typename: 'formsEdge'
}

export interface formsInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: forms[]
    __typename: 'formsInsertResponse'
}

export interface formsUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: forms[]
    __typename: 'formsUpdateResponse'
}

export interface loomers {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['BigInt']
    created_at: Scalars['Datetime']
    name: (Scalars['String'] | null)
    email: (Scalars['String'] | null)
    hire_date: (Scalars['Date'] | null)
    birthday: (Scalars['Date'] | null)
    area_id: (Scalars['UUID'] | null)
    areas: (areas | null)
    form_responsesCollection: (form_responsesConnection | null)
    __typename: 'loomers'
}

export interface loomersConnection {
    edges: loomersEdge[]
    pageInfo: PageInfo
    __typename: 'loomersConnection'
}

export interface loomersDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: loomers[]
    __typename: 'loomersDeleteResponse'
}

export interface loomersEdge {
    cursor: Scalars['String']
    node: loomers
    __typename: 'loomersEdge'
}

export interface loomersInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: loomers[]
    __typename: 'loomersInsertResponse'
}

export interface loomersUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: loomers[]
    __typename: 'loomersUpdateResponse'
}

export interface projects {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['UUID']
    created_at: Scalars['Datetime']
    name: (Scalars['String'] | null)
    __typename: 'projects'
}

export interface projectsConnection {
    edges: projectsEdge[]
    pageInfo: PageInfo
    __typename: 'projectsConnection'
}

export interface projectsDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: projects[]
    __typename: 'projectsDeleteResponse'
}

export interface projectsEdge {
    cursor: Scalars['String']
    node: projects
    __typename: 'projectsEdge'
}

export interface projectsInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: projects[]
    __typename: 'projectsInsertResponse'
}

export interface projectsUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: projects[]
    __typename: 'projectsUpdateResponse'
}


/** Boolean expression comparing fields on type "BigFloat" */
export interface BigFloatFilter {eq?: (Scalars['BigFloat'] | null),gt?: (Scalars['BigFloat'] | null),gte?: (Scalars['BigFloat'] | null),in?: (Scalars['BigFloat'][] | null),is?: (FilterIs | null),lt?: (Scalars['BigFloat'] | null),lte?: (Scalars['BigFloat'] | null),neq?: (Scalars['BigFloat'] | null)}


/** Boolean expression comparing fields on type "BigFloatList" */
export interface BigFloatListFilter {containedBy?: (Scalars['BigFloat'][] | null),contains?: (Scalars['BigFloat'][] | null),eq?: (Scalars['BigFloat'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['BigFloat'][] | null)}


/** Boolean expression comparing fields on type "BigInt" */
export interface BigIntFilter {eq?: (Scalars['BigInt'] | null),gt?: (Scalars['BigInt'] | null),gte?: (Scalars['BigInt'] | null),in?: (Scalars['BigInt'][] | null),is?: (FilterIs | null),lt?: (Scalars['BigInt'] | null),lte?: (Scalars['BigInt'] | null),neq?: (Scalars['BigInt'] | null)}


/** Boolean expression comparing fields on type "BigIntList" */
export interface BigIntListFilter {containedBy?: (Scalars['BigInt'][] | null),contains?: (Scalars['BigInt'][] | null),eq?: (Scalars['BigInt'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['BigInt'][] | null)}


/** Boolean expression comparing fields on type "Boolean" */
export interface BooleanFilter {eq?: (Scalars['Boolean'] | null),is?: (FilterIs | null)}


/** Boolean expression comparing fields on type "BooleanList" */
export interface BooleanListFilter {containedBy?: (Scalars['Boolean'][] | null),contains?: (Scalars['Boolean'][] | null),eq?: (Scalars['Boolean'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Boolean'][] | null)}


/** Boolean expression comparing fields on type "Date" */
export interface DateFilter {eq?: (Scalars['Date'] | null),gt?: (Scalars['Date'] | null),gte?: (Scalars['Date'] | null),in?: (Scalars['Date'][] | null),is?: (FilterIs | null),lt?: (Scalars['Date'] | null),lte?: (Scalars['Date'] | null),neq?: (Scalars['Date'] | null)}


/** Boolean expression comparing fields on type "DateList" */
export interface DateListFilter {containedBy?: (Scalars['Date'][] | null),contains?: (Scalars['Date'][] | null),eq?: (Scalars['Date'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Date'][] | null)}


/** Boolean expression comparing fields on type "Datetime" */
export interface DatetimeFilter {eq?: (Scalars['Datetime'] | null),gt?: (Scalars['Datetime'] | null),gte?: (Scalars['Datetime'] | null),in?: (Scalars['Datetime'][] | null),is?: (FilterIs | null),lt?: (Scalars['Datetime'] | null),lte?: (Scalars['Datetime'] | null),neq?: (Scalars['Datetime'] | null)}


/** Boolean expression comparing fields on type "DatetimeList" */
export interface DatetimeListFilter {containedBy?: (Scalars['Datetime'][] | null),contains?: (Scalars['Datetime'][] | null),eq?: (Scalars['Datetime'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Datetime'][] | null)}


/** Boolean expression comparing fields on type "Float" */
export interface FloatFilter {eq?: (Scalars['Float'] | null),gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),in?: (Scalars['Float'][] | null),is?: (FilterIs | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),neq?: (Scalars['Float'] | null)}


/** Boolean expression comparing fields on type "FloatList" */
export interface FloatListFilter {containedBy?: (Scalars['Float'][] | null),contains?: (Scalars['Float'][] | null),eq?: (Scalars['Float'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Float'][] | null)}


/** Boolean expression comparing fields on type "ID" */
export interface IDFilter {eq?: (Scalars['ID'] | null)}


/** Boolean expression comparing fields on type "Int" */
export interface IntFilter {eq?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),in?: (Scalars['Int'][] | null),is?: (FilterIs | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),neq?: (Scalars['Int'] | null)}


/** Boolean expression comparing fields on type "IntList" */
export interface IntListFilter {containedBy?: (Scalars['Int'][] | null),contains?: (Scalars['Int'][] | null),eq?: (Scalars['Int'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Int'][] | null)}


/** The root type for creating and mutating data */
export interface MutationGenqlSelection{
    /** Deletes zero or more records from the `areas` collection */
    deleteFromareasCollection?: (areasDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (areasFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Deletes zero or more records from the `form_responses` collection */
    deleteFromform_responsesCollection?: (form_responsesDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (form_responsesFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Deletes zero or more records from the `forms` collection */
    deleteFromformsCollection?: (formsDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (formsFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Deletes zero or more records from the `loomers` collection */
    deleteFromloomersCollection?: (loomersDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (loomersFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Deletes zero or more records from the `projects` collection */
    deleteFromprojectsCollection?: (projectsDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (projectsFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Adds one or more `areas` records to the collection */
    insertIntoareasCollection?: (areasInsertResponseGenqlSelection & { __args: {objects: areasInsertInput[]} })
    /** Adds one or more `form_responses` records to the collection */
    insertIntoform_responsesCollection?: (form_responsesInsertResponseGenqlSelection & { __args: {objects: form_responsesInsertInput[]} })
    /** Adds one or more `forms` records to the collection */
    insertIntoformsCollection?: (formsInsertResponseGenqlSelection & { __args: {objects: formsInsertInput[]} })
    /** Adds one or more `loomers` records to the collection */
    insertIntoloomersCollection?: (loomersInsertResponseGenqlSelection & { __args: {objects: loomersInsertInput[]} })
    /** Adds one or more `projects` records to the collection */
    insertIntoprojectsCollection?: (projectsInsertResponseGenqlSelection & { __args: {objects: projectsInsertInput[]} })
    /** Updates zero or more records in the `areas` collection */
    updateareasCollection?: (areasUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: areasUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (areasFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Updates zero or more records in the `form_responses` collection */
    updateform_responsesCollection?: (form_responsesUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: form_responsesUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (form_responsesFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Updates zero or more records in the `forms` collection */
    updateformsCollection?: (formsUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: formsUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (formsFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Updates zero or more records in the `loomers` collection */
    updateloomersCollection?: (loomersUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: loomersUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (loomersFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Updates zero or more records in the `projects` collection */
    updateprojectsCollection?: (projectsUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: projectsUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (projectsFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    /** Retrieves a record by `ID` */
    nodeId?: boolean | number
    on_areas?: areasGenqlSelection
    on_form_responses?: form_responsesGenqlSelection
    on_forms?: formsGenqlSelection
    on_loomers?: loomersGenqlSelection
    on_projects?: projectsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression comparing fields on type "Opaque" */
export interface OpaqueFilter {eq?: (Scalars['Opaque'] | null),is?: (FilterIs | null)}

export interface PageInfoGenqlSelection{
    endCursor?: boolean | number
    hasNextPage?: boolean | number
    hasPreviousPage?: boolean | number
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The root type for querying data */
export interface QueryGenqlSelection{
    /** A pagable collection of type `areas` */
    areasCollection?: (areasConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (areasFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (areasOrderBy[] | null)} })
    /** A pagable collection of type `form_responses` */
    form_responsesCollection?: (form_responsesConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (form_responsesFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (form_responsesOrderBy[] | null)} })
    /** A pagable collection of type `forms` */
    formsCollection?: (formsConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (formsFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (formsOrderBy[] | null)} })
    /** A pagable collection of type `loomers` */
    loomersCollection?: (loomersConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (loomersFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (loomersOrderBy[] | null)} })
    /** Retrieve a record by its `ID` */
    node?: (NodeGenqlSelection & { __args: {
    /** The record's `ID` */
    nodeId: Scalars['ID']} })
    /** A pagable collection of type `projects` */
    projectsCollection?: (projectsConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (projectsFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (projectsOrderBy[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression comparing fields on type "String" */
export interface StringFilter {eq?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),ilike?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),iregex?: (Scalars['String'] | null),is?: (FilterIs | null),like?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),neq?: (Scalars['String'] | null),regex?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null)}


/** Boolean expression comparing fields on type "StringList" */
export interface StringListFilter {containedBy?: (Scalars['String'][] | null),contains?: (Scalars['String'][] | null),eq?: (Scalars['String'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['String'][] | null)}


/** Boolean expression comparing fields on type "Time" */
export interface TimeFilter {eq?: (Scalars['Time'] | null),gt?: (Scalars['Time'] | null),gte?: (Scalars['Time'] | null),in?: (Scalars['Time'][] | null),is?: (FilterIs | null),lt?: (Scalars['Time'] | null),lte?: (Scalars['Time'] | null),neq?: (Scalars['Time'] | null)}


/** Boolean expression comparing fields on type "TimeList" */
export interface TimeListFilter {containedBy?: (Scalars['Time'][] | null),contains?: (Scalars['Time'][] | null),eq?: (Scalars['Time'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['Time'][] | null)}


/** Boolean expression comparing fields on type "UUID" */
export interface UUIDFilter {eq?: (Scalars['UUID'] | null),in?: (Scalars['UUID'][] | null),is?: (FilterIs | null),neq?: (Scalars['UUID'] | null)}


/** Boolean expression comparing fields on type "UUIDList" */
export interface UUIDListFilter {containedBy?: (Scalars['UUID'][] | null),contains?: (Scalars['UUID'][] | null),eq?: (Scalars['UUID'][] | null),is?: (FilterIs | null),overlaps?: (Scalars['UUID'][] | null)}

export interface areasGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    loomersCollection?: (loomersConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (loomersFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (loomersOrderBy[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface areasConnectionGenqlSelection{
    edges?: areasEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface areasDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: areasGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface areasEdgeGenqlSelection{
    cursor?: boolean | number
    node?: areasGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface areasFilter {id?: (UUIDFilter | null),created_at?: (DatetimeFilter | null),name?: (StringFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (areasFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (areasFilter[] | null),
/** Negates a filter */
not?: (areasFilter | null)}

export interface areasInsertInput {id?: (Scalars['UUID'] | null),created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null)}

export interface areasInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: areasGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface areasOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),name?: (OrderByDirection | null)}

export interface areasUpdateInput {id?: (Scalars['UUID'] | null),created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null)}

export interface areasUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: areasGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    form_id?: boolean | number
    loomer_id?: boolean | number
    responses?: boolean | number
    forms?: formsGenqlSelection
    loomers?: loomersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesConnectionGenqlSelection{
    edges?: form_responsesEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: form_responsesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesEdgeGenqlSelection{
    cursor?: boolean | number
    node?: form_responsesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesFilter {id?: (BigIntFilter | null),created_at?: (DatetimeFilter | null),form_id?: (BigIntFilter | null),loomer_id?: (BigIntFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (form_responsesFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (form_responsesFilter[] | null),
/** Negates a filter */
not?: (form_responsesFilter | null)}

export interface form_responsesInsertInput {created_at?: (Scalars['Datetime'] | null),form_id?: (Scalars['BigInt'] | null),loomer_id?: (Scalars['BigInt'] | null),responses?: (Scalars['JSON'] | null)}

export interface form_responsesInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: form_responsesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface form_responsesOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),form_id?: (OrderByDirection | null),loomer_id?: (OrderByDirection | null)}

export interface form_responsesUpdateInput {created_at?: (Scalars['Datetime'] | null),form_id?: (Scalars['BigInt'] | null),loomer_id?: (Scalars['BigInt'] | null),responses?: (Scalars['JSON'] | null)}

export interface form_responsesUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: form_responsesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    title?: boolean | number
    description?: boolean | number
    form_responsesCollection?: (form_responsesConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (form_responsesFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (form_responsesOrderBy[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsConnectionGenqlSelection{
    edges?: formsEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: formsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: formsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsFilter {id?: (BigIntFilter | null),created_at?: (DatetimeFilter | null),title?: (StringFilter | null),description?: (StringFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (formsFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (formsFilter[] | null),
/** Negates a filter */
not?: (formsFilter | null)}

export interface formsInsertInput {created_at?: (Scalars['Datetime'] | null),title?: (Scalars['String'] | null),description?: (Scalars['String'] | null)}

export interface formsInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: formsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface formsOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),title?: (OrderByDirection | null),description?: (OrderByDirection | null)}

export interface formsUpdateInput {created_at?: (Scalars['Datetime'] | null),title?: (Scalars['String'] | null),description?: (Scalars['String'] | null)}

export interface formsUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: formsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    email?: boolean | number
    hire_date?: boolean | number
    birthday?: boolean | number
    area_id?: boolean | number
    areas?: areasGenqlSelection
    form_responsesCollection?: (form_responsesConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (form_responsesFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (form_responsesOrderBy[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersConnectionGenqlSelection{
    edges?: loomersEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: loomersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersEdgeGenqlSelection{
    cursor?: boolean | number
    node?: loomersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersFilter {id?: (BigIntFilter | null),created_at?: (DatetimeFilter | null),name?: (StringFilter | null),email?: (StringFilter | null),hire_date?: (DateFilter | null),birthday?: (DateFilter | null),area_id?: (UUIDFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (loomersFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (loomersFilter[] | null),
/** Negates a filter */
not?: (loomersFilter | null)}

export interface loomersInsertInput {created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null),email?: (Scalars['String'] | null),hire_date?: (Scalars['Date'] | null),birthday?: (Scalars['Date'] | null),area_id?: (Scalars['UUID'] | null)}

export interface loomersInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: loomersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface loomersOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),name?: (OrderByDirection | null),email?: (OrderByDirection | null),hire_date?: (OrderByDirection | null),birthday?: (OrderByDirection | null),area_id?: (OrderByDirection | null)}

export interface loomersUpdateInput {created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null),email?: (Scalars['String'] | null),hire_date?: (Scalars['Date'] | null),birthday?: (Scalars['Date'] | null),area_id?: (Scalars['UUID'] | null)}

export interface loomersUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: loomersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsConnectionGenqlSelection{
    edges?: projectsEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: projectsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: projectsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsFilter {id?: (UUIDFilter | null),created_at?: (DatetimeFilter | null),name?: (StringFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (projectsFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (projectsFilter[] | null),
/** Negates a filter */
not?: (projectsFilter | null)}

export interface projectsInsertInput {id?: (Scalars['UUID'] | null),created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null)}

export interface projectsInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: projectsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface projectsOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),name?: (OrderByDirection | null)}

export interface projectsUpdateInput {id?: (Scalars['UUID'] | null),created_at?: (Scalars['Datetime'] | null),name?: (Scalars['String'] | null)}

export interface projectsUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: projectsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['areas','form_responses','forms','loomers','projects']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const areas_possibleTypes: string[] = ['areas']
    export const isareas = (obj?: { __typename?: any } | null): obj is areas => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareas"')
      return areas_possibleTypes.includes(obj.__typename)
    }
    


    const areasConnection_possibleTypes: string[] = ['areasConnection']
    export const isareasConnection = (obj?: { __typename?: any } | null): obj is areasConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareasConnection"')
      return areasConnection_possibleTypes.includes(obj.__typename)
    }
    


    const areasDeleteResponse_possibleTypes: string[] = ['areasDeleteResponse']
    export const isareasDeleteResponse = (obj?: { __typename?: any } | null): obj is areasDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareasDeleteResponse"')
      return areasDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const areasEdge_possibleTypes: string[] = ['areasEdge']
    export const isareasEdge = (obj?: { __typename?: any } | null): obj is areasEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareasEdge"')
      return areasEdge_possibleTypes.includes(obj.__typename)
    }
    


    const areasInsertResponse_possibleTypes: string[] = ['areasInsertResponse']
    export const isareasInsertResponse = (obj?: { __typename?: any } | null): obj is areasInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareasInsertResponse"')
      return areasInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const areasUpdateResponse_possibleTypes: string[] = ['areasUpdateResponse']
    export const isareasUpdateResponse = (obj?: { __typename?: any } | null): obj is areasUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isareasUpdateResponse"')
      return areasUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    


    const form_responses_possibleTypes: string[] = ['form_responses']
    export const isform_responses = (obj?: { __typename?: any } | null): obj is form_responses => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responses"')
      return form_responses_possibleTypes.includes(obj.__typename)
    }
    


    const form_responsesConnection_possibleTypes: string[] = ['form_responsesConnection']
    export const isform_responsesConnection = (obj?: { __typename?: any } | null): obj is form_responsesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responsesConnection"')
      return form_responsesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const form_responsesDeleteResponse_possibleTypes: string[] = ['form_responsesDeleteResponse']
    export const isform_responsesDeleteResponse = (obj?: { __typename?: any } | null): obj is form_responsesDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responsesDeleteResponse"')
      return form_responsesDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const form_responsesEdge_possibleTypes: string[] = ['form_responsesEdge']
    export const isform_responsesEdge = (obj?: { __typename?: any } | null): obj is form_responsesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responsesEdge"')
      return form_responsesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const form_responsesInsertResponse_possibleTypes: string[] = ['form_responsesInsertResponse']
    export const isform_responsesInsertResponse = (obj?: { __typename?: any } | null): obj is form_responsesInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responsesInsertResponse"')
      return form_responsesInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const form_responsesUpdateResponse_possibleTypes: string[] = ['form_responsesUpdateResponse']
    export const isform_responsesUpdateResponse = (obj?: { __typename?: any } | null): obj is form_responsesUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isform_responsesUpdateResponse"')
      return form_responsesUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    


    const forms_possibleTypes: string[] = ['forms']
    export const isforms = (obj?: { __typename?: any } | null): obj is forms => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isforms"')
      return forms_possibleTypes.includes(obj.__typename)
    }
    


    const formsConnection_possibleTypes: string[] = ['formsConnection']
    export const isformsConnection = (obj?: { __typename?: any } | null): obj is formsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isformsConnection"')
      return formsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const formsDeleteResponse_possibleTypes: string[] = ['formsDeleteResponse']
    export const isformsDeleteResponse = (obj?: { __typename?: any } | null): obj is formsDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isformsDeleteResponse"')
      return formsDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const formsEdge_possibleTypes: string[] = ['formsEdge']
    export const isformsEdge = (obj?: { __typename?: any } | null): obj is formsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isformsEdge"')
      return formsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const formsInsertResponse_possibleTypes: string[] = ['formsInsertResponse']
    export const isformsInsertResponse = (obj?: { __typename?: any } | null): obj is formsInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isformsInsertResponse"')
      return formsInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const formsUpdateResponse_possibleTypes: string[] = ['formsUpdateResponse']
    export const isformsUpdateResponse = (obj?: { __typename?: any } | null): obj is formsUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isformsUpdateResponse"')
      return formsUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    


    const loomers_possibleTypes: string[] = ['loomers']
    export const isloomers = (obj?: { __typename?: any } | null): obj is loomers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomers"')
      return loomers_possibleTypes.includes(obj.__typename)
    }
    


    const loomersConnection_possibleTypes: string[] = ['loomersConnection']
    export const isloomersConnection = (obj?: { __typename?: any } | null): obj is loomersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomersConnection"')
      return loomersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const loomersDeleteResponse_possibleTypes: string[] = ['loomersDeleteResponse']
    export const isloomersDeleteResponse = (obj?: { __typename?: any } | null): obj is loomersDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomersDeleteResponse"')
      return loomersDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const loomersEdge_possibleTypes: string[] = ['loomersEdge']
    export const isloomersEdge = (obj?: { __typename?: any } | null): obj is loomersEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomersEdge"')
      return loomersEdge_possibleTypes.includes(obj.__typename)
    }
    


    const loomersInsertResponse_possibleTypes: string[] = ['loomersInsertResponse']
    export const isloomersInsertResponse = (obj?: { __typename?: any } | null): obj is loomersInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomersInsertResponse"')
      return loomersInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const loomersUpdateResponse_possibleTypes: string[] = ['loomersUpdateResponse']
    export const isloomersUpdateResponse = (obj?: { __typename?: any } | null): obj is loomersUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isloomersUpdateResponse"')
      return loomersUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    


    const projects_possibleTypes: string[] = ['projects']
    export const isprojects = (obj?: { __typename?: any } | null): obj is projects => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojects"')
      return projects_possibleTypes.includes(obj.__typename)
    }
    


    const projectsConnection_possibleTypes: string[] = ['projectsConnection']
    export const isprojectsConnection = (obj?: { __typename?: any } | null): obj is projectsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojectsConnection"')
      return projectsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const projectsDeleteResponse_possibleTypes: string[] = ['projectsDeleteResponse']
    export const isprojectsDeleteResponse = (obj?: { __typename?: any } | null): obj is projectsDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojectsDeleteResponse"')
      return projectsDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const projectsEdge_possibleTypes: string[] = ['projectsEdge']
    export const isprojectsEdge = (obj?: { __typename?: any } | null): obj is projectsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojectsEdge"')
      return projectsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const projectsInsertResponse_possibleTypes: string[] = ['projectsInsertResponse']
    export const isprojectsInsertResponse = (obj?: { __typename?: any } | null): obj is projectsInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojectsInsertResponse"')
      return projectsInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const projectsUpdateResponse_possibleTypes: string[] = ['projectsUpdateResponse']
    export const isprojectsUpdateResponse = (obj?: { __typename?: any } | null): obj is projectsUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprojectsUpdateResponse"')
      return projectsUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    

export const enumFilterIs = {
   NULL: 'NULL' as const,
   NOT_NULL: 'NOT_NULL' as const
}

export const enumOrderByDirection = {
   AscNullsFirst: 'AscNullsFirst' as const,
   AscNullsLast: 'AscNullsLast' as const,
   DescNullsFirst: 'DescNullsFirst' as const,
   DescNullsLast: 'DescNullsLast' as const
}
