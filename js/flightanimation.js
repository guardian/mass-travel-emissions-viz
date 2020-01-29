$(function() {

  const VENUES = [
    "OTP", //FIXME needs adding to airports.topo.json
    "GYD",
    "DUB",
    "MUC",
    "GLA",
    "AMS",
    "CPH",
    "BUD",
    "LED",
    "BIO",
    "FCO",
    "LHR"
  ];

  const COUNTRY_AIRPORTS = {
    IST:"🇹🇷",
    CWL:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    CPH:"🇩🇰",
    BRU:"🇧🇪",
    LHR:"󠁢󠁥󠁮󠁧🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    VIE:"🇦🇹",
    AMS:"🇳🇱",
    GLA:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    WAW:"🇵🇱",
    MAD:"🇪🇸",
    SOF:"🇧🇬",
    CDG:"🇫🇷",
    HEL:"🇫🇮",
    FCO:"🇮🇹",
    KBP:"🇺🇦",
    ARN:"🇸🇪",
    ZAG:"🇭🇷",
    LIS:"🇵🇹",
    ZRH:"🇨🇭",
    MSQ:"🇧🇾",
    DME:"🇷🇺",
    PRG:"🇨🇿",
    BTS:"-🇸🇰",
    MUC:"🇩🇪"
  };

  const FAN_FLIGHTS = [
    {outbound: "2020-06-11", originA:"IST", kilometersA: 1372.4475763672, originB:"FCO", kilometersB: 0, destination:"FCO", capacity: 72698, return: "2020-06-13"},
    {outbound: "2020-06-12", originA:"CWL", kilometersA: 4202.57679006976, originB:"ZRH", kilometersB: 3368.56452925478, destination:"GYD", capacity: 69870, return: "2020-06-14"},
    {outbound: "2020-06-12", originA:"CPH", kilometersA: 0, originB:"HEL", kilometersB: 892.13809752546, destination:"CPH", capacity: 38065, return: "2020-06-14"},
    {outbound: "2020-06-12", originA:"BRU", kilometersA: 1888.79211230284, originB:"DME", kilometersB: 666.516883187924, destination:"LED", capacity: 68000, return: "2020-06-14"},
    {outbound: "2020-06-13", originA:"LHR", kilometersA: 0, originB:"ZAG", kilometersB: 1367.42575978871, destination:"LHR", capacity: 90000, return: "2020-06-15"},
    {outbound: "2020-06-13", originA:"VIE", kilometersA: 828.875435650893, originB:"MSQ", kilometersB: 1045.70019853286, destination:"OTP", capacity: 55634, return: "2020-06-15"},
    {outbound: "2020-06-13", originA:"AMS", kilometersA: 0, originB:"KBP", kilometersB: 1818.62132380826, destination:"AMS", capacity: 54990, return: "2020-06-15"},
    {outbound: "2020-06-14", originA:"GLA", kilometersA: 0, originB:"PRG", kilometersB: 1400.21261087095, destination:"GLA", capacity: 51866, return: "2020-06-16"},
    {outbound: "2020-06-14", originA:"WAW", kilometersA: 1824.06008864327, originB:"BTS", kilometersB: 1739.80502295976, destination:"DUB", capacity: 51700, return: "2020-06-16"},
    {outbound: "2020-06-14", originA:"MAD", kilometersA: 316.358343836917, originB:"ARN", kilometersB: 2300.26224145598, destination:"BIO", capacity: 53289, return: "2020-06-16"},
    {outbound: "2020-06-15", originA:"SOF", kilometersA: 620.233417380539, originB:"LIS", kilometersB: 2480.09509491895, destination:"BUD", capacity: 38652, return: "2020-06-17"},
    {outbound: "2020-06-15", originA:"CDG", kilometersA: 681.20947159592, originB:"MUC", kilometersB: 0, destination:"MUC", capacity: 75024, return: "2020-06-17"},
    {outbound: "2020-06-16", originA:"HEL", kilometersA: 300.475291372855, originB:"DME", kilometersB: 666.516883187924, destination:"LED", capacity: 68000, return: "2020-06-18"},
    {outbound: "2020-06-16", originA:"IST", kilometersA: 1789.57185394174, originB:"CWL", kilometersB: 4202.57679006976, destination:"GYD", capacity: 69870, return: "2020-06-18"},
    {outbound: "2020-06-16", originA:"FCO", kilometersA: 0, originB:"ZRH", kilometersB: 693.549635279097, destination:"FCO", capacity: 72698, return: "2020-06-18"},
    {outbound: "2020-06-17", originA:"KBP", kilometersA: 735.975394560671, originB:"MSQ", kilometersB: 1045.70019853286, destination:"OTP", capacity: 55634, return: "2020-06-19"},
    {outbound: "2020-06-17", originA:"CPH", kilometersA: 0, originB:"BRU", kilometersB: 754.090385072781, destination:"CPH", capacity: 38065, return: "2020-06-19"},
    {outbound: "2020-06-17", originA:"AMS", kilometersA: 0, originB:"VIE", kilometersB: 959.59988223563, destination:"AMS", capacity: 54990, return: "2020-06-19"},
    {outbound: "2020-06-18", originA:"ARN", kilometersA: 1623.55489188072, originB:"BTS", kilometersB: 1739.80502295976, destination:"DUB", capacity: 51700, return: "2020-06-20"},
    {outbound: "2020-06-18", originA:"ZAG", kilometersA: 1816.70883520592, originB:"PRG", kilometersB: 1400.21261087095, destination:"GLA", capacity: 51866, return: "2020-06-20"},
    {outbound: "2020-06-18", originA:"LHR", kilometersA: 0, originB:"GLA", kilometersB: 554.464758403639, destination:"LHR", capacity: 90000, return: "2020-06-20"},
    {outbound: "2020-06-19", originA:"SOF", kilometersA: 620.233417380539, originB:"CDG", kilometersB: 1247.12265333206, destination:"BUD", capacity: 38652, return: "2020-06-21"},
    {outbound: "2020-06-19", originA:"LIS", kilometersA: 1983.44198347615, originB:"MUC", kilometersB: 0, destination:"MUC", capacity: 75024, return: "2020-06-21"},
    {outbound: "2020-06-19", originA:"MAD", kilometersA: 316.358343836917, originB:"WAW", kilometersB: 2026.29845635789, destination:"BIO", capacity: 53289, return: "2020-06-21"},
    {outbound: "2020-06-20", originA:"FCO", kilometersA: 0, originB:"CWL", kilometersB: 1593.47392358204, destination:"FCO", capacity: 72698, return: "2020-06-22"},
    {outbound: "2020-06-20", originA:"ZRH", kilometersA: 3368.56452925478, originB:"IST", kilometersB: 1789.57185394174, destination:"GYD", capacity: 69870, return: "2020-06-22"},
    {outbound: "2020-06-21", originA:"KBP", kilometersA: 735.975394560671, originB:"VIE", kilometersB: 828.875435650893, destination:"OTP", capacity: 55634, return: "2020-06-23"},
    {outbound: "2020-06-21", originA:"MSQ", kilometersA: 1556.3142982093, originB:"AMS", kilometersB: 0, destination:"AMS", capacity: 54990, return: "2020-06-23"},
    {outbound: "2020-06-21", originA:"HEL", kilometersA: 300.475291372855, originB:"BRU", kilometersB: 1888.79211230284, destination:"LED", capacity: 68000, return: "2020-06-23"},
    {outbound: "2020-06-21", originA:"DME", kilometersA: 1581.23605296811, originB:"CPH", kilometersB: 0, destination:"CPH", capacity: 38065, return: "2020-06-23"},
    {outbound: "2020-06-22", originA:"PRG", kilometersA: 1043.93046658927, originB:"LHR", kilometersB: 0, destination:"LHR", capacity: 90000, return: "2020-06-24"},
    {outbound: "2020-06-22", originA:"ZAG", kilometersA: 1816.70883520592, originB:"GLA", kilometersB: 0, destination:"GLA", capacity: 51866, return: "2020-06-24"},
    {outbound: "2020-06-23", originA:"ARN", kilometersA: 1623.55489188072, originB:"WAW", kilometersB: 1824.06008864327, destination:"DUB", capacity: 51700, return: "2020-06-25"},
    {outbound: "2020-06-23", originA:"BTS", kilometersA: 1647.05282029529, originB:"MAD", kilometersB: 316.358343836917, destination:"BIO", capacity: 53289, return: "2020-06-25"},
    {outbound: "2020-06-23", originA:"MUC", kilometersA: 0, originB:"SOF", kilometersB: 1101.14641867236, destination:"MUC", capacity: 75024, return: "2020-06-25"},
    {outbound: "2020-06-23", originA:"LIS", kilometersA: 2480.09509491895, originB:"CDG", kilometersB: 1247.12265333206, destination:"BUD", capacity: 38652, return: "2020-06-25"}
  ];

  const FLIGHT_LIST = [
    {date: "2020-06-11", origin:"IST", destination:"FCO", travellingTeamsHomeAirport:"IST", kilometers: 1372.4475763672},
    {date: "2020-06-12", origin:"CWL", destination:"GYD", travellingTeamsHomeAirport:"CWL", kilometers: 4202.57679006976},
    {date: "2020-06-12", origin:"BRU", destination:"LED", travellingTeamsHomeAirport:"BRU", kilometers: 1888.79211230284},
    {date: "2020-06-12", origin:"ZRH", destination:"GYD", travellingTeamsHomeAirport:"ZRH", kilometers: 3368.56452925478},
    {date: "2020-06-12", origin:"HEL", destination:"CPH", travellingTeamsHomeAirport:"HEL", kilometers: 892.13809752546},
    {date: "2020-06-12", origin:"DME", destination:"LED", travellingTeamsHomeAirport:"DME", kilometers: 666.516883187924},
    {date: "2020-06-13", origin:"VIE", destination:"OTP", travellingTeamsHomeAirport:"VIE", kilometers: 828.875435650893},
    {date: "2020-06-13", origin:"ZAG", destination:"LHR", travellingTeamsHomeAirport:"ZAG", kilometers: 1367.42575978871},
    {date: "2020-06-13", origin:"MSQ", destination:"OTP", travellingTeamsHomeAirport:"MSQ", kilometers: 1045.70019853286},
    {date: "2020-06-13", origin:"KBP", destination:"AMS", travellingTeamsHomeAirport:"KBP", kilometers: 1818.62132380826},
    {date: "2020-06-14", origin:"WAW", destination:"DUB", travellingTeamsHomeAirport:"WAW", kilometers: 1824.06008864327},
    {date: "2020-06-14", origin:"MAD", destination:"BIO", travellingTeamsHomeAirport:"MAD", kilometers: 316.358343836931},
    {date: "2020-06-14", origin:"PRG", destination:"GLA", travellingTeamsHomeAirport:"PRG", kilometers: 1400.21261087095},
    {date: "2020-06-14", origin:"BTS", destination:"DUB", travellingTeamsHomeAirport:"BTS", kilometers: 1739.80502295976},
    {date: "2020-06-14", origin:"ARN", destination:"BIO", travellingTeamsHomeAirport:"ARN", kilometers: 2300.26224145598},
    {date: "2020-06-15", origin:"SOF", destination:"BUD", travellingTeamsHomeAirport:"SOF", kilometers: 620.233417380539},
    {date: "2020-06-15", origin:"CDG", destination:"MUC", travellingTeamsHomeAirport:"CDG", kilometers: 681.20947159592},
    {date: "2020-06-15", origin:"LIS", destination:"BUD", travellingTeamsHomeAirport:"LIS", kilometers: 2480.09509491895},
    {date: "2020-06-16", origin:"CPH", destination:"LED", travellingTeamsHomeAirport:"HEL", kilometers: 1140.84741391049},
    {date: "2020-06-16", origin:"FCO", destination:"GYD", travellingTeamsHomeAirport:"IST", kilometers: 3144.05305598383},
    {date: "2020-06-16", origin:"GYD", destination:"FCO", travellingTeamsHomeAirport:"ZRH", kilometers: 3144.05305598383},
    {date: "2020-06-17", origin:"AMS", destination:"OTP", travellingTeamsHomeAirport:"KBP", kilometers: 1783.36385288131},
    {date: "2020-06-17", origin:"LED", destination:"CPH", travellingTeamsHomeAirport:"BRU", kilometers: 1140.84741391049},
    {date: "2020-06-17", origin:"OTP", destination:"AMS", travellingTeamsHomeAirport:"VIE", kilometers: 1783.36385288131},
    {date: "2020-06-18", origin:"BIO", destination:"DUB", travellingTeamsHomeAirport:"ARN", kilometers: 1152.21540638571},
    {date: "2020-06-18", origin:"LHR", destination:"GLA", travellingTeamsHomeAirport:"ZAG", kilometers: 554.464758403639},
    {date: "2020-06-18", origin:"GLA", destination:"LHR", travellingTeamsHomeAirport:"GLA", kilometers: 554.464758403639},
    {date: "2020-06-19", origin:"BUD", destination:"MUC", travellingTeamsHomeAirport:"LIS", kilometers: 566.113327873761},
    {date: "2020-06-19", origin:"MUC", destination:"BUD", travellingTeamsHomeAirport:"CDG", kilometers: 566.113327873761},
    {date: "2020-06-19", origin:"DUB", destination:"BIO", travellingTeamsHomeAirport:"WAW", kilometers: 1152.21540638571},
    {date: "2020-06-20", origin:"FCO", destination:"GYD", travellingTeamsHomeAirport:"ZRH", kilometers: 3144.05305598383},
    {date: "2020-06-20", origin:"GYD", destination:"FCO", travellingTeamsHomeAirport:"CWL", kilometers: 3144.05305598383},
    {date: "2020-06-21", origin:"OTP", destination:"AMS", travellingTeamsHomeAirport:"MSQ", kilometers: 1783.36385288131},
    {date: "2020-06-21", origin:"LED", destination:"CPH", travellingTeamsHomeAirport:"DME", kilometers: 1140.84741391049},
    {date: "2020-06-21", origin:"AMS", destination:"OTP", travellingTeamsHomeAirport:"VIE", kilometers: 1783.36385288131},
    {date: "2020-06-21", origin:"CPH", destination:"LED", travellingTeamsHomeAirport:"BRU", kilometers: 1140.84741391049},
    {date: "2020-06-22", origin:"GLA", destination:"LHR", travellingTeamsHomeAirport:"PRG", kilometers: 554.464758403639},
    {date: "2020-06-22", origin:"LHR", destination:"GLA", travellingTeamsHomeAirport:"GLA", kilometers: 554.464758403639},
    {date: "2020-06-23", origin:"DUB", destination:"BIO", travellingTeamsHomeAirport:"BTS", kilometers: 1152.21540638571},
    {date: "2020-06-23", origin:"MUC", destination:"BUD", travellingTeamsHomeAirport:"LIS", kilometers: 566.113327873761},
    {date: "2020-06-23", origin:"BIO", destination:"DUB", travellingTeamsHomeAirport:"WAW", kilometers: 1152.21540638571},
    {date: "2020-06-23", origin:"BUD", destination:"MUC", travellingTeamsHomeAirport:"SOF", kilometers: 566.113327873761},
  ];

  const FLIGHT_LIST_GROUPED = FLIGHT_LIST.reduce((accumulator, currentValue) => ({
    ...accumulator,
    [currentValue.date]: [
      currentValue,
      ...(accumulator[currentValue.date] || [])
    ]
  }), {});

  var currentWidth = $('#map').width();
  var width = 938;
  var height = 620;

  var projection = d3.geo
  .mercator()
  .scale(150)
  .translate([width / 2, height / 1.41]);

  var path = d3.geo
  .path()
  .pointRadius(1)
  .projection(projection);

  var svg = d3.select("#map")
  .append("svg")
  .attr("preserveAspectRatio", "xMidYMid")
  .attr("viewBox", "400 210 200 150")
  .attr("width", currentWidth)
  .attr("height", currentWidth * height / width);

  svg.append("text")
  .attr("class", "date")
  .attr("x", 405)
  .attr("y", 240);

  var airportMap = {};

  function transition(plane, route, flight) {
    var l = route.node().getTotalLength();
    plane.transition()
    .duration(3000)
    .attrTween("transform", delta(plane, route.node(), flight))
    .remove();
  }

  function delta(plane, path, flight) {
    const length = path.getTotalLength();
    return function(i) {
      return function(t) {

        flight.travelledThusFar = flight.kilometers * t;

        if(flight.fanTravel && flight.team && flight.direction){
          flight.fanTravel[`travelledThusFar${flight.direction}${flight.team}`] = flight.kilometers * t
            * 10; //because 'numberOfFlightsPerFanTeam' is divided by 1500 instead of 150 - because melty laptop
        }

        const totalTravelledThusFar =
          FAN_FLIGHTS.reduce((acc, fanTravel) =>
            acc +
            (fanTravel.travelledThusFarOutboundA || 0) +
            (fanTravel.travelledThusFarOutboundB || 0) +
            (fanTravel.travelledThusFarReturnA || 0) +
            (fanTravel.travelledThusFarReturnB || 0)
            , 0) +
          FLIGHT_LIST.map(_ => (_.travelledThusFar || 0)).reduce((acc, num) => acc + num, 0);

        svg.selectAll(".best-case").filter(".value").text(
          (totalTravelledThusFar * 10).toFixed(0)
          .toString()
          .replace(/,/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        svg.selectAll(".worst-case").filter(".value").text(
          (totalTravelledThusFar * 30).toFixed(0)
          .toString()
          .replace(/,/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );

        const p = path.getPointAtLength(t * length);

        const t2 = Math.min(t + 0.05, 1);
        const p2 = path.getPointAtLength(t2 * length);

        const x = p2.x - p.x;
        const y = p2.y - p.y;
        const rotation = 90 - Math.atan2(-y, x) * 180 / Math.PI;

        const scale = Math.min(Math.sin(Math.PI * t) * 0.7, 0.3) / 3;

        return `translate(${p.x}, ${p.y}) scale(${scale}) rotate(${rotation})`;
      }
    }
  }

  function fly(flight) {

    console.log(flight);

    var route = svg.append("path")
    .datum({type: "LineString", coordinates: [airportMap[flight.origin], airportMap[flight.destination]]})
    .attr("class", "route")
    .attr("d", path);

    var plane = svg.append("path")
    .attr("class", "plane")
    .attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055," +
      "0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263," +
      "4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143," +
      "2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032," +
      "0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53," +
      "-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574," +
      "0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496," +
      "-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198," +
      "-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147," +
      "-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655," +
      "-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658," +
      "-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0");

    transition(plane, route, flight);
  }

  function loaded(error, countries, airports) {
    svg.append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(topojson.feature(countries, countries.objects.countries).features)
    .enter()
    .append("path")
    .attr("d", path);

    svg.append("g")
    .attr("class", "venue")
    .selectAll("text")
    .data(topojson.feature(airports, airports.objects.airports).features)
    .enter()
    .append("text")
    .filter(dataPoint => VENUES.includes(dataPoint.id))
    // .text("⚽")
    .text("🏟")
    .attr("x", dataPoint => projection(dataPoint.geometry.coordinates)[0] - 3)
    .attr("y", dataPoint => projection(dataPoint.geometry.coordinates)[1] + 3);

    svg.append("g")
    .attr("class", "home")
    .selectAll("text")
    .data(topojson.feature(airports, airports.objects.airports).features)
    .enter()
    .append("text")
    .filter(dataPoint => Object.keys(COUNTRY_AIRPORTS).includes(dataPoint.id))
    .text(dataPoint => COUNTRY_AIRPORTS[dataPoint.id])
    .on('click', dataPoint => window.location.href = `index.html?filter=${dataPoint.id}`)
    .attr("x", dataPoint => projection(dataPoint.geometry.coordinates)[0] - 2)
    .attr("y", dataPoint => projection(dataPoint.geometry.coordinates)[1] + 2);

    const emissionsX = 600;

    svg.append("text")
    .attr("class", "emissions-label best-case")
    .text("'BEST' CASE")
    .attr("text-anchor", "end")
    .attr("x", emissionsX)
    .attr("y", 216);

    svg.append("text")
    .attr("class", "emissions-label best-case")
    .text("kg CO₂")
    .attr("x", emissionsX)
    .attr("y", 223);

    svg.append("text")
    .attr("class", "value best-case")
    .text("0")
    .attr("text-anchor", "end")
    .attr("x", emissionsX)
    .attr("y", 223);

    svg.append("text")
    .attr("class", "emissions-label worst-case")
    .text("WORST CASE")
    .attr("text-anchor", "end")
    .attr("x", emissionsX)
    .attr("y", 230);

    svg.append("text")
    .attr("class", "emissions-label worst-case")
    .text("kg CO₂")
    .attr("x", emissionsX)
    .attr("y", 237);

    svg.append("text")
    .attr("class", "value worst-case")
    .text("0")
    .attr("text-anchor", "end")
    .attr("x", emissionsX)
    .attr("y", 237);

    svg.append("svg:image")
    .attr('class', "fans")
    .attr('x', 366)
    .attr('y', 189)
    .attr('width', 25)
    .attr('height', 25)
    .attr("xlink:href", "fan.gif")
    // TODO add hover move
    .on('click', () => window.location.href = `index.html?showFanTravel=true`);

    var geos = topojson.feature(airports, airports.objects.airports).features;
    for (i in geos) {
      airportMap[geos[i].id] = geos[i].geometry.coordinates;
    }

    const filter = new URLSearchParams(window.location.search).get("filter");
    const showFanTravel = new URLSearchParams(window.location.search).get("showFanTravel");

    Object.entries(FLIGHT_LIST_GROUPED).forEach(
      ([date, daysFlights], dayIndex) =>
        setTimeout(
          () => {

            console.log(date);
            svg.select(".date").text(date);

            if(showFanTravel){
              FAN_FLIGHTS.filter(_ => _.outbound === date).forEach((fanTravel, fanTravelIndex) => {

                const numberOfFlightsPerFanTeam = (fanTravel.capacity / 4) / 1500;

                for (var i = 0; i < numberOfFlightsPerFanTeam; i++) {

                  setTimeout(() => {
                    if (fanTravel.originA !== fanTravel.destination) {
                      fly({
                        fanTravel,
                        team: "A",
                        direction: "Outbound",
                        date,
                        origin: fanTravel.originA,
                        destination: fanTravel.destination,
                        travellingTeamsHomeAirport: fanTravel.originA,
                        kilometers: fanTravel.kilometersA
                      });
                    }
                    if (fanTravel.originB !== fanTravel.destination) {
                      fly({
                        fanTravel,
                        team: "B",
                        direction: "Outbound",
                        date,
                        origin: fanTravel.originB,
                        destination: fanTravel.destination,
                        travellingTeamsHomeAirport: fanTravel.originB,
                        kilometers: fanTravel.kilometersB
                      });
                    }
                  }, i * 50);
                }
              });
              FAN_FLIGHTS.filter(_ => _.return === date).forEach(fanTravel  => {

                const numberOfFlightsPerFanTeam = (fanTravel.capacity / 4) / 1500;

                for (var i = 0; i < numberOfFlightsPerFanTeam; i++) {

                  setTimeout(() => {

                    if (fanTravel.originA !== fanTravel.destination) {
                      fly({
                        fanTravel,
                        team: "A",
                        direction: "Return",
                        date,
                        origin: fanTravel.destination,
                        destination: fanTravel.originA,
                        travellingTeamsHomeAirport: fanTravel.originA,
                        kilometers: fanTravel.kilometersA
                      });
                    }
                    if (fanTravel.originB !== fanTravel.destination) {
                      fly({
                        fanTravel,
                        team: "B",
                        direction: "Return",
                        origin: fanTravel.destination,
                        destination: fanTravel.originB,
                        travellingTeamsHomeAirport: fanTravel.originB,
                        kilometers: fanTravel.kilometersB
                      });
                    }

                  }, i * 50);

                }
              });
            }

            daysFlights
            .filter(flight =>
              !filter || flight.travellingTeamsHomeAirport === filter
            )
            .forEach((flight, flightIndex) => {
              setTimeout(() => fly(flight), flightIndex * 100)

            })
          },
          dayIndex * (filter ? 400 : (showFanTravel ? 800 : 600))
        )

    );

  }

  queue().defer(d3.json, "json/countries2.topo.json")
  .defer(d3.json, "json/airports.topo.json")
  .await(loaded);

  $(window).resize(function() {
    currentWidth = $("#map").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * height / width);
  });
});