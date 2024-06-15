import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import productLineSideBar from "./sidebars/productLineSideBar";
// @ts-ignore
export default {
    "/产品线/": productLineSideBar,
    "/学习路线/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
