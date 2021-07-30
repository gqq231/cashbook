import createId from "@/lib/createId";

const localStoragekeyName = 'tagList';

const tagStore = {
    tagList: [] as Tag[],
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStoragekeyName) || '[]');
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter((t) => t.id === id)[0];
    },
    createTag(name: string) {
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复了');
            return 'duplicated';
        }
        const id = createId().toString();
        this.tagList.push({ id, name: name });
        this.saveTags();
        window.alert('添加成功');
        return 'success';
    },
    removeTag(id: string) {
        let index = -1;
        //遍历整个数组
        for (let i = 0; i < this.tagList.length; i++) {
            //获取当前需要删除的哪一项位置
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        //删除
        this.tagList.splice(index, 1);
        this.saveTags();
        return true;
    },
    updateTag(id: string, name: string) {
        //获取data中所有的id数组
        const idList = this.tagList.map(item => item.id);
        //如果id存在
        if (idList.indexOf(id) >= 0) {
            //获取data中所有的name数组
            const names = this.tagList.map(item => item.name);
            //如果修改的name重复了
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                //没有重复 获取当前tag
                const tag = this.tagList.filter(item => item.id === id)[0];
                //赋值
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    saveTags() {
        window.localStorage.setItem(localStoragekeyName, JSON.stringify(this.tagList))
    },
}

tagStore.fetchTags();

export default tagStore;