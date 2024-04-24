import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Icon from '@anzhu-ui/components/icon';
import VirtualScrollList from '@anzhu-ui/components/virtual-scroll-list';
import '@anzhu-ui/theme-chalk/src/index.scss';

const plugins = [Icon, VirtualScrollList];

const app = createApp(App);

// 注册插件
plugins.forEach(plugin => {
  app.use(plugin);
});

app.mount('#app');
