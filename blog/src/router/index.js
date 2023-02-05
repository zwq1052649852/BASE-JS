import VueRouter from "vue-router";
const Home = () => import('../App')
//JS
const JavaScriptBase = () => import('../views/JavaScriptBase/index')
const EventOrderRule = () => import('../views/JavaScriptBase/eventOrderRule')

//自定义编辑组件
const BuildSelfComponent = () => import('../views/buildSelfComponent/index')
const BuildErplusComponent = () => import('../views/buildSelfComponent/buildErplusInputComponent')
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/javaScriptBase',
                    name: 'JavaScriptBase',
                    component: JavaScriptBase,
                },
                {
                    path: '/eventOrderRule',
                    name: 'EventOrderRule',
                    component: EventOrderRule,
                },
                {
                    path: '/buildSelfComponent',
                    name: 'BuildSelfComponent',
                    component: BuildSelfComponent,
                },
                {
                    path: '/buildErplusComponent',
                    name: 'BuildErplusComponent',
                    component: BuildErplusComponent,
                },
            ]
        },
    ]
})
export default router