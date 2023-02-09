<template>
  <div id="SKcompare">
    <div id="condition">
      <!-- 逐小时选项 -->
      <el-radio-group v-model="forcastTimelong" size="mini" @change="setForcastTimelong()">
        <el-radio label="R3">逐3小时</el-radio>
        <el-radio label="R24">逐24小时</el-radio>
      </el-radio-group>
      <!-- 日期范围 -->
      <span>日期范围:</span>
      <el-date-picker
        value-format="yyyyMMdd"
        size="mini"
        v-model="dateRangeValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="setDateRange()"
      ></el-date-picker>
      <!-- 起报时次 -->
      <span>起报时次:</span>
      <el-select
        v-model="startForecastTimeValue"
        placeholder="请选择"
        size="mini"
        style="width:100px"
        @change="setStartForecastTime()"
      >
        <el-option
          v-for="item in this.$store.state.startReportTime"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" size="mini" style="margin-left:10px !important" @click="getData()">查询</el-button>
    </div>
    <div id="tableArea">
      <div id="data-table">
        <div class="tableTitle">实况及模式统计表</div>
        <el-table
          v-loading='loading'
          element-loading-text="加载时间较长,请耐心等待..."
          :highlight-current-row="true"
          :data="RealityArray"
          size="mini"
          border
          stripe
          :cell-style="{ textAlign: 'center', padding: '0px !important' }"
          :header-cell-style="{
            padding: '0px',
            background: '#ccc',
            color: '#333',
            textAlign: 'center'
          }"
          height="90%"
          style="height:calc(100% - 30px);border:1px solid #ccc"
        >
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="检验级别">
            <template slot-scope="scope">
              <span v-if="scope.row.sklvl == '3'">大雨</span>
              <span v-else>暴雨及以上</span>
            </template>
          </el-table-column>
          <el-table-column label="日期" prop="SK_TIMES"></el-table-column>
          <el-table-column label="实况出现站数" prop="skcnt"></el-table-column>
          <el-table-column label="EC模式">
            <el-table-column label="预报站数" prop="EC_CNT"></el-table-column>
            <el-table-column label="命中站数" prop="EC_NA"></el-table-column>
          </el-table-column>
          <el-table-column label="0公里客观预报">
            <el-table-column label="预报站数" prop="F0_CNT"></el-table-column>
            <el-table-column label="命中站数" prop="F0_NA"></el-table-column>
          </el-table-column>
          <el-table-column label="10公里客观预报">
            <el-table-column label="预报站数" prop="F10_CNT"></el-table-column>
            <el-table-column label="命中站数" prop="F10_NA"></el-table-column>
          </el-table-column>
          <el-table-column label="60公里客观预报">
            <el-table-column label="预报站数" prop="F60_CNT"></el-table-column>
            <el-table-column label="命中站数" prop="F60_NA"></el-table-column>
          </el-table-column>
        </el-table>
      </div>
      <div id="StateDetTable">
        <div class="tableTitle">实况及模式明细表</div>
        <el-table
          v-loading="loadingDet"
          element-loading-text="加载时间较长,请耐心等待..."
          :data="SKDetArray"
          :highlight-current-row="true"
          size="mini"
          border
          stripe
          :cell-style="{ textAlign: 'center', padding: '0px !important' }"
          :header-cell-style="{
            padding: '0px',
            background: '#ccc',
            color: '#333',
            textAlign: 'center'
          }"
          height="83%"
          style="height:calc(100% - 60px);border:1px solid #ccc"
        >
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column label="日期" prop="SK_TIMES"></el-table-column>
          <el-table-column label="实况级别" prop="LVL">
            <template slot-scope="scope">
              <span v-if="scope.row.LVL == '3'">大雨</span>
              <span v-else>暴雨及以上</span>
            </template>
          </el-table-column>
          <el-table-column label="站号" prop="STAID"></el-table-column>
          <el-table-column label="实况" prop="VAL"></el-table-column>
          <el-table-column label="EC模式" prop="EC_RAINLVL"></el-table-column>
          <el-table-column label="0公里客观预报" prop="F0_RAINLVL"></el-table-column>
          <el-table-column label="10公里客观预报" prop="F10_RAINLVL"></el-table-column>
          <el-table-column label="60公里客观预报" prop="F60_RAINLVL"></el-table-column>
        </el-table>
<!--        <el-pagination
          small
          @current-change="handleCurrentChange"
          style="padding-top: 8px !important;"
          background
          layout="prev, pager, next"
          :current-page="pagenumber"
          :page-size="pagesize"
          :total="total"
        ></el-pagination> -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
export default {
  data() {
    return {
      queryInfo: {
        begindate: '',
        enddate: '',
        xiaoshi_type: 'R3', // R24
        fid: 'EC',
        time: '08', // 20
        staid: '11111',
        Meth: '11111'
      },
      // 逐2、24小时绑定值
      forcastTimelong: 'R3',
      // 日期范围的双向绑定值
      dateRangeValue: [],
      // 检验类型及要素的绑定值
      TypeAElement: '11111',
      // 检验类型及要素的选项
      TypeAElementOption: [
        { value: '11111', label: '全部' },
        {
          value: 'QY',
          label: '晴雨'
        },
        {
          value: 'FJJS',
          label: '分级降水'
        }
      ],
      // 预报模型的绑定值
      forecastModelValue: 'EC',
      // 起报时次的绑定值
      startForecastTimeValue: '08',
      // 站点的绑定值
      stationValue: '11111',
      // 站点数组
      stationArray: [],
      // 汇总数据数组
      RealityArray: [],
      loading: true,
      loadingDet: true,
      // 控制列宽
      NAbcwidth: '79px',
      // 实况明细完整数组
      SKDetArray: [],
      // 实况明细渲染数组
      SKDetTableArray: [],
      total: 0,
      pagesize: 50,
      pagenumber: 1
    }
  },
  created() {
    this.initDate()
  },
  mounted() {
    // this.getStation()
    this.getSKCompareArray()
    this.getSKDetilArray()
  },
  methods: {
    initDate() {
      var startDate = moment()
        .subtract(1, 'weeks')
        .format('YYYYMMDD')
      var endDate = moment(new Date()).format('YYYYMMDD')
      this.dateRangeValue[0] = startDate
      this.dateRangeValue[1] = endDate
      this.queryInfo.begindate = startDate
      this.queryInfo.enddate = endDate
    },
    // 逐小时改变时调用
    setForcastTimelong() {
      this.queryInfo.xiaoshi_type = this.forcastTimelong
    },
    // 当日期改变时调用
    setDateRange() {
      this.queryInfo.begindate = this.dateRangeValue[0]
      this.queryInfo.enddate = this.dateRangeValue[1]
    },
    // 检验类型及要素改变时调用
    setTypeAElement() {
      this.queryInfo.Meth = this.TypeAElement
    },
    // 预报模型改变时调用
    setForecastModel() {
      this.queryInfo.fid = this.forecastModelValue
    },
    // 起报时次发生改变时调用
    setStartForecastTime() {
      this.queryInfo.time = this.startForecastTimeValue
    },
    // 当站点改变时调用
    setStation() {
      this.queryInfo.staid = this.stationValue
    },
    // 获取站点数据的方法
    // getStation() {
    //   var that = this
    //   $.ajax({
    //     type: 'get',
    //     url: that.baseUrl + 'staionifo.do',
    //     success: function(result) {
    //       result = JSON.parse(result)
    //       that.stationArray = result.data
    //     }
    //   })
    // },
    getData() {
      this.getSKCompareArray()
      this.getSKDetilArray()
    },
    handleCurrentChange(newPagenumber) {
      this.pagenumber = newPagenumber
      this.tableForecastInfo = this.forecastInfo.slice(
        (this.pagenumber - 1) * this.pagesize,
        (this.pagenumber - 1) * this.pagesize + this.pagesize
      )
    },
    // 获取实况对比数据
    getSKCompareArray() {
      this.loading = true
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      // console.log(resStr)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'IDetailsAboveHeavyRain.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          console.log(result)
          that.RealityArray = result.data
          that.loading = false
        }
      })
    },
    // 获取实况及模式明细数组
    getSKDetilArray() {
      this.loadingDet = true
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'ILiveForecastDetails.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          that.SKDetArray = result.data
          that.SKDetTableArray = that.SKDetArray.slice(
            (that.pagenumber - 1) * that.pagesize,
            (that.pagenumber - 1) * that.pagesize + that.pagesize
          )
          that.loadingDet = false
        }
      })
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/SKcompare.css');
</style>
