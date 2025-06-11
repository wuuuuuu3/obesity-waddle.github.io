// 2. 用自动导出的数据替换这里
// 下面内容建议用Python脚本自动生成
var rawData = [
  { name: '美属萨摩亚', value: 75.2 },
  { name: '玻利维亚', value: 28.7 },
  { name: '科特迪瓦', value: 11.6 },
  { name: '法属波利尼西亚', value: 48.1 },
  { name: '荷兰', value: 14.5 },
  { name: '托克劳', value: 69.8 },
  { name: '土耳其', value: 33.3 },
  { name: '英国', value: 26.8 },
  { name: '美国', value: 42.0 },
  { name: '委内瑞拉', value: 22.7 },
  { name: '巴勒斯坦', value: 37.6 },
  { name: '不丹', value: 12.2 },
  { name: '东帝汶', value: 2.4 },
  { name: '中国', value: 8.3 },
  { name: '中非共和国', value: 9.3 },
  { name: '丹麦', value: 13.3 },
  { name: '乌克兰', value: 23.6 },
  { name: '乌兹别克斯坦', value: 30.0 },
  { name: '乌干达', value: 7.9 },
  { name: '乌拉圭', value: 33.3 },
  { name: '乍得', value: 6.7 },
  { name: '也门', value: 13.7 },
  { name: '亚美尼亚', value: 24.5 },
  { name: '以色列', value: 22.5 },
  { name: '伊拉克', value: 40.5 },
  { name: '伊朗', value: 24.3 },
  { name: '伯利兹', value: 42.3 },
  { name: '佛得角', value: 15.8 },
  { name: '俄罗斯', value: 24.2 },
  { name: '保加利亚', value: 20.6 },
  { name: '克罗地亚', value: 30.6 },
  { name: '冈比亚', value: 14.9 },
  { name: '冰岛', value: 21.2 },
  { name: '几内亚', value: 9.5 },
  { name: '几内亚比绍', value: 11.5 },
  { name: '刚果（布）', value: 8.5 },
  { name: '刚果（金）', value: 6.6 },
  { name: '利比亚', value: 36.7 },
  { name: '利比里亚', value: 17.0 },
  { name: '加拿大', value: 26.2 },
  { name: '加纳', value: 12.9 },
  { name: '加蓬', value: 21.0 },
  { name: '匈牙利', value: 31.7 },
  { name: '北马其顿', value: 27.5 },
  { name: '南苏丹', value: 8.6 },
  { name: '南非', value: 30.8 },
  { name: '博茨瓦纳', value: 18.3 },
  { name: '卡塔尔', value: 43.1 },
  { name: '卢旺达', value: 4.9 },
  { name: '卢森堡', value: 18.4 },
  { name: '印度', value: 7.3 },
  { name: '印度尼西亚', value: 11.2 },
  { name: '危地马拉', value: 26.8 },
  { name: '厄瓜多尔', value: 27.4 },
  { name: '厄立特里亚', value: 4.8 },
  { name: '叙利亚', value: 33.9 },
  { name: '古巴', value: 21.8 },
  { name: '吉尔吉斯斯坦', value: 26.6 },
  { name: '吉布提', value: 11.3 },
  { name: '哈萨克斯坦', value: 18.4 },
  { name: '哥伦比亚', value: 23.6 },
  { name: '哥斯达黎加', value: 31.4 },
  { name: '喀麦隆', value: 14.9 },
  { name: '图瓦卢', value: 64.2 },
  { name: '土库曼斯坦', value: 21.4 },
  { name: '圣卢西亚', value: 33.5 },
  { name: '圣基茨和尼维斯', value: 45.6 },
  { name: '圣多美和普林西比', value: 16.5 },
  { name: '圣文森特和格林纳丁斯', value: 33.2 },
  { name: '圭亚那', value: 28.5 },
  { name: '坦桑尼亚', value: 12.6 },
  { name: '埃及', value: 44.3 },
  { name: '埃塞俄比亚', value: 2.8 },
  { name: '埃斯瓦蒂尼', value: 30.1 },
  { name: '基里巴斯', value: 46.3 },
  { name: '塔吉克斯坦', value: 23.8 },
  { name: '塞内加尔', value: 10.2 },
  { name: '塞尔维亚', value: 22.5 },
  { name: '塞拉利昂', value: 7.1 },
  { name: '塞浦路斯', value: 22.9 },
  { name: '塞舌尔', value: 29.4 },
  { name: '墨西哥', value: 36.0 },
  { name: '多哥', value: 11.6 },
  { name: '多米尼克', value: 31.3 },
  { name: '多米尼加共和国', value: 29.3 },
  { name: '奥地利', value: 15.4 },
  { name: '孟加拉国', value: 5.3 },
  { name: '安哥拉', value: 11.5 },
  { name: '安提瓜和巴布达', value: 33.3 },
  { name: '安道尔', value: 18.1 },
  { name: '密克罗尼西亚', value: 47.1 },
  { name: '尼加拉瓜', value: 33.6 },
  { name: '尼日利亚', value: 12.4 },
  { name: '尼日尔', value: 6.0 },
  { name: '尼泊尔', value: 7.0 },
  { name: '巴哈马', value: 47.3 },
  { name: '巴基斯坦', value: 23.0 },
  { name: '巴巴多斯', value: 38.0 },
  { name: '巴布亚新几内亚', value: 20.5 },
  { name: '巴拉圭', value: 33.0 },
  { name: '巴拿马', value: 36.1 },
  { name: '巴林', value: 36.1 },
  { name: '巴西', value: 28.1 },
  { name: '布基纳法索', value: 6.7 },
  { name: '布隆迪', value: 5.0 },
  { name: '希腊', value: 28.0 },
  { name: '帕劳', value: 41.1 },
  { name: '库克群岛', value: 68.9 },
  { name: '德国', value: 20.4 },
  { name: '意大利', value: 17.3 },
  { name: '所罗门群岛', value: 22.6 },
  { name: '拉脱维亚', value: 24.3 },
  { name: '挪威', value: 19.1 },
  { name: '捷克', value: 26.0 },
  { name: '摩尔多瓦', value: 23.0 },
  { name: '摩洛哥', value: 21.8 },
  { name: '文莱', value: 31.7 },
  { name: '斐济', value: 33.8 },
  { name: '斯洛伐克', value: 26.8 },
  { name: '斯洛文尼亚', value: 19.4 },
  { name: '斯里兰卡', value: 10.6 },
  { name: '新加坡', value: 13.9 },
  { name: '新西兰', value: 33.6 },
  { name: '日本', value: 5.5 },
  { name: '智利', value: 38.9 },
  { name: '朝鲜', value: 10.8 },
  { name: '柬埔寨', value: 4.4 },
  { name: '格林纳达', value: 30.3 },
  { name: '格陵兰', value: 27.0 },
  { name: '格鲁吉亚', value: 34.7 },
  { name: '比利时', value: 20.0 },
  { name: '毛里塔尼亚', value: 22.7 },
  { name: '毛里求斯', value: 19.2 },
  { name: '汤加', value: 71.7 },
  { name: '沙特阿拉伯', value: 40.6 },
  { name: '法国', value: 9.7 },
  { name: '波兰', value: 27.5 },
  { name: '波多黎各', value: 41.1 },
  { name: '波斯尼亚和黑塞哥维那', value: 21.2 },
  { name: '泰国', value: 15.4 },
  { name: '津巴布韦', value: 14.2 },
  { name: '洪都拉斯', value: 29.5 },
  { name: '海地', value: 10.7 },
  { name: '澳大利亚', value: 30.2 },
  { name: '爱尔兰', value: 28.3 },
  { name: '爱沙尼亚', value: 22.2 },
  { name: '牙买加', value: 33.8 },
  { name: '特立尼达和多巴哥', value: 28.1 },
  { name: '瑙鲁', value: 69.9 },
  { name: '瑞典', value: 15.3 },
  { name: '瑞士', value: 12.1 },
  { name: '瓦努阿图', value: 21.3 },
  { name: '白俄罗斯', value: 21.4 },
  { name: '百慕大', value: 33.0 },
  { name: '科威特', value: 41.4 },
  { name: '科摩罗', value: 16.3 },
  { name: '秘鲁', value: 27.3 },
  { name: '突尼斯', value: 26.8 },
  { name: '立陶宛', value: 25.4 },
  { name: '索马里', value: 14.6 },
  { name: '约旦', value: 38.5 },
  { name: '纳米比亚', value: 17.0 },
  { name: '纽埃', value: 66.6 },
  { name: '缅甸', value: 7.4 },
  { name: '罗马尼亚', value: 34.0 },
  { name: '老挝', value: 8.0 },
  { name: '肯尼亚', value: 12.4 },
  { name: '芬兰', value: 21.5 },
  { name: '苏丹', value: 17.0 },
  { name: '苏里南', value: 29.0 },
  { name: '莫桑比克', value: 10.3 },
  { name: '莱索托', value: 21.0 },
  { name: '菲律宾', value: 8.7 },
  { name: '萨尔瓦多', value: 30.9 },
  { name: '萨摩亚', value: 62.4 },
  { name: '葡萄牙', value: 21.8 },
  { name: '蒙古', value: 24.1 },
  { name: '西班牙', value: 15.7 },
  { name: '贝宁', value: 11.2 },
  { name: '赞比亚', value: 11.1 },
  { name: '赤道几内亚', value: 17.7 },
  { name: '越南', value: 2.0 },
  { name: '阿塞拜疆', value: 26.5 },
  { name: '阿富汗', value: 19.2 },
  { name: '阿尔及利亚', value: 23.8 },
  { name: '阿尔巴尼亚', value: 23.4 },
  { name: '阿曼', value: 31.1 },
  { name: '阿根廷', value: 35.4 },
  { name: '阿联酋', value: 32.1 },
  { name: '韩国', value: 7.3 },
  { name: '马尔代夫', value: 17.3 },
  { name: '马拉维', value: 7.7 },
  { name: '马来西亚', value: 22.1 },
  { name: '马绍尔群岛', value: 45.9 },
  { name: '马耳他', value: 32.3 },
  { name: '马达加斯加', value: 4.3 },
  { name: '马里', value: 11.4 },
  { name: '黎巴嫩', value: 29.8 },
  { name: '黑山', value: 18.0 }
];

// 3. 转换为英文名
var data = rawData.map(item => ({
  name: countryNameMap[item.name] || item.name,
  value: item.value
}));
data = data.filter(item => !!item.name);
data.sort((a, b) => a.value - b.value);

var ROOT_PATH = 'https://echarts.apache.org/examples';
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
fetch('./world.json')
  .then(response => response.json())
  .then(function (worldJson) {
    myChart.hideLoading();
    echarts.registerMap('world', worldJson);

    const mapOption = {
      visualMap: {
        left: 'right',
        min: Math.min(...data.map(d => d.value)),
        max: Math.max(...data.map(d => d.value)),
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ['高', '低'],
        calculable: true
      },
      series: [
        {
          id: 'obesity',
          type: 'map',
          roam: true,
          map: 'world',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data
        }
      ]
    };

    const barOption = {
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}%', // 增加百分号单位
        }
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: data.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'obesity',
        data: data.map(item => item.value),
        universalTransition: true
      }
    };

    let currentOption = mapOption;
    myChart.setOption(mapOption);
    setInterval(function () {
      currentOption = currentOption === mapOption ? barOption : mapOption;
      myChart.setOption(currentOption, true);
    }, 2000);
  });

option && myChart.setOption(option);

// 你可以用如下Python脚本自动生成rawData内容：
// import pandas as pd
// df = pd.read_excel(r'C:\\Users\\ph\\Desktop\\who\\who肥胖.xlsx', sheet_name='both')
// result = []
// for _, row in df.iterrows():
//     name = str(row['国家/地区']).strip()
//     value = row['2022']
//     if pd.notnull(value):
//         result.append(f"{{ name: '{name}', value: {value} }}")
// print("var rawData = [\n" + ",\n".join(result) + "\n];")
// 复制输出粘贴到这里即可