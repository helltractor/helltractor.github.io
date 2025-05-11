import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang.C3_yHAra.js";import"./chunks/@vueuse/motion.BsBBmBGk.js";import{d as h,a as _,u as f}from"./chunks/vue-router.ChBfvDAv.js";import{X as g,b_ as a,be as e,_ as n,a5 as s,bB as w,b3 as k,b5 as x}from"./framework.BXq2oTmp.js";import"./app.D6GkSuKK.js";import"./chunks/dayjs.C6BNYsUE.js";import"./chunks/vue-i18n.lfRrKsMF.js";import"./chunks/pinia.C_YCGfgp.js";import"./chunks/nprogress.DdFZ7jLs.js";import"./YunComment.vue_vue_type_style_index_0_lang.yKBkfHmz.js";import"./index.dXt3ZyM3.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DDanGzXB.js";import"./post.bnmDaBJL.js";const v=h("/posts/calculation/set-win",async r=>JSON.parse('{"title":"Wannier90.win 文件设置","description":"","frontmatter":{"title":"Wannier90.win 文件设置","date":"2024-06-21","categories":"Calculation","tags":["Wannier90"]},"headers":[],"relativePath":"pages/posts/calculation/set-win.md","lastUpdated":null}'),{lazy:(r,i)=>r.name===i.name}),L={__name:"set-win",setup(r,{expose:i}){var c;const{data:t}=v(),b=f(),m=_(),p=Object.assign(m.meta.frontmatter||{},((c=t.value)==null?void 0:c.frontmatter)||{});return b.currentRoute.value.data=t.value,x("valaxy:frontmatter",p),globalThis.$frontmatter=p,i({frontmatter:{title:"Wannier90.win 文件设置",date:"2024-06-21",categories:"Calculation",tags:["Wannier90"]}}),(l,u)=>{const o=d;return k(),g(o,{frontmatter:w(p)},{"main-content-md":a(()=>u[0]||(u[0]=[n("h2",{id:"example",tabindex:"-1"},[s("Example "),n("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),n("div",{style:{"max-height":"300px"},class:"language-txt vp-adaptive-theme line-numbers-mode"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"txt"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"num_bands =           # 设置能带数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"exclude_bands =       # 设置排除的能带数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_wann =            # 设置用于计算的Wannier函数数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_win_min =         # 设置解耦合过程的能量窗口的最小值")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_win_max =         # 设置解耦合过程的能量窗口的最大值")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_froz_min =        # 设置冻结窗口的最小值")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_froz_max =        # 设置冻结窗口的最大值")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_iter = 200        # 设置计算的迭代次数")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_print_cycles = 20 # 设置打印输出的周期")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 通过fatband分析判断主要产生贡献的轨道")]),s(`
`),n("span",{class:"line"},[n("span",null,"# projection")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin projections")]),s(`
`),n("span",{class:"line"},[n("span",null,"Co: d  # Co的d轨道作为Wannier函数的初始猜测")]),s(`
`),n("span",{class:"line"},[n("span",null,"Sn: p  # Sn的p轨道作为Wannier函数的初始猜测")]),s(`
`),n("span",{class:"line"},[n("span",null,"end projections")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 设置是否绘制费米弧和费米面，生成wannier90_hr.dot")]),s(`
`),n("span",{class:"line"},[n("span",null,"#restart = plot")]),s(`
`),n("span",{class:"line"},[n("span",null,"#fermi_energy =")]),s(`
`),n("span",{class:"line"},[n("span",null,"#fermi_surface_plot = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"#write_hr = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"mp_grid = 4 4 4                     # 设置k点网格")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# band structure plot")]),s(`
`),n("span",{class:"line"},[n("span",null,"bands_plot = true       # 设置是否绘制能带结构图")]),s(`
`),n("span",{class:"line"},[n("span",null,"# kpoint_path")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin kpoint_path       # 定义能带结构计算的k点路径")]),s(`
`),n("span",{class:"line"},[n("span",null,"G 0.0 0.0 0.0 M 0.5 0.0 0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"M 0.5 0.0 0.0 K 0.3333333333 0.3333333333 0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"K 0.3333333333 0.3333333333 0.0 G 0.0 0.0 0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"G 0.0 0.0 0.0 A 0.0 0.0 0.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"A 0.0 0.0 0.5 L 0.5 0.0 0.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"L 0.5 0.0 0.5 H 0.3333333333 0.3333333333 0.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"H 0.3333333333 0.3333333333 0.5 A 0.0 0.0 0.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"L 0.5 0.0 0.5 M 0.5 0.0 0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"H 0.3333333333 0.3333333333 0.5 K 0.3333333333 0.3333333333 0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"end kpoint_path")])])]),n("button",{class:"collapse"}),n("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br")])],-1),n("h2",{id:"num-bands",tabindex:"-1"},[s("num_bands "),n("a",{class:"header-anchor",href:"#num-bands","aria-label":'Permalink to "num_bands"'},"​")],-1),n("p",null,[n("s",null,"解纠缠需要 num_bands > num_wann，即额外预留一部分能带。预留 4 条导带或 2 条价带+2 条导带均可，也可预留更多能带。")],-1),n("p",null,"根据第一性计算中的能带数进行设置。",-1),n("h2",{id:"num-wann",tabindex:"-1"},[s("num_wann "),n("a",{class:"header-anchor",href:"#num-wann","aria-label":'Permalink to "num_wann"'},"​")],-1),n("p",null,"根据 projection 中选择的轨道进行计算，s 贡献 1 条轨道，p 贡献 3 条轨道，d 贡献 5 条轨道。",-1),n("p",null,"根据原子数，轨道数，自旋状态进行计算。",-1),n("h2",{id:"dis-win-min-dis-win-max-dis-froz-min-dis-froz-max",tabindex:"-1"},[s("dis_win_min | dis_win_max | dis_froz_min | dis_froz_max "),n("a",{class:"header-anchor",href:"#dis-win-min-dis-win-max-dis-froz-min-dis-froz-max","aria-label":'Permalink to "dis_win_min | dis_win_max | dis_froz_min | dis_froz_max"'},"​")],-1),n("h2",{id:"projections",tabindex:"-1"},[s("projections "),n("a",{class:"header-anchor",href:"#projections","aria-label":'Permalink to "projections"'},"​")],-1),n("p",null,"选择投影轨道之前，做一次能带成分分析，也就是画 Fatband 图和 PDOS 图。确认费米面附件的轨道成分，把这些轨道作为投影轨道。",-1),n("h2",{id:"kpoint-path",tabindex:"-1"},[s("kpoint_path "),n("a",{class:"header-anchor",href:"#kpoint-path","aria-label":'Permalink to "kpoint_path"'},"​")],-1),n("p",null,"从 KPOINTS(KPATH.in) 文件中复制路径。",-1),n("h2",{id:"template",tabindex:"-1"},[s("Template "),n("a",{class:"header-anchor",href:"#template","aria-label":'Permalink to "Template"'},"​")],-1),n("div",{style:{"max-height":"300px"},class:"language-txt vp-adaptive-theme line-numbers-mode"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"txt"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"dis_win_min =")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_win_max =")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_froz_min =")]),s(`
`),n("span",{class:"line"},[n("span",null,"dis_froz_max =")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_wann =")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_bands =")]),s(`
`),n("span",{class:"line"},[n("span",null,"exclude_bands =")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_iter = 200")]),s(`
`),n("span",{class:"line"},[n("span",null,"num_print_cycles = 20")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin projections")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ···")]),s(`
`),n("span",{class:"line"},[n("span",null,"end projections")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin unit_cell_cart")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"end unit_cell_cart")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin atoms_cart")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"end atoms_cart")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"bands_plot = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"#restart = plot")]),s(`
`),n("span",{class:"line"},[n("span",null,"#fermi_energy =")]),s(`
`),n("span",{class:"line"},[n("span",null,"#fermi_surface_plot = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"#write_hr = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"mp_grid = .. .. ..")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"begin kpoints")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ... ... ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"end kpoints")])])]),n("button",{class:"collapse"}),n("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br")])],-1),n("h2",{id:"reference",tabindex:"-1"},[s("Reference "),n("a",{class:"header-anchor",href:"#reference","aria-label":'Permalink to "Reference"'},"​")],-1),n("ul",null,[n("li",null,[n("a",{href:"https://www.jianshu.com/p/ed0c5fd0d14f",target:"_blank",rel:"noreferrer"},"构造 Wannier90 函数的要点")]),n("li",null,[n("a",{href:"https://blog.sciencenet.cn/blog-2909108-1154273.html",target:"_blank",rel:"noreferrer"},"Wannier90 输入文件中 num_wann, num_bands, 和 energy window 等参数设置规则")]),n("li",null,[n("a",{href:"https://zhuanlan.zhihu.com/p/355317202",target:"_blank",rel:"noreferrer"},"一文搞定 VASP+wannier90 构造紧束缚模型")]),n("li",null,[n("em",null,[n("a",{href:"https://zhuanlan.zhihu.com/p/541333688",target:"_blank",rel:"noreferrer"},"wannier90 拟合能带能量窗口调节")])]),n("li",null,[n("a",{href:"https://zhuanlan.zhihu.com/p/625527428",target:"_blank",rel:"noreferrer"},"wannier90 学习指南")])],-1)])),"main-header":a(()=>[e(l.$slots,"main-header")]),"main-header-after":a(()=>[e(l.$slots,"main-header-after")]),"main-nav":a(()=>[e(l.$slots,"main-nav")]),"main-content-before":a(()=>[e(l.$slots,"main-content-before")]),"main-content":a(()=>[e(l.$slots,"main-content")]),"main-content-after":a(()=>[e(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(l.$slots,"main-nav-after")]),comment:a(()=>[e(l.$slots,"comment")]),footer:a(()=>[e(l.$slots,"footer")]),aside:a(()=>[e(l.$slots,"aside")]),"aside-custom":a(()=>[e(l.$slots,"aside-custom")]),default:a(()=>[e(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{L as default,v as usePageData};
