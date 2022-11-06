class Paragraph {
    /**
     * Create a new paragraph.
     * 
     * @param {Flogs} FLogs FLogs
     * @param {string} name Title
     */
    constructor(FLogs, options = {}) {
        if (FLogs instanceof Object != true) throw new Error('Paragraph requires a FLogs instance.')

        this.FLogs = FLogs
        this.options = options
        this.options.noTimeStamp = false
        this.options.noIndent = false
        this.labeled = false
        this.Title = ''
        this.Body = ''
        this.Footer = ''
    }

    /**
     * Add option(s) to options.
     *
     * @param {object | any} [options] Option(s)
     *
     * @returns Paragraph
     */
    addOptions(options) {
        this.options = { ...this.options, ...options }
        return this
    }  
    /**
     * Toggles if header is a label.
     * 
     * @param {string | object} color Color
     * @returns Paragraph
     */
    label(color){
        this.labeled = true
        this.labelColor = color
        return this
    }

    /**
     * Turns off timestamps.
     * 
     * @returns Paragraph
     */
    noTimeStamp(){ 
        this.options.noTimeStamp = true
        return this 
    }
    /**
     * Turns off timestamp indent.
     * 
     * @returns Paragraph
     */
    noIndent(){ 
        this.options.noIndent = true
        return this
    }

    /**
     * Title of the paragraph.
     * @param {string} title Title 
     * @returns Paragraph
     */
    title(title) {
        var title_out = ''
        if (title){
            title_out = title
            this.Title = title
        } 
        if (this.labeled == true){
            title_out = this.FLogs.createLabel(this.Title, this.labelColor)
            this.Title = `[${title}]`
        } 
        if (this.options.noTimeStamp == true) this.FLogs.raw(title_out)
        else this.FLogs.log(title_out)
        return this
    }
    /**
     * The body of the paragraph.
     * 
     * @param {string} paragraph Paragraph
     * @returns Paragraph
     */
    body(paragraph) {
        var spacing = this.FLogs.options.timeStruct.length + 1
        if (this.options.noTimeStamp == true) spacing = this.Title.length + 1
        if (this.options.noIndent == true) spacing = 0
        
        this.FLogs.newLine(paragraph, spacing)
        this.Body = paragraph
        return this
    }
    /**
     * Footer of the paragraph.
     * @param {string} footer Footer title
     * @returns Paragraph
     */
    footer(footer) {
        var footer_out = ''
        this.Footer = this.Title
        if (footer){
            footer_out = footer
            this.Footer = footer
        } else {
            footer_out = this.Title
            this.Footer = this.Title
        } 

        if (this.labeled == true && footer) {
            footer_out = this.FLogs.createLabel(this.Footer, this.labelColor)
            this.Footer = `[${footer}]`
        } 

        if (this.options.noTimeStamp == true) this.FLogs.raw(footer_out)
        else this.FLogs.log(footer_out)
        return this
    }

}

module.exports = Paragraph

