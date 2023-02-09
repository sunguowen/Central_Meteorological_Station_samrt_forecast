// import '../plugins/weatherMap/libs/WeatherMap.Include.js'
import plotStyle from './proPlotStyle.js'
// import '../public/js/plugin/jquery/jquery-1.10.1.min'
var map1
var layer // 行政区划
var layerLabel // 地名标注
var layerPlot // 填图点
var map_base_url =
  'http://172.23.2.48:6080/arcgis/rest/services/zxt_aimap/ai_gsmap/MapServer/export'

// 初始化地图
function initMap() {
  console.log('初始化地图')
  console.log(map1)
  map1 = new WeatherMap.Map('map', {
    controls: [
      new WeatherMap.Control.Navigation(),
      new WeatherMap.Control.Zoom()
    ]
  })
  layerPlot = ''
  // 行政区划
  layer = new WeatherMap.Layer.ArcGIS93Rest('baseMap', map_base_url, {
    layers: 'show:0,1,2,3', // 要显示的图层索引
    TRANSPARENT: false
  })

  // layer = new WeatherMap.Layer.TianDiTuLayer()
  // layer.setFormat('vec')
  // layer.setName('tianDiTuLayer_vec')
  // layer.setIsBaseLayer(true)
  // 地名标注
  layerLabel = new WeatherMap.Layer.TianDiTuLayer()
  layerLabel.setFormat('cva')
  layerLabel.setName('tianDiTuLayer_cva')
  layerLabel.setIsBaseLayer(false)
  map1.addLayers([layer])
  map1.setCenter(new WeatherMap.LonLat(103.191086, 36.59078), 6)
}

function loadData(json, SKcontrol) {
  clearMap()
  createPoint(SKcontrol)
  var features = json2Features(json)
  layerPlot.addFeatures(features)
  console.log('添加layerPlot到map')
}

function json2Features(json) {
  var features = []
  for (var i in json) {
    var item = json[i]
    var point = new WeatherMap.Geometry.Point(item.lon, item.lat)
    var feature = new WeatherMap.Feature.Vector(point)
    var color = ''
    for (var key in item) feature.attributes[key] = item[key]
    var rainlvl = item.rainlvl
    if (rainlvl === '暴雨及以上') {
      color = '#800040'
    } else if (rainlvl === '大雨') {
      color = '#0000E1'
    } else if (rainlvl === '中雨') {
      color = '#61B8FF'
    } else if (rainlvl === '小雨') {
      color = '#3DBA3D'
    } else {
      color = '#000000'
    }

    feature.style = {
      pointRadius: 2,
      fillColor: color,
      strokeColor: color,
      fontColor: color,
      fontSize: '14px',
      fontFamily: 'Microsoft Yahei',
      outline: false,
      outlinecolor: '#FFF'
    }
    features.push(feature)
  }
  console.log('返回feature')
  return features
}

function createPoint(SKcontrol) {
  console.log('创建layerPlot')
  layerPlot = createPlotLayer(SKcontrol)
  map1.addLayers([layerPlot])
}

function createPlotLayer(SKcontrol) {
  console.log('返回layer给layerPlot')
  var layer = new WeatherMap.Layer.Vector('layerPlot', {
    renderers: ['Plot']
  })
  layer.style = {
    pointRadius: 1.0
  } // 统一风格，设置点大小
  console.log(plotStyle)
  if (SKcontrol) {
    layer.renderer.styles = plotStyle.plotStyle2 // 填图样式
  } else {
    layer.renderer.styles = plotStyle.plotStyle1 // 填图样式
  }
  layer.renderer.plotWidth = 10 // 指定填图整体宽度（单位：像素），用于抽稀显示
  layer.renderer.plotHeight = 10 // 指定填图整体高度（单位：像素），用于抽稀显示
  return layer
}

function clearMap() {
  if (layerPlot) {
    console.log('清除layerPlot')
    map1.removeLayer(layerPlot, true)
  }
}
export default {
  map1,
  initMap,
  loadData
}
