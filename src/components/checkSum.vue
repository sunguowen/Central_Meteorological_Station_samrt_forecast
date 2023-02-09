<template>
  <div id="checkSum">
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
      <!-- 检验类型及要素 -->
      <!-- <span>检验类型及要素:</span>
      <el-select
        disabled
        v-model="TypeAElement"
        placeholder="请选择"
        size="mini"
        style="width:120px"
        @change="setTypeAElement()"
      >
        <el-option
          v-for="item in TypeAElementOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select> -->
      <!-- 预报模型 -->
      <!-- <span>预报模型:</span>
      <el-select
        v-model="forecastModelValue"
        placeholder="请选择"
        size="mini"
        style="width:120px"
        @change="setForecastModel()"
      >
        <el-option
          v-for="item in this.$store.state.forcastModel"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select> -->
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
      <span>站点:</span>
      <el-select
        v-model="stationValue"
        placeholder="请选择"
        size="mini"
        style="width:150px"
        @change="setStation()"
        filterable
      >
        <el-option label="全部" value="11111"></el-option>
        <el-option
          v-for="(item, index) in stationArray"
          :key="index"
          :label="item.lable"
          :value="item.StaID"
        ></el-option>
      </el-select>
      <el-button type="primary" size="mini" style="margin-left:10px !important" @click="getCheckoutSummaryInfo()">
        查询
      </el-button>
    </div>
    <div id="data-table">
      <el-table
        :highlight-current-row="true"
        v-loading="loading"
        :data="checkSumArray"
        size="mini"
        border
        stripe
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{
          background: '#ccc',
          color: '#333',
          textAlign: 'center'
        }"
        style="height:100%;border:1px solid #ccc"
      >
        <el-table-column label="序号" type="index" width="60px" fixed="left"></el-table-column>
        <el-table-column label="检验类型" prop="elename" fixed="left"></el-table-column>
        <!-- <el-table-column label="实况站次" prop="sk_num"></el-table-column> -->
        <!-- EC -->
        <el-table-column label="EC模式">
          <!-- <el-table-column label="预报站次" prop="ec_num"></el-table-column> -->
          <el-table-column label="准确率" prop="EC_NA">
            <template slot-scope="scope">
              <span>{{ scope.row.EC_NA | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="空报" prop="EC_NB">
            <template slot-scope="scope">
              <span>{{ scope.row.EC_NB | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="漏报" prop="EC_NC">
            <template slot-scope="scope">
              <span>{{ scope.row.EC_NC | saveTwofloat }}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <!-- 兰大0公里 -->
        <el-table-column label="0公里客观预报">
          <!-- <el-table-column label="预报站次" prop="f0_num"></el-table-column> -->
          <el-table-column label="准确率" prop="F0_NA">
            <template slot-scope="scope">
              <span>{{ scope.row.F0_NA | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="空报" prop="F0_NB">
            <template slot-scope="scope">
              <span>{{ scope.row.F0_NB | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="漏报" prop="F0_NC">
            <template slot-scope="scope">
              <span>{{ scope.row.F0_NC | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="技巧" prop="F0_jq">
            <template slot-scope="scope">
              <span v-if="parseFloat(scope.row.F0_jq) >= 0 || scope.row.F0_jq == ''" style="color:blue">
                {{ scope.row.F0_jq | saveTwofloat }}
              </span>
              <span v-else style="color:red">{{ scope.row.F0_jq | saveTwofloat }}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <!-- 兰大10公里 -->
        <el-table-column label="10公里客观预报">
          <!-- <el-table-column label="预报站次" prop="f10_num"></el-table-column> -->
          <el-table-column label="准确率" prop="F10_NA">
            <template slot-scope="scope">
              <span>{{ scope.row.F10_NA | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="空报" prop="F10_NB">
            <template slot-scope="scope">
              <span>{{ scope.row.F10_NB | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="漏报" prop="F10_NC">
            <template slot-scope="scope">
              <span>{{ scope.row.F10_NC | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="技巧" prop="F10_jq">
            <template slot-scope="scope">
              <span v-if="parseFloat(scope.row.F10_jq) >= 0 || scope.row.F10_jq == ''" style="color:blue">
                {{ scope.row.F10_jq | saveTwofloat }}
              </span>
              <span v-else style="color:red">{{ scope.row.F10_jq | saveTwofloat }}</span>
              <!--              <span>{{ scope.row.F10_jq | saveTwofloat }}</span>
 -->
            </template>
          </el-table-column>
        </el-table-column>
        <!-- 兰大60公里 -->
        <el-table-column label="60公里客观预报">
          <!-- <el-table-column label="预报站次" prop="f60_num"></el-table-column> -->
          <el-table-column label="准确率" prop="F60_NA">
            <template slot-scope="scope">
              <span>{{ scope.row.F60_NA | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="空报" prop="F60_NB">
            <template slot-scope="scope">
              <span>{{ scope.row.F60_NB | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="漏报" prop="F60_NC">
            <template slot-scope="scope">
              <span>{{ scope.row.F60_NC | saveTwofloat }}</span>
            </template>
          </el-table-column>
          <el-table-column label="技巧" prop="F60_jq">
            <template slot-scope="scope">
              <span v-if="parseFloat(scope.row.F60_jq) >= 0 || scope.row.F60_jq == ''" style="color:blue">
                {{ scope.row.F60_jq | saveTwofloat }}
              </span>
              <span v-else style="color:red">{{ scope.row.F60_jq | saveTwofloat }}</span>
              <!--              <span>{{ scope.row.F60_jq | saveTwofloat }}</span>-->
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
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
      checkSumArray: [],
      loading: true,
      // 控制列宽
      NAbcwidth: '79px'
    }
  },
  created() {
    this.initDate()
  },
  mounted() {
    this.getStation()
    this.getCheckoutSummaryInfo()
  },
  methods: {
    initDate() {
      // var startDate = moment()
      //   .subtract(2, 'months')
      //   .format('YYYYMMDD')
      // var endDate = moment().format('YYYYMMDD')
      var startDate = moment(new Date())
        .month(moment().month() - 1)
        .startOf('month')
        .valueOf()
      var endDate = moment(new Date())
        .month(moment().month() - 1)
        .endOf('month')
        .valueOf()
      startDate = moment(startDate).format('YYYYMMDD')
      endDate = moment(endDate).format('YYYYMMDD')
      console.log(startDate, endDate)
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
    getStation() {
      var that = this
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'staionifo.do',
        success: function(result) {
          result = JSON.parse(result)
          that.stationArray = result.data
        }
      })
    },
    // 获取校验汇总数据
    getCheckoutSummaryInfo() {
      this.loading = true
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      // console.log(resStr)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'GetForecastPrVerifyHZ.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          console.log(result)
          that.checkSumArray = result.data
          that.loading = false
        }
      })
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/checkSum.css');
</style>
