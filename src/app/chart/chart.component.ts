import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { TranslateService } from "ng2-translate";
import { Router } from "@angular/router";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  animations: [fadeIn]
})
export class ChartComponent implements OnInit {

  pieChart: any = this.getPieChartDataCN();

  barChart: any = this.getBarChartDataCN();

  lineChart: any = this.getLineChartCN();

  getLineChartCN(): any {
    let lineChart = {
      title: {
        text: 'NiceFish月访问趋势图',
        subtext: '纯属虚构',
        x: "center"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 次'
        }
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
        }

      ]
    };
    return lineChart;
  }

  getLineChartEN(): any {
    let lineChart = {
      title: {
        text: 'Monthly view line chart',
        subtext: 'mock',
        x: "center"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} views'
        }
      },
      series: [
        {
          name: 'views',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
        }

      ]
    };
    return lineChart;
  }


  getBarChartDataCN(): any {
    let barChart = {
      title: {
        text: 'NiceFish月访问量统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}月{a}:{c}"
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '访问量',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
        }
      ]
    };

    return barChart;

  }


  getBarChartDataEN(): any {
    let barChart = {
      title: {
        text: 'Monthly views',
        subtext: 'mock data',
        x: 'center'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}月{a}:{c}"
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Views',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
        }
      ]
    };

    return barChart;

  }


  getPieChartDataEN(): any {
    let pieChart = {
      theme: '',
      event: [
        {
          type: "click",
          cb: function (res) {
            console.log(res);
          }
        }
      ],
      title: {
        text: 'User location statistics',
        subtext: 'mock',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['China', 'USA', 'Germany', 'Others']
      },
      series: [{
        name: 'Origin',
        type: 'pie',
        startAngle: -180,
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
          value: 3350,
          name: 'China'
        }, {
          value: 310,
          name: 'USA'
        }, {
          value: 234,
          name: 'Germany'
        }, {
          value: 135,
          name: 'Other'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
    return pieChart;
  }

  getPieChartDataCN(): any {
    let pieChart = {
      theme: '',
      event: [
        {
          type: "click",
          cb: function (res) {
            console.log(res);
          }
        }
      ],
      title: {
        text: 'NiceFish访问用户地区分布',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国', '美国', '德国', '其他']
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
          value: 3350,
          name: '中国'
        }, {
          value: 310,
          name: '美国'
        }, {
          value: 234,
          name: '德国'
        }, {
          value: 135,
          name: '其他'
        }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
    return pieChart;
  }


  constructor(public translate: TranslateService, public router: Router) { }
  ngOnInit() {
    console.log("chart init is called ...");
    if (this.translate.getBrowserLang() == 'zh') {
      this.pieChart = this.getPieChartDataCN();
      this.barChart = this.getBarChartDataCN();
      this.lineChart = this.getLineChartCN();
    } else {
      this.pieChart = this.getPieChartDataEN();
      this.barChart = this.getBarChartDataEN();
      this.lineChart = this.getLineChartEN();
    }

    /*

    this.translate.onLangChange.subscribe((params) => {
      console.log("lang changed >" + params.lang);
      if (params.lang == 'zh') {
        this.pieChart = this.getPieChartDataCN();
        this.barChart = this.getBarChartDataCN();
        this.lineChart = this.getLineChartCN();
      } else {

        this.pieChart = this.getPieChartDataEN();
        this.barChart = this.getBarChartDataEN();
        this.lineChart = this.getLineChartEN();
      }

      // Case when route was used once or more
      
      console.log("chart component snapshot:url " + this.router.routerState.snapshot.url);
      if (this.router.routerState.snapshot.url.indexOf("/chart") != -1) {
        console.log(" navigateByUrl /login");
        this.router.navigateByUrl(`/login`).then(

          () => {
            console.log(" navigateByUrl /chart");
            this.router.navigateByUrl(`/chart`);
          });
      }
    });


  */
  }
}
