// //手写call、bind、apply
// function handleCallBindApply() {
//     Function.prototype.myCall = function (context) {
//         if (typeof this !== 'function') {
//             console.error('type error')
//         }
//         let args = [...arguments].slice(1),
//             result = null;
//
//         context = context || window
//
//         context.fn = this
//
//         result = context.fn(...args)
//
//         delete context.fn
//
//         return result
//     }
//     Function.prototype.myApply = function (context) {
//         if (typeof this !== 'function') {
//             console.error('type error')
//         }
//         let result = null
//         context = context || window
//         context.fn = this
//         result = arguments[1] ? context.fn(...arguments[1]) : context.fn()
//         delete context.fn
//         return result
//     }
//     Function.prototype.myBind = function (thisArgs, preSetArg) {
//         const fn = this
//         return function (args) {
//             return fn.call(thisArgs, ...preSetArg, ...args)
//         }
//     }
// }
//
// //手写深拷贝
// function clonedeep() {
//     let a = {
//         name: 'a',
//         fun1: function (text) {
//             console.log(text ? text : this.name)
//         }
//     }
//     function deepCopy(obj) {
//         if (!(obj instanceof Object)) {
//             return obj
//         }
//         let res = {}
//         for (let key in obj) {
//             if (obj[key] instanceof Object) {
//                 res[key] = deepCopy(obj[key])
//             } else {
//                 res[key] = obj[key]
//             }
//         }
//         return res
//     }
//     let b = a.fun1
//     b.myApply(a, ['12223'])
//     let c = {a: {a: 1}}
//     let d = deepCopy(c)
//     c.a.a = 2
//     console.log('d: ', JSON.stringify(d))
// }
//
// //手写双向绑定远离
// function modelBind() {
//     let a = {}
//     Object.defineProperty(a, 'hello', {
//         get: function () {
//             console.log('get')
//         },
//         set: function (val) {
//             console.log(`set ${val}`)
//         },
//     })
//     a.hello
//     a.hello = 'test'
// }
//
// handleCallBindApply()
// clonedeep()
// modelBind()