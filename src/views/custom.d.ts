type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
};

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    create: (name: string) => 'success' | 'duplicated'//封装使得有更多的弹窗选择
    save: () => void
}

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}


// interface Window {
//     store: {
//         tagList: Tag[];
//         createTag: (name: string) => void
//         removeTag: (id: string) => boolean
//         updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
//         findTag: (id: string) => Tag
//         recordList: RecordItem[];
//         createRecord: (record: RecordItem) => void
//     }
// }