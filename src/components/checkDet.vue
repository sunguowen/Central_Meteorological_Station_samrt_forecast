<template>
  <div id="checkDet">
    <div id="condition">
      <!-- 逐小时选择组 -->
      <el-radio-group v-model="forcastTimelong" size="mini" @change="setForcastTimelong()">
        <el-radio label="R3">逐3小时</el-radio>
        <el-radio label="R24">逐24小时</el-radio>
      </el-radio-group>
      <!-- 日期范围 -->
      <span>日期范围:</span>
      <el-date-picker
        value-format="yyyyMMdd"
        size="mini"
        align="center"
        editable="true"
        v-model="dateRangeValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="setDateRange()"
      ></el-date-picker>
      <!-- 检验类型及要素 -->
      <span>检验类型及要素:</span>
      <el-cascader
        size="mini"
        v-model="TypeAElementValue"
        :options="TypeAElementValueOption"
        :props="{ expandTrigger: 'hover' }"
        @change="setTypeAElement()"
        style="width:150px"
      ></el-cascader>
      <span>预报模型:</span>
      <el-select
        v-model="forcastModelValue"
        placeholder="请选择"
        size="mini"
        style="width:120px"
        @change="setForcastModel()"
      >
        <el-option
          v-for="item in this.$store.state.forcastModel"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
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
      <span>起报时效:</span>
      <el-select
        v-model="validTimeLongValue"
        placeholder="请选择"
        size="mini"
        style="width:100px"
        @change="setValidTimeLong()"
      >
        <el-option v-for="item in validTimeLong" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-button type="primary" size="mini" style="margin-left:10px !important" @click="getChectoutDetail()">
        查询
      </el-button>
    </div>
    <div id="data-table">
      <el-table
        :highlight-current-row="true"
        v-loading="loading"
        size="mini"
        :header-cell-style="{
          background: '#ccc',
          color: '#333',
          textAlign: 'center'
        }"
        :cell-style="{ textAlign: 'center', padding: '0' }"
        :data="checkDetArray"
        border
        stripe
        height="100%"
        style="height:100%;border:1px solid #ccc"
      >
        <el-table-column label="序号" type="index" width="50px"></el-table-column>
        <el-table-column label="州市" prop="city"></el-table-column>
        <el-table-column label="县区" prop="county" width="300px"></el-table-column>
        <el-table-column label="站名" prop="StaName"></el-table-column>
        <el-table-column label="站号" prop="staid"></el-table-column>
        <el-table-column label="时间" prop="Pdate"></el-table-column>
        <el-table-column label="时次" prop="Ptime"></el-table-column>
        <el-table-column label="时效" prop="HH"></el-table-column>
        <el-table-column label="分级降水" prop="Eles"></el-table-column>
        <!-- 准确率 -->
        <el-table-column label="NA" prop="NA">
          <template slot-scope="scope">
            <span
              v-if="parseInt(scope.row.NA) == 1"
              style="background-color:lightgreen;display:block;width:100%;height:100%"
            >
              {{ scope.row.NA }}
            </span>
            <span v-else style="display:block;width:100%;height:100%">{{ scope.row.NA }}</span>
          </template>
        </el-table-column>
        <!-- 空报 -->
        <el-table-column label="NB" prop="NB">
          <template slot-scope="scope">
            <span
              v-if="parseInt(scope.row.NB) == 1"
              style="display:block;width:100%;height:100%;background-color:lightgreen"
            >
              {{ scope.row.NB }}
            </span>
            <span v-else style="display:block;width:100%;height:100%">{{ scope.row.NB }}</span>
          </template>
        </el-table-column>
        <!-- 漏报 -->
        <el-table-column label="NC" prop="NC">
          <template slot-scope="scope">
            <span
              v-if="parseInt(scope.row.NC) == 1"
              style="display:block;width:100%;height:100%;background-color:lightgreen"
            >
              {{ scope.row.NC }}
            </span>
            <span v-else style="display:block;width:100%;height:100%">{{ scope.row.NC }}</span>
          </template>
        </el-table-column>
        <!-- 降水量偏差 -->
        <el-table-column label="E_T" prop="E_T"></el-table-column>
      </el-table>
    </div>
    <div id="pagination">
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenumber"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
export default {
  data() {
    return {
      // 请求参数对象
      queryInfo: {
        begindate: '',
        enddate: '',
        xiaoshi_type: 'R24',
        eletyp: 'QY',
        eleval: '0',
        fid: 'EC',
        time: '08',
        HH: '11111',
        page: '1',
        pagesize: '100'
      },
      // 逐小时选择的绑定值
      forcastTimelong: 'R24',
      // 日期范围改变时调用
      dateRangeValue: [],
      // 检验类型及要素改变时调用
      TypeAElementValue: ['QY', '0'],
      // 检验类型及要素的可选值
      TypeAElementValueOption: [
        {
          value: 'QY',
          label: '晴雨',
          children: [
            {
              value: '0',
              label: '全部'
            }
          ]
        },
        {
          value: 'FJJS',
          label: '分级降水',
          children: [
            {
              value: '11111',
              label: '全部'
            },
            {
              value: '1',
              label: '小雨'
            },
            {
              value: '2',
              label: '中雨'
            },
            {
              value: '3',
              label: '大雨'
            },
            {
              value: '4',
              label: '暴雨及以上'
            }
          ]
        }
      ],
      // 预报模型的绑定值
      forcastModelValue: 'EC',
      // 预报时次的绑定值
      startForecastTimeValue: '08',
      // 起报时效的绑定值
      validTimeLongValue: '11111',
      // 起报时效的可选值
      validTimeLong: [{ value: '11111', label: '24' }],
      // 校验明细数据数组
      checkDetArray: [],
      // 分页器相关数据
      total: 0,
      pagesize: 100,
      pagenumber: 1,
      loading: true
    }
  },
  created() {
    this.initDate()
  },
  mounted() {
    this.getChectoutDetail()
  },
  methods: {
    // 初始化日期
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
    // 当逐小时发生改变时调用
    setForcastTimelong() {
      this.queryInfo.xiaoshi_type = this.forcastTimelong
      if (this.forcastTimelong === 'R3') {
        this.validTimeLong = [
          {
            value: '11111',
            label: '全部'
          },
          {
            value: '3',
            label: '3'
          },
          {
            value: '6',
            label: '6'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '12',
            label: '12'
          },
          {
            value: '15',
            label: '15'
          },
          {
            value: '18',
            label: '18'
          },
          {
            value: '21',
            label: '21'
          },
          {
            value: '24',
            label: '24'
          }
        ]
        this.validTimeLongValue = '11111'
        this.queryInfo.HH = this.validTimeLongValue
      } else {
        this.validTimeLong = [{ value: '11111', label: '24' }]
        this.validTimeLongValue = '11111'
        this.queryInfo.HH = this.validTimeLongValue
      }
    },
    // 当日期范围改变时调用
    setDateRange() {
      this.queryInfo.begindate = this.dateRangeValue[0]
      this.queryInfo.enddate = this.dateRangeValue[1]
    },
    // 当检验类型及要素改变时调用
    setTypeAElement() {
      this.queryInfo.eletyp = this.TypeAElementValue[0]
      this.queryInfo.eleval = this.TypeAElementValue[1]
    },
    // 当预报模型发生改变时调用
    setForcastModel() {
      this.queryInfo.fid = this.forcastModelValue
    },
    // 当起报时次发生改变时调用
    setStartForecastTime() {
      this.queryInfo.time = this.startForecastTimeValue
    },
    // 当起报时效发生改变时调用
    setValidTimeLong() {
      this.queryInfo.HH = this.validTimeLongValue
    },
    handleCurrentChange(newPagenumber) {
      this.pagenumber = newPagenumber
      this.queryInfo.page = this.pagenumber
      this.getChectoutDetail()
    },
    handleSizeChange(newPagesize) {
      this.pagesize = newPagesize
      this.queryInfo.pagesize = this.pagesize
      this.getChectoutDetail()
    },
    // 获取校验明细数据
    getChectoutDetail() {
      this.loading = true
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      console.log(resStr)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'GetForecastPrVerifyDefinite.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          console.log(result)
          that.checkDetArray = result.data.rows
          that.total = parseInt(result.data.total)
          that.loading = false
        }
      })
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/checkDet.css');
</style>
