/**
 * @license bigonion
 *
 * kit.js
 *
 * LICENSE MIT
 */
declare const kit: {
    /**
     * @description fast move Sth by holding on "controlEle" to move "movedEle"
     * @param {Object} controlEle
     * @param {Object} movedEle
     * @public
     */
    moveIt: (controlEle: HTMLElement, movedEle: HTMLElement) => void;
    /**
     * @description fast find Element by Id
     * @param {string} id
     * @return {Object}
     * @public
     */
    findId: (id: string) => HTMLElement | null;
    /**
     *  @description fast find Element by className
     * @param {string} className
     * @return {Array}
     * @public
     */
    findClass: (className: string) => HTMLCollectionOf<Element>;
    /**
     * @description fast set cookie by Native function
     * @param {string} cname
     * @param {Any} cvalue
     * @param {int} exdays {days}
     * @public
     */
    setCookie: (cname: string, cvalue: string, exdays?: number, cpath?: string, cdomain?: string) => void;
    /**
     * @description fast get cookie value
     * @param {string} cname
     * @return {string} cvalue
     * @public
     */
    getCookie: (cname: string) => string;
    /**
     * @description fast log sth...
     * @param {string} a
     * @public
     */
    log: (a: any) => void;
    /**
     * @description fast pause some time, just like delay function
     * @param {int} time
     * @return {Promise}
     * @public
     */
    sleep: (time: number) => Promise<unknown>;
    /**
     * @description fast set clipBoard Value
     * @param {string} text
     * @public
     */
    setClipBoard: (text?: string) => void;
    isFocus: (element: HTMLElement) => 0 | 1;
    /**
     * @description fast send request with ajax
     * @param {string} url
     * @param {string} way
     * @param {boolean} async
     * @param {JSON} header
     * @param {function} onload
     * @return {Object}
     * @public
     */
    ajax: (obj: {
        way: string;
        async: boolean;
        header: {};
        onload: (arg0: XMLHttpRequest) => void;
        url: string | URL;
        body: any;
    }) => void;
    getUUID: () => string;
    sound2Word: (language?: string, process?: boolean) => any;
    /**
     * @description add some style
     * @param {string}
     */
    addStyle: (cssText: string, cssType?: string) => void;
    /**
     * @description remove all the added Cssstyle
     */
    removeAddedStyle: () => void;
    /**
     * @time
     */
    getMounth: () => number;
    getDay: () => number;
    getWeek: () => string | 7;
    getHours: () => number;
    getMinutes: () => number;
    getSeconds: () => number;
    getTime: () => string;
    import: (url: string) => void;
    addScript: (scripts: string) => void;
    version: string;
};
export default kit;
