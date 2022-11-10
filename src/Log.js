const dayjs = require('dayjs')
const chalk = require('chalk')

const colorNameToHex = require('./utils/colorNameToHex')
const splitNewLine = require('./utils/splitNewLine')

class Log {
    constructor(options = {}){
        
        this.options = {}
        
        this.options.baseMessage = ' '
        this.options.baseMessageColor = '#ccc'

        this.options.boxedLabels = true
        this.options.labelText = undefined
        this.options.labelTextColor = '#ccc'

        this.options.prefixText = undefined
        this.options.prefixTextColor = '#ccc'

        this.options.timeStamp = true
        this.options.timeStampStructure = 'HH:mm:ss'
        this.options.timeStampTextColor = '#ccc'

        this.addOptions(options)
    }

    /**
 * Add option(s) to options.
 *
 * @param {object | any} [options] Option(s)
 *
 * @returns Log
 */
    addOptions(options) {
        this.options = { ...this.options, ...options }
        return this
    }  

    log(message){
        if (!message) message = this.options.baseMessage

        const preLine = []
        const lines = splitNewLine(message)
        
        if (this.options.prefixText != undefined){
            var prefix  = this.options.prefixText
 
            if (typeof this.options.prefixTextColor === 'object') prefix = chalk.rgb(this.options.prefixTextColor.r, this.options.prefixTextColor.g, this.options.prefixTextColor.b)(this.options.prefixText)
            if (this.options.prefixTextColor.startsWith("#")) prefix = chalk.hex(this.options.prefixTextColor)(this.options.prefixText)
            if (colorNameToHex(this.options.prefixTextColor) != false) prefix = chalk.hex(colorNameToHex(this.options.prefixTextColor))(this.options.prefixText)  
            
            preLine.push(prefix)
        }

        if (this.options.timeStamp == true) {
            var timeStamp = dayjs().format(this.options.timeStampStructure)
        
            if (typeof this.options.timeStampTextColor === 'object') timeStamp = chalk.rgb(this.options.timeStampTextColor.r, this.options.timeStampTextColor.g, this.options.timeStampTextColor.b)(timeStamp)
            if (this.options.timeStampTextColor.startsWith("#")) timeStamp = chalk.hex(this.options.timeStampTextColor)(timeStamp)
            if (colorNameToHex(this.options.timeStampTextColor) != false) timeStamp = chalk.hex(colorNameToHex(this.options.timeStampTextColor))(timeStamp)

            preLine.push(timeStamp)
        }

        if (this.options.labelText != undefined){
            var label = ''

            if (Array.isArray(this.options.labelText)){  
                if (!Array.isArray(this.options.labelTextColor)) {
                    this.options.labelTextColor = [this.options.labelTextColor]
                }
                var colorIndex = 1
                for (const Label of this.options.labelText) {
                    var LabelText = Label
                    var LabelTextColor = this.options.labelTextColor[colorIndex - 1]
                    if (LabelTextColor === undefined) LabelTextColor = this.options.labelTextColor[0]
                    
                    if (this.options.boxedLabels == true) LabelText = `[${Label}]`

                    if (typeof LabelTextColor === 'object') label += chalk.rgb(LabelTextColor.r, LabelTextColor.g, LabelTextColor.b)(LabelText)
                    if (LabelTextColor.startsWith("#")) label += chalk.hex(LabelTextColor)(LabelText)
                    if (colorNameToHex(LabelTextColor) != false) label += chalk.hex(colorNameToHex(LabelTextColor))(LabelText)  
                    colorIndex ++
                }
            } else {
                if (this.options.boxedLabels == true) this.options.labelText = `[${this.options.labelText}]`
                label = this.options.labelText
                if (typeof this.options.labelTextColor === 'object') label = chalk.rgb(this.options.labelTextColor.r, this.options.labelTextColor.g, this.options.labelTextColor.b)(this.options.labelText)
                if (this.options.labelTextColor.startsWith("#")) label = chalk.hex(this.options.labelTextColor)(this.options.labelText)
                if (colorNameToHex(this.options.labelTextColor) != false) label = chalk.hex(colorNameToHex(this.options.labelTextColor))(this.options.labelText)  
            }
            preLine.push(label)
        }     
        
        if (preLine.length > 0) preLine.push('')

        for (const line of lines) console.log(`${preLine.join(' ')}${line}`)
          
        return this
    }

    message(message, color){
        if (message) this.options.baseMessage = message
        if (color) this.messageColor(color)
        return this
    }

    messageColor(color){       
        this.options.baseMessageColor = this.getColor(color)
        return this
    }

    label(text, color){
        if (text) this.options.labelText = text
        if (color) this.labelColor(color)
        return this
    }

    labelColor(color){
        this.options.labelTextColor = this.getColor(color)
        return this
    }
 
    prefix(text, color){
        if (text) this.options.prefixText = text
        if (color) this.prefixColor(color)
        return this
    }

    prefixColor(color){
        this.options.prefixTextColor = this.getColor(color)
        return this
    }

    noTimeStamp(){
        this.options.timeStamp = false
        return this
    }

    timeStamp(color){
        this.options.timeStamp = true
        if (color) this.timeStampColor(color)
        return this
    }

    timeStampStruct(struct){
        if (struct) this.options.timeStampStructure = struct
        return this
    }

    timeStampColor(color){
        this.options.timeStampTextColor = this.getColor(color)
        return this
    }

    getColor(colors) {
        if (!colors) return ['#ccc']
        if (!Array.isArray(colors)) {
            colors = [colors]
        }
        const outColors = []

        for (const color of colors){
            if (typeof color === 'object') outColors.push(color) 
            if (color.startsWith("#")) outColors.push(color) 
            if (colorNameToHex(color) != false)  outColors.push(colorNameToHex(color))
            
        }

        if (colors.length <= 1) return outColors[0]
        else return outColors
    
    }

}

module.exports = Log