

import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

const Char = () => {
  useEffect(() => {
    var options = {
      series: [
        {
          name: 'South',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'North',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
          })
        },
        {
          name: 'Central',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 15
          })
        }
      ],
   
    chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function(chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        },
        toolbar: {
          show: false
      },
        sparkline: {
          enabled: true
      },
      },
      
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'monotoneCubic',
        width: 0 
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        type: 'datetime'
      }
    };

    // إنشاء الرسم البياني باستخدام خيارات محددة
    var chart = new ApexCharts(document.querySelector('#chart'), options);

    // عرض الرسم البياني
    chart.render();
  }, []); // [] لضمان أن يتم استدعاءها فقط مرة واحدة بعد التحميل الأولي

  return (
    <div id="chart"></div>
  );
};

export default Char;
