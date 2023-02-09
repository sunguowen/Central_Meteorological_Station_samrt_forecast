import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 提供唯一的公共数据源
  state: {
    // 菜单导航默认激活的选项
    defaultActive: '1-1',
    // 预报模型的选项
    forcastModel: [
      {
        value: 'EC',
        // label: 'EC'
        label: 'EC模式'
      },
      {
        value: 'f1_0',
        label: '0公里客观预报'
      },
      {
        value: 'f1_10',
        label: '10公里客观预报'
      },
      {
        value: 'f1_60',
        label: '60公里客观预报'
      }
    ],
    // 起报时次的选项
    startReportTime: [
      {
        label: '08',
        value: '08'
      },
      {
        label: '20',
        value: '20'
      }
    ]
  },
  // 用于变更store中的数据
  mutations: {
    setDefaultActive(state, index) {
      state.defaultActive = index
      console.log('我在改变默认值')
      console.log(state.defaultActive)
    }
  },
  // Action用于处理异步任务
  actions: {},
  // 为了方便多个模块的状态管理
  modules: {}
})
