const localStoragekeyName = 'recordList';
const model = {
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(
            window.localStorage.getItem(localStoragekeyName) || "[]"
        ) as RecordItem[];
    },
    Save(data: RecordItem[]) {
        window.localStorage.setItem(localStoragekeyName, JSON.stringify(data))
    }
}
export default model