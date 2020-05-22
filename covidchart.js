//chart example
//to use chart.js need to import <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> on html
window.onload = init;
function init(){
  //loadJSON();
  loadJSON(function(response){
    data = JSON.parse(response);

      //Push data from API to empty array using code below
      var xbarData = [];
      var ybarData = [];
      for (var x of data.Countries){
        xbarData.push(x.Country)
        ybarData.push(x.TotalConfirmed)
      }
      console.log(xbarData, ybarData);

      //Create
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: xbarData,
              datasets: [{
                  label: 'Total COVID deaths per country',
                  data: ybarData,
                  backgroundColor: [ ],
                  borderColor: [ ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
      // end create chart
  })
}


function loadJSON(callback){
  var xHR = new XMLHttpRequest;
  xHR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      callback(this.responseText);
    }else{
      return false;
    }
  }

  xHR.open('GET','https://api.covid19api.com/summary',true);
  xHR.send();
  console.log(xHR);
  }
