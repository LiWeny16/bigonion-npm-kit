let kit = {
    moveIt: function moveIt(controlEle, movedEle) {
        //var demo = document.getElementById(`${settings}`)
        var canitmove = false
        var x = 0
            , y = 0
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
    },
    findId: function findId(id) {
        return document.getElementById(id)
    },
    findClass: function findClass(className) {
        return document.getElementsByClassName(className)
    },
    setCookie: function setCookie(cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = "expires=" + d.toGMTString()
        document.cookie = cname + "=" + cvalue + "; " + expires
    },
    getCookie: function getCookie(cname) {
        var name = cname + "="
        var ca = document.cookie.split(';')
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim()
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length)
        }
        return ""
    },
    log: function log(a) {
        console.log(a)
    },
    sleep: (time) => {
        return new Promise(resolve => setTimeout(resolve, time))
    },
    version:"v0.4.3"

};
(function (root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        console.log('???commonjs???????????????nodejs??????')
        console.log('?????????????????????devKit')
        module.exports = kit
    } else if (typeof define === 'function' && define.amd) {
        console.log('???AMD??????????????????require.js')
        define(factory)
    } else if (typeof define === 'function' && define.cmd) {
        console.log('???CMD??????????????????sea.js')
        define(function (require, exports, module) {
            module.exports = factory()
        })
    } 
    else {
        console.log('??????????????????,??????????????????????????????')
        root.kit = kit
        root.moveIt = kit.moveIt
        root.findId = kit.findId
        root.findClass = kit.findClass
        root.setCookie = kit.setCookie
        root.getCookie = kit.getCookie
        root.log = kit.log
        root.sleep = kit.sleep
        root.version=kit.version
        console.log('?????????????????????devKit')
    }
}(this, function () {
    return {
        kit: kit
    }
}));
