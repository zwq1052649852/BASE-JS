//javascript
const javascriptRouterPathMap = {
    javascriptBase: 'views/JavaScriptBase/index',
    eventOrderRule: 'views/JavaScriptBase/eventOrderRule',
}
//css
const cssRouterPathMap = {

}
//typescript
const typescriptRouterPathMap = {

}
//vue
const vueRouterPathMap = {
    vueResourceBase: 'views/VueResourceBase/index'
}

const routerPathMap = {
    ...javascriptRouterPathMap,
    ...cssRouterPathMap,
    ...typescriptRouterPathMap,
    ...vueRouterPathMap,
}
export default routerPathMap