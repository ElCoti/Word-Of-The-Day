//Enter your api key from developer.wordnik.com
let ApiKey = `gshyirhsc6emurf7i2xhjyjp15ackoyqeojxdjxuemyq0xojc`

const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${ApiKey}`
let req = new Request(url)
let result = await req.loadJSON()

const widget = new ListWidget()

let word = result.word
let firstDefinition = result.definitions[0].text


widget.backgroundColor = new Color("#6A994E")

let fontWOTD = widget.addText("Word of the day")
fontWOTD.font = new Font("arial",13)
fontWOTD.textColor = new Color("#FEFAE0")
widget.addSpacer(0)

let fontWord = widget.addText(word)
fontWord.font = Font.blackSystemFont(34)
fontWord.textColor = new Color("#FEFAE0")
widget.addSpacer(4)

let def = widget.addText("Definition:")
def.font = Font.blackSystemFont(12)
def.textColor = new Color("#FEFAE0")
widget.addSpacer(5)

let fontDefinition = widget.addText(firstDefinition)
fontDefinition.font = new Font("arial",12)
fontDefinition.textColor = new Color("#FEFAE0")

widget.presentMedium()
Script.setWidget(widget)
Script.complete()