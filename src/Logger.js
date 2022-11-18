import dayjs from 'dayjs'
import chalk from 'chalk'
import colorNameToHex from './utils/colorNameToHex.js'
import splitNewLine from './utils/splitNewLine.js'

export default class Log {
    constructor(options = {}){
        
        this.options = {}
        this.Defaults()

        this.forced = []
        this.Forced()
        
        this.addOptions(options)
    }

    Defaults() {
        this.options.hide = false

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
        
        this.options.newLineColor = this.options.baseMessageColor
        return this
    }

    resetDefaults(){
        this.Defaults()
        return this
    }

    Forced(){
        this.forced.baseMessageColor = undefined
        this.forced.labelTextColor = undefined
        this.forced.prefixTextColor = undefined
        this.forced.timeStampTextColor = undefined
        this._resetLog()
        return this
    }

    resetForced(){
        this.Forced()
        return this
    }

    addOptions(options) {
        this.options = { ...this.options, ...options }
        return this
    }

    forceDefaults(forced) {
        this.options = { ...this.options, ...forced }
        this.forced = { ...this.forced, ...forced }
        return this
    }

    hide(){
        this.options.hide = true
        return this
    }
    
    unHide(){
        this.options.hide = false
        return this
    }

    log(message, label, color){
        if (this.options.hide == true) return this
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
          
            if (typeof line === 'object') console.log(preLine.join(' '), line)
            else console.log(`${preLine.join(' ')}${this._getChalkColor(line, this.options.baseMessageColor)}`)
            
        } 
          
        this._resetLog()

        return this
    }

    raw(message) {
        if (this.options.hide == true) return this
        if (!message) message = ' '
        console.log(message)
        return this
    }

    info(message) {
        this.log(message, 'INFO', 'white')
        return this
    }

    warn(message) {
        this.log(message, 'WARN', 'yellow')
        return this
    }

    error(message) {
        this.log(message, 'error', 'red')
        return this
    }

    white(){
        if (this.options.hide == true) return this
        console.log(' ')
        return this
    }

    debug(message){
        this.log(message, 'DEBUG', 'white')
        return this
    }

    here(){
        this.log('Here!')
        return this
    }

    newLine(message, spacing) {
        var outSpacing = ''
        //if (this.options.hide) return
        if (!message) message = ' '
        if (!spacing) outSpacing = ' '.repeat(this.options.timeStampStructure.length + 1)
        if (spacing > 0) outSpacing = ' '.repeat(spacing)
        if (spacing === 0) outSpacing = ''


        const lines = splitNewLine(message)
        for (const line of lines) console.log(`${outSpacing}${this._getChalkColor(line, this.options.newLineColor)}`)
        return this
    }

    newLineColor(color){
        this.options.newLineColor = color
        return this
    }

// Prefix
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

// TimeStamp
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

// Label
    label(text, color) {
        if (text) this.options.labelText = text
        if (color) this.labelColor(color)
        return this
    }

    noLabel() {
        this.options.labelText = undefined
        return this
    }

    labelColor(color) {
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

// Message
    message(message, color) {
        if (message) this.options.baseMessage = message
        if (color) this.messageColor(color)
        return this
    }

    messageColor(color) {
        this.options.baseMessageColor = color
        return this
    }

    noMessage() {
        this.options.baseMessage = ' '
        return this
    }

// Api private     
    _getChalkColor(string, color) {
        if (!string) return
        if (!color) return chalk.hex('#ccc')(string)
        if (color === undefined) return chalk.hex('#ccc')(string)
        if (typeof color === 'object') return chalk.rgb(color.r, color.g, color.b)(string)
        if (color.startsWith("#")) return chalk.hex(color)(string)
        if (colorNameToHex(color) != false) return chalk.hex(colorNameToHex(color))(string)
        return chalk.hex('#ccc')(string)
    }

    _resetLog() {
        this.options.baseMessage = ' '
        if (this.forced.baseMessageColor !== undefined) {
            this.options.baseMessageColor = this.forced.baseMessageColor
            this.options.newLineColor = this.forced.baseMessageColor
        } else {
            this.options.newLineColor = '#ccc'
            this.options.baseMessageColor = '#ccc'
        }

        this.options.labelText = undefined
        if (this.forced.labelTextColor !== undefined) this.options.labelTextColor = this.forced.labelTextColor
        else this.options.labelTextColor = '#ccc'

        this.options.prefixText = undefined
        if (this.forced.prefixTextColor !== undefined) this.options.prefixTextColor = this.forced.prefixTextColor
        else this.options.prefixTextColor = '#ccc'

        if (this.forced.timeStampTextColor !== undefined) this.options.timeStampTextColor = this.forced.timeStampTextColor
        else this.options.timeStampTextColor = '#ccc'

        return this
    }

}
