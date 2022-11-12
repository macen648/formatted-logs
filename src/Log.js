// Custom Console logs ;)
const dayjs = require('dayjs')
const chalk = require('chalk')
const Paragraph = require('./src/Paragraph')
const colorNameToHex = require('./utils/colorNameToHex')
const splitNewLine = require('./utils/splitNewLine')

class Log {
    constructor(options = {}){
        
        this.options = {}

        this.setDefaults()

        this.setOptions(options)
    }

    /**
 * Add option(s) to options.
 *
 * @param {object | any} [options] Option(s)
 *
 * @returns Log
 */
    setOptions(options) {
        this.options = { ...this.options, ...options }
        return this
    }  

    setDefaults() {
        this.options.baseMessage = ' '
        this.options.baseMessageColor = '#ccc'

        this.options.boxedLabels = true
        this.options.labelText = undefined
        this.options.labelTextColor = '#ccc'

        this.options.prefixText = undefined
        this.options.prefixTextColor = '#ccc'

        this.options.timeStamp = true
        this.options.boxedTimeStamp = false
        this.options.timeStampStructure = 'HH:mm:ss'
        this.options.timeStampTextColor = '#ccc'
    }

    resetLogValues() {
        this.options.baseMessage = ' '
        this.options.baseMessageColor = '#ccc'

        this.options.labelText = undefined
        this.options.labelTextColor = '#ccc'

        this.options.prefixText = undefined
        this.options.prefixTextColor = '#ccc'

        this.options.timeStampTextColor = '#ccc'
    }


    /**
     * Log a message to the console with a timestamp and optionally a label.
     * 
     *  HH:mm:ss message
     * 
     *  HH:mm:ss [label] message
     * 
     * @param {string} message Message
     * @param {string} [label] Label
     * @param {string | object} [color] Label-Color
     * @returns Log
     */
    log(message, label, color){
        if (!message) message = this.options.baseMessage
        if (label) this.label(label)
        if (color) this.labelColor(color)

        const preLine = []

        const lines = splitNewLine(message)
        if (this.options.prefixText != undefined) preLine.push(this._createPrefix())
        
        if (this.options.timeStamp == true) preLine.push(this._createTimeStamp())
        
        if (this.options.labelText != undefined) preLine.push(this._createLabel())
            
        if (preLine.length > 0) preLine.push('')

        for (var line of lines){
            if (line === '') line = ' '
            console.log(`${preLine.join(' ')}${this._getChalkColor(line, this.options.baseMessageColor)}`)
        } 
          
        this.resetLogValues()

        return this
    }

    // paragraph(options) {
    //     return new Paragraph(this, options)
    // }


    // /**
    //  * Log a message to the console without a timestamp and or label.
    //  * 
    //  * @param {string} message Message
    //  * @returns FLogs
    //  */
    // raw(message) {
    //     if (this.options.hide) return
    //     if (!message) message = ' '
    //     console.log(message)
    //     return this
    // }

    // /**
    //  * Log a **INFO** message to the console with a timestamp and a pre-made and label. 
    //  * 
    //  *  HH:mm:ss [INFO] message
    //  * 
    //  *              white
    //  * @param {string} message Message
    //  * @returns FLogs
    //  */
    // info(message) {
    //     this.log(message, 'INFO', 'white')
    //     return this
    // }

    // /**
    //  * Log a **WARN** message to the console with a timestamp and a pre-made and label. 
    //  * 
    //  *  HH:mm:ss [WARN] message
    //  * 
    //  *             yellow
    //  * @param {string} message Message
    //  * @returns FLogs
    //  */
    // warn(message) {
    //     this.log(message, 'WARN', 'yellow')
    //     return this
    // }

    // /**
    //  * Log a **error** message to the console with a timestamp and a pre-made and label. 
    //  * 
    //  *  HH:mm:ss [error] message
    //  * 
    //  *              red
    //  * @param {string} message Message
    //  * @returns FLogs
    //  */
    // error(message) {
    //     this.log(message, 'error', 'red')
    //     return this
    // }

    // /**
    //  * Logs a blank line.
    //  * @returns FLogs
    //  */
    // white() {
    //     this.raw(" ")
    //     return this
    // }

    // /**
    //  * Log a console.Table() to the console with a timestamp. 
    //  * 
    //  * @param {Array | string} values Array of values
    //  * @param {object} properties Properties 
    //  * @returns FLogs
    //  */
    // table(values = [], properties) {
    //     if (this.options.hide) return
    //     console.log(`------${this.createTimeStamp()}------`)
    //     if (!Array.isArray(values)) {
    //         values = [values]
    //     }
    //     console.table([...values], properties)
    //     return this
    // }

    // /**
    //  * Logs a timeStamp.
    //  * @returns FLogs
    //  */
    // timeStamp() {
    //     this.log()
    //     return this
    // }
    // /**
    //  * Logs a label.
    //  * 
    //  * @param {string} name 
    //  * @param {string | object} color 
    //  * @returns FLogs
    //  */
    // label(name, color) {
    //     this.raw(this.createLabel(name, color))
    //     return this
    // }

    // /**
    //  * Log a newLine with out a timestamp.
    //  * 
    //  * HH:mm:ss [INFO] Message
    //  *  
    //  *             NewLine
    //  *             messages
    //  * @param {string} message Message
    //  * @returns FLogs
    //  */
    // newLine(message, spacing) {
    //     var outSpacing = ''
    //     if (this.options.hide) return
    //     if (!message) message = ' '
    //     if (!spacing) outSpacing = ' '.repeat(this.options.timeStruct.length + 1)
    //     if (spacing > 0) outSpacing = ' '.repeat(spacing)
    //     if (spacing === 0) outSpacing = ''


    //     const lines = splitNewLine(message)
    //     for (const line of lines) console.log(`${outSpacing}${line}`)
    //     return this
    // }







    _getChalkColor(string, color){ 
        if (!string) return 
        if (!color) return chalk.hex('#ccc')(string)
        if (color === undefined) return chalk.hex('#ccc')(string)
        if (typeof color === 'object') return chalk.rgb(color.r, color.g, color.b)(string)
        if (color.startsWith("#")) return chalk.hex(color)(string)
        if (colorNameToHex(color) != false) return chalk.hex(colorNameToHex(color))(string)
        return chalk.hex('#ccc')(string)
    }

//message
    message(message, color){
        if (message) this.options.baseMessage = message
        if (color) this.messageColor(color)
        return this
    }

    messageColor(color){       
        this.options.baseMessageColor = color
        return this
    }

    noMessage(){
        this.options.baseMessage = ' ' 
        return this
    }

//label
    label(text, color){
        if (text) this.options.labelText = text
        if (color) this.labelColor(color)
        return this
    }

    labelColor(color){
        this.options.labelTextColor = color
        return this
    }

    boxedLabel() {
        this.options.boxedLabels = true
        return this
    }

    noBoxedLabel() {
        this.options.boxedLabels = false
        return this
    }

    _createLabel() {
        const labelArr = []
        if (!Array.isArray(this.options.labelText)) this.options.labelText = [this.options.labelText]
        if (!Array.isArray(this.options.labelTextColor)) this.options.labelTextColor = [this.options.labelTextColor]
           
        var colorIndex = 1     
        for (const Label of this.options.labelText) {
            var LabelText = Label
            var LabelTextColor = this.options.labelTextColor[colorIndex - 1]
            if (LabelTextColor === undefined) LabelTextColor = this.options.labelTextColor[0]
            if (this.options.boxedLabels == true) LabelText = `[${Label}]`
            labelArr.push(this._getChalkColor(LabelText, LabelTextColor))
            colorIndex++
        }
        if (this.options.boxedLabels == false) return labelArr.join(' ')
        return labelArr.join('')
    }

//Prefix
    prefix(text, color){
        if (text) this.options.prefixText = text
        if (color) this.prefixColor(color)
        return this
    }

    noPrefix() {
        this.options.prefixText = undefined
        return this
    }

    prefixColor(color){
        this.options.prefixTextColor = color
        return this
    }

    _createPrefix() {
        return this._getChalkColor(this.options.prefixText, this.options.prefixTextColor)
    }

//TimeStamp
    timeStamp(color){
        this.options.timeStamp = true
        if (color) this.timeStampColor(color)
        return this
    }

    noTimeStamp() {
        this.options.timeStamp = false
        return this
    }

    noBoxedTimeStamp() {
        this.options.boxedTimeStamp = false
        return this
    }

    boxedTimeStamp() {
        this.options.boxedTimeStamp = true
        return this
    }

    timeStampStruct(struct){
        if (struct) this.options.timeStampStructure = struct
        return this
    }

    timeStampColor(color){
        this.options.timeStampTextColor = color
        return this
    } 

    _createTimeStamp() {
        var timeStamp = dayjs().format(this.options.timeStampStructure)

        var TimeStamp = timeStamp
        if (this.options.boxedTimeStamp == true) TimeStamp = `[${timeStamp}]`

        return this._getChalkColor(TimeStamp, this.options.timeStampTextColor)
    }
}

module.exports = Log