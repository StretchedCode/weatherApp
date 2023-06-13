// module that takes the data from weather.js and parses it into a compact object

function processData(data) {
  const dataObj = {
    country: data.location.country,
    name: data.location.name,
    region: data.location.region,
    condition: {
      text: data.current.condition.text,
      icon: data.current.condition.icon,
    },
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    feelslike_c: data.current.feelslike_c,
    feelslike_f: data.current.feelslike_f,
  };

  console.log(data);
  return dataObj;
}

export default processData;
