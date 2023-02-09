import Mock from 'mockjs'
import $ from 'jquery'
const baseRequestUrl = 'http://10.166.6.126:8888/zxt/ai/'

Mock.mock('http://test.com', {
  'user|1-3': [
    {
      // 随机生成1到3个数组元素
      name: '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: '@city(true)', // 中国城市
      color: '@color', // 16进制颜色
      'isMale|1': true, // 布尔值
      'isFat|1-2': true, // true的概率是1/3
      // 'fromObj|2': obj,  // 从obj对象中随机获取2个属性
      //  'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
      'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
      'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
      'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },
    {
      gf: '@cname'
    }
  ]
})
Mock.mock(baseRequestUrl + 'staionifo.do', {
  type: 'SUCCESS',
  code: '0',
  msg: '操作成功！',
  data: [
    {
      lable: '52319|瓜洲柳园三岔口',
      StaID: '52319'
    },
    {
      lable: '52417|敦煌南湖二墩',
      StaID: '52417'
    },
    {
      lable: '52418|敦煌',
      StaID: '52418'
    },
    {
      lable: '52424|瓜州',
      StaID: '52424'
    },
    {
      lable: '52427|瓜洲榆林小千佛洞',
      StaID: '52427'
    },
    {
      lable: '52436|玉门镇',
      StaID: '52436'
    },
    {
      lable: '52447|金塔',
      StaID: '52447'
    },
    {
      lable: '52515|肃北',
      StaID: '52515'
    },
    {
      lable: '52530|玉门清泉白土梁',
      StaID: '52530'
    },
    {
      lable: '52533|酒泉',
      StaID: '52533'
    },
    {
      lable: '52546|高台',
      StaID: '52546'
    },
    {
      lable: '52548|高台红崖子明城',
      StaID: '52548'
    },
    {
      lable: '52557|临泽',
      StaID: '52557'
    },
    {
      lable: '52643|肃南',
      StaID: '52643'
    },
    {
      lable: '52652|张掖',
      StaID: '52652'
    },
    {
      lable: '52656|民乐',
      StaID: '52656'
    },
    {
      lable: '52661|山丹',
      StaID: '52661'
    },
    {
      lable: '52668|永昌西大河',
      StaID: '52668'
    },
    {
      lable: '52671|民勤红沙岗',
      StaID: '52671'
    },
    {
      lable: '52674|永昌',
      StaID: '52674'
    },
    {
      lable: '52675|金昌',
      StaID: '52675'
    },
    {
      lable: '52679|武威',
      StaID: '52679'
    },
    {
      lable: '52681|民勤',
      StaID: '52681'
    },
    {
      lable: '52784|古浪',
      StaID: '52784'
    },
    {
      lable: '52797|景泰',
      StaID: '52797'
    },
    {
      lable: '52881|天祝',
      StaID: '52881'
    },
    {
      lable: '52884|皋兰',
      StaID: '52884'
    },
    {
      lable: '52885|永登',
      StaID: '52885'
    },
    {
      lable: '52889|兰州',
      StaID: '52889'
    },
    {
      lable: '52895|靖远',
      StaID: '52895'
    },
    {
      lable: '52896|白银',
      StaID: '52896'
    },
    {
      lable: '52978|夏河',
      StaID: '52978'
    },
    {
      lable: '52980|永靖',
      StaID: '52980'
    },
    {
      lable: '52981|东乡',
      StaID: '52981'
    },
    {
      lable: '52982|广河',
      StaID: '52982'
    },
    {
      lable: '52983|榆中',
      StaID: '52983'
    },
    {
      lable: '52984|临夏',
      StaID: '52984'
    },
    {
      lable: '52985|和政',
      StaID: '52985'
    },
    {
      lable: '52986|临洮',
      StaID: '52986'
    },
    {
      lable: '52988|康乐',
      StaID: '52988'
    },
    {
      lable: '52993|会宁',
      StaID: '52993'
    },
    {
      lable: '52995|安定',
      StaID: '52995'
    },
    {
      lable: '52998|渭源',
      StaID: '52998'
    },
    {
      lable: '53821|环县',
      StaID: '53821'
    },
    {
      lable: '53829|庆城',
      StaID: '53829'
    },
    {
      lable: '53906|静宁',
      StaID: '53906'
    },
    {
      lable: '53908|通渭',
      StaID: '53908'
    },
    {
      lable: '53915|崆峒',
      StaID: '53915'
    },
    {
      lable: '53917|庄浪',
      StaID: '53917'
    },
    {
      lable: '53923|西峰',
      StaID: '53923'
    },
    {
      lable: '53924|灵台',
      StaID: '53924'
    },
    {
      lable: '53925|镇原',
      StaID: '53925'
    },
    {
      lable: '53926|泾川',
      StaID: '53926'
    },
    {
      lable: '53927|华亭',
      StaID: '53927'
    },
    {
      lable: '53928|崇信',
      StaID: '53928'
    },
    {
      lable: '53930|华池',
      StaID: '53930'
    },
    {
      lable: '53934|合水',
      StaID: '53934'
    },
    {
      lable: '53935|正宁',
      StaID: '53935'
    },
    {
      lable: '53937|宁县',
      StaID: '53937'
    },
    {
      lable: '56071|碌曲',
      StaID: '56071'
    },
    {
      lable: '56074|玛曲',
      StaID: '56074'
    },
    {
      lable: '56080|合作',
      StaID: '56080'
    },
    {
      lable: '56081|临潭',
      StaID: '56081'
    },
    {
      lable: '56082|卓尼',
      StaID: '56082'
    },
    {
      lable: '56084|迭部',
      StaID: '56084'
    },
    {
      lable: '56091|漳县',
      StaID: '56091'
    },
    {
      lable: '56092|陇西',
      StaID: '56092'
    },
    {
      lable: '56093|岷县',
      StaID: '56093'
    },
    {
      lable: '56094|舟曲',
      StaID: '56094'
    },
    {
      lable: '56095|宕昌',
      StaID: '56095'
    },
    {
      lable: '56096|武都',
      StaID: '56096'
    },
    {
      lable: '56192|文县',
      StaID: '56192'
    },
    {
      lable: '57001|甘谷',
      StaID: '57001'
    },
    {
      lable: '57002|秦安',
      StaID: '57002'
    },
    {
      lable: '57004|武山',
      StaID: '57004'
    },
    {
      lable: '57006|天水',
      StaID: '57006'
    },
    {
      lable: '57007|礼县',
      StaID: '57007'
    },
    {
      lable: '57008|西和',
      StaID: '57008'
    },
    {
      lable: '57011|清水',
      StaID: '57011'
    },
    {
      lable: '57012|张家川',
      StaID: '57012'
    },
    {
      lable: '57014|麦积',
      StaID: '57014'
    },
    {
      lable: '57102|成县',
      StaID: '57102'
    },
    {
      lable: '57105|康县',
      StaID: '57105'
    },
    {
      lable: '57110|徽县',
      StaID: '57110'
    },
    {
      lable: '57111|两当',
      StaID: '57111'
    },
    {
      lable: 'W1001|阿克塞多坝沟',
      StaID: 'W1001'
    },
    {
      lable: 'W1004|西湖',
      StaID: 'W1004'
    },
    {
      lable: 'W1005|锁阳城',
      StaID: 'W1005'
    },
    {
      lable: 'W1011|石包城',
      StaID: 'W1011'
    },
    {
      lable: 'W1021|柳园镇',
      StaID: 'W1021'
    },
    {
      lable: 'W1022|青西',
      StaID: 'W1022'
    },
    {
      lable: 'W1026|柳湖',
      StaID: 'W1026'
    },
    {
      lable: 'W1031|生地湾',
      StaID: 'W1031'
    },
    {
      lable: 'W1032|航天镇',
      StaID: 'W1032'
    },
    {
      lable: 'W1034|大庄子',
      StaID: 'W1034'
    },
    {
      lable: 'W1040|屯升',
      StaID: 'W1040'
    },
    {
      lable: 'W1052|二墩',
      StaID: 'W1052'
    },
    {
      lable: 'W1060|麻黄滩',
      StaID: 'W1060'
    },
    {
      lable: 'W1064|南岔',
      StaID: 'W1064'
    },
    {
      lable: 'W1066|河东',
      StaID: 'W1066'
    },
    {
      lable: 'W1067|柳沟',
      StaID: 'W1067'
    },
    {
      lable: 'W1090|敦-阿沙山口',
      StaID: 'W1090'
    },
    {
      lable: 'W1103|东洞乡',
      StaID: 'W1103'
    },
    {
      lable: 'W1105|宽滩山',
      StaID: 'W1105'
    },
    {
      lable: 'W1108|昌马西湖',
      StaID: 'W1108'
    },
    {
      lable: 'W1601|城楼',
      StaID: 'W1601'
    },
    {
      lable: 'W2014|平川',
      StaID: 'W2014'
    },
    {
      lable: 'W2019|红沙窝林场',
      StaID: 'W2019'
    },
    {
      lable: 'W2027|西水',
      StaID: 'W2027'
    },
    {
      lable: 'W2030|老军',
      StaID: 'W2030'
    },
    {
      lable: 'W2038|三堡',
      StaID: 'W2038'
    },
    {
      lable: 'W2042|明花',
      StaID: 'W2042'
    },
    {
      lable: 'W2045|康乐镇',
      StaID: 'W2045'
    },
    {
      lable: 'W2095|张掖农场',
      StaID: 'W2095'
    },
    {
      lable: 'W2107|红山',
      StaID: 'W2107'
    },
    {
      lable: 'W2112|东岭村',
      StaID: 'W2112'
    },
    {
      lable: 'W2117|卧马',
      StaID: 'W2117'
    },
    {
      lable: 'W2523|干城',
      StaID: 'W2523'
    },
    {
      lable: 'W2526|西靖',
      StaID: 'W2526'
    },
    {
      lable: 'W2528|皇城',
      StaID: 'W2528'
    },
    {
      lable: 'W2529|打柴沟',
      StaID: 'W2529'
    },
    {
      lable: 'W2543|丰乐',
      StaID: 'W2543'
    },
    {
      lable: 'W2544|吴家井',
      StaID: 'W2544'
    },
    {
      lable: 'W2545|横梁',
      StaID: 'W2545'
    },
    {
      lable: 'W2551|收成',
      StaID: 'W2551'
    },
    {
      lable: 'W2555|祁连',
      StaID: 'W2555'
    },
    {
      lable: 'W2570|旦马乡',
      StaID: 'W2570'
    },
    {
      lable: 'W2574|西营镇',
      StaID: 'W2574'
    },
    {
      lable: 'W3009|苦水',
      StaID: 'W3009'
    },
    {
      lable: 'W3011|吐鲁沟',
      StaID: 'W3011'
    },
    {
      lable: 'W3021|中川镇',
      StaID: 'W3021'
    },
    {
      lable: 'W3035|新农村',
      StaID: 'W3035'
    },
    {
      lable: 'W3106|什川镇',
      StaID: 'W3106'
    },
    {
      lable: 'W3215|中连川',
      StaID: 'W3215'
    },
    {
      lable: 'W3218|马坡乡',
      StaID: 'W3218'
    },
    {
      lable: 'W3220|上花',
      StaID: 'W3220'
    },
    {
      lable: 'W3380|关山',
      StaID: 'W3380'
    },
    {
      lable: 'W3382|植物园',
      StaID: 'W3382'
    },
    {
      lable: 'W3428|琅峪村',
      StaID: 'W3428'
    },
    {
      lable: 'W3503|土木',
      StaID: 'W3503'
    },
    {
      lable: 'W3510|王家山',
      StaID: 'W3510'
    },
    {
      lable: 'W3513|刘川',
      StaID: 'W3513'
    },
    {
      lable: 'W3518|正路',
      StaID: 'W3518'
    },
    {
      lable: 'W3522|水川镇',
      StaID: 'W3522'
    },
    {
      lable: 'W3706|红水镇',
      StaID: 'W3706'
    },
    {
      lable: 'W3807|大芦乡',
      StaID: 'W3807'
    },
    {
      lable: 'W3810|兴隆',
      StaID: 'W3810'
    },
    {
      lable: 'W3904|汉家岔乡',
      StaID: 'W3904'
    },
    {
      lable: 'W3906|侯川乡',
      StaID: 'W3906'
    },
    {
      lable: 'W3908|太平镇',
      StaID: 'W3908'
    },
    {
      lable: 'W4001|符川',
      StaID: 'W4001'
    },
    {
      lable: 'W4007|鲁家沟',
      StaID: 'W4007'
    },
    {
      lable: 'W4035|李店',
      StaID: 'W4035'
    },
    {
      lable: 'W4039|义岗',
      StaID: 'W4039'
    },
    {
      lable: 'W4045|鸡川',
      StaID: 'W4045'
    },
    {
      lable: 'W4053|辛店',
      StaID: 'W4053'
    },
    {
      lable: 'W4062|窑店',
      StaID: 'W4062'
    },
    {
      lable: 'W4063|站滩',
      StaID: 'W4063'
    },
    {
      lable: 'W4080|双泉',
      StaID: 'W4080'
    },
    {
      lable: 'W4082|权家湾',
      StaID: 'W4082'
    },
    {
      lable: 'W4093|上湾',
      StaID: 'W4093'
    },
    {
      lable: 'W4105|大安',
      StaID: 'W4105'
    },
    {
      lable: 'W4111|大草滩',
      StaID: 'W4111'
    },
    {
      lable: 'W4119|武当',
      StaID: 'W4119'
    },
    {
      lable: 'W4146|蒲麻',
      StaID: 'W4146'
    },
    {
      lable: 'W4147|闾井',
      StaID: 'W4147'
    },
    {
      lable: 'W4162|寨上',
      StaID: 'W4162'
    },
    {
      lable: 'W4192|殪虎桥沙沟台',
      StaID: 'W4192'
    },
    {
      lable: 'W4196|四族牙里',
      StaID: 'W4196'
    },
    {
      lable: 'W4223|马河',
      StaID: 'W4223'
    },
    {
      lable: 'W4224|崔家湾村',
      StaID: 'W4224'
    },
    {
      lable: 'W4237|秦祁乡',
      StaID: 'W4237'
    },
    {
      lable: 'W4261|新集村',
      StaID: 'W4261'
    },
    {
      lable: 'W5015|齐寿',
      StaID: 'W5015'
    },
    {
      lable: 'W5034|上磨',
      StaID: 'W5034'
    },
    {
      lable: 'W5043|东山',
      StaID: 'W5043'
    },
    {
      lable: 'W5048|庙川',
      StaID: 'W5048'
    },
    {
      lable: 'W5059|柏母',
      StaID: 'W5059'
    },
    {
      lable: 'W5105|吴砦',
      StaID: 'W5105'
    },
    {
      lable: 'W5106|东岔',
      StaID: 'W5106'
    },
    {
      lable: 'W5107|利桥',
      StaID: 'W5107'
    },
    {
      lable: 'W5109|党川',
      StaID: 'W5109'
    },
    {
      lable: 'W5113|麦积山',
      StaID: 'W5113'
    },
    {
      lable: 'W5114|元龙镇',
      StaID: 'W5114'
    },
    {
      lable: 'W5148|赵家窝驼',
      StaID: 'W5148'
    },
    {
      lable: 'W5227|湾儿',
      StaID: 'W5227'
    },
    {
      lable: 'W5310|大庄',
      StaID: 'W5310'
    },
    {
      lable: 'W5313|谢家湾',
      StaID: 'W5313'
    },
    {
      lable: 'W5401|沿安',
      StaID: 'W5401'
    },
    {
      lable: 'W5405|四门',
      StaID: 'W5405'
    },
    {
      lable: 'W5506|白駝',
      StaID: 'W5506'
    },
    {
      lable: 'W5507|秦亭',
      StaID: 'W5507'
    },
    {
      lable: 'W5603|马关',
      StaID: 'W5603'
    },
    {
      lable: 'W5610|关山牧场',
      StaID: 'W5610'
    },
    {
      lable: 'W6004|白关',
      StaID: 'W6004'
    },
    {
      lable: 'W6012|马营',
      StaID: 'W6012'
    },
    {
      lable: 'W6014|安化',
      StaID: 'W6014'
    },
    {
      lable: 'W6017|纸坊',
      StaID: 'W6017'
    },
    {
      lable: 'W6024|平洛',
      StaID: 'W6024'
    },
    {
      lable: 'W6026|虞关',
      StaID: 'W6026'
    },
    {
      lable: 'W6029|哈达铺',
      StaID: 'W6029'
    },
    {
      lable: 'W6040|六巷',
      StaID: 'W6040'
    },
    {
      lable: 'W6042|隆兴',
      StaID: 'W6042'
    },
    {
      lable: 'W6050|中寨',
      StaID: 'W6050'
    },
    {
      lable: 'W6053|康南林场',
      StaID: 'W6053'
    },
    {
      lable: 'W6056|高桥',
      StaID: 'W6056'
    },
    {
      lable: 'W6060|南阳',
      StaID: 'W6060'
    },
    {
      lable: 'W6062|蒿林',
      StaID: 'W6062'
    },
    {
      lable: 'W6065|镡河',
      StaID: 'W6065'
    },
    {
      lable: 'W6075|马河',
      StaID: 'W6075'
    },
    {
      lable: 'W6077|王坝',
      StaID: 'W6077'
    },
    {
      lable: 'W6080|固城',
      StaID: 'W6080'
    },
    {
      lable: 'W6084|上坪',
      StaID: 'W6084'
    },
    {
      lable: 'W6090|官亭',
      StaID: 'W6090'
    },
    {
      lable: 'W6091|狮子',
      StaID: 'W6091'
    },
    {
      lable: 'W6116|晒经',
      StaID: 'W6116'
    },
    {
      lable: 'W6121|宋坪',
      StaID: 'W6121'
    },
    {
      lable: 'W6127|张家',
      StaID: 'W6127'
    },
    {
      lable: 'W6129|站儿巷',
      StaID: 'W6129'
    },
    {
      lable: 'W6131|金洞',
      StaID: 'W6131'
    },
    {
      lable: 'W6140|麻沿河',
      StaID: 'W6140'
    },
    {
      lable: 'W6146|长坝',
      StaID: 'W6146'
    },
    {
      lable: 'W6150|店子',
      StaID: 'W6150'
    },
    {
      lable: 'W6151|三河',
      StaID: 'W6151'
    },
    {
      lable: 'W6166|黄坪',
      StaID: 'W6166'
    },
    {
      lable: 'W6168|桔柑',
      StaID: 'W6168'
    },
    {
      lable: 'W6173|枫相',
      StaID: 'W6173'
    },
    {
      lable: 'W6175|五库',
      StaID: 'W6175'
    },
    {
      lable: 'W6176|月照',
      StaID: 'W6176'
    },
    {
      lable: 'W6177|五马',
      StaID: 'W6177'
    },
    {
      lable: 'W6179|刘家坪',
      StaID: 'W6179'
    },
    {
      lable: 'W6181|范坝',
      StaID: 'W6181'
    },
    {
      lable: 'W6187|舍书',
      StaID: 'W6187'
    },
    {
      lable: 'W6189|桥头',
      StaID: 'W6189'
    },
    {
      lable: 'W6262|沟门村',
      StaID: 'W6262'
    },
    {
      lable: 'W6271|小林村',
      StaID: 'W6271'
    },
    {
      lable: 'W6305|周家坝',
      StaID: 'W6305'
    },
    {
      lable: 'W6308|水沟坪',
      StaID: 'W6308'
    },
    {
      lable: 'W6339|火站村',
      StaID: 'W6339'
    },
    {
      lable: 'W6352|上坝村',
      StaID: 'W6352'
    },
    {
      lable: 'W6354|大柳村',
      StaID: 'W6354'
    },
    {
      lable: 'W7006|治平',
      StaID: 'W7006'
    },
    {
      lable: 'W7103|草峰',
      StaID: 'W7103'
    },
    {
      lable: 'W7108|索罗',
      StaID: 'W7108'
    },
    {
      lable: 'W7202|韩店',
      StaID: 'W7202'
    },
    {
      lable: 'W7204|通化',
      StaID: 'W7204'
    },
    {
      lable: 'W7206|阳川',
      StaID: 'W7206'
    },
    {
      lable: 'W7301|邵寨',
      StaID: 'W7301'
    },
    {
      lable: 'W7306|百里',
      StaID: 'W7306'
    },
    {
      lable: 'W7316|梁原',
      StaID: 'W7316'
    },
    {
      lable: 'W7409|荔堡',
      StaID: 'W7409'
    },
    {
      lable: 'W7411|泾明',
      StaID: 'W7411'
    },
    {
      lable: 'W7501|安口',
      StaID: 'W7501'
    },
    {
      lable: 'W7508|河西',
      StaID: 'W7508'
    },
    {
      lable: 'W7606|五举',
      StaID: 'W7606'
    },
    {
      lable: 'W8001|甜水',
      StaID: 'W8001'
    },
    {
      lable: 'W8003|罗山',
      StaID: 'W8003'
    },
    {
      lable: 'W8005|四合塬',
      StaID: 'W8005'
    },
    {
      lable: 'W8006|虎洞',
      StaID: 'W8006'
    },
    {
      lable: 'W8008|合道',
      StaID: 'W8008'
    },
    {
      lable: 'W8009|曲子',
      StaID: 'W8009'
    },
    {
      lable: 'W8013|桐川',
      StaID: 'W8013'
    },
    {
      lable: 'W8014|蔡口集',
      StaID: 'W8014'
    },
    {
      lable: 'W8015|驿马镇',
      StaID: 'W8015'
    },
    {
      lable: 'W8016|武沟',
      StaID: 'W8016'
    },
    {
      lable: 'W8017|太平',
      StaID: 'W8017'
    },
    {
      lable: 'W8018|太白',
      StaID: 'W8018'
    },
    {
      lable: 'W8019|蒿咀铺',
      StaID: 'W8019'
    },
    {
      lable: 'W8020|长庆桥',
      StaID: 'W8020'
    },
    {
      lable: 'W8021|盘克',
      StaID: 'W8021'
    },
    {
      lable: 'W8023|周家',
      StaID: 'W8023'
    },
    {
      lable: 'W8024|肖金',
      StaID: 'W8024'
    },
    {
      lable: 'W8026|赤城',
      StaID: 'W8026'
    },
    {
      lable: 'W8027|三岔',
      StaID: 'W8027'
    },
    {
      lable: 'W8028|新集',
      StaID: 'W8028'
    },
    {
      lable: 'W8031|毛井',
      StaID: 'W8031'
    },
    {
      lable: 'W8032|八珠',
      StaID: 'W8032'
    },
    {
      lable: 'W8033|洪德',
      StaID: 'W8033'
    },
    {
      lable: 'W8034|木钵',
      StaID: 'W8034'
    },
    {
      lable: 'W8039|屯字',
      StaID: 'W8039'
    },
    {
      lable: 'W8048|中湾',
      StaID: 'W8048'
    },
    {
      lable: 'W8059|悦乐镇',
      StaID: 'W8059'
    },
    {
      lable: 'W8069|平子镇',
      StaID: 'W8069'
    },
    {
      lable: 'W8072|永和镇',
      StaID: 'W8072'
    },
    {
      lable: 'W8075|豹子川',
      StaID: 'W8075'
    },
    {
      lable: 'W8078|鸭口',
      StaID: 'W8078'
    },
    {
      lable: 'W8080|大庄',
      StaID: 'W8080'
    },
    {
      lable: 'W8084|中塬',
      StaID: 'W8084'
    },
    {
      lable: 'W8087|堡子山',
      StaID: 'W8087'
    },
    {
      lable: 'W8091|老庙咀',
      StaID: 'W8091'
    },
    {
      lable: 'W8104|翟家河站',
      StaID: 'W8104'
    },
    {
      lable: 'W8126|麻子掌',
      StaID: 'W8126'
    },
    {
      lable: 'W8128|莲花池',
      StaID: 'W8128'
    },
    {
      lable: 'W9016|王台',
      StaID: 'W9016'
    },
    {
      lable: 'W9019|莲花',
      StaID: 'W9019'
    },
    {
      lable: 'W9020|尹集',
      StaID: 'W9020'
    },
    {
      lable: 'W9022|八松',
      StaID: 'W9022'
    },
    {
      lable: 'W9025|癿藏',
      StaID: 'W9025'
    },
    {
      lable: 'W9026|董岭',
      StaID: 'W9026'
    },
    {
      lable: 'W9030|达板',
      StaID: 'W9030'
    },
    {
      lable: 'W9046|五户',
      StaID: 'W9046'
    },
    {
      lable: 'W9050|石塬',
      StaID: 'W9050'
    },
    {
      lable: 'W9227|坪沟',
      StaID: 'W9227'
    },
    {
      lable: 'W9503|郎木寺',
      StaID: 'W9503'
    },
    {
      lable: 'W9504|河曲马场',
      StaID: 'W9504'
    },
    {
      lable: 'W9506|尕海',
      StaID: 'W9506'
    },
    {
      lable: 'W9510|旺藏',
      StaID: 'W9510'
    },
    {
      lable: 'W9512|美仁',
      StaID: 'W9512'
    },
    {
      lable: 'W9514|牙利吉',
      StaID: 'W9514'
    },
    {
      lable: 'W9518|完冒',
      StaID: 'W9518'
    },
    {
      lable: 'W9519|大峪沟',
      StaID: 'W9519'
    },
    {
      lable: 'W9524|腊子口',
      StaID: 'W9524'
    },
    {
      lable: 'W9530|勒秀',
      StaID: 'W9530'
    },
    {
      lable: 'W9531|达久滩',
      StaID: 'W9531'
    },
    {
      lable: 'W9532|博拉',
      StaID: 'W9532'
    },
    {
      lable: 'W9534|冶力关',
      StaID: 'W9534'
    },
    {
      lable: 'W9540|恰盖',
      StaID: 'W9540'
    },
    {
      lable: 'W9543|扎尕那',
      StaID: 'W9543'
    },
    {
      lable: 'W9547|阿万仓',
      StaID: 'W9547'
    },
    {
      lable: 'W9549|武坪',
      StaID: 'W9549'
    },
    {
      lable: 'W9550|阿孜站',
      StaID: 'W9550'
    },
    {
      lable: 'W9551|曼日玛',
      StaID: 'W9551'
    },
    {
      lable: 'W9553|三岔',
      StaID: 'W9553'
    },
    {
      lable: 'W9558|拱坝',
      StaID: 'W9558'
    },
    {
      lable: 'W9562|科才',
      StaID: 'W9562'
    },
    {
      lable: 'W9566|尼巴',
      StaID: 'W9566'
    },
    {
      lable: 'W9568|木西合',
      StaID: 'W9568'
    },
    {
      lable: 'W9570|曲瓦',
      StaID: 'W9570'
    },
    {
      lable: 'W9577|扎古录',
      StaID: 'W9577'
    },
    {
      lable: 'W9581|坑乍',
      StaID: 'W9581'
    },
    {
      lable: 'W9593|黑峪',
      StaID: 'W9593'
    },
    {
      lable: 'W9608|茶坪',
      StaID: 'W9608'
    },
    {
      lable: 'W9616|槐沟',
      StaID: 'W9616'
    },
    {
      lable: 'W9626|唐尕昂',
      StaID: 'W9626'
    },
    {
      lable: 'W9627|达麦',
      StaID: 'W9627'
    },
    {
      lable: 'W9634|则岔景区',
      StaID: 'W9634'
    },
    {
      lable: 'W9641|插岗',
      StaID: 'W9641'
    },
    {
      lable: 'W9642|欧拉秀玛',
      StaID: 'W9642'
    },
    {
      lable: 'W9643|采日玛',
      StaID: 'W9643'
    },
    {
      lable: 'W9666|尼什峡',
      StaID: 'W9666'
    }
  ]
})
// RegExp(url + ".*")
Mock.mock(RegExp(baseRequestUrl + 'ForecastData.do' + '.*'), {
  type: 'SUCCESS',
  code: '0',
  msg: '操作成功！',
  data: [
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '瓜州县',
      rainlvl: '晴',
      lon: '95.4622',
      stationnum: '52319',
      sk_val: '0.0', // 实况
      StaName: '瓜洲柳园三岔口',
      StaTyp: '0.0',
      row_number: '1',
      time_hh: '3  ',
      lat: '41.07'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '敦煌市',
      rainlvl: '晴',
      lon: '94.1917',
      stationnum: '52417',
      sk_val: '0.0',
      StaName: '敦煌南湖二墩',
      StaTyp: '0.0',
      row_number: '2',
      time_hh: '3  ',
      lat: '40.09'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '敦煌市',
      rainlvl: '晴',
      lon: '94.6833',
      stationnum: '52418',
      sk_val: '0.0',
      StaName: '敦煌',
      StaTyp: '0.0',
      row_number: '3',
      time_hh: '3  ',
      lat: '40.15'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '瓜州县',
      rainlvl: '晴',
      lon: '95.7833',
      stationnum: '52424',
      sk_val: '0.0',
      StaName: '瓜州',
      StaTyp: '0.0',
      row_number: '4',
      time_hh: '3  ',
      lat: '40.5333'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '瓜州县',
      rainlvl: '晴',
      lon: '95.8567',
      stationnum: '52427',
      sk_val: '0.0',
      StaName: '瓜洲榆林小千佛洞',
      StaTyp: '0.0',
      row_number: '5',
      time_hh: '3  ',
      lat: '40.1586'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '玉门市',
      rainlvl: '晴',
      lon: '97.0333',
      stationnum: '52436',
      sk_val: '0.0',
      StaName: '玉门镇',
      StaTyp: '0.0',
      row_number: '6',
      time_hh: '3  ',
      lat: '40.2667'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '金塔县',
      rainlvl: '晴',
      lon: '98.8833',
      stationnum: '52447',
      sk_val: '0.0',
      StaName: '金塔',
      StaTyp: '0.0',
      row_number: '7',
      time_hh: '3  ',
      lat: '40.0'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '肃北蒙古族自治县',
      rainlvl: '晴',
      lon: '94.8667',
      stationnum: '52515',
      sk_val: '0.0',
      StaName: '肃北',
      StaTyp: '0.0',
      row_number: '8',
      time_hh: '3  ',
      lat: '39.5167'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '玉门市',
      rainlvl: '晴',
      lon: '97.7492',
      stationnum: '52530',
      sk_val: '0.0',
      StaName: '玉门清泉白土梁',
      StaTyp: '0.0',
      row_number: '9',
      time_hh: '3  ',
      lat: '39.9231'
    },
    {
      city: '酒泉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '肃州区',
      rainlvl: '晴',
      lon: '98.4833',
      stationnum: '52533',
      sk_val: '0.0',
      StaName: '酒泉',
      StaTyp: '0.0',
      row_number: '10',
      time_hh: '3  ',
      lat: '39.7667'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '高台县',
      rainlvl: '晴',
      lon: '99.8333',
      stationnum: '52546',
      sk_val: '0.0',
      StaName: '高台',
      StaTyp: '0.0',
      row_number: '11',
      time_hh: '3  ',
      lat: '39.3667'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '高台县',
      rainlvl: '晴',
      lon: '99.3053',
      stationnum: '52548',
      sk_val: '0.0',
      StaName: '高台红崖子明城',
      StaTyp: '0.0',
      row_number: '12',
      time_hh: '3  ',
      lat: '39.14'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '临泽县',
      rainlvl: '晴',
      lon: '100.1667',
      stationnum: '52557',
      sk_val: '0.0',
      StaName: '临泽',
      StaTyp: '0.0',
      row_number: '13',
      time_hh: '3  ',
      lat: '39.15'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '肃南裕固族自治县',
      rainlvl: '晴',
      lon: '99.6167',
      stationnum: '52643',
      sk_val: '0.0',
      StaName: '肃南',
      StaTyp: '0.0',
      row_number: '14',
      time_hh: '3  ',
      lat: '38.8333'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '甘州区',
      rainlvl: '晴',
      lon: '100.2833',
      stationnum: '52652',
      sk_val: '0.0',
      StaName: '张掖',
      StaTyp: '0.0',
      row_number: '15',
      time_hh: '3  ',
      lat: '39.0833'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '民乐县',
      rainlvl: '晴',
      lon: '100.8167',
      stationnum: '52656',
      sk_val: '0.0',
      StaName: '民乐',
      StaTyp: '0.0',
      row_number: '16',
      time_hh: '3  ',
      lat: '38.4667'
    },
    {
      city: '张掖市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '山丹县',
      rainlvl: '晴',
      lon: '101.0833',
      stationnum: '52661',
      sk_val: '0.0',
      StaName: '山丹',
      StaTyp: '0.0',
      row_number: '17',
      time_hh: '3  ',
      lat: '38.8'
    },
    {
      city: '金昌市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '永昌县',
      rainlvl: '晴',
      lon: '101.3858',
      stationnum: '52668',
      sk_val: '0.0',
      StaName: '永昌西大河',
      StaTyp: '0.0',
      row_number: '18',
      time_hh: '3  ',
      lat: '38.0533'
    },
    {
      city: '武威市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '民勤县',
      rainlvl: '晴',
      lon: '102.4614',
      stationnum: '52671',
      sk_val: '0.0',
      StaName: '民勤红沙岗',
      StaTyp: '0.0',
      row_number: '19',
      time_hh: '3  ',
      lat: '38.9292'
    },
    {
      city: '金昌市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '永昌县',
      rainlvl: '晴',
      lon: '101.9319',
      stationnum: '52674',
      sk_val: '0.0',
      StaName: '永昌',
      StaTyp: '0.0',
      row_number: '20',
      time_hh: '3  ',
      lat: '38.2178'
    },
    {
      city: '金昌市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '金川区',
      rainlvl: '晴',
      lon: '102.2',
      stationnum: '52675',
      sk_val: '0.0',
      StaName: '金昌',
      StaTyp: '0.0',
      row_number: '21',
      time_hh: '3  ',
      lat: '38.5333'
    },
    {
      city: '武威市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '凉州区',
      rainlvl: '晴',
      lon: '102.8739',
      stationnum: '52679',
      sk_val: '0.0',
      StaName: '武威',
      StaTyp: '0.0',
      row_number: '22',
      time_hh: '3  ',
      lat: '37.8858'
    },
    {
      city: '武威市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '民勤县',
      rainlvl: '晴',
      lon: '103.0833',
      stationnum: '52681',
      sk_val: '0.0',
      StaName: '民勤',
      StaTyp: '0.0',
      row_number: '23',
      time_hh: '3  ',
      lat: '38.6333'
    },
    {
      city: '武威市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '古浪县',
      rainlvl: '晴',
      lon: '102.9',
      stationnum: '52784',
      sk_val: '0.0',
      StaName: '古浪',
      StaTyp: '0.0',
      row_number: '24',
      time_hh: '3  ',
      lat: '37.4667'
    },
    {
      city: '白银市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '景泰县',
      rainlvl: '晴',
      lon: '104.05',
      stationnum: '52797',
      sk_val: '0.0',
      StaName: '景泰',
      StaTyp: '0.0',
      row_number: '25',
      time_hh: '3  ',
      lat: '37.1833'
    },
    {
      city: '武威市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '天祝藏族自治县',
      rainlvl: '晴',
      lon: '103.1833',
      stationnum: '52881',
      sk_val: '0.0',
      StaName: '天祝',
      StaTyp: '0.0',
      row_number: '26',
      time_hh: '3  ',
      lat: '36.9833'
    },
    {
      city: '兰州市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '皋兰县',
      rainlvl: '晴',
      lon: '103.95',
      stationnum: '52884',
      sk_val: '0.0',
      StaName: '皋兰',
      StaTyp: '0.0',
      row_number: '27',
      time_hh: '3  ',
      lat: '36.35'
    },
    {
      city: '兰州市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '永登县',
      rainlvl: '晴',
      lon: '103.25',
      stationnum: '52885',
      sk_val: '0.0',
      StaName: '永登',
      StaTyp: '0.0',
      row_number: '28',
      time_hh: '3  ',
      lat: '36.75'
    },
    {
      city: '兰州市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '城关区',
      rainlvl: '晴',
      lon: '103.8778',
      stationnum: '52889',
      sk_val: '0.0',
      StaName: '兰州',
      StaTyp: '0.0',
      row_number: '29',
      time_hh: '3  ',
      lat: '36.0439'
    },
    {
      city: '白银市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '靖远县',
      rainlvl: '晴',
      lon: '104.6867',
      stationnum: '52895',
      sk_val: '0.0',
      StaName: '靖远',
      StaTyp: '0.0',
      row_number: '30',
      time_hh: '3  ',
      lat: '36.5694'
    },
    {
      city: '白银市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '白银区',
      rainlvl: '晴',
      lon: '104.1442',
      stationnum: '52896',
      sk_val: '0.0',
      StaName: '白银',
      StaTyp: '0.0',
      row_number: '31',
      time_hh: '3  ',
      lat: '36.5481'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '夏河县',
      rainlvl: '晴',
      lon: '102.4931',
      stationnum: '52978',
      sk_val: '0.0',
      StaName: '夏河',
      StaTyp: '0.0',
      row_number: '32',
      time_hh: '3  ',
      lat: '35.1875'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '永靖县',
      rainlvl: '晴',
      lon: '103.3',
      stationnum: '52980',
      sk_val: '0.0',
      StaName: '永靖',
      StaTyp: '0.0',
      row_number: '33',
      time_hh: '3  ',
      lat: '35.9667'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '东乡族自治县',
      rainlvl: '晴',
      lon: '103.3833',
      stationnum: '52981',
      sk_val: '0.0',
      StaName: '东乡',
      StaTyp: '0.0',
      row_number: '34',
      time_hh: '3  ',
      lat: '35.6833'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '广河县',
      rainlvl: '晴',
      lon: '103.55',
      stationnum: '52982',
      sk_val: '0.0',
      StaName: '广河',
      StaTyp: '0.0',
      row_number: '35',
      time_hh: '3  ',
      lat: '35.4833'
    },
    {
      city: '兰州市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '榆中县',
      rainlvl: '晴',
      lon: '104.15',
      stationnum: '52983',
      sk_val: '0.0',
      StaName: '榆中',
      StaTyp: '0.0',
      row_number: '36',
      time_hh: '3  ',
      lat: '35.8667'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '临夏市',
      rainlvl: '晴',
      lon: '103.1833',
      stationnum: '52984',
      sk_val: '0.0',
      StaName: '临夏',
      StaTyp: '0.0',
      row_number: '37',
      time_hh: '3  ',
      lat: '35.5833'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '和政县',
      rainlvl: '晴',
      lon: '103.3333',
      stationnum: '52985',
      sk_val: '0.0',
      StaName: '和政',
      StaTyp: '0.0',
      row_number: '38',
      time_hh: '3  ',
      lat: '35.4167'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '临洮县',
      rainlvl: '晴',
      lon: '103.8667',
      stationnum: '52986',
      sk_val: '0.0',
      StaName: '临洮',
      StaTyp: '0.0',
      row_number: '39',
      time_hh: '3  ',
      lat: '35.3667'
    },
    {
      city: '临夏回族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '康乐县',
      rainlvl: '晴',
      lon: '103.7167',
      stationnum: '52988',
      sk_val: '0.0',
      StaName: '康乐',
      StaTyp: '0.0',
      row_number: '40',
      time_hh: '3  ',
      lat: '35.3667'
    },
    {
      city: '白银市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '会宁县',
      rainlvl: '晴',
      lon: '105.0667',
      stationnum: '52993',
      sk_val: '0.0',
      StaName: '会宁',
      StaTyp: '0.0',
      row_number: '41',
      time_hh: '3  ',
      lat: '35.6833'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '安定区',
      rainlvl: '晴',
      lon: '104.6',
      stationnum: '52995',
      sk_val: '0.0',
      StaName: '安定',
      StaTyp: '0.0',
      row_number: '42',
      time_hh: '3  ',
      lat: '35.5833'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '渭源县',
      rainlvl: '晴',
      lon: '104.2',
      stationnum: '52998',
      sk_val: '0.0',
      StaName: '渭源',
      StaTyp: '0.0',
      row_number: '43',
      time_hh: '3  ',
      lat: '35.1333'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '环县',
      rainlvl: '晴',
      lon: '107.3',
      stationnum: '53821',
      sk_val: '0.0',
      StaName: '环县',
      StaTyp: '0.0',
      row_number: '44',
      time_hh: '3  ',
      lat: '36.5667'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '庆城县',
      rainlvl: '晴',
      lon: '107.9',
      stationnum: '53829',
      sk_val: '0.0',
      StaName: '庆城',
      StaTyp: '0.0',
      row_number: '45',
      time_hh: '3  ',
      lat: '35.9833'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '静宁县',
      rainlvl: '晴',
      lon: '105.7167',
      stationnum: '53906',
      sk_val: '0.0',
      StaName: '静宁',
      StaTyp: '0.0',
      row_number: '46',
      time_hh: '3  ',
      lat: '35.5167'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '通渭县',
      rainlvl: '晴',
      lon: '105.2333',
      stationnum: '53908',
      sk_val: '0.0',
      StaName: '通渭',
      StaTyp: '0.0',
      row_number: '47',
      time_hh: '3  ',
      lat: '35.2167'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '崆峒区',
      rainlvl: '晴',
      lon: '106.66',
      stationnum: '53915',
      sk_val: '0.0',
      StaName: '崆峒',
      StaTyp: '0.0',
      row_number: '48',
      time_hh: '3  ',
      lat: '35.5311'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '庄浪县',
      rainlvl: '晴',
      lon: '106.0583',
      stationnum: '53917',
      sk_val: '0.0',
      StaName: '庄浪',
      StaTyp: '0.0',
      row_number: '49',
      time_hh: '3  ',
      lat: '35.2231'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '西峰区',
      rainlvl: '晴',
      lon: '107.6333',
      stationnum: '53923',
      sk_val: '0.0',
      StaName: '西峰',
      StaTyp: '0.0',
      row_number: '50',
      time_hh: '3  ',
      lat: '35.7333'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '灵台县',
      rainlvl: '晴',
      lon: '107.6186',
      stationnum: '53924',
      sk_val: '0.0',
      StaName: '灵台',
      StaTyp: '0.0',
      row_number: '51',
      time_hh: '3  ',
      lat: '35.0678'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '镇原县',
      rainlvl: '晴',
      lon: '107.1833',
      stationnum: '53925',
      sk_val: '0.0',
      StaName: '镇原',
      StaTyp: '0.0',
      row_number: '52',
      time_hh: '3  ',
      lat: '35.6833'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '泾川县',
      rainlvl: '晴',
      lon: '107.3547',
      stationnum: '53926',
      sk_val: '0.0',
      StaName: '泾川',
      StaTyp: '0.0',
      row_number: '53',
      time_hh: '3  ',
      lat: '35.3436'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '华亭县',
      rainlvl: '晴',
      lon: '106.6247',
      stationnum: '53927',
      sk_val: '0.0',
      StaName: '华亭',
      StaTyp: '0.0',
      row_number: '54',
      time_hh: '3  ',
      lat: '35.2047'
    },
    {
      city: '平凉市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '崇信县',
      rainlvl: '晴',
      lon: '107.0233',
      stationnum: '53928',
      sk_val: '0.0',
      StaName: '崇信',
      StaTyp: '0.0',
      row_number: '55',
      time_hh: '3  ',
      lat: '35.3031'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '华池县',
      rainlvl: '晴',
      lon: '107.9914',
      stationnum: '53930',
      sk_val: '0.0',
      StaName: '华池',
      StaTyp: '0.0',
      row_number: '56',
      time_hh: '3  ',
      lat: '36.4536'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '合水县',
      rainlvl: '晴',
      lon: '107.9833',
      stationnum: '53934',
      sk_val: '0.0',
      StaName: '合水',
      StaTyp: '0.0',
      row_number: '57',
      time_hh: '3  ',
      lat: '35.7833'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '正宁县',
      rainlvl: '晴',
      lon: '108.3986',
      stationnum: '53935',
      sk_val: '0.0',
      StaName: '正宁',
      StaTyp: '0.0',
      row_number: '58',
      time_hh: '3  ',
      lat: '35.4897'
    },
    {
      city: '庆阳市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '宁县',
      rainlvl: '晴',
      lon: '107.8833',
      stationnum: '53937',
      sk_val: '0.0',
      StaName: '宁县',
      StaTyp: '0.0',
      row_number: '59',
      time_hh: '3  ',
      lat: '35.5333'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '碌曲县',
      rainlvl: '晴',
      lon: '102.5022',
      stationnum: '56071',
      sk_val: '0.7',
      StaName: '碌曲',
      StaTyp: '0.0',
      row_number: '60',
      time_hh: '3  ',
      lat: '34.5925'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '玛曲县',
      rainlvl: '晴',
      lon: '102.0833',
      stationnum: '56074',
      sk_val: '0.0',
      StaName: '玛曲',
      StaTyp: '0.0',
      row_number: '61',
      time_hh: '3  ',
      lat: '34.0'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '合作市',
      rainlvl: '晴',
      lon: '102.9',
      stationnum: '56080',
      sk_val: '0.1',
      StaName: '合作',
      StaTyp: '0.0',
      row_number: '62',
      time_hh: '3  ',
      lat: '35.0'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '临潭县',
      rainlvl: '晴',
      lon: '103.35',
      stationnum: '56081',
      sk_val: '0.0',
      StaName: '临潭',
      StaTyp: '0.0',
      row_number: '63',
      time_hh: '3  ',
      lat: '34.7'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '卓尼县',
      rainlvl: '晴',
      lon: '103.4994',
      stationnum: '56082',
      sk_val: '0.0',
      StaName: '卓尼',
      StaTyp: '0.0',
      row_number: '64',
      time_hh: '3  ',
      lat: '34.5903'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '迭部县',
      rainlvl: '晴',
      lon: '103.2317',
      stationnum: '56084',
      sk_val: '0.0',
      StaName: '迭部',
      StaTyp: '0.0',
      row_number: '65',
      time_hh: '3  ',
      lat: '34.0583'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '漳县',
      rainlvl: '晴',
      lon: '104.4667',
      stationnum: '56091',
      sk_val: '0.0',
      StaName: '漳县',
      StaTyp: '0.0',
      row_number: '66',
      time_hh: '3  ',
      lat: '34.85'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '陇西县',
      rainlvl: '晴',
      lon: '104.65',
      stationnum: '56092',
      sk_val: '0.0',
      StaName: '陇西',
      StaTyp: '0.0',
      row_number: '67',
      time_hh: '3  ',
      lat: '35.0'
    },
    {
      city: '定西市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '岷县',
      rainlvl: '晴',
      lon: '104.0167',
      stationnum: '56093',
      sk_val: '0.0',
      StaName: '岷县',
      StaTyp: '0.0',
      row_number: '68',
      time_hh: '3  ',
      lat: '34.4333'
    },
    {
      city: '甘南藏族自治州',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '舟曲县',
      rainlvl: '晴',
      lon: '104.3667',
      stationnum: '56094',
      sk_val: '0.0',
      StaName: '舟曲',
      StaTyp: '0.0',
      row_number: '69',
      time_hh: '3  ',
      lat: '33.7833'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '宕昌县',
      rainlvl: '晴',
      lon: '104.3833',
      stationnum: '56095',
      sk_val: '0.0',
      StaName: '宕昌',
      StaTyp: '0.0',
      row_number: '70',
      time_hh: '3  ',
      lat: '34.0333'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '武都区',
      rainlvl: '晴',
      lon: '104.9167',
      stationnum: '56096',
      sk_val: '0.0',
      StaName: '武都',
      StaTyp: '0.0',
      row_number: '71',
      time_hh: '3  ',
      lat: '33.4'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '文县',
      rainlvl: '晴',
      lon: '104.6667',
      stationnum: '56192',
      sk_val: '0.0',
      StaName: '文县',
      StaTyp: '0.0',
      row_number: '72',
      time_hh: '3  ',
      lat: '32.95'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '甘谷县',
      rainlvl: '晴',
      lon: '105.3333',
      stationnum: '57001',
      sk_val: '0.0',
      StaName: '甘谷',
      StaTyp: '0.0',
      row_number: '73',
      time_hh: '3  ',
      lat: '34.75'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '秦安县',
      rainlvl: '晴',
      lon: '105.65',
      stationnum: '57002',
      sk_val: '0.0',
      StaName: '秦安',
      StaTyp: '0.0',
      row_number: '74',
      time_hh: '3  ',
      lat: '34.85'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '武山县',
      rainlvl: '晴',
      lon: '104.8833',
      stationnum: '57004',
      sk_val: '0.0',
      StaName: '武山',
      StaTyp: '0.0',
      row_number: '75',
      time_hh: '3  ',
      lat: '34.7333'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '秦州区',
      rainlvl: '晴',
      lon: '105.75',
      stationnum: '57006',
      sk_val: '0.0',
      StaName: '天水',
      StaTyp: '0.0',
      row_number: '76',
      time_hh: '3  ',
      lat: '34.5667'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '礼县',
      rainlvl: '晴',
      lon: '105.1833',
      stationnum: '57007',
      sk_val: '0.0',
      StaName: '礼县',
      StaTyp: '0.0',
      row_number: '77',
      time_hh: '3  ',
      lat: '34.1833'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '西和县',
      rainlvl: '晴',
      lon: '105.3',
      stationnum: '57008',
      sk_val: '0.0',
      StaName: '西和',
      StaTyp: '0.0',
      row_number: '78',
      time_hh: '3  ',
      lat: '34.0333'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '清水县',
      rainlvl: '晴',
      lon: '106.15',
      stationnum: '57011',
      sk_val: '0.0',
      StaName: '清水',
      StaTyp: '0.0',
      row_number: '79',
      time_hh: '3  ',
      lat: '34.75'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '张家川回族自治县',
      rainlvl: '晴',
      lon: '106.2',
      stationnum: '57012',
      sk_val: '0.0',
      StaName: '张家川',
      StaTyp: '0.0',
      row_number: '80',
      time_hh: '3  ',
      lat: '34.9833'
    },
    {
      city: '天水市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '麦积区',
      rainlvl: '晴',
      lon: '105.8667',
      stationnum: '57014',
      sk_val: '0.0',
      StaName: '麦积',
      StaTyp: '0.0',
      row_number: '81',
      time_hh: '3  ',
      lat: '34.5667'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '成县',
      rainlvl: '晴',
      lon: '105.7167',
      stationnum: '57102',
      sk_val: '0.0',
      StaName: '成县',
      StaTyp: '0.0',
      row_number: '82',
      time_hh: '3  ',
      lat: '33.75'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '康县',
      rainlvl: '晴',
      lon: '105.6',
      stationnum: '57105',
      sk_val: '0.0',
      StaName: '康县',
      StaTyp: '0.0',
      row_number: '83',
      time_hh: '3  ',
      lat: '33.3333'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '徽县',
      rainlvl: '晴',
      lon: '106.0833',
      stationnum: '57110',
      sk_val: '0.0',
      StaName: '徽县',
      StaTyp: '0.0',
      row_number: '84',
      time_hh: '3  ',
      lat: '33.7833'
    },
    {
      city: '陇南市',
      observtm: '2020033008',
      SK_time: '2020033108',
      county: '两当县',
      rainlvl: '晴',
      lon: '106.3',
      stationnum: '57111',
      sk_val: '0.0',
      StaName: '两当',
      StaTyp: '0.0',
      row_number: '85',
      time_hh: '3  ',
      lat: '33.9167'
    }
  ]
})
Mock.mock(RegExp(baseRequestUrl + 'GetForecastPrVerifyHZ.do' + '.*'), {
  type: 'SUCCESS',
  code: '0',
  msg: '操作成功！',
  data: [
    {
      Fid: 'F1_0      ',
      NA: '0.0',
      NB: '0.0',
      Eles: '小雨',
      NC: '100.0',
      Meth: 'FJJS      '
    },
    {
      Fid: 'F1_0      ',
      NA: '98.5',
      NB: '0.0',
      Eles: '晴雨',
      NC: '1.5',
      Meth: 'QY        '
    }
  ]
})
Mock.mock(RegExp(baseRequestUrl + 'GetForecastPrVerifyDefinite.do' + '.*'), {
  type: 'SUCCESS',
  code: '0',
  msg: '操作成功！',
  data: {
    total: '234',
    rows: [
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '敦煌市',
        staid: '52418     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '敦煌',
        row_number: '1',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '瓜州县',
        staid: '52424     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '瓜州',
        row_number: '2',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '玉门市',
        staid: '52436     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '玉门镇',
        row_number: '3',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '金塔县',
        staid: '52447     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '金塔',
        row_number: '4',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '肃北蒙古族自治县',
        staid: '52515     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '肃北',
        row_number: '5',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '酒泉市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '肃州区',
        staid: '52533     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '酒泉',
        row_number: '6',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '高台县',
        staid: '52546     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '高台',
        row_number: '7',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '临泽县',
        staid: '52557     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '临泽',
        row_number: '8',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '肃南裕固族自治县',
        staid: '52643     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '肃南',
        row_number: '9',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '甘州区',
        staid: '52652     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '张掖',
        row_number: '10',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '民乐县',
        staid: '52656     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '民乐',
        row_number: '11',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '张掖市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '山丹县',
        staid: '52661     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '山丹',
        row_number: '12',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '金昌市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '永昌县',
        staid: '52674     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '永昌',
        row_number: '13',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '金昌市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '金川区',
        staid: '52675     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '金昌',
        row_number: '14',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '武威市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '凉州区',
        staid: '52679     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '武威',
        row_number: '15',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '武威市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '民勤县',
        staid: '52681     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '民勤',
        row_number: '16',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '武威市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '古浪县',
        staid: '52784     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '古浪',
        row_number: '17',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '白银市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '景泰县',
        staid: '52797     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '景泰',
        row_number: '18',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '武威市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '天祝藏族自治县',
        staid: '52881     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '天祝',
        row_number: '19',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '兰州市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '皋兰县',
        staid: '52884     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '皋兰',
        row_number: '20',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '兰州市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '永登县',
        staid: '52885     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '永登',
        row_number: '21',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '兰州市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '城关区',
        staid: '52889     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '兰州',
        row_number: '22',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '白银市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '靖远县',
        staid: '52895     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '靖远',
        row_number: '23',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '白银市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '白银区',
        staid: '52896     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '白银',
        row_number: '24',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '夏河县',
        staid: '52978     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '夏河',
        row_number: '25',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '永靖县',
        staid: '52980     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '永靖',
        row_number: '26',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '东乡族自治县',
        staid: '52981     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '东乡',
        row_number: '27',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '广河县',
        staid: '52982     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '广河',
        row_number: '28',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '兰州市',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '榆中县',
        staid: '52983     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '榆中',
        row_number: '29',
        E_T: '-'
      },
      {
        Fid: 'F1_0      ',
        Ptime: '08        ',
        HH: '3         ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Pdate: '20200327  ',
        Meth: 'QY        ',
        county: '临夏市',
        staid: '52984     ',
        NA: '1.0',
        NB: '0.0',
        Eles: '-',
        NC: '0.0',
        StaName: '临夏',
        row_number: '30',
        E_T: '-'
      }
    ]
  }
})
Mock.mock(RegExp(baseRequestUrl + 'GetForecastPrVerify.do' + '.*'), {
  type: 'SUCCESS',
  code: '0',
  msg: '操作成功！',
  data: {
    total: '78',
    title: [
      '市州|city',
      '县区|county',
      '站名|StaName',
      '站号|staid',
      'NA|NA',
      'NB|NB',
      'NC|NC'
    ],
    rows: [
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '敦煌市',
        lon: '94.6833',
        staid: '52418     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '敦煌',
        StaTyp: '100.0',
        row_number: '1',
        lat: '40.15'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '瓜州县',
        lon: '95.7833',
        staid: '52424     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '瓜州',
        StaTyp: '100.0',
        row_number: '2',
        lat: '40.5333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '玉门市',
        lon: '97.0333',
        staid: '52436     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '玉门镇',
        StaTyp: '100.0',
        row_number: '3',
        lat: '40.2667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '金塔县',
        lon: '98.8833',
        staid: '52447     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '金塔',
        StaTyp: '100.0',
        row_number: '4',
        lat: '40.0'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '肃北蒙古族自治县',
        lon: '94.8667',
        staid: '52515     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '肃北',
        StaTyp: '100.0',
        row_number: '5',
        lat: '39.5167'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '酒泉市',
        Meth: 'QY        ',
        county: '肃州区',
        lon: '98.4833',
        staid: '52533     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '酒泉',
        StaTyp: '100.0',
        row_number: '6',
        lat: '39.7667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '高台县',
        lon: '99.8333',
        staid: '52546     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '高台',
        StaTyp: '100.0',
        row_number: '7',
        lat: '39.3667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '临泽县',
        lon: '100.1667',
        staid: '52557     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '临泽',
        StaTyp: '100.0',
        row_number: '8',
        lat: '39.15'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '肃南裕固族自治县',
        lon: '99.6167',
        staid: '52643     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '肃南',
        StaTyp: '100.0',
        row_number: '9',
        lat: '38.8333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '甘州区',
        lon: '100.2833',
        staid: '52652     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '张掖',
        StaTyp: '100.0',
        row_number: '10',
        lat: '39.0833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '民乐县',
        lon: '100.8167',
        staid: '52656     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '民乐',
        StaTyp: '100.0',
        row_number: '11',
        lat: '38.4667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '张掖市',
        Meth: 'QY        ',
        county: '山丹县',
        lon: '101.0833',
        staid: '52661     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '山丹',
        StaTyp: '100.0',
        row_number: '12',
        lat: '38.8'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '金昌市',
        Meth: 'QY        ',
        county: '永昌县',
        lon: '101.9319',
        staid: '52674     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '永昌',
        StaTyp: '100.0',
        row_number: '13',
        lat: '38.2178'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '金昌市',
        Meth: 'QY        ',
        county: '金川区',
        lon: '102.2',
        staid: '52675     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '金昌',
        StaTyp: '100.0',
        row_number: '14',
        lat: '38.5333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '武威市',
        Meth: 'QY        ',
        county: '凉州区',
        lon: '102.8739',
        staid: '52679     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '武威',
        StaTyp: '100.0',
        row_number: '15',
        lat: '37.8858'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '武威市',
        Meth: 'QY        ',
        county: '民勤县',
        lon: '103.0833',
        staid: '52681     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '民勤',
        StaTyp: '100.0',
        row_number: '16',
        lat: '38.6333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '武威市',
        Meth: 'QY        ',
        county: '古浪县',
        lon: '102.9',
        staid: '52784     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '古浪',
        StaTyp: '100.0',
        row_number: '17',
        lat: '37.4667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '白银市',
        Meth: 'QY        ',
        county: '景泰县',
        lon: '104.05',
        staid: '52797     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '景泰',
        StaTyp: '100.0',
        row_number: '18',
        lat: '37.1833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '武威市',
        Meth: 'QY        ',
        county: '天祝藏族自治县',
        lon: '103.1833',
        staid: '52881     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '天祝',
        StaTyp: '100.0',
        row_number: '19',
        lat: '36.9833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '兰州市',
        Meth: 'QY        ',
        county: '皋兰县',
        lon: '103.95',
        staid: '52884     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '皋兰',
        StaTyp: '100.0',
        row_number: '20',
        lat: '36.35'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '兰州市',
        Meth: 'QY        ',
        county: '永登县',
        lon: '103.25',
        staid: '52885     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '永登',
        StaTyp: '100.0',
        row_number: '21',
        lat: '36.75'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '兰州市',
        Meth: 'QY        ',
        county: '城关区',
        lon: '103.8778',
        staid: '52889     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '兰州',
        StaTyp: '100.0',
        row_number: '22',
        lat: '36.0439'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '白银市',
        Meth: 'QY        ',
        county: '靖远县',
        lon: '104.6867',
        staid: '52895     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '靖远',
        StaTyp: '100.0',
        row_number: '23',
        lat: '36.5694'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '白银市',
        Meth: 'QY        ',
        county: '白银区',
        lon: '104.1442',
        staid: '52896     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '白银',
        StaTyp: '100.0',
        row_number: '24',
        lat: '36.5481'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '夏河县',
        lon: '102.4931',
        staid: '52978     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '夏河',
        StaTyp: '66.7',
        row_number: '25',
        lat: '35.1875'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '永靖县',
        lon: '103.3',
        staid: '52980     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '永靖',
        StaTyp: '100.0',
        row_number: '26',
        lat: '35.9667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '东乡族自治县',
        lon: '103.3833',
        staid: '52981     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '东乡',
        StaTyp: '66.7',
        row_number: '27',
        lat: '35.6833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '广河县',
        lon: '103.55',
        staid: '52982     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '广河',
        StaTyp: '66.7',
        row_number: '28',
        lat: '35.4833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '兰州市',
        Meth: 'QY        ',
        county: '榆中县',
        lon: '104.15',
        staid: '52983     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '榆中',
        StaTyp: '100.0',
        row_number: '29',
        lat: '35.8667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '临夏市',
        lon: '103.1833',
        staid: '52984     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '临夏',
        StaTyp: '66.7',
        row_number: '30',
        lat: '35.5833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '和政县',
        lon: '103.3333',
        staid: '52985     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '和政',
        StaTyp: '66.7',
        row_number: '31',
        lat: '35.4167'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '临洮县',
        lon: '103.8667',
        staid: '52986     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '临洮',
        StaTyp: '66.7',
        row_number: '32',
        lat: '35.3667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '临夏回族自治州',
        Meth: 'QY        ',
        county: '康乐县',
        lon: '103.7167',
        staid: '52988     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '康乐',
        StaTyp: '66.7',
        row_number: '33',
        lat: '35.3667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '白银市',
        Meth: 'QY        ',
        county: '会宁县',
        lon: '105.0667',
        staid: '52993     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '会宁',
        StaTyp: '100.0',
        row_number: '34',
        lat: '35.6833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '安定区',
        lon: '104.6',
        staid: '52995     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '安定',
        StaTyp: '100.0',
        row_number: '35',
        lat: '35.5833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '渭源县',
        lon: '104.2',
        staid: '52998     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '渭源',
        StaTyp: '66.7',
        row_number: '36',
        lat: '35.1333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '环县',
        lon: '107.3',
        staid: '53821     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '环县',
        StaTyp: '100.0',
        row_number: '37',
        lat: '36.5667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '庆城县',
        lon: '107.9',
        staid: '53829     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '庆城',
        StaTyp: '100.0',
        row_number: '38',
        lat: '35.9833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '静宁县',
        lon: '105.7167',
        staid: '53906     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '静宁',
        StaTyp: '100.0',
        row_number: '39',
        lat: '35.5167'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '通渭县',
        lon: '105.2333',
        staid: '53908     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '通渭',
        StaTyp: '100.0',
        row_number: '40',
        lat: '35.2167'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '崆峒区',
        lon: '106.66',
        staid: '53915     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '崆峒',
        StaTyp: '66.7',
        row_number: '41',
        lat: '35.5311'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '庄浪县',
        lon: '106.0583',
        staid: '53917     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '庄浪',
        StaTyp: '66.7',
        row_number: '42',
        lat: '35.2231'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '西峰区',
        lon: '107.6333',
        staid: '53923     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '西峰',
        StaTyp: '100.0',
        row_number: '43',
        lat: '35.7333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '灵台县',
        lon: '107.6186',
        staid: '53924     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '灵台',
        StaTyp: '66.7',
        row_number: '44',
        lat: '35.0678'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '镇原县',
        lon: '107.1833',
        staid: '53925     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '镇原',
        StaTyp: '100.0',
        row_number: '45',
        lat: '35.6833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '泾川县',
        lon: '107.3547',
        staid: '53926     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '泾川',
        StaTyp: '66.7',
        row_number: '46',
        lat: '35.3436'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '华亭县',
        lon: '106.6247',
        staid: '53927     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '华亭',
        StaTyp: '66.7',
        row_number: '47',
        lat: '35.2047'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '平凉市',
        Meth: 'QY        ',
        county: '崇信县',
        lon: '107.0233',
        staid: '53928     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '崇信',
        StaTyp: '66.7',
        row_number: '48',
        lat: '35.3031'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '华池县',
        lon: '107.9914',
        staid: '53930     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '华池',
        StaTyp: '100.0',
        row_number: '49',
        lat: '36.4536'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '合水县',
        lon: '107.9833',
        staid: '53934     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '合水',
        StaTyp: '100.0',
        row_number: '50',
        lat: '35.7833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '正宁县',
        lon: '108.3986',
        staid: '53935     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '正宁',
        StaTyp: '100.0',
        row_number: '51',
        lat: '35.4897'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '庆阳市',
        Meth: 'QY        ',
        county: '宁县',
        lon: '107.8833',
        staid: '53937     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '宁县',
        StaTyp: '100.0',
        row_number: '52',
        lat: '35.5333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '碌曲县',
        lon: '102.5022',
        staid: '56071     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '碌曲',
        StaTyp: '66.7',
        row_number: '53',
        lat: '34.5925'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '玛曲县',
        lon: '102.0833',
        staid: '56074     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '玛曲',
        StaTyp: '100.0',
        row_number: '54',
        lat: '34.0'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '合作市',
        lon: '102.9',
        staid: '56080     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '合作',
        StaTyp: '66.7',
        row_number: '55',
        lat: '35.0'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '临潭县',
        lon: '103.35',
        staid: '56081     ',
        NA: '33.3',
        NB: '0.0',
        NC: '66.7',
        StaName: '临潭',
        StaTyp: '33.3',
        row_number: '56',
        lat: '34.7'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '卓尼县',
        lon: '103.4994',
        staid: '56082     ',
        NA: '33.3',
        NB: '0.0',
        NC: '66.7',
        StaName: '卓尼',
        StaTyp: '33.3',
        row_number: '57',
        lat: '34.5903'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '迭部县',
        lon: '103.2317',
        staid: '56084     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '迭部',
        StaTyp: '100.0',
        row_number: '58',
        lat: '34.0583'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '漳县',
        lon: '104.4667',
        staid: '56091     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '漳县',
        StaTyp: '66.7',
        row_number: '59',
        lat: '34.85'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '陇西县',
        lon: '104.65',
        staid: '56092     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '陇西',
        StaTyp: '100.0',
        row_number: '60',
        lat: '35.0'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '定西市',
        Meth: 'QY        ',
        county: '岷县',
        lon: '104.0167',
        staid: '56093     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '岷县',
        StaTyp: '66.7',
        row_number: '61',
        lat: '34.4333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '甘南藏族自治州',
        Meth: 'QY        ',
        county: '舟曲县',
        lon: '104.3667',
        staid: '56094     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '舟曲',
        StaTyp: '66.7',
        row_number: '62',
        lat: '33.7833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '宕昌县',
        lon: '104.3833',
        staid: '56095     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '宕昌',
        StaTyp: '66.7',
        row_number: '63',
        lat: '34.0333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '武都区',
        lon: '104.9167',
        staid: '56096     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '武都',
        StaTyp: '100.0',
        row_number: '64',
        lat: '33.4'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '文县',
        lon: '104.6667',
        staid: '56192     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '文县',
        StaTyp: '66.7',
        row_number: '65',
        lat: '32.95'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '甘谷县',
        lon: '105.3333',
        staid: '57001     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '甘谷',
        StaTyp: '100.0',
        row_number: '66',
        lat: '34.75'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '秦安县',
        lon: '105.65',
        staid: '57002     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '秦安',
        StaTyp: '100.0',
        row_number: '67',
        lat: '34.85'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '武山县',
        lon: '104.8833',
        staid: '57004     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '武山',
        StaTyp: '100.0',
        row_number: '68',
        lat: '34.7333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '秦州区',
        lon: '105.75',
        staid: '57006     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '天水',
        StaTyp: '100.0',
        row_number: '69',
        lat: '34.5667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '礼县',
        lon: '105.1833',
        staid: '57007     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '礼县',
        StaTyp: '66.7',
        row_number: '70',
        lat: '34.1833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '西和县',
        lon: '105.3',
        staid: '57008     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '西和',
        StaTyp: '66.7',
        row_number: '71',
        lat: '34.0333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '清水县',
        lon: '106.15',
        staid: '57011     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '清水',
        StaTyp: '100.0',
        row_number: '72',
        lat: '34.75'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '张家川回族自治县',
        lon: '106.2',
        staid: '57012     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '张家川',
        StaTyp: '100.0',
        row_number: '73',
        lat: '34.9833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '天水市',
        Meth: 'QY        ',
        county: '麦积区',
        lon: '105.8667',
        staid: '57014     ',
        NA: '100.0',
        NB: '0.0',
        NC: '0.0',
        StaName: '麦积',
        StaTyp: '100.0',
        row_number: '74',
        lat: '34.5667'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '成县',
        lon: '105.7167',
        staid: '57102     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '成县',
        StaTyp: '66.7',
        row_number: '75',
        lat: '33.75'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '康县',
        lon: '105.6',
        staid: '57105     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '康县',
        StaTyp: '66.7',
        row_number: '76',
        lat: '33.3333'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '徽县',
        lon: '106.0833',
        staid: '57110     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '徽县',
        StaTyp: '66.7',
        row_number: '77',
        lat: '33.7833'
      },
      {
        Fid: 'F1_0      ',
        ty: 'R3        ',
        city: '陇南市',
        Meth: 'QY        ',
        county: '两当县',
        lon: '106.3',
        staid: '57111     ',
        NA: '66.7',
        NB: '0.0',
        NC: '33.3',
        StaName: '两当',
        StaTyp: '66.7',
        row_number: '78',
        lat: '33.9167'
      }
    ]
  }
})

$(document).ready(function() {
  // $('#getBtn').click(function () {
  //   $.get(
  //     'http://test.com',
  //     function (data, status) {
  //       // 打印到控制台
  //       console.log(JSON.stringify(data, null, 4))
  //       // alert(data.user);
  //       alert(JSON.stringify(data, null, 4))
  //       alert(status)
  //     },
  //     'json'
  //   )
  // })
  // //
  // $('#postBtn').click(function () {
  //   $.post(
  //     'http://test.com',
  //     {},
  //     function (data, status) {
  //       // 打印到控制台
  //       console.log(JSON.stringify(data, null, 4))
  //       // alert(data.user);
  //       alert(JSON.stringify(data, null, 4))
  //       alert(status)
  //     },
  //     'json'
  //   )
  // })
  /* 数据集 */
  // $('body').append('<p>natural:' + Mock.Random.natural() + '</p>')
  // $('body').append('<p>integer:' + Mock.Random.integer() + '</p>')
  // $('body').append('<p>float:' + Mock.Random.float() + '</p>')
  // $('body').append('<p>character:' + Mock.Random.character() + '</p>')
  // $('body').append('<p>string:' + Mock.Random.string() + '</p>')
  // $('body').append('<p>range:' + Mock.Random.range(1, 100) + '</p>')
  // $('body').append('<p>date:' + Mock.Random.date() + '</p>')
  // $('body').append('<p>time:' + Mock.Random.time() + '</p>')
  // $('body').append('<p>datetime:' + Mock.Random.datetime() + '</p>')
  // $('body').append('<p>now:' + Mock.Random.now() + '</p>')
  // $('body').append(
  //   '<p>------------------------------------------------------------------------------------</p>'
  // )
  // //
  // $('body').append('<p>image:' + Mock.Random.image() + '</p>')
  // $('body').append('<p>dataImage:' + Mock.Random.dataImage() + '</p>')
  // $('body').append('<p>color:' + Mock.Random.color() + '</p>')
  // $('body').append(
  //   '<p>------------------------------------------------------------------------------------</p>'
  // )
  // //
  // $('body').append('<p>paragraph:' + Mock.Random.paragraph() + '</p>')
  // $('body').append('<p>sentence:' + Mock.Random.sentence() + '</p>')
  // $('body').append('<p>word:' + Mock.Random.word() + '</p>')
  // $('body').append('<p>title:' + Mock.Random.title() + '</p>')
  // $('body').append('<p>cparagraph:' + Mock.Random.cparagraph() + '</p>')
  // $('body').append('<p>csentence:' + Mock.Random.csentence() + '</p>')
  // $('body').append('<p>cword:' + Mock.Random.cword() + '</p>')
  // $('body').append('<p>ctitle:' + Mock.Random.ctitle() + '</p>')
  // $('body').append(
  //   '<p>------------------------------------------------------------------------------------</p>'
  // )
  // //
  // $('body').append('<p>first, :' + Mock.Random.first() + '</p>')
  // $('body').append('<p>last:' + Mock.Random.last() + '</p>')
  // $('body').append('<p>name:' + Mock.Random.name() + '</p>')
  // $('body').append('<p>cfirst:' + Mock.Random.cfirst() + '</p>')
  // $('body').append('<p>clast:' + Mock.Random.clast() + '</p>')
  // $('body').append('<p>cname:' + Mock.Random.cname() + '</p>')
  // $('body').append(
  //   '<p>------------------------------------------------------------------------------------</p>'
  // )
  // //
  // $('body').append('<p>url:' + Mock.Random.url() + '</p>')
  // $('body').append('<p>domain:' + Mock.Random.domain() + '</p>')
  // $('body').append('<p>email:' + Mock.Random.email() + '</p>')
  // $('body').append('<p>ip:' + Mock.Random.ip() + '</p>')
  // $('body').append('<p>tld:' + Mock.Random.tld() + '</p>')
  // $('body').append('<p>province:' + Mock.Random.province() + '</p>')
  // $('body').append('<p>region:' + Mock.Random.region() + '</p>')
  // $('body').append('<p>city:' + Mock.Random.city() + '</p>')
  // $('body').append(
  //   '<p>------------------------------------------------------------------------------------</p>'
  // )
  // //
  // $('body').append('<p>capitalize:' + Mock.Random.capitalize('hello') + '</p>')
  // $('body').append('<p>upper:' + Mock.Random.upper('hello') + '</p>')
  // $('body').append('<p>lower:' + Mock.Random.lower('JINGWEI') + '</p>')
  // $('body').append('<p>pick:' + Mock.Random.pick([1, 4, 5, 6, 7, 8]) + '</p>')
  // $('body').append(
  //   '<p>shuffle:' + Mock.Random.shuffle([1, 2, 3, 4, 6]) + '</p>'
  // )
  // $('body').append('<p>guid:' + Mock.Random.guid() + '</p>')
  // $('body').append('<p>id:' + Mock.Random.id() + '</p>')
})
