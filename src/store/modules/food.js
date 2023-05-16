import { reqGetFoodclassify, reqSearchShowlist, reqUsersearchlist } from '@/api/food'
import { getLocalStorageData, setStorageData } from '@/utils/storage'
import Message from '@/utils/messageUI'
const food = {
    namespaced: true,
    state() {
        return {
            foodSearchList: [],
            searchNavsec: {
                name: '',
                resList: []
            }
        }
    },
    mutations: {
        GETCLASSIFY(state, data) {
            state.foodSearchList = data
        },
        GETSEARCHSHOWLIST(state, data) {
            state.searchNavsec.name = data.name
            state.searchNavsec.resList = data.result
        }

    },
    actions: {
        async getClassify({ commit }) {
            if (getLocalStorageData('rb').food.foodSearchList.length > 0) {
                commit('GETCLASSIFY', getLocalStorageData('rb').food.foodSearchList)
            } else {
                let res = await reqGetFoodclassify()
                if (res.status == 200) {
                    commit('GETCLASSIFY', res.result)
                } else {
                    Message({
                        type: 'error',
                        text: '获取搜索数据失败！',
                    })
                }
            }
        },
        async getSearchShowlist({ commit }, data) {
            let { status, name, result } = await reqSearchShowlist(data)
            if (status == 200) {
                if (result.length == 0) {
                    Message({
                        type: 'warn',
                        text: '暂无结果，请重新搜索！',
                    })
                }
                commit('GETSEARCHSHOWLIST', {
                    name: name,
                    result: result
                })
            }
        },
        async getUsersearchlist({ commit }, data) {
            let { status, name, result } = await reqUsersearchlist(data)
            if (status == 200) {
                commit('GETSEARCHSHOWLIST', {
                    name: name,
                    result: result
                })
            }
        }
    },
}
export default food