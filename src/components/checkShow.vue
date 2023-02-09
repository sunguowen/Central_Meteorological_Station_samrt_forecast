<template>
  <div id="checkShow">
    <div id="mapBox">
      <div id="mapInt">检验展示信息地图</div>
      <div id="map"></div>
      <div id="mapLegend"><img src="../assets/tl2.png" /></div>
      <div id="mapTitle"></div>
    </div>
    <div id="condition">
      <div id="condition-item">
        <!-- 逐小时和模型组 -->
        <div>
          <span style="padding:0 5px">预报产品:</span>
          <el-radio-group v-model="forcastTimelong" size="mini" @change="setForcastTimelong()">
            <el-radio-button label="R3">逐3小时</el-radio-button>
            <el-radio-button label="R24">逐24小时</el-radio-button>
          </el-radio-group>
          <span style="padding:0 5px">预报模型:</span>
          <el-select
            v-model="forecastModelValue"
            placeholder="请选择"
            size="mini"
            style="width:100px"
            @change="setForecastModel()"
          >
            <el-option
              v-for="item in this.$store.state.forcastModel"
              :key="item.value"
              :label="item.label"
              :value="item"
            ></el-option>
          </el-select>
        </div>
        <!-- 检验类型及要素 -->
        <div>
          <span style="padding:0 5px">检验类型及要素:</span>
          <el-cascader
            size="mini"
            v-model="element"
            :options="TypeAndElement"
            :props="{ expandTrigger: 'hover' }"
            @change="setElement()"
          ></el-cascader>
        </div>
        <!-- dateRange -->
        <div>
          <span style="padding:0 5px">日期范围:</span>
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
        </div>
        <div>
          <span style="padding:0 5px">起报时次:</span>
          <el-select v-model="startForecastTimeValue" size="mini" style="width:70px" @change="setStartForecastTime()">
            <el-option
              v-for="item in this.$store.state.startReportTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span style="padding:0 5px">起报时效:</span>
          <el-select v-model="validTimeLongValue" size="mini" style="width:70px" @change="setValidTimeLong()">
            <el-option
              v-for="item in validTimeLong"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div style="padding-left:5px !important">
          <el-button type="primary" size="mini" @click="getForecastPrVertify()">查询</el-button>
          <el-button type="primary" size="mini" @click="exportExcel()">导出</el-button>
        </div>
      </div>
      <div id="data-table">
        <el-table
          :highlight-current-row="true"
          :data="tableForecastInfo"
          size="mini"
          :header-cell-style="{
            background: '#ccc',
            color: '#555',
            textAlign: 'center',
            fontSize: '10px'
          }"
          :cell-style="{
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }"
          border
          stripe
          height="100%"
          id="exported_table"
          style="height:100%;border:1px solid #ccc"
        >
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column
            v-for="(item, index) in tableHead"
            :key="index"
            :width="item.split('|')[0] === '县区' ? '160px' : ''"
            :label="item.split('|')[0]"
            :prop="item.split('|')[1]"
          ></el-table-column>
        </el-table>
      </div>
      <div id="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          :pager-count="5"
          :current-page="pagenumber"
          :page-size="pagesize"
          layout="total,  prev, pager, next, jumper"
          :total="total"
          small
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
moment.locale('zh-cn')
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
        HH: '024'
      },
      // 逐小时的绑定值
      forcastTimelong: 'R24',
      // 预报模型的绑定值
      forecastModelValue: 'EC模式',
      // 检验类型及要素
      element: ['QY', '0'],
      // 检验类型及要素的选项
      TypeAndElement: [
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
      // 日期范围绑定的值
      dateRangeValue: [],
      // 起报时次的绑定值
      startForecastTimeValue: '08',
      // 起报时效的绑定值
      validTimeLongValue: '024',
      // 起报时效的可选值
      validTimeLong: [
        {
          label: '24',
          value: '024'
        }
      ],
      // 全部的预报信息数组
      forecastInfo: [],
      // 表格需要显示的预报信息
      tableForecastInfo: [],
      // 表头数组
      tableHead: [],
      // 分页器数据
      total: 0,
      pagesize: 50,
      pagenumber: 1,
      modeLabel: 'EC'
    }
  },
  created() {
    this.initDate()
  },
  mounted() {
    this.checkMap.initMap()
    this.getForecastPrVertify()
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
    // 逐小时选项改变时调用
    setForcastTimelong() {
      this.queryInfo.xiaoshi_type = this.forcastTimelong
      if (this.forcastTimelong === 'R3') {
        this.validTimeLong = [
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
        this.validTimeLongValue = '3'
        this.queryInfo.HH = this.validTimeLongValue
      } else {
        this.validTimeLong = [{ label: '24', value: '024' }]
        this.validTimeLongValue = '024'
        this.queryInfo.HH = this.validTimeLongValue
      }
    },
    // 预报模型发生变化时调用的方法
    setForecastModel() {
      this.queryInfo.fid = this.forecastModelValue.value
      this.modeLabel = this.forecastModelValue.label
    },
    // 检验类型和要素改变时调用
    setElement() {
      this.queryInfo.eletyp = this.element[0]
      this.queryInfo.eleval = this.element[1]
    },
    // 当日期范围发生变化时调用
    setDateRange() {
      this.queryInfo.begindate = this.dateRangeValue[0]
      this.queryInfo.enddate = this.dateRangeValue[1]
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
      this.tableForecastInfo = this.forecastInfo.slice(
        (this.pagenumber - 1) * this.pagesize,
        (this.pagenumber - 1) * this.pagesize + this.pagesize
      )
    },
    getForecastPrVertify() {
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'GetForecastPrVerify.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          that.total = parseInt(result.data.total)
          that.tableHead = result.data.title
          that.forecastInfo = result.data.rows
          that.tableForecastInfo = that.forecastInfo.slice(
            (that.pagenumber - 1) * that.pagesize,
            (that.pagenumber - 1) * that.pagesize + that.pagesize
          )
          that.checkMap.loadData(that.forecastInfo)
        }
      })
      var startTime = moment(this.queryInfo.begindate).format('LL')
      var startTimeYear = moment(this.queryInfo.begindate).get('year')
      var endTimeYear = moment(this.queryInfo.enddate).get('year')
      var endTimeMonth = moment(this.queryInfo.enddate).get('month') + 1
      var endTimeDay = moment(this.queryInfo.enddate).get('date')
      var endTime = ''
      if (startTimeYear === endTimeYear) {
        endTime = endTimeMonth + '月' + endTimeDay + '日'
      } else {
        endTime = endTimeYear + '年' + endTimeMonth + '月' + endTimeDay + '日'
      }
      var maptitle =
        this.modeLabel +
        '逐' +
        this.queryInfo.xiaoshi_type.slice(1) +
        '小时校验(日期:' +
        startTime +
        '至' +
        endTime +
        ' 时次:' +
        this.queryInfo.time +
        ' 时效:' +
        this.queryInfo.HH +
        'H)'
      $('#mapTitle').html(maptitle)
    },
    exportExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector('#exported_table'))
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'forecast.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/checkShow.css');
</style>
