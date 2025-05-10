const isMock = false;
const env = {
  BILIBILI: "480575647",
  BGM: "890723",
};

function p(e) {
  return Object.entries(e).filter(([, a]) => !!a).map(([a, t]) => `${a}=${t}`).join("&")
}

function d(e) {
  return Object.fromEntries(Array.from(e.searchParams.entries()).filter(([, a]) => !!a))
}

function m(e) {
  let a = e.toString();
  if (a.length < 5) return a;
  if (a.length < 9) {
    let o = a.slice(0, -3), n = o.length, i = o[n - 1] === "0" ? "" : `.${o[n - 1]}`;
    return `${o.slice(0, n - 1)}${i}\u4E07`
  }
  let t = a.slice(0, -7), r = t.length, s = t[r - 1] === "0" ? "" : `.${t[r - 1]}`;
  return `${t.slice(0, r - 1)}${s}\u4EBF`
}

function c(e) {
  return Response.json(e, {status: e.code})
}

var v = {1: "anime", 2: "game", 3: "book"}, R = {1: "want", 2: "doing", 3: "done"};

function h(e, a) {
  let {subjectType: t = "1", collectionType: r = "0", pageNumber: s = 1, pageSize: o = 10} = e, n = a[v[t]];
  if (!n) return b(o);
  let i;
  if (r !== "0") {
    let l = n[R[r]];
    if (!l || !l.length) return b(o);
    i = l
  } else {
    let l = Object.values(n).flat();
    if (!l.length) return b(o);
    i = l
  }
  return c({
    code: 200,
    message: "ok",
    data: {
      list: i.slice((s - 1) * o, s * o),
      pageNumber: s,
      pageSize: o,
      total: i.length,
      totalPages: Math.ceil(i.length / o)
    }
  })
}

function b(e) {
  return c({code: 200, message: "ok", data: {list: [], pageNumber: 1, pageSize: e, total: 0, totalPages: 1}})
}

async function y(e, a) {
  let {collectionType: t = "0", uid: r, pageNumber: s = "1", pageSize: o = "10"} = e, n = r ?? a?.BILIBILI;
  if (!n) return c({code: 400, message: "uid is required", data: {}});
  let i = p({type: 1, follow_status: t, pn: s, ps: o, vmid: n}),
    l = await fetch(`https://api.bilibili.com/x/space/bangumi/follow/list?${i}`), u = await l.json();
  return l.ok ? c({code: 200, message: "ok", data: N(u.data)}) : c({code: 502, message: u.message, data: {}})
}

function N(e) {
  return {
    list: e?.list?.map(t => {
      let r = [{label: t?.new_ep?.index_show}, {
        label: "\u8BC4\u5206",
        value: t?.rating?.score
      }, {label: "\u64AD\u653E\u91CF", value: t?.stat?.view && m(t.stat.view)}, {
        label: "\u8FFD\u756A\u6570",
        value: t?.stat?.follow && m(t.stat.follow)
      }, {label: "\u6295\u5E01\u6570", value: t?.stat?.coin && m(t.stat.coin)}, {
        label: "\u5F39\u5E55\u6570",
        value: t?.stat?.danmaku && m(t.stat.danmaku)
      }];
      return {nameCN: t.title, summary: t.summary, cover: t.cover, url: t.url, labels: r.filter(s => s.label)}
    }) ?? [], pageNumber: e.pn, pageSize: e.ps, total: e.total, totalPages: Math.ceil(e.total / e.ps)
  }
}

var x = {1: "2", 2: "4", 3: "1"}, w = {0: null, 1: "1", 2: "3", 3: "2"};

async function S(e, a) {
  let {subjectType: t = "1", uid: r, collectionType: s = "0", pageNumber: o = 1, pageSize: n = 10} = e, i = r ?? a?.BGM;
  if (!i) return c({code: 400, message: "uid is required", data: {}});
  let l = p({subject_type: x[t], type: w[s], limit: n, offset: (Number(o) - 1) * Number(n)}),
    u = await fetch(`https://api.bgm.tv/v0/users/${i}/collections?${l}`, {headers: {"User-Agent": "yixiaojiu/bilibili-bangumi-component (https://github.com/yixiaojiu/bilibili-bangumi-component)"}}),
    f = await u.json();
  return u.ok ? c({code: 200, message: "ok", data: L(f, {pageNumber: Number(o), pageSize: Number(n)})}) : c({
    code: 502,
    message: f.description,
    data: {}
  })
}

function L(e, a) {
  return {
    list: e?.data?.map(r => {
      let s = r?.subject, o = [{label: s?.eps && `${s.eps}\u8BDD`}, {label: "\u8BC4\u5206", value: s?.score}, {
        label: "\u6392\u540D",
        value: s?.rank
      }, {label: "\u65F6\u95F4", value: s?.date}];
      return {
        name: s?.name,
        nameCN: s?.name_cn,
        summary: s?.short_summary,
        cover: s?.images?.large,
        url: s?.id ? `https://bgm.tv/subject/${s?.id}` : "https://bgm.tv/",
        labels: o.filter(n => "value" in n ? n.value : n.label)
      }
    }) ?? [], ...a, total: e.total, totalPages: Math.ceil(e.total / a.pageSize)
  }
}

function j(e) {
  let {pageNumber: a = 1, pageSize: t = 10} = e;
  return {...e, pageNumber: Number(a), pageSize: Number(t)}
}

function g(e) {
  return e.headers.set("Access-Control-Allow-Origin", "*"), e.headers.set("Access-Control-Max-Age", "86400"), e
}

var F = {
  async fetch(e, a) {
    let t = new URL(e.url), r = j(d(t)), s = {};
    try {
      s = customData
    } catch {
    }
    return t.pathname.endsWith("bilibili") ? g(await y(r, a)) : t.pathname.endsWith("bgm") ? g(await S(r, a)) : t.pathname.endsWith("custom") ? g(h(r, s)) : Response.json({
      code: 404,
      message: "not found",
      data: {}
    }, {status: 404})
  }
};
export {F as default};
