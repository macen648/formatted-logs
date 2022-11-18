/// <reference types="node" />

export type Color = string | object

export type isHex = string | false

export default FLogs = new BaseLogger() 

export const FParagraph = new BaseParagraph()


/**
 * Escaped FLogs.log()
 * 
 * Log a message to the console with a timestamp, or with optionally a [label] and or prefix.
 * 
 *  HH:mm:ss message
 * 
 *  HH:mm:ss [label] message
 * 
 *  Prefix HH:mm:ss [label] message
 * 
 * ```
 * import { log } from './formatted-logs' 

 * log('message', 'Label', 'color') // console.log => HH:mm:ss [label] message
 * 
 * ```
 * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
 **/
export function log(message: string, label: string, color: Color): FLogs


/**
 * Escaped FLogs.here()
 * 
 * Log a here message to the console.  
 * 
 * ```
 * import { here } from './formatted-logs' 
 * // For ease of debugging
 * here() // console.log => Here!   
 * ```               
 * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
 */
export function here(): FLogs


/**
 * convert a html color name to the hex representation. 
 * 
 * ```
 * import { colorNameToHex } from './formatted-logs' 
 * 
 * console.log(colorNameToHex('firebrick')) // console.log => "#b22222"   
 * ```               
 * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
 */
export function colorNameToHex(color: string): isHex


/**
 * Split new-lines in a string into an array of lines.
 * 
 * ```
 * import { splitNewLine} from './formatted-logs' 
 * 
 * console.log(splitNewLine('line1\nlines2\nline3')) // console.log => ["line1", "line2", "line3"]   
 * ```               
 * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
 */
export function splitNewLine(message: string): string[]


/**
Custom Console logs.

@param config - Config for Logger.

@example
```
import FLogs from 'formatted-logs'

FLogs.log('message', 'Label', 'color') // => HH:mm:ss [label] message

import { BaseLogger } from 'formatted-logs'

const Logger = new BaseLogger()
Logger.log('message', 'Label', 'color') // => HH:mm:ss [label] message

```
See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
*/
export class BaseLogger {

    constructor(config?: object)

    /**
     * Set Default option(s) values.
     * ```
     * FLogs.Defaults() // => FLogs
     * 
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    Defaults(): Log 


    /**
     * Resets default option(s) values back to default.
     * 
     * ```
     * FLogs.resetDefaults() // => FLogs
     *
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */  
    resetDefaults(): Log 


    /**
     * Set default forced values. 
     * 
     * ```
     * FLogs.Forced() // => FLogs
     * 
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    Forced(): Log 


    /**
     * Resets forced values back to default.
     * 
     * ```
     * FLogs.resetForced() // => FLogs    
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    resetForced(): Log


    /**
    * Add option(s) to options.
    *
    * ```
    * FLogs.addOptions({hide: true}) // => FLogs
    * 
    * ```
    * 
    * See [Docs](https://github.com/macen648/formatted-logs#README) for options.
    */
    addOptions(options: object): Log


    /**
    * Add forced option(s) to forced values.
    *
    * ```
    * FLogs.forceDefaults({baseMessageColor: 'red'}) // => FLogs
    * 
    * ```
    * 
    * See [Docs](https://github.com/macen648/formatted-logs#README) for forced options.
    */    
    forceDefaults(forced: object): Log 


    /**
    * Set hide option to true.
    *
    * ```
    * FLogs.hide() // => FLogs
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    hide(): Log


    /**
    * Set hide option to false.
    *
    * ```
    * FLogs.unHide() // => FLogs
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    unHide(): Log


    /**
     * Log a message to the console with a timestamp, or with optionally a [label] and or prefix.
     * 
     *  HH:mm:ss message
     * 
     *  HH:mm:ss [label] message
     * 
     *  Prefix HH:mm:ss [label] message
     * 
     * ```
     * import FLogs, { BaseLogger, log } from './formatted-logs' 
     * // There are several ways to log a basic message.
     * 
     * // Base FLogs instance
     * FLogs.log('message', 'Label', 'color') // console.log => HH:mm:ss [label] message
     * 
     * // Custom Logger instance
     * const Logger = new BaseLogger()
     * Logger.log('message', 'Label', 'color') // console.log => HH:mm:ss [label] message
     * 
     * // Escaped log function
     * log('message', 'Label', 'color') // console.log => HH:mm:ss [label] message
     * 
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     **/
    log(message: string, label: string, color: Color): Log


    /**
     * Log a message to the console without a timestamp and or label.
     * 
     * ```
     * // Base FLogs instance
     * FLogs.raw('message') // console.log => message
     * 
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    raw(message: string): Log


    /**
     * Log a INFO labeled message to the console. 
     * 
     * HH:mm:ss [INFO] message
     * 
     *              ^^^^
     *              white
     * ```
     * // Base FLogs instance
     * FLogs.info('message') // console.log => HH:mm:ss [INFO] message
     * //                                                ^^^^
     * //                                                white
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    info(message: string): Log


    /**
     * Log a WARN labeled message to the console. 
     * 
     *  HH:mm:ss [WARN] message
     * 
     *               ^^^^
     *              yellow
     * ```
     * // Base FLogs instance
     * FLogs.warn('message') // console.log => HH:mm:ss [WARN] message
     * //                                                ^^^^             
     * //                                               yellow
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.

        */
    warn(message: string): Log


    /**
     * Log a non exiting ERROR message to the console. 
     * 
     *  HH:mm:ss [ERROR] message
     * 
     *              ^^^^^
     *               red
     * ```
     * // Base FLogs instance
     * FLogs.error('message') // console.log => HH:mm:ss [ERROR] message
     * //                                                 ^^^^^             
     * //                                                  red
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    error(message: string): Log


    /**
     * Logs a blank line.
     * ```
     * // Base FLogs instance
     * FLogs.white() // console.log =>                                  
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    white(): Log


    /**
     * Log a DEBUG labeled message to the console.  
     * 
     *  HH:mm:ss [DEBUG] message
     * 
     *              ^^^^^
     *              white
     * ```
     * // Base FLogs instance
     * FLogs.debug('message') // console.log => HH:mm:ss [DEBUG] message
     * //                                                 ^^^^^             
     * //                                                 white
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    debug(message: string): Log


    /**
     * Log a here message to the console.  
     * 
     * ```
     * import FLogs, { here } from './formatted-logs' 
     * // Base FLogs instance
     * FLogs.here() // console.log => Here!
     * 
     * // For ease of debugging, use the escaped here function 
     * here() // console.log => Here!   
     * ```               
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    here(): Log


    /**
     * Log a newLine with out a timestamp or label.  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.log('message', 'label') // console.log => HH:mm:ss [label] message
     *      .newLine('message')      //                                 message
     * 
     * FLogs.log('message', 'label') // console.log => HH:mm:ss [label] message
     *      .newLine('message', 0)   //                message
     * 
     * ```               
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */


    newLine(message: string, spacing: number): Log


    /**
     * Set newLineColor before calling newLine().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.log('message', 'label') // console.log => HH:mm:ss [label] message
     *      .newLineColor('red')                                      
     *      .newLine('message')      //                                 message
     *                               //                                  ^^^^^
     *                               //                                   red
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    newLineColor(color: Color): Log


    /**
     *@api private  
        */ 
    _getChalkColor(string: string, color: Color): string


    /**
     * Set message content and? message color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.message('message', 'red')
     *      .log('message') // console.log => HH:mm:ss message
     *                      //                           ^^^
     *                      //                           red        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    message(message: string, color: Color): Log


    /**
     * Set message color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.messageColor('red')
     *      .log('message') // console.log => HH:mm:ss message
     *                      //                           ^^^
     *                      //                           red     
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */

    messageColor(color: Color): Log


    /**
     * Set message content to be empty before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.noMessage().log() // console.log => HH:mm:ss    
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    noMessage(): Log


    /**
     * Set message label and? label color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.label('label', 'red')
     *      .log('message') // console.log => HH:mm:ss [label] message
     *                      //                           ^^^
     *                      //                           red        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    label(text: string, color: Color): Log


    /**
     * Remove message label before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.noLabel()
     *      .log('message') // console.log => HH:mm:ss message        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    noLabel(): Log


    /**
     * Set message label color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.labelColor('red')
     *      .label('label') 
     *      .log('message') // console.log => HH:mm:ss [label] message
     *                      //                           ^^^
     *                      //                           red        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    labelColor(color: Color): Log


    /**
    * Set boxedLabel option to true.
    *
    * ```
    * FLogs.boxedLabel() 
    *      .log('message') console.log => HH:mm:ss [] message
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    boxedLabel(): Log


    /**
    * Set boxedLabel option to false.
    *
    * ```
    * FLogs.noBoxedLabel() 
    *      .label('label')
    *      .log('message')// console.log => HH:mm:ss label message
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noBoxedLabel(): Log


    /**
     *@api private  
    */ 
    _createLabel(): string


    /**
     * Add prefix and? prefix color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.prefix('prefix', 'red')
     *      .log('message') // console.log => prefix HH:mm:ss message
     *                      //                  ^^^
     *                      //                  red        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    prefix(text: string, color: Color): Log


    /**
     * Remove prefix before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.noPrefix()
     *      .log('message') // console.log => HH:mm:ss message       
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    noPrefix(): Log

    /**
     * Set prefix color before calling log().  
     * 
     * ```
     * // Base FLogs instance
     * FLogs.prefixColor('red')
     *      .prefix('prefix') 
     *      .log('message') // console.log => prefix HH:mm:ss message
     *                      //                 ^^^
     *                      //                 red        
     * ``` 
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    prefixColor(color: Color): Log


    /**
     *@api private  
    */ 
    _createPrefix(): string


    /**
    * Add timeStamp and? timeStampColor before calling log().
    *
    * ```
    * FLogs.timeStamp('red') 
    *      .log('message') // console.log => HH:mm:ss message
    *                      //                 ^^^^^
    *                      //                  red    
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStamp(color: Color): Log


    /**
    * Remove timeStamps before calling log().
    *
    * ```
    * FLogs.noTimeStamp() 
    *      .log('message') // console.log => message   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noTimeStamp(): Log


    /**
    * Box timeStamp before calling log().
    *
    * ```
    * FLogs.boxedTimeStamp() 
    *      .log('message') // console.log => [HH:mm:ss] message   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    boxedTimeStamp(): Log


    /**
    * Un-box timeStamps before calling log().
    *
    * ```
    * FLogs.noBoxedTimeStamp() 
    *      .log('message') // console.log => HH:mm:ss message   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noBoxedTimeStamp(): Log


    /**
    * Change Change time-stamp structure.
    *
    * ```
    * FLogs.timeStampStruct('mm:ss') 
    *      .log('message') // console.log => mm:ss message   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStampStruct(struct: string): Log


    /**
    * Add timeStampColor before calling log().
    *
    * ```
    * FLogs.timeStampColor('red') 
    *      .log('message') // console.log => HH:mm:ss message
    *                      //                 ^^^^^
    *                      //                  red    
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStampColor(color: Color): Log

    /**
     *@api private  
    */ 
    _createTimeStamp(): Log

    /**
     *@api private  
    */ 
    _resetLog(): Log

}

/**
Formatted paragraph.

@param config - Config for Logger.

@example
```
import FParagraph from 'formatted-logs'

FParagraph.title('title')
          .body(`this is a body paragraph\nthis is another body paragraph`)

Console.log
// HH:mm:ss title
//          this is a body paragraph 
//          this is another body paragraph

```
See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
*/
export class BaseParagraph {

    constructor(options?: object) 

    /**
     * Set Default option(s) values.
     * ```
     * FParagraph.Defaults() // => FParagraph
     * 
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    setDefaults(): FParagraph


    /**
     * Resets default option(s) values back to default.
     * 
     * ```
     * FParagraph.resetDefaults() // => FParagraph
     *
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    resetValues(): FParagraph


    /**
    * Add option(s) to options.
    *
    * ```
    * FParagraph.addOptions({hide: true}) // => FParagraph
    * 
    * ```
    * 
    * See [Docs](https://github.com/macen648/formatted-logs#README) for options.
    */   
    addOptions(options: object): FParagraph


    /**
    * Set hide option to true.
    *
    * ```
    * FParagraph.hide() // => FParagraph
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    hide(): FParagraph


    /**
    * Set hide option to false.
    *
    * ```
    * FParagraph.unHide() // => FParagraph
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */    
    unHide(): FParagraph


    /**
    * Add timeStamp and? timeStampColor before calling Paragraph log functions.
    *
    * ```
    * FParagraph.timeStamp('red') 
    *           .title('title') // console.log => HH:mm:ss [title]
    *                             //                 ^^^^^
    *                             //                  red    
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStamp(): FParagraph


    /**
    * Remove timeStamp and? timeStampColor before calling Paragraph log functions.
    *
    * ```
    * FParagraph.noTimeStamp() 
    *           .title('title') // console.log => [title] 
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noTimeStamp(): FParagraph


    /**
     * Box timeStamps before calling Paragraph log functions.
     *
     * ```
     * FParagraph.boxedTimeStamp() 
     *           .title('title') // console.log => [HH:mm:ss] title   
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    boxedTimeStamp(): Log


    /**
    * Un-box timeStamps before calling Paragraph log functions.
    *
    * ```
    * FParagraph.noBoxedTimeStamp() 
    *           .title('title') // console.log => HH:mm:ss title   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noBoxedTimeStamp(): Log


    /**
    * Change time-stamp structure.
    *
    * ```
    * FParagraph.timeStampStruct('mm:ss') 
    *           .title('title') // console.log => mm:ss title   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStampStruct(struct: string): Log


    /**
    * Add timeStampColor before calling Paragraph log functions.
    *
    * ```
    * FParagraph.timeStampColor('red') 
    *           .title('title') // console.log => HH:mm:ss title
    *                             //               ^^^^^
    *                             //                red    
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    timeStampColor(color: Color): Log


    /**
     * Box both header and footer before calling Paragraph log functions.
     *
     * ```
     * FParagraph.boxed() 
     *           .title('title')   // console.log => HH:mm:ss [title]
     *           .footer('footer') //                HH:mm:ss [footer]    
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    boxed(): FParagraph


    /**
    * Un-box both header and footer before calling Paragraph log functions.
    *
    * ```
    * FParagraph.noBoxed() 
    *           .title('title')   // console.log => HH:mm:ss title
    *           .footer('footer') //                HH:mm:ss footer   
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noBoxed(): FParagraph


    /**
     * Title of the paragraph.
     * 
     * ```
     * FParagraph.title('title', 'red') // console.log => HH:mm:ss [title]          
     *                                  //                          ^^^^^
     *                                  //                           red   
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    title(title: string, color: Color, boxed: boolean): FParagraph


    /**
     * Color the title of the paragraph before calling.
     * 
     * ```
     * FParagraph.colorTitle('red')
     *           .title('title') // console.log => HH:mm:ss [title]          
     *                           //                          ^^^^^
     *                           //                           red   
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    colorTitle(color: Color): FParagraph


    /**
     * Box the title of the paragraph before calling.
     * 
     * ```
     * FParagraph.boxedTitle()
     *           .title('title') // console.log => HH:mm:ss [title]           
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    boxedTitle(): FParagraph


    /**
     * Un-box the title of the paragraph before calling.
     * 
     * ``` 
     * FParagraph.noBoxedTitle()
     *           .title('title') // console.log => HH:mm:ss title           
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    noBoxedTitle(): FParagraph


    /**
     * Body of the paragraph.
     * 
     * ```
     * FParagraph.title('title') // console.log => HH:mm:ss [title]          
     *           .body('body', 'red') //                    body
     *                                //                     ^^
     *                                //                     red                         
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    body(paragraph: string, color: Color, indent: boolean): FParagraph


    /**
     * Color the body of the paragraph before calling.
     * 
     * ```
     * FParagraph.title('title')   // console.log => HH:mm:ss [title]
     *           .colorBody('red') //                         body
     *           .body('body')     //                          ^^
     *                             //                          red                       
     * ```
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    colorBody(color: Color): FParagraph


    /**
    * Indent the body of the paragraph before calling.
    * 
    * ```
    * FParagraph.title('title') // console.log => HH:mm:ss [title]
    *           .indent()       //                         body
    *           .body('body')   
    *                                                 
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    indent(): FParagraph


    /**
    * Un-indent the body of the paragraph before calling.
    * 
    * ```
    * FParagraph.title('title') // console.log => HH:mm:ss [title]
    *           .noIndent()     //                body
    *           .body('body')   
    *                                                  
    * ```
    * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
    */
    noIndent(): FParagraph


    /**
     * Footer of the paragraph.
     * 
     * ```
     * FParagraph.title('title') // console.log => HH:mm:ss [title]          
     *           .footer('footer', 'red') //       HH:mm:ss [footer]  
     *                                    //                  ^^^^      
     *                                    //                   red              
     * ```                  
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    footer(footer: string, color: Color, boxed: boolean): FParagraph


    /**
     * Color the footer of the paragraph before calling.
     * 
     * ```
     * FParagraph.title('title')    // console.log => HH:mm:ss [title]
     *           .footerColor('red')//                HH:mm:ss [footer]          
     *           .footer('footer')  //                           ^^^^ 
     *                              //                            red                 
     * ```                  
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    footerColor(color: Color): FParagraph


    /**
     * Box the footer of the paragraph before calling.
     * 
     * ```
     * FParagraph.title('title')   // console.log => HH:mm:ss [title]
     *           .boxedFooter()    //                HH:mm:ss [footer]   
     *           .footer('footer')                            
     * ```                  
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    boxedFooter(): FParagraph


    /**
     * Un-box the footer of the paragraph before calling.
     * 
     * ```
     * FParagraph.title('title')  // console.log => HH:mm:ss [title]
     *           .noBoxedFooter() //                HH:mm:ss footer   
     *           .footer('footer')                            
     * ```                  
     * See [Docs](https://github.com/macen648/formatted-logs#README) for more information.
     */
    noBoxedFooter(): FParagraph

}