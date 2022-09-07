document.addEventListener(
  'DOMContentLoaded',
  () => {
    const key = 'demo';
    const functionName = 'TIME_SERIES_DAILY';
    const symbolName = 'MSFT';
    const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

    function printTheChart(stockData) {
      const dailyData = stockData['Time Series (Daily)'];

      const stockDates = Object.keys(dailyData);
      const stockPrices = stockDates.map((date) => dailyData[date]['4. close']); 

      /**
       * {
       *  10-10-10: {
       *    '4. close': xxx
       *  }
       * }
       */

      const ctx = document.getElementById('my-chart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: stockDates,
          datasets: [
            {
              label: 'Stock Chart',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: stockPrices,
            },
          ],
        },
      }); // closes chart = new Chart()
    } // closes printTheChart()

    axios
      .get(apiUrl)
      .then((responseFromAPI) => {
        console.log('The response from API: ', responseFromAPI);
        printTheChart(responseFromAPI.data);
      })
      .catch((err) => console.log('Error while getting the data: ', err));
  },
  false
);
