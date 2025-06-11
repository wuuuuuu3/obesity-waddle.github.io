fetch('./obesity_both_1990_2022.json')
  .then(res => res.json())
  .then(data => {
    // 获取所有年份（列名，去掉Location）
    const years = Object.keys(data[0]).filter(k => k !== 'Location');
    // 获取所有国家
    const countries = data.map(item => item.Location);

    // 组装 series
    const series = countries.map((country, idx) => ({
      name: country,
      type: 'line',
      data: years.map(year => data[idx][year]),
      emphasis: { focus: 'series' }
    }));

    const option = {
      title: { text: '1990-2022各国肥胖率动态折线图' },
      tooltip: { trigger: 'axis' },
      legend: { data: countries, type: 'scroll' },
      xAxis: { type: 'category', data: years },
      yAxis: { type: 'value', name: '肥胖率(%)' },
      series
    };

    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
  });
