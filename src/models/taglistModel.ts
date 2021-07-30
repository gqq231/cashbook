// import createId from '@/lib/createId';

// const localStoragekeyName = 'recordList';

// const taglistModel: TagListModel = {
//     data: [],
//     fetch() {
//         this.data = JSON.parse(
//             window.localStorage.getItem(localStoragekeyName) || "[]"
//         );
//         return this.data
//     },

//     update(id, name) {

//     },
//     remove(id: string) {

//     },
//     create(name: string) {
//         const names = this.data.map(item => item.name);
//         if (names.indexOf(name) >= 0) {
//             return 'duplicated'
//         }
//         const id = createId().toString();
//         this.data.push({ id, name: name })
//         this.save()
//         return 'success';
//     }
// }
// export default taglistModel