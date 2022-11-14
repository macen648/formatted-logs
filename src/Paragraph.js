const Log = require('./Log')

class Paragraph {
    /**
     * Create a new paragraph.
     * 
     * @param {string} name Title
     */
    constructor(options = {}) {
        this.options = {}
       
        this.setDefaults()

        this.setOptions(options)
        
        this.Log = new Log(this.options)
    }

    setDefaults() {
        this.options.timeStamp = true
        this.options.hide = false

        this.options.titleColor = '#ccc'
        this.options.boxedTitle = false

        this.options.indent = true
        this.options.bodyColor = '#ccc'

        this.options.footerColor = '#ccc'
        this.options.boxedFooter = false
    }

    resetValues() {
        this.Title = ' '
        this.options.titleColor = '#ccc'

        this.Body = ' '
        this.options.indent = true
        this.options.bodyColor = '#ccc'

        this.Footer = ' '
        this.options.footerColor = '#ccc'
        return this
    }

    /**
     * Add option(s) to options.
     *
     * @param {object | any} [options] Option(s)
     *
     * @returns Paragraph
     */
    setOptions(options) {
        this.options = { ...this.options, ...options }
        return this
    }  


    hide() {
        this.options.hide = true
        return this
    }
    
    unHide() {
        this.options.hide = false
        return this
    }


    /**
     * Turns off timestamps.
     * 
     * @returns Paragraph
     */
    noTimeStamp(){ 
        this.options.timeStamp = false
        this.Log.noTimeStamp()
        return this 
    }

    timeStamp(){
        this.options.timeStamp = true
        this.Log.timeStamp()
        return this
    }

    boxed(){
        this.boxedTitle()
        this.boxedFooter()
        return this
    }

    noBoxed() {
        this.noBoxedTitle()
        this.noBoxedFooter()
        return this
    }

    /**
     * Title of the paragraph.
     * @param {string} title Title 
     * @returns Paragraph
     */
    title(title, color, boxed) {
        if (this.options.hide == true) return this

        if (title) this.Log.label(title).noBoxedLabel()
         
        if (color) this.colorTitle(color)
        
        if (boxed == true) this.boxedTitle()

        if (this.options.boxedTitle == true) this.Log.boxedLabel()

        this.Log.labelColor(this.options.titleColor)
        this.Log.log()

        this.resetValues()
        return this
    }

    colorTitle(color){
        this.options.titleColor = color
        return this
    }

    boxedTitle() {
        this.options.boxedTitle = true
        return this
    }

    noBoxedTitle(){
        this.options.boxedTitle = false
        return this
    }

    /**
     * The body of the paragraph.
     * 
     * @param {string} paragraph Paragraph
     * @returns Paragraph
     */
    body(paragraph, color, indent){
        if (this.options.hide == true) return this

        if (color) this.options.bodyColor = color
        if (indent == false ) this.options.indent = false

        var spacing = this.Log.options.timeStampStructure.length + 1
        if (this.options.timeStamp == false) spacing = this.Title.length + 1
        if (this.options.indent == false) spacing = 0

        this.Log.newLineColor(this.options.bodyColor)
        if (paragraph) this.Log.newLine(paragraph, spacing)
      
        this.resetValues()
        return this
    }

    colorBody(color){
        this.options.bodyColor = color
        return this
    }

    indent() {
        this.options.indent = true
        return this
    }

    noIndent() {
        this.options.indent = false
        return this
    }


    /**
     * Footer of the paragraph.
     * @param {string} footer Footer title
     * @returns Paragraph
     */
    footer(footer, color, boxed) {
        if (this.options.hide == true) return this

        if (footer) this.Log.label(footer).noBoxedLabel()  
    
        if (color) this.footerColor(color)

        if (boxed == true) this.boxedFooter()

        if (this.options.boxedFooter == true) this.Log.boxedLabel()

        this.Log.labelColor(this.options.footerColor)
        this.Log.log()
        this.resetValues()
        return this
    }


    footerColor(color) {
        this.options.footerColor = color
        return this
    }

    boxedFooter() {
        this.options.boxedFooter = true
        return this
    }


    noBoxedFooter() {
        this.options.boxedFooter = false
        return this
    }



}

module.exports = Paragraph

