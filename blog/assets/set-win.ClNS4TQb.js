import{G as e,Gt as t,K as n,Sn as r,Ut as i,Xt as a,Zn as o,et as s,ir as c}from"./framework.D_fnJFb-.js";import{t as l}from"./theme.C__ive25.js";import{i as u}from"./chunks/vue-i18n.BAhi4_nF.js";import{c as d,l as f}from"./chunks/vue-router.fP-imltF.js";u();var p={__name:`set-win`,setup(u,{expose:p}){let m=o(JSON.parse(`{"title":"Wannier90.win File Configuration","description":"","frontmatter":{"title":"Wannier90.win File Configuration","title_zh":"Wannier90.win 文件设置","date":"2024-06-21","categories":"Calculation","tags":["Wannier90"]},"headers":[{"level":2,"title":"基础参数解释","slug":"基础参数解释","link":"#基础参数解释","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"num_bands","slug":"num-bands","link":"#num-bands","children":[]},{"level":3,"title":"num_wann","slug":"num-wann","link":"#num-wann","children":[]},{"level":3,"title":"dis_win_min | dis_win_max | dis_froz_min | dis_froz_max","slug":"dis-win-min-dis-win-max-dis-froz-min-dis-froz-max","link":"#dis-win-min-dis-win-max-dis-froz-min-dis-froz-max","children":[]},{"level":3,"title":"projections","slug":"projections","link":"#projections","children":[]},{"level":3,"title":"kpoint_path","slug":"kpoint-path","link":"#kpoint-path","children":[]}]},{"level":2,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"relativePath":"pages/posts/calculation/set-win.md","lastUpdated":1792675883000}`)),h=f(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`Wannier90.win File Configuration`,title_zh:`Wannier90.win 文件设置`,date:`2024-06-21`,categories:`Calculation`,tags:[`Wannier90`]}}),(t,o)=>{let u=l;return i(),n(u,{frontmatter:c(_)},{"main-content-md":r(()=>[...o[0]||=[e(`h2`,{id:`基础参数解释`,tabindex:`-1`},[s(`基础参数解释 `),e(`a`,{class:`header-anchor`,href:`#基础参数解释`,"aria-label":`Permalink to "基础参数解释"`},`​`)],-1),e(`h3`,{id:`示例`,tabindex:`-1`},[s(`示例 `),e(`a`,{class:`header-anchor`,href:`#示例`,"aria-label":`Permalink to "示例"`},`​`)],-1),e(`div`,{class:`language-txt max-h-300px line-numbers-mode`},[e(`button`,{title:`Copy code`,class:`copy`}),e(`span`,{class:`lang`},`txt`),e(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[e(`code`,{"v-pre":``},[e(`span`,{class:`line`},[e(`span`,null,`num_bands =           # 设置能带数量`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`exclude_bands =       # 设置排除的能带数量`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_wann =            # 设置用于计算的Wannier函数数量`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_win_min =         # 设置解耦合过程的能量窗口的最小值`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_win_max =         # 设置解耦合过程的能量窗口的最大值`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_froz_min =        # 设置冻结窗口的最小值`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_froz_max =        # 设置冻结窗口的最大值`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_iter = 200        # 设置计算的迭代次数`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_print_cycles = 20 # 设置打印输出的周期`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`# 通过fatband分析判断主要产生贡献的轨道`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`# projection`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin projections`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`Co: d  # Co的d轨道作为Wannier函数的初始猜测`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`Sn: p  # Sn的p轨道作为Wannier函数的初始猜测`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end projections`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`# 设置是否绘制费米弧和费米面，生成wannier90_hr.dot`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#restart = plot`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#fermi_energy =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#fermi_surface_plot = true`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#write_hr = true`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`mp_grid = 4 4 4                     # 设置k点网格`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`# band structure plot`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`bands_plot = true       # 设置是否绘制能带结构图`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`# kpoint_path`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin kpoint_path       # 定义能带结构计算的k点路径`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`G 0.0 0.0 0.0 M 0.5 0.0 0.0`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`M 0.5 0.0 0.0 K 0.3333333333 0.3333333333 0.0`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`K 0.3333333333 0.3333333333 0.0 G 0.0 0.0 0.0`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`G 0.0 0.0 0.0 A 0.0 0.0 0.5`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`A 0.0 0.0 0.5 L 0.5 0.0 0.5`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`L 0.5 0.0 0.5 H 0.3333333333 0.3333333333 0.5`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`H 0.3333333333 0.3333333333 0.5 A 0.0 0.0 0.5`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`L 0.5 0.0 0.5 M 0.5 0.0 0.0`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`H 0.3333333333 0.3333333333 0.5 K 0.3333333333 0.3333333333 0.0`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end kpoint_path`)])])]),e(`button`,{class:`code-block-unfold-btn`}),e(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[e(`span`,{class:`line-number`},`1`),e(`br`),e(`span`,{class:`line-number`},`2`),e(`br`),e(`span`,{class:`line-number`},`3`),e(`br`),e(`span`,{class:`line-number`},`4`),e(`br`),e(`span`,{class:`line-number`},`5`),e(`br`),e(`span`,{class:`line-number`},`6`),e(`br`),e(`span`,{class:`line-number`},`7`),e(`br`),e(`span`,{class:`line-number`},`8`),e(`br`),e(`span`,{class:`line-number`},`9`),e(`br`),e(`span`,{class:`line-number`},`10`),e(`br`),e(`span`,{class:`line-number`},`11`),e(`br`),e(`span`,{class:`line-number`},`12`),e(`br`),e(`span`,{class:`line-number`},`13`),e(`br`),e(`span`,{class:`line-number`},`14`),e(`br`),e(`span`,{class:`line-number`},`15`),e(`br`),e(`span`,{class:`line-number`},`16`),e(`br`),e(`span`,{class:`line-number`},`17`),e(`br`),e(`span`,{class:`line-number`},`18`),e(`br`),e(`span`,{class:`line-number`},`19`),e(`br`),e(`span`,{class:`line-number`},`20`),e(`br`),e(`span`,{class:`line-number`},`21`),e(`br`),e(`span`,{class:`line-number`},`22`),e(`br`),e(`span`,{class:`line-number`},`23`),e(`br`),e(`span`,{class:`line-number`},`24`),e(`br`),e(`span`,{class:`line-number`},`25`),e(`br`),e(`span`,{class:`line-number`},`26`),e(`br`),e(`span`,{class:`line-number`},`27`),e(`br`),e(`span`,{class:`line-number`},`28`),e(`br`),e(`span`,{class:`line-number`},`29`),e(`br`),e(`span`,{class:`line-number`},`30`),e(`br`),e(`span`,{class:`line-number`},`31`),e(`br`),e(`span`,{class:`line-number`},`32`),e(`br`),e(`span`,{class:`line-number`},`33`),e(`br`),e(`span`,{class:`line-number`},`34`),e(`br`),e(`span`,{class:`line-number`},`35`),e(`br`),e(`span`,{class:`line-number`},`36`),e(`br`),e(`span`,{class:`line-number`},`37`),e(`br`),e(`span`,{class:`line-number`},`38`),e(`br`)])],-1),e(`h3`,{id:`num-bands`,tabindex:`-1`},[s(`num_bands `),e(`a`,{class:`header-anchor`,href:`#num-bands`,"aria-label":`Permalink to "num_bands"`},`​`)],-1),e(`p`,null,[e(`s`,null,`解纠缠需要 num_bands > num_wann，即额外预留一部分能带。预留 4 条导带或 2 条价带+2 条导带均可，也可预留更多能带。`)],-1),e(`p`,null,`根据第一性计算中的能带数进行设置。`,-1),e(`h3`,{id:`num-wann`,tabindex:`-1`},[s(`num_wann `),e(`a`,{class:`header-anchor`,href:`#num-wann`,"aria-label":`Permalink to "num_wann"`},`​`)],-1),e(`p`,null,`根据 projection 中选择的轨道进行计算，s 贡献 1 条轨道，p 贡献 3 条轨道，d 贡献 5 条轨道。`,-1),e(`p`,null,`根据原子数，轨道数，自旋状态进行计算。`,-1),e(`h3`,{id:`dis-win-min-dis-win-max-dis-froz-min-dis-froz-max`,tabindex:`-1`},[s(`dis_win_min | dis_win_max | dis_froz_min | dis_froz_max `),e(`a`,{class:`header-anchor`,href:`#dis-win-min-dis-win-max-dis-froz-min-dis-froz-max`,"aria-label":`Permalink to "dis_win_min | dis_win_max | dis_froz_min | dis_froz_max"`},`​`)],-1),e(`h3`,{id:`projections`,tabindex:`-1`},[s(`projections `),e(`a`,{class:`header-anchor`,href:`#projections`,"aria-label":`Permalink to "projections"`},`​`)],-1),e(`p`,null,`选择投影轨道之前，做一次能带成分分析，也就是画 Fatband 图和 PDOS 图。确认费米面附件的轨道成分，把这些轨道作为投影轨道。`,-1),e(`h3`,{id:`kpoint-path`,tabindex:`-1`},[s(`kpoint_path `),e(`a`,{class:`header-anchor`,href:`#kpoint-path`,"aria-label":`Permalink to "kpoint_path"`},`​`)],-1),e(`p`,null,`从 KPOINTS(KPATH.in) 文件中复制路径。`,-1),e(`h2`,{id:`模板`,tabindex:`-1`},[s(`模板 `),e(`a`,{class:`header-anchor`,href:`#模板`,"aria-label":`Permalink to "模板"`},`​`)],-1),e(`div`,{class:`language-txt max-h-300px line-numbers-mode`},[e(`button`,{title:`Copy code`,class:`copy`}),e(`span`,{class:`lang`},`txt`),e(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[e(`code`,{"v-pre":``},[e(`span`,{class:`line`},[e(`span`,null,`dis_win_min =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_win_max =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_froz_min =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`dis_froz_max =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_wann =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_bands =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`exclude_bands =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_iter = 200`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`num_print_cycles = 20`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin projections`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`  ···`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end projections`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin unit_cell_cart`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`  ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`  ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`  ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end unit_cell_cart`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin atoms_cart`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end atoms_cart`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`bands_plot = true`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#restart = plot`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#fermi_energy =`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#fermi_surface_plot = true`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`#write_hr = true`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`mp_grid = .. .. ..`)]),s(`
`),e(`span`,{class:`line`},[e(`span`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`begin kpoints`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`   ... ... ...`)]),s(`
`),e(`span`,{class:`line`},[e(`span`,null,`end kpoints`)])])]),e(`button`,{class:`code-block-unfold-btn`}),e(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[e(`span`,{class:`line-number`},`1`),e(`br`),e(`span`,{class:`line-number`},`2`),e(`br`),e(`span`,{class:`line-number`},`3`),e(`br`),e(`span`,{class:`line-number`},`4`),e(`br`),e(`span`,{class:`line-number`},`5`),e(`br`),e(`span`,{class:`line-number`},`6`),e(`br`),e(`span`,{class:`line-number`},`7`),e(`br`),e(`span`,{class:`line-number`},`8`),e(`br`),e(`span`,{class:`line-number`},`9`),e(`br`),e(`span`,{class:`line-number`},`10`),e(`br`),e(`span`,{class:`line-number`},`11`),e(`br`),e(`span`,{class:`line-number`},`12`),e(`br`),e(`span`,{class:`line-number`},`13`),e(`br`),e(`span`,{class:`line-number`},`14`),e(`br`),e(`span`,{class:`line-number`},`15`),e(`br`),e(`span`,{class:`line-number`},`16`),e(`br`),e(`span`,{class:`line-number`},`17`),e(`br`),e(`span`,{class:`line-number`},`18`),e(`br`),e(`span`,{class:`line-number`},`19`),e(`br`),e(`span`,{class:`line-number`},`20`),e(`br`),e(`span`,{class:`line-number`},`21`),e(`br`),e(`span`,{class:`line-number`},`22`),e(`br`),e(`span`,{class:`line-number`},`23`),e(`br`),e(`span`,{class:`line-number`},`24`),e(`br`),e(`span`,{class:`line-number`},`25`),e(`br`),e(`span`,{class:`line-number`},`26`),e(`br`),e(`span`,{class:`line-number`},`27`),e(`br`),e(`span`,{class:`line-number`},`28`),e(`br`),e(`span`,{class:`line-number`},`29`),e(`br`),e(`span`,{class:`line-number`},`30`),e(`br`),e(`span`,{class:`line-number`},`31`),e(`br`),e(`span`,{class:`line-number`},`32`),e(`br`),e(`span`,{class:`line-number`},`33`),e(`br`),e(`span`,{class:`line-number`},`34`),e(`br`),e(`span`,{class:`line-number`},`35`),e(`br`),e(`span`,{class:`line-number`},`36`),e(`br`),e(`span`,{class:`line-number`},`37`),e(`br`),e(`span`,{class:`line-number`},`38`),e(`br`),e(`span`,{class:`line-number`},`39`),e(`br`),e(`span`,{class:`line-number`},`40`),e(`br`)])],-1),e(`h2`,{id:`reference`,tabindex:`-1`},[s(`Reference `),e(`a`,{class:`header-anchor`,href:`#reference`,"aria-label":`Permalink to "Reference"`},`​`)],-1),e(`ul`,null,[e(`li`,null,[e(`a`,{href:`https://www.jianshu.com/p/ed0c5fd0d14f`,target:`_blank`,rel:`noreferrer`},`构造 Wannier90 函数的要点`)]),e(`li`,null,[e(`a`,{href:`https://blog.sciencenet.cn/blog-2909108-1154273.html`,target:`_blank`,rel:`noreferrer`},`Wannier90 输入文件中 num_wann, num_bands, 和 energy window 等参数设置规则`)]),e(`li`,null,[e(`a`,{href:`https://zhuanlan.zhihu.com/p/355317202`,target:`_blank`,rel:`noreferrer`},`一文搞定 VASP+wannier90 构造紧束缚模型`)]),e(`li`,null,[e(`em`,null,[e(`a`,{href:`https://zhuanlan.zhihu.com/p/541333688`,target:`_blank`,rel:`noreferrer`},`wannier90 拟合能带能量窗口调节`)])]),e(`li`,null,[e(`a`,{href:`https://zhuanlan.zhihu.com/p/625527428`,target:`_blank`,rel:`noreferrer`},`wannier90 学习指南`)])],-1)]]),main:r(()=>[a(t.$slots,`main`)]),"main-header":r(()=>[a(t.$slots,`main-header`)]),"main-header-after":r(()=>[a(t.$slots,`main-header-after`)]),"main-nav":r(()=>[a(t.$slots,`main-nav`)]),"main-content-before":r(()=>[a(t.$slots,`main-content-before`)]),"main-content":r(()=>[a(t.$slots,`main-content`)]),"main-content-after":r(()=>[a(t.$slots,`main-content-after`)]),"main-nav-before":r(()=>[a(t.$slots,`main-nav-before`)]),"main-nav-after":r(()=>[a(t.$slots,`main-nav-after`)]),comment:r(()=>[a(t.$slots,`comment`)]),footer:r(()=>[a(t.$slots,`footer`)]),aside:r(()=>[a(t.$slots,`aside`)]),"aside-custom":r(()=>[a(t.$slots,`aside-custom`)]),default:r(()=>[a(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{p as default};