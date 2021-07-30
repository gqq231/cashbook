// import clone from "@/lib/clone";

// const localStoragekeyName = 'recordList';
// const recordlistModel = {
//     data: [] as RecordItem[],
//     fetch() {
//         this.data = JSON.parse(
//             window.localStorage.getItem(localStoragekeyName) || "[]"
//         ) as RecordItem[];
//         return this.data;
//     },
//     create(record: RecordItem) {
//         const record2: RecordItem = clone(record);
//         record2.createAt = new Date();
//         this.data.push(record2);
//         this.Save()
//     },
//     Save() {
//         window.localStorage.setItem(localStoragekeyName, JSON.stringify(this.data))
//     }
// }
// export default recordlistModel