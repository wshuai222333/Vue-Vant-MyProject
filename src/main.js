import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from "./_store/store";
import Validtor from "./_validator/index";

import {
    NavBar,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Panel,
    Row,
    Col,
    Button,
    Card,
    NoticeBar,
    Field,
    Picker,
    Toast,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    Actionsheet,
    Popup,
    Icon
} from 'vant';

Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Panel).use(Row).use(Col).use(Button).use(Card).use(NoticeBar).use(Field).use(Picker).use(Toast).use(Cell).use(CellGroup).use(Swipe).use(SwipeItem).use(Actionsheet).use(Popup).use(Icon);

Vue.config.productionTip = false
    //http请求
    // Service.Interceptor.LoadAxios();

//表单验证
Validtor.LoadValidator();

var app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        App
    },
    template: '<App/>',
    render: h => h(App)
});