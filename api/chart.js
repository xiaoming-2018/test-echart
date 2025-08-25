export default async (req, res) => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>简单 ECharts 示例</title>
        <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
        <style>
          body { margin: 0; }
          #main { width: 100vw; height: 100vh; }
        </style>
      </head>
      <body>
        <div id="main"></div>
        <script>
          var myChart = echarts.init(document.getElementById('main'));
          var option = {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: { data: ['A', 'B', 'C', 'D', 'E'] },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10]
            }]
          };
          myChart.setOption(option);
        </script>
      </body>
      </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  };
  
