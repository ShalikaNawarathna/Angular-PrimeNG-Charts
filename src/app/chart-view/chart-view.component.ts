
import { Legend } from './../../../node_modules/chart.js/dist/plugins/plugin.legend.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent {
 basicData : any;
 basicOptions : any;
 pieChartData : any;
 pieChartOption  : any;
 doughnutOption : any;
 doughnutData : any;
 verticalData : any;
 verticalOption : any;
 horizontalOption : any;
 stackBarData : any;
 stackBarOption : any;
 lineOption : any;
 lineData : any;
 multiAxisOption : any;
 multiAxixData : any;
 lineStyleOption : any;
 lineStyleData : any;
 polarOption : any;
 polarData :  any;
 radarData : any;
 mixData : any;

 ngOnInit(): void {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  this.basicData = {
    labels: ['Maths', 'Physics', 'Chemistry', 'Bio'],
    datasets: [
        {
            label: 'Marks',
            data: [70, 85, 32, 90],
            backgroundColor: ['rgba(246, 255, 0, 0.8)', 'rgba(5, 234, 5, 0.8)', 'rgba(250, 46, 0, 0.8)', 'rgba(250, 46, 255, 0.8)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
};

this.basicOptions = {
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      y: {
          beginAtZero: true,
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};

this.pieChartData = {
  labels : ["Maths", "Bio", "Physics","Chemistry"],
  datasets: [
    {
        data: [70, 85, 35, 57],
        backgroundColor: [documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--black-500'), documentStyle.getPropertyValue('--red-500')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
    }
]
}

this.pieChartOption = {
  plugins: {
      legend: {
          labels: {
              usePointStyle: true,
              color: textColor
          }
      }
  }
};

this.doughnutData = {
  labels: ["Girls - Maths", "Boys - Maths", "Girls - Bio", "Boys - Bio", "Girls - Physics", "Boys - Physics", "Girls - Chemistry", "Boys - Chemistry"],
  datasets: [
    {
      data: [10, 5, 15, 5, 25, 10, 20, 10],
      backgroundColor: [
        documentStyle.getPropertyValue('--purple-400'),
        documentStyle.getPropertyValue('--purple-300'),
        documentStyle.getPropertyValue('--yellow-400'),
        documentStyle.getPropertyValue('--yellow-300'),
        documentStyle.getPropertyValue('--pink-400'),
        documentStyle.getPropertyValue('--pink-300'),
        documentStyle.getPropertyValue('--blue-400'),
        documentStyle.getPropertyValue('--blue-300'),
      ],
      hoverBackgroundColor: [
        documentStyle.getPropertyValue('--purple-300'),
        documentStyle.getPropertyValue('--purple-200'),
        documentStyle.getPropertyValue('--yellow-300'),
        documentStyle.getPropertyValue('--yellow-200'),
        documentStyle.getPropertyValue('--pink-300'),
        documentStyle.getPropertyValue('--pink-200'),
        documentStyle.getPropertyValue('--blue-300'),
        documentStyle.getPropertyValue('--blue-200'),
      ]
    },
    {
      data: [15, 20, 35,30],
      labels: ["Maths", "Bio", "Physics", "Chemistry"],
      backgroundColor: [
        documentStyle.getPropertyValue('--purple-500'),
        documentStyle.getPropertyValue('--yellow-500'),
        documentStyle.getPropertyValue('--pink-500'),
        documentStyle.getPropertyValue('--blue-500'),
      ],
      hoverBackgroundColor: [
        documentStyle.getPropertyValue('--purple-400'),
        documentStyle.getPropertyValue('--yellow-400'),
        documentStyle.getPropertyValue('--pink-400'),
        documentStyle.getPropertyValue('--blue-400'),
      ],

    },

  ]
}

this.doughnutOption = {
  cutout : '40%',
  plugins : {
    legend : {
      display : true,
      labels : {
        color : textColor
      }
    }
  }
}

this.verticalData = {
  labels : ['January', 'February', 'March', 'June', 'July', 'Augusy'],
  datasets : [
    {
      label : "First Dataset",
      backgroundColor : 'rgba(255, 10, 137, 0.8)',
      borderColor : documentStyle.getPropertyValue('yellow-500'),
      data : [56, 78, 92, 65, 20, 4, 71, 88]
    },
    {
      label : "Second Dataset",
      backgroundColor : 'rgba(0, 255, 0, 0.8)',
      borderColor : documentStyle.getPropertyValue('brown-500'),
      data : [45, 78, 63, 12, 85, 65, 36, 90]
    }
  ]
};

this.verticalOption = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary,
              font: {
                  weight: 500
              }
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }

  }
};

this.horizontalOption = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary,
              font: {
                  weight: 500
              }
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};

this.stackBarData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
      },
      {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34]
      },
      {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
      }
  ]
};


this.stackBarOption = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          stacked: true,
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          stacked: true,
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};

this.lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgba(0, 255, 0, 0.8)',
          tension: 0.4
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
      }
  ]
};

this.lineOption = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};

this.multiAxixData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Dataset 1',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10]
      },
      {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};

this.multiAxisOption = {
  stacked: false,
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
              color: textColorSecondary
          },
          grid: {
              drawOnChartArea: false,
              color: surfaceBorder
          }
      }
  }
};

this.lineStyleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: 'rgba(255, 0, 234, 0.69)'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: 'rgba(0, 79, 255, 0.69)'
      },
      {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: 'rgba(255, 255, 0, 0.69)',
          tension: 0.4,
          backgroundColor: 'rgba(0, 255, 0, 0.69)'
      }
  ]
};

this.lineStyleOption = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      }
  }
};

this.polarData = {
  datasets: [
      {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
              documentStyle.getPropertyValue('--red-500'),
              documentStyle.getPropertyValue('--green-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--bluegray-500'),
              documentStyle.getPropertyValue('--blue-500')
          ],
          label: 'My dataset'
      }
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

this.polarOption = {
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      r: {
          grid: {
              color: surfaceBorder
          }
      }
  }
};

this.radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
          label: 'My First dataset',
          borderColor: 'rgba(0, 79, 255, 0.69)',
          pointBackgroundColor: 'rgba(0, 79, 255, 0.69)',
          pointBorderColor: 'rgba(0, 79, 255, 0.69)',
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: 'rgba(0, 79, 255, 0.69)',
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          borderColor: 'rgba(236, 79, 255, 0.69)',
          pointBackgroundColor: 'rgba(236, 79, 255, 0.69)',
          pointBorderColor: 'rgba(236, 79, 255, 0.69)',
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: 'rgba(236, 79, 255, 0.69)',
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ]
};

this.mixData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgba(40, 255, 255, 0.91)',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
      },
      {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgba(40, 255, 0, 0.91)',
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2
      },
      {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: 'rgba(255, 255, 0, 0.91)',
          data: [41, 52, 24, 74, 23, 21, 32]
      }
  ]
};
}}
