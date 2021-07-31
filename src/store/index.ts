import clone from '@/lib/clone';
import createId from '@/lib/createId';
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import router from '@/router';

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    recordList: [],
    createRecordError: null,
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    //money.vue
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date().toISOString();
      state.recordList && state.recordList.push(record2);
      console.log(state.recordList);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    //tag.vue
    fetchTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣')
        store.commit('createTag', '食')
        store.commit('createTag', '玩')
        store.commit('createTag', '交通')
      }
    },
    createTag(state, name) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
      }
      const id = createId().toString();
      state.tagList.push({ id, name: name });
      store.commit('saveTags')
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    //EditLabel.vue
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter((t) => t.id === id)[0]
    },
    updateTag(state, payload: { id: string, name: string }) {
      const id = payload.id;
      const name = payload.name;
      //获取data中所有的id数组
      const idList = state.tagList.map(item => item.id);
      //如果id存在
      if (idList.indexOf(id) >= 0) {
        //获取data中所有的name数组
        const names = state.tagList.map(item => item.name);
        //如果修改的name重复了
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复')
        } else {
          //没有重复 获取当前tag
          const tag = state.tagList.filter(item => item.id === id)[0];
          //赋值
          tag.name = name;
          store.commit('saveTags')
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      //遍历整个数组
      for (let i = 0; i < state.tagList.length; i++) {
        //获取当前需要删除的哪一项位置
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      //删除
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        window.alert('删除成功')
        router.back();
      } else {
        window.alert('删除失败');
      }
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store
