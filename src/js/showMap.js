import plotStyle from './ShowPlotStyle.js'

var map,
  layer, // 行政区划
  layerLabel, // 地名标注
  layerPlot, // 填图点
  map_base_url =
    'http://172.23.2.48:6080/arcgis/rest/services/zxt_aimap/ai_gsmap/MapServer/export'

function initMap() {
  console.log('初始化地图')
  map = new WeatherMap.Map('map', {
    controls: [
      new WeatherMap.Control.Navigation(),
      new WeatherMap.Control.Zoom()
    ]
  })

  layerPlot = ''
  layer = new WeatherMap.Layer.ArcGIS93Rest('baseMap', map_base_url, {
    layers: 'show:0,1,2,3', // 要显示的图层索引
    TRANSPARENT: false
  })
  // 行政区划
  // layer = new WeatherMap.Layer.TianDiTuLayer()
  // layer.setFormat('vec')
  // layer.setName('tianDiTuLayer_vec')
  // layer.setIsBaseLayer(true)
  // 地名标注
  layerLabel = new WeatherMap.Layer.TianDiTuLayer()
  layerLabel.setFormat('cva')
  layerLabel.setName('tianDiTuLayer_cva')
  layerLabel.setIsBaseLayer(false)
  map.addLayers([layer])
  map.setCenter(new WeatherMap.LonLat(103.191086, 36.59078), 6)
}

function loadData(json) {
  clearMap()
  createPoint()
  var features = json2Features(json)
  layerPlot.addFeatures(features)
}

function clearMap() {
  if (layerPlot) {
    map.removeLayer(layerPlot, true)
  }
}

function createPoint() {
  layerPlot = createPlotLayer()
  map.addLayer(layerPlot)
}

function createPlotLayer() {
  var layer = new WeatherMap.Layer.Vector('layerPlot', { renderers: ['Plot'] })
  layer.style = { pointRadius: 0.0 }
  console.log(plotStyle)
  layer.renderer.styles = plotStyle.plotStyle // 填图样式
  layer.renderer.plotWidth = 20 // 指定填图整体宽度（单位：像素），用于抽稀显示
  layer.renderer.plotHeight = 20 // 指定填图整体高度（单位：像素），用于抽稀显示
  return layer
}

function json2Features(json) {
  var features = []
  for (var i in json) {
    var item = json[i]
    var point = new WeatherMap.Geometry.Point(item.lon, item.lat)
    var feature = new WeatherMap.Feature.Vector(point)
    var color = ''
    for (var key in item) feature.attributes[key] = item[key]
    var NA = parseFloat(item.NA)
    // console.log(NA)
    if (NA >= 80) {
      color = '#228b22'
    } else if (NA >= 70 && NA <= 80) {
      color = '#00ff00'
    } else if (NA >= 60 && NA <= 70) {
      color = '#7cfc00'
    } else {
      color = '#ff0000'
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
  return features
}

export default {
  initMap,
  loadData,
  clearMap
}
