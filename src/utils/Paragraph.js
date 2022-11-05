class Paragraph {
    /**
     * Create a new paragraph.
     * 
     * @param {Flog} FLog FLog
     * @param {string} name Title
     */
    constructor(FLog, name) {
        if (FLog instanceof Object != true) throw new Error('Paragraph requires a FLog instance.')

        this.FLog = FLog
        this.options = {}
        this.options.noTimeStamp = false
        this._label = name
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
     * @param {string | object} color 
     * @returns Paragraph
     */
    label(color){
        this._label = this.FLog.createLabel(this._label, color)
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
     * Header of the paragraph.
     * 
     * @returns Paragraph
     */
    header() {
        if (this.options.noTimeStamp == true) this.FLog.raw(this._label)
        else this.FLog.log(this._label)
        return this
    }
    /**
     * The body of the paragraph.
     * 
     * @param {string} paragraph Paragraph
     * @returns Paragraph
     */
    body(paragraph) {
        if (this.options.noTimeStamp == true) this.FLog.raw(paragraph)
        else this.FLog.newLine(paragraph)
        return this
    }
    /**
     * Footer of the paragraph.
     * 
     * @returns Paragraph
     */
    footer() {
        if (this.options.noTimeStamp == true) this.FLog.raw(this._label)
        else this.FLog.log(this._label)
        return this
    }

}

module.exports = Paragraph

