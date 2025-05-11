const isMock = false;
const env = {
  BILIBILI: "480575647",
  BGM: "890723",
};
function p(t) {
  return Object.entries(t).filter(([, a]) => !!a).map(([a, e]) => `${a}=${e}`).join("&")
}

function f(t) {
  return Object.fromEntries(Array.from(t.searchParams.entries()).filter(([, a]) => !!a))
}

function m(t) {
  let a = t.toString();
  if (a.length < 5) return a;
  if (a.length < 9) {
    let r = a.slice(0, -3), n = r.length, i = r[n - 1] === "0" ? "" : `.${r[n - 1]}`;
    return `${r.slice(0, n - 1)}${i}\u4E07`
  }
  let e = a.slice(0, -7), o = e.length, s = e[o - 1] === "0" ? "" : `.${e[o - 1]}`;
  return `${e.slice(0, o - 1)}${s}\u4EBF`
}

function c(t) {
  return Response.json(t, {status: t.code})
}

var v = {1: "anime", 2: "game", 3: "book"}, j = {1: "want", 2: "doing", 3: "done"};

function d(t, a) {
  let {subjectType: e = "1", collectionType: o = "0", pageNumber: s = 1, pageSize: r = 10} = t, n = a[v[e]];
  if (!n) return b(r);
  let i;
  if (o !== "0") {
    let l = n[j[o]];
    if (!l || !l.length) return b(r);
    i = l
  } else {
    let l = Object.values(n).flat();
    if (!l.length) return b(r);
    i = l
  }
  return c({
    code: 200,
    message: "ok",
    data: {
      list: i.slice((s - 1) * r, s * r),
      pageNumber: s,
      pageSize: r,
      total: i.length,
      totalPages: Math.ceil(i.length / r)
    }
  })
}

function b(t) {
  return c({code: 200, message: "ok", data: {list: [], pageNumber: 1, pageSize: t, total: 0, totalPages: 1}})
}

async function h(t, a) {
  let {collectionType: e = "0", uid: o, pageNumber: s = "1", pageSize: r = "10"} = t, n = o ?? a?.BILIBILI;
  if (!n) return c({code: 400, message: "uid is required", data: {}});
  let i = p({type: 1, follow_status: e, pn: s, ps: r, vmid: n}),
    l = await fetch(`https://api.bilibili.com/x/space/bangumi/follow/list?${i}`), u = await l.json();
  return l.ok ? c({code: 200, message: "ok", data: R(u.data)}) : c({code: 502, message: u.message, data: {}})
}

function R(t) {
  return {
    list: t?.list?.map(e => {
      let o = [{label: e?.new_ep?.index_show}, {
        label: "\u8BC4\u5206",
        value: e?.rating?.score
      }, {label: "\u64AD\u653E\u91CF", value: e?.stat?.view && m(e.stat.view)}, {
        label: "\u8FFD\u756A\u6570",
        value: e?.stat?.follow && m(e.stat.follow)
      }, {label: "\u6295\u5E01\u6570", value: e?.stat?.coin && m(e.stat.coin)}, {
        label: "\u5F39\u5E55\u6570",
        value: e?.stat?.danmaku && m(e.stat.danmaku)
      }];
      return {nameCN: e.title, summary: e.summary, cover: e.cover, url: e.url, labels: o.filter(s => s.label)}
    }) ?? [], pageNumber: t.pn, pageSize: t.ps, total: t.total, totalPages: Math.ceil(t.total / t.ps)
  }
}

var N = {1: "2", 2: "4", 3: "1"}, x = {0: null, 1: "1", 2: "3", 3: "2"};

async function y(t, a) {
  let {subjectType: e = "1", uid: o, collectionType: s = "0", pageNumber: r = 1, pageSize: n = 10} = t, i = o ?? a?.BGM;
  if (!i) return c({code: 400, message: "uid is required", data: {}});
  let l = p({subject_type: N[e], type: x[s], limit: n, offset: (Number(r) - 1) * Number(n)}),
    u = await fetch(`https://api.bgm.tv/v0/users/${i}/collections?${l}`, {headers: {"User-Agent": "yixiaojiu/bilibili-bangumi-component (https://github.com/yixiaojiu/bilibili-bangumi-component)"}}),
    g = await u.json();
  return u.ok ? c({code: 200, message: "ok", data: w(g, {pageNumber: Number(r), pageSize: Number(n)})}) : c({
    code: 502,
    message: g.description,
    data: {}
  })
}

function w(t, a) {
  return {
    list: t?.data?.map(o => {
      let s = o?.subject, r = [{label: s?.eps && `${s.eps}\u8BDD`}, {label: "\u8BC4\u5206", value: s?.score}, {
        label: "\u6392\u540D",
        value: s?.rank
      }, {label: "\u65F6\u95F4", value: s?.date}];
      return {
        name: s?.name,
        nameCN: s?.name_cn,
        summary: s?.short_summary,
        cover: s?.images?.large,
        url: s?.id ? `https://bgm.tv/subject/${s?.id}` : "https://bgm.tv/",
        labels: r.filter(n => "value" in n ? n.value : n.label)
      }
    }) ?? [], ...a, total: t.total, totalPages: Math.ceil(t.total / a.pageSize)
  }
}

function S(t) {
  let {pageNumber: a = 1, pageSize: e = 10} = t;
  return {...t, pageNumber: Number(a), pageSize: Number(e)}
}

async function F(t) {
  let a = new URL(t.url), e = S(f(a)), o = {};
  try {
    o = env
  } catch {
  }
  let s = {};
  try {
    s = customData
  } catch {
  }
  return a.pathname.endsWith("bilibili") ? await h(e, o) : a.pathname.endsWith("bgm") ? await y(e, o) : a.pathname.endsWith("custom") ? d(e, s) : Response.json({
    code: 404,
    message: "not found",
    data: {}
  }, {status: 404})
}

export {F as default};
