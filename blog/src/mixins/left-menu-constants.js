import routerPathMap from "@/mixins/router-path-map";
//JavaScript基本知识
let javaScriptResource = [
    {
        title: 'JS基本知识篇',
        routerName: 'javascriptBase',
        routerPath: routerPathMap.javascriptBase,
        childMenu: [
            {
                title: '事件轮巡机制',
                routerName: 'eventOrderRule',
                routerPath: routerPathMap.eventOrderRule,
            }
        ],
    }
]
//CSS基本知识
let cssResource = [
    {
        title: 'CSS基本知识篇',
        routerName: '',
        routerPath: '',
        childMenu: [
            {
                title: '进度条样式',
                routerName: '',
                routerPath: '',
            }
        ],
    }
]
//TypeScript基本知识
let typeResource = []
//CSS基本知识
let vueResource = [
    {
        title: 'Vue基础知识篇',
        routerName: 'vueResourceBase',
        routerPath: routerPathMap.vueResourceBase,
        childMenu: [],
    }
]
//自定义开发样式
// let buildSelfComponent = [
//     {
//         title: '自定义开发组件',
//         routerPath: 'buildSelfComponent',
//         routerName: 'views/buildSelfComponent/index',
//         childMenu: [
//             {
//                 title: '富文本编辑器',
//                 routerPath: 'buildErplusInputComponent',
//                 routerName: 'views/buildSelfComponent/buildErplusInputComponent',
//             }
//         ],
//     }
// ]
const resourceArr = [...javaScriptResource, ...cssResource, ...typeResource, ...vueResource]
export default resourceArr