// Custom Console logs ;)
const dayjs = require('dayjs')
const chalk = require('chalk')
const Log = require('./Log')
const Paragraph = require('./Paragraph')
const colorNameToHex = require('./utils/colorNameToHex')
const splitNewLine = require('./utils/splitNewLine')

class FLogs {
     /**
     * Time-stamped and labeled Console logs.
     * 
     *  HH:mm:ss message
     * 
     *  HH:mm:ss [label] message
     * 
     *  @param {object} options Option(s)
     * 
     */   
    constructor(options = {}){
        this.options = options
        this.options.hide = false
        this.options.timeStruct = 'HH:mm:ss'
        this.options.boxedLabels = true
    }
    /**
     * Add option(s) to options.
     *
     * @param {object | any} [options] Option(s)
     *
     * @returns FLogs
     */
    addOptions(options){
        this.options = { ...this.options, ...options }
        return this 
        
    }

    /**
     * Set timeStamp structure.
     * 
     * @param {string} timeStruct TimeStruct
     * @returns FLogs
     */
    setTimeStruct(timeStruct){
        this.options.timeStruct = timeStruct
        return this
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
     * @returns FLogs
     */
    log(message, label, color){
        if (this.options.hide) return
        if (!message) message = ' '
        const lines = splitNewLine(message)
        if (!label) for (const line of lines) console.log(`${this.createTimeStamp()} ${line}`)
        else for (const line of lines) console.log(`${this.createTimeStamp()} ${this.createLabel(label, color)} ${line}`)
        return this
    }

    /**
     * Start of a paragraph.
     * 
     * @param {object} options 
     * @returns Paragraph
     */
    paragraph(options) {
        return new Paragraph(this, options)
    }


    /**
     * Log a message to the console without a timestamp and or label.
     * 
     * @param {string} message Message
     * @returns FLogs
     */
    raw(message){
        if (this.options.hide) return
        if(!message) message = ' '
        console.log(message)
        return this
    }

    /**
     * Log a **INFO** message to the console with a timestamp and a pre-made and label. 
     * 
     *  HH:mm:ss [INFO] message
     * 
     *              white
     * @param {string} message Message
     * @returns FLogs
     */
    info(message){
        this.log(message, 'INFO', 'white')
        return this
    }

    /**
     * Log a **WARN** message to the console with a timestamp and a pre-made and label. 
     * 
     *  HH:mm:ss [WARN] message
     * 
     *             yellow
     * @param {string} message Message
     * @returns FLogs
     */
    warn(message){
        this.log(message, 'WARN', 'yellow')
        return this
    }

    /**
     * Log a **error** message to the console with a timestamp and a pre-made and label. 
     * 
     *  HH:mm:ss [error] message
     * 
     *              red
     * @param {string} message Message
     * @returns FLogs
     */
    error(message){
        this.log(message, 'error', 'red')
        return this
    }

    /**
     * Logs a blank line.
     * @returns FLogs
     */
    white() {
        this.raw(" ")
        return this
    }

    /**
     * Log a console.Table() to the console with a timestamp. 
     * 
     * @param {Array | string} values Array of values
     * @param {object} properties Properties 
     * @returns FLogs
     */
    table(values = [], properties) {
        if (this.options.hide) return
        console.log(`------${this.createTimeStamp()}------`)
        if (!Array.isArray(values)) {
            values = [values]
        }
        console.table([...values], properties)
        return this
    }

    /**
     * Logs a timeStamp.
     * @returns FLogs
     */
    timeStamp() {
        this.log()
        return this
    }
    /**
     * Logs a label.
     * 
     * @param {string} name 
     * @param {string | object} color 
     * @returns FLogs
     */
    label(name, color) {
        this.raw(this.createLabel(name, color))
        return this
    }

    /**
     * Log a newLine with out a timestamp.
     * 
     * HH:mm:ss [INFO] Message
     *  
     *             NewLine
     *             messages
     * @param {string} message Message
     * @returns FLogs
     */
    newLine(message, spacing){
        var outSpacing = ''
        if (this.options.hide) return
        if (!message) message = ' '
        if (!spacing) outSpacing = ' '.repeat(this.options.timeStruct.length + 1)
        if (spacing > 0) outSpacing = ' '.repeat(spacing)
        if (spacing === 0) outSpacing = ''
        

        const lines = splitNewLine(message)
        for (const line of lines) console.log(`${outSpacing}${line}`)
        return this
    }

    /**
     * Create a timestamp.
     * @returns TimeStamp as string
     */
    createTimeStamp(){
        return dayjs().format(this.options.timeStruct)
    }
    /**
     * Create a label.
     * @param {string} name Label name
     * @param {string | object} [color] Label color 
     * @returns Label as string
     */
    createLabel(name, color){
        if (!name) name = ''
        if (!color) color = '#cccccc'
        var label = `${name}`
        if (this.options.boxedLabels == true) label = `[${name}]`
        if (typeof color === 'object') return chalk.rgb(color.r, color.g, color.b)(label)
        if (color.startsWith("#")) return chalk.hex(color)(label)
        if (colorNameToHex(color) == false) return chalk.hex('#cccccc')(label)
        return chalk.hex(colorNameToHex(color))(label)
    }

}

module.exports = FLogs
