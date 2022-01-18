chartsInit();

function chartsInit() {
  var earningsData = {
    labels: [
      "development",
      "meetings",
      "research",
      "music",
      "other activities",
    ],
    datasets: [
      {
        data: [45, 25, 15, 10, 15],
        backgroundColor: [
          "rgba(25, 135, 84, 1)",
          "rgba(220, 53, 69, 1)",
          "rgba(13, 110, 253, 1)",
          "rgba(255, 193, 7, 1)",
          "rgba(108, 117, 125, 1)",
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          "rgba(25, 135, 84, .8)",
          "rgba(220, 53, 69, .8)",
          "rgba(13, 110, 253, .8)",
          "rgba(255, 193, 7, .8)",
          "rgba(108, 117, 125, .8)",
        ]
      }]
  };
  var earningsChart = new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: earningsData,
    options: {
      responsive: true,
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });

  Chart.pluginService.register({
    beforeDraw: function (chart) {
      if (chart.config.type === 'doughnut') {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = "",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  });
}
