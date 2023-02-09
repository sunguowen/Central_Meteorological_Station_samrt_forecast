<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
          <span style="font-weight: bold;">兰州中心气象台基于人工智能的智能化预警系统</span>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="this.$store.state.defaultActive"
            :default-openeds="defaultOpens"
            @select="setDfActive"
            background-color="#353a3d"
          >
            <el-submenu index="1">
              <template slot="title">
                <div class="firstMenu">
                  <i
                    class="el-icon-message-solid"
                    style="padding-right:5px !important"
                  ></i
                  ><span>预报展示</span>
                </div>
              </template>
              <el-menu-item-group>
                <router-link to="/forePro"
                  ><el-menu-item index="1-1"
                    ><span>预报产品</span></el-menu-item
                  ></router-link
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <div class="firstMenu">
                  <i
                    class="el-icon-s-check"
                    style="padding-right:5px !important"
                  ></i>
                  <span>预报检验</span>
                </div>
              </template>
              <el-menu-item-group>
                <router-link to="/checkShow"
                  ><el-menu-item index="2-1"
                    ><span>检验展示</span></el-menu-item
                  ></router-link
                >
                <router-link to="/checkSum"
                  ><el-menu-item index="2-2"
                    ><span>检验汇总</span></el-menu-item
                  ></router-link
                >
                <router-link to="/checkDet"
                  ><el-menu-item index="2-3"
                    ><span>检验明细</span></el-menu-item
                  ></router-link
                >
                <router-link to="/SKcompare"
                  ><el-menu-item index="2-4"
                    ><span>实况对比</span></el-menu-item
                  ></router-link
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="overflow: hidden;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      defaultOpens: ['1', '2']
    }
  },
  created() {
    this.$router.push('/')
  },
  methods: {
    setDfActive(index) {
      console.log(index)
      this.$store.commit('setDefaultActive', index)
    }
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
@import url('../assets/css/globel.css');
</style>
