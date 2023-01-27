///////////函//////数//////库///////////
/*
 *元素移动
 *parameter: controlEle,movedEle
 */

function moveIt(controlEle, movedEle) {
    //var demo = document.getElementById(`${settings}`)
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
            movedEle.style.left = e.pageX - x + 'px'
            movedEle.style.top = e.pageY - y + 'px'
        }
    }
}
/*
 *寻找元素
 *parameter: id:string
 */
function findId(id) {
    return document.getElementById(id)
}
function findClass(className) {
    return document.getElementsByClassName(className)
}
/*
*获取、设置cookie
*parameter: cname，cvalue，exdays
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires=" + d.toGMTString()
    document.cookie = cname + "=" + cvalue + "; " + expires
}
function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ""
}
/*
* log函数
*/
function log(a) {
    console.log(a)
}
/*
* sleep函数
*/
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}
const version="v0.6.4"
export default {
    moveIt,
    findId,
    findClass,
    setCookie,
    getCookie,
    log,
    sleep,
    version
}
export {
    moveIt,
    findId,
    findClass,
    setCookie,
    getCookie,
    log,
    sleep,
    version
}

    ///////////函//////数//////库///////////