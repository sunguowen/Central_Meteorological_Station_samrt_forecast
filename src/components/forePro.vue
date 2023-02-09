<template>
  <div id="forePro">
    <div id="mapBox" class="mapBox">
      <div id="mapInt">预报产品信息地图(目前点的颜色代表预测值，点上的数值为实况数值)</div>
      <div id="map" class="map"></div>
      <div id="mapLegend"><img src="../assets/tl1.png" /></div>
      <div id="mapTitle"></div>
      <div id="skButton" @click="togSK()"></div>
    </div>
    <div id="condition">
      <div id="condition-item">
        <!-- 逐3、24小时选择器 -->
        <div>
          <span style="padding-right: 5px;">预报产品:</span>
          <el-radio-group v-model="forcastTimelong" size="mini" @change="setForecastTimelong()">
            <el-radio-button label="R3">逐3小时</el-radio-button>
            <el-radio-button label="R24">逐24小时</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 气象要素的选择器 -->
        <div>
          <span style="padding-right: 5px;">气象要素:</span>
          <el-radio-group v-model="element" size="mini" @change="setElement()">
            <el-radio-button label="0">晴</el-radio-button>
            <el-radio-button label="1">小雨</el-radio-button>
            <el-radio-button label="2">中雨</el-radio-button>
            <el-radio-button label="3">大雨</el-radio-button>
            <el-radio-button label="4">暴雨及以上</el-radio-button>
            <el-radio-button label="5">全部</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 预报模型选择器 -->
        <div>
          <span style="padding-right: 5px;">预报模型:</span>
          <el-select v-model="forecastModelValue" placeholder="请选择" size="mini" @change="setForecastModel()">
            <el-option
              v-for="item in this.$store.state.forcastModel"
              :key="item.value"
              :label="item.label"
              :value="item"
            ></el-option>
          </el-select>
        </div>
        <!-- 三合一 -->
        <div>
          <!-- 起报日期的选择器 -->
          <span style="padding-right: 5px;">起报日期:</span>
          <el-date-picker
            v-model="startForecastDate"
            value-format="yyyyMMdd"
            type="date"
            placeholder="选择日期"
            size="mini"
            style="width:150px;"
            @change="setStartForecastDate()"
          ></el-date-picker>
          <!-- 起报时次的选择器 -->
          <span style="padding:0 5px;">时次:</span>
          <el-select v-model="startForecastTimeValue" size="mini" style="width:70px" @change="setStartForecastTime()">
            <el-option
              v-for="item in this.$store.state.startReportTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <!-- 起报时效的选择器 -->
          <span style="padding:0 5px;">时效:</span>
          <el-select v-model="validTimeLongValue" size="mini" style="width:70px" @change="setValidTimeLong()">
            <el-option
              v-for="item in validTimeLong"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 查询和导出按钮 -->
        <div>
          <el-button type="primary" size="mini" @click="getForecastData()">查询</el-button>
          <el-button type="primary" size="mini" @click="exportExcel()">导出</el-button>
        </div>
      </div>
      <div id="data-table">
        <el-table
          :highlight-current-row="true"
          :data="tableForecastData"
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
          <el-table-column width="50px" label="序号" type="index"></el-table-column>
          <el-table-column label="市州" prop="city" width="110px"></el-table-column>
          <el-table-column label="县区" prop="county" width="120px"></el-table-column>
          <el-table-column label="站名" prop="StaName" width="80px"></el-table-column>
          <el-table-column label="站号" prop="stationnum" width="70"></el-table-column>
          <!-- <el-table-column
              label="时间"
              prop="observtm"
              width="100"
            ></el-table-column> -->
          <el-table-column label="时效" prop="time_hh" width="50px"></el-table-column>
          <el-table-column label="降水级别" prop="rainlvl"></el-table-column>
          <!-- <el-table-column label="降水量" prop="StaTyp"></el-table-column> -->
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
import $ from 'jquery'
import moment from 'moment'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
// 转换时支持为中文模式
moment.locale('zh-cn')
var SKcontrol = true // true不显示实况
export default {
  data() {
    return {
      // 请求预报数据的参数对象
      queryInfo: {
        begindate: '',
        fid: 'EC',
        time: '08',
        HH: '24',
        xiaoshi_type: 'R24',
        yaosu_val: '0'
      },
      // 预报时间间隔长度的选择值
      forcastTimelong: 'R24',
      // 气象要素
      element: '0',
      // 预报模型选择的值
      forecastModelValue: 'EC模式',
      // 起报日期的选择值
      startForecastDate: '',
      // 起报时次的选择值
      startForecastTimeValue: '08',
      // 起报时效的选择值
      validTimeLongValue: '24',
      // 起报时效选项数组
      validTimeLong: [
        {
          label: '24',
          value: '24'
        }
      ],
      // 获取到的预报信息数组
      forecastData: [],
      // 表格渲染的数组
      tableForecastData: [],
      // 分页器中的数据
      total: 0,
      pagesize: 50,
      pagenumber: 1,
      // 地图标题拼接时使用的数据
      modelLabel: 'EC'
    }
  },
  created() {
    // 初始化起报日期
    this.initDate()
  },
  mounted() {
    var htmlStr = '<button>显示实况</button>'
    $('#skButton').html(htmlStr)
    // 初始化地图
    this.proMap.initMap()
    // 获取预报数据
    this.getForecastData()
  },
  methods: {
    // 初始化呢选择日期的方法
    togSK() {
      SKcontrol = !SKcontrol
      var html = ''
      if (SKcontrol) {
        html = '<button>显示实况</button>'
      } else {
        html = '<button>隐藏实况</button>'
      }
      $('#skButton').html(html)
      this.getForecastData()
    },
    initDate() {
      var startDate = moment()
        .subtract(1, 'days')
        .format('YYYYMMDD')
      this.startForecastDate = startDate
      this.queryInfo.begindate = startDate
    },
    // 当R3 R24改变时调用
    setForecastTimelong() {
      // 第一步同步请求参数的值
      this.queryInfo.xiaoshi_type = this.forcastTimelong
      // 第二步实现时效选择器的联动效果
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
        this.validTimeLong = [{ label: '24', value: '24' }]
        this.validTimeLongValue = '24'
        this.queryInfo.HH = this.validTimeLongValue
      }
    },
    // 当气象要素发生改变时调用
    setElement() {
      this.queryInfo.yaosu_val = this.element
    },
    // 当预报模型发生改变时调用
    setForecastModel() {
      this.queryInfo.fid = this.forecastModelValue.value
      this.modelLabel = this.forecastModelValue.label
    },
    // 当选择的日期f发生变化时调用
    setStartForecastDate() {
      this.queryInfo.begindate = this.startForecastDate
    },
    // 当起报时次发生变化时调用
    setStartForecastTime() {
      this.queryInfo.time = this.startForecastTimeValue
    },
    // 当起报时效的值发生改变时调用
    setValidTimeLong() {
      this.queryInfo.HH = this.validTimeLongValue
    },
    handleCurrentChange(newPagenumber) {
      this.pagenumber = newPagenumber
      this.tableForecastData = this.forecastData.slice(
        (this.pagenumber - 1) * this.pagesize,
        (this.pagenumber - 1) * this.pagesize + this.pagesize
      )
    },
    // 获取预报数据的方法
    getForecastData() {
      var that = this
      var resStr = JSON.stringify(that.queryInfo)
      $.ajax({
        type: 'get',
        url: that.baseUrl + 'ForecastData.do',
        data: { param: resStr },
        success: function(result) {
          result = JSON.parse(result)
          that.total = parseInt(result.data.length)
          that.forecastData = result.data
          console.log(that.forecastData)
          that.tableForecastData = that.forecastData.slice(
            (that.pagenumber - 1) * that.pagesize,
            (that.pagenumber - 1) * that.pagesize + that.pagesize
          )
          that.proMap.loadData(that.forecastData, SKcontrol)
        }
      })
      var Time = moment(this.queryInfo.begindate).format('LL')
      var maptitle =
        this.modelLabel +
        '逐' +
        this.queryInfo.xiaoshi_type.slice(1) +
        '小时预报(日期: ' +
        Time +
        ' 时次: ' +
        this.queryInfo.time +
        ' 时效: ' +
        this.queryInfo.HH +
        ')'
      console.log(maptitle)
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
@import url('../assets/css/forePro.css');
</style>
