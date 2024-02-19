/**
 * @license bigonion
 *
 * kit.js
 *
 * LICENSE MIT
 */

const kit = {
  /**
   * @description fast move Sth by holding on "controlEle" to move "movedEle"
   * @param {Object} controlEle
   * @param {Object} movedEle
   * @public
   */
  moveIt: function (controlEle: HTMLElement, movedEle: HTMLElement) {
    //var demo = document.getElementById(`${settings}`)
    movedEle.style.position = "absolute"
    var canitmove = false
    var x = 0,
      y = 0
    controlEle.onmousedown = function (e) {
      e.preventDefault()
      x = e.pageX - movedEle.offsetLeft
      y = e.pageY - movedEle.offsetTop
      canitmove = true
      //  console.log(e.pageX)
    }
    controlEle.onmouseup = function (e) {
      e.preventDefault()
      x = e.pageX - movedEle.offsetLeft
      y = e.pageY - movedEle.offsetTop
      canitmove = false
      //     console.log(e.pageX)
    }
    window.onmouseup = function () {
      canitmove = false
    }
    window.onmousemove = function (e) {
      if (canitmove) {
        movedEle.style.left = e.pageX - x + "px"
        movedEle.style.top = e.pageY - y + "px"
      }
    }
  },
  /**
   * @description fast find Element by Id
   * @param {string} id
   * @return {Object}
   * @public
   */
  findId: function (id: string) {
    return document.getElementById(id)
  },
  /**
   *  @description fast find Element by className
   * @param {string} className
   * @return {Array}
   * @public
   */
  findClass: function (className: string) {
    return document.getElementsByClassName(className)
  },
  /**
   * @description fast set cookie by Native function
   * @param {string} cname
   * @param {Any} cvalue
   * @param {int} exdays {days}
   * @public
   */
  setCookie: function (
    cname: string,
    cvalue: string,
    exdays = 0,
    cpath = "/",
    cdomain = window.location.host
  ) {
    var d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    // @ts-ignore
    var expires = "expires=" + d.toGMTString()
    var path = "path=" + cpath
    var domain = "domain=" + cdomain
    document.cookie =
      cname + "=" + cvalue + "; " + expires + "; " + path + "; " + domain
  },
  /**
   * @description fast get cookie value
   * @param {string} cname
   * @return {string} cvalue
   * @public
   */
  getCookie: function (cname: string) {
    var name = cname + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim()
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ""
  },
  /**
   * @description fast log sth...
   * @param {string} a
   * @public
   */
  log: function (a: any) {
    console.log(a)
  },
  /**
   * @description fast pause some time, just like delay function
   * @param {int} time
   * @return {Promise}
   * @public
   */
  sleep: (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  },
  /**
   * @description fast set clipBoard Value
   * @param {string} text
   * @public
   */
  setClipBoard: function (text = "") {
    let inputTemp = document.createElement("input")
    inputTemp.style.position = "fixed"
    inputTemp.style.top = "0px"
    inputTemp.style.opacity = "0%"
    inputTemp.style.zIndex = "-999"
    document.body.appendChild(inputTemp)
    inputTemp.value = text
    inputTemp.focus()
    inputTemp.select()
    try {
      let result = document.execCommand("copy")
      document.body.removeChild(inputTemp)
      if (!result) {
        console.log("复制失败")
      } else {
        console.log("复制成功")
      }
    } catch (e) {
      document.body.removeChild(inputTemp)
      alert("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作")
    }
  },
  isFocus: function (element: HTMLElement) {
    if (element == document.activeElement) {
      return 1
    } else {
      return 0
    }
  },
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
  ajax: function (obj: {
    way: string
    async: boolean
    header: {}
    onload: (arg0: XMLHttpRequest) => void
    url: string | URL
    body: any
  }) {
    obj.way = obj.way ? obj.way : "GET"
    obj.async = obj.async ? obj.async : true
    obj.header = obj.header ? obj.header : { "content-type": "json" }
    obj.onload = obj.onload
      ? obj.onload
      : (e: any) => {
          console.log(e)
        }
    var httpRequest = new XMLHttpRequest()
    httpRequest.open(obj.way, obj.url, obj.async)
    for (let i = 0; i <= Object.keys(obj.header).length - 1; i++) {
      let headerKey = Object.keys(obj.header)[i]
     // @ts-ignore
      let headerValue = Object.values(obj.header)[i]
      // @ts-ignore
      httpRequest.setRequestHeader(headerKey, headerValue)
    }
    httpRequest.send(JSON.stringify(obj.body))
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        obj.onload(httpRequest)
      }
    }
  },
  getUUID: function () {
    //uuid 产生
    var s = []
    var hexDigits = "0123456789abcdef"
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4" // bits 12-15 of the time_hi_and_version field to 0010
    // @ts-ignore
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-"
    var uuid = s.join("")
    return uuid
  },
  sound2Word: function (language = "zh-CN", process = false) {
    // @ts-ignore
    var recognition = new webkitSpeechRecognition()
    recognition.lang = language
    // recognition.continuous = true
    recognition.interimResults = process
    recognition.onresult = function (event: {
      results: { transcript: any }[][]
    }) {
      console.log(event.results[0][0].transcript)
    }
    recognition.start()
    return recognition
  },
  /**
   * @description add some style
   * @param {string}
   */
  addStyle: function (cssText: string, cssType = "text/css") {
    var style = document.createElement("style")
    style.type = cssType
    style.className = "CSSAddedByKit"
    style.innerHTML = cssText
    document.getElementsByTagName("HEAD")[0].appendChild(style)
  },
  /**
   * @description remove all the added Cssstyle
   */
  removeAddedStyle: function () {
    for (let i of kit.findClass("CSSAddedByKit")) {
      i.remove()
    }
  },
  /**
   * @time
   */
  getMounth: function () {
    let date = new Date()
    return date.getMonth() + 1
  },
  getDay: function () {
    let date = new Date()
    return date.getDate()
  },
  getWeek: function () {
    let weeks = new Array("7", "1", "2", "3", "4", "5", "6")
    let date = new Date()
    // kit.log(weeks[date.getDay()])
    if (date.getDay() === 0) {
      return 7
    } else {
      return weeks[date.getDay()]
    }
  },
  getHours: function () {
    let date = new Date()
    return date.getHours()
  },
  getMinutes: function () {
    let date = new Date()
    return date.getMinutes()
  },
  getSeconds: function () {
    let date = new Date()
    return date.getSeconds()
  },
  getTime: function () {
    return (
      kit.getMounth().toString() +
      "月" +
      kit.getDay() +
      "日 " +
      "星期" +
      kit.getWeek() +
      " " +
      kit.getHours() +
      "时 " +
      kit.getMinutes() +
      "分 " +
      kit.getSeconds() +
      "秒"
    )
  },
  import: function (url: string) {
    let script = document.createElement("script")
    script.setAttribute("type", "text/javascript")
    script.src = url
    document.documentElement.appendChild(script)
    console.log("imported @" + url)
  },
  addScript: (scripts: string) => {
    let script = document.createElement("script")
    script.setAttribute("type", "text/javascript")
    script.innerHTML = scripts
    document.documentElement.appendChild(script)
    console.log("scripts added")
  },
  version: "v0.12.0",
}

export default kit
