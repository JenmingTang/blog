import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    
    theme: defaultTheme({
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        // sidebar: [
        //     // SidebarItem
        //     {
        //         text: '所有页面会使用相同的侧边栏',
        //         link: '/侧边栏数组/',
        //         children: [
        //             // SidebarItem
        //             {
        //                 text: 'github',
        //                 link: 'https://github.com',
        //                 children: [],
        //             },
        //             // 字符串 - 页面文件路径
        //             '/foo/bar.md',
        //         ],
        //     },
        //     // 字符串 - 页面文件路径
        //     '/bar/README.md',
        // ],
        // 可折叠的侧边栏
        // sidebar: {
        //     '/vue-press/': [
        //         {
        //             text: 'VuePress Reference',
        //             collapsible: false,
        //             children: ['/reference/cli.md', '/reference/config.md'],
        //         },
        //         {
        //             text: 'Bundlers Reference',
        //             collapsible: false,
        //             children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        //         },
        //     ],
        // },






        /* 
        按照 `organization/repository` 的格式，将跳转
        https://github.com/vuejs/vuepress
        */
        repo: 'vuejs/vuepress',
        repoLabel: "Jenming",
        // Public 文件路径
        // logo: '/images/hero.png',
        logo: 'https://vuejs.org/images/logo.png',
        // 默认主题配置
        navbar: [
            // NavbarItem
            // {
            //     text: 'NavbarItem',
            //     link: '',
            // },
            // // NavbarGroup
            // {
            //     text: 'implemented',
            //     children: ['/jackson', '/vue-press'],
            // },
            // // 字符串 - 页面文件路径
            // '字符串 - 页面文件路径 /bar/README.md',


            // 嵌套 Group - 最大深度为 2
            // {
            //     text: 'Implemented',
            //     children: [
            //         {
            //             text: 'SubGroup',
            //             children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            //         },
            //     ],
            // },
            // 控制元素何时被激活
            {
                text: 'Implemented',
                children: [
                    
                    {
                        text: 'SubGroup',
                        children: [
                            {
                                text: 'Jackson',
                                link: '/jackson/',
                                // 该元素将一直处于激活状态
                                // activeMatch: '/'
                                
                                // 该元素在当前路由路径是 /foo/ 开头时激活
                                // 支持正则表达式
                                activeMatch: '^/jackson/',
                            },
                            {
                                text: 'VuePress',
                                link: '/vue-press/',
                                activeMatch: '^/vue-press/',
                            },
                        ],
                    },
                    
                    // {
                    //     text: 'Active on /foo/',
                    //     link: '/not-foo/',
                    //     // 该元素在当前路由路径是 /foo/ 开头时激活
                    //     // 支持正则表达式
                    //     activeMatch: '^/foo/',
                    // },
                ],
            },
        ],
    }),




    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US',
            title: 'en-US title',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'zh-CN title',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    lang: "lang",
    title: "title",
    description: "description",
    /* 
    标签页左边的小图标
    */
    head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],
    /* 
    你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"
    */
    base: "/blog/",
    host: "0.0.0.0",
    port: 8080
})
