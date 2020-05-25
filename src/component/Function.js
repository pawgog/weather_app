const changeFormatDate = (value) => {
  const getForecastDate = value.filter((val) => {
    let forecastHour = new Date(val.dt * 1000).getHours();
    return forecastHour === 14;
  });

  const addDay = getForecastDate.map((val) => {
    let forecastDate = new Date(val.dt * 1000).getDay();
    switch (forecastDate) {
      case 0:
        val['day'] = 'Sun';
        return val;
      case 1:
        val['day'] = 'Mon';
        return val;
      case 2:
        val['day'] = 'Tue';
        return val;
      case 3:
        val['day'] = 'Wed';
        return val;
      case 4:
        val['day'] = 'Thu';
        return val;
      case 5:
        val['day'] = 'Fri';
        return val;
      case 6:
        val['day'] = 'Sat';
        return val;
      default:
        break;
    }
    return val;
  });

  return addDay;
};

export default changeFormatDate