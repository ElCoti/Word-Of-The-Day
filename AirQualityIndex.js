// Enter your API key from https://openweathermap.org/price#weather
let apiKey= `4120e9c2ddc9227984a966a16ac5dd09`

// Do not change anything below this line

//Get the latitude and the longitude of your location
let location = await Location.current()
let lat= location.latitude
let lon= location.longitude

const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
let req = new Request(url)
let result = await req.loadJSON()


let aqiIndex= result.list[0].main.aqi

let colorBack = [new Color("#88AB8E"),new Color("#E5D283"), new Color("#EA906C"), new Color("#C70039"),new Color("#5D3587") ]

let category = ["Good","Fair","Moderate","Poor","Very Poor"]

const widget = new ListWidget()

widget.backgroundColor = colorBack[aqiIndex-1]

let aq = widget.addText("Air quality")
aq.textColor = Color.white()

let cat = widget.addText(category[aqiIndex-1])
cat.font = Font.blackSystemFont(24)
cat.textColor = Color.white()

widget.presentSmall()
Script.setWidget(widget)
Script.complete()