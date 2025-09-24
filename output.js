//Wed Sep 24 2025 12:09:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('新东东农场助力');
var nNdWkSZ = Object['defineProperty'],
  GNFKCq,
  olLK2d,
  I8HCyB,
  KsFeWj,
  dOOT6zW,
  DYrYml,
  slHoag,
  AIIul8_;
function I33pWA() {
  return globalThis;
}
function I8xWPkt() {
  return global;
}
function AEJW2F9() {
  return window;
}
function RJF1i4q() {
  return new Function("return this")();
}
function nkKh09B(nNdWkSZ = [I33pWA, I8xWPkt, AEJW2F9, RJF1i4q], BPgQwHB, ftffNIM = [], ekXRzK = 0x0, GNFKCq) {
  BPgQwHB = BPgQwHB;
  try {
    BPgQwHB = Object
    ftffNIM["push"](''.__proto__["constructor"]["name"])
  } catch (e) {}
  XXO_bQ: for (ekXRzK = ekXRzK; ekXRzK < nNdWkSZ["length"]; ekXRzK++) try {
    BPgQwHB = nNdWkSZ[ekXRzK]();
    for (GNFKCq = 0x0; GNFKCq < ftffNIM["length"]; GNFKCq++) if (typeof BPgQwHB[ftffNIM[GNFKCq]] === '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64') {
      continue XXO_bQ;
    }
    return BPgQwHB;
  } catch (e) {}
  return BPgQwHB || this;
}
GNFKCq = nkKh09B() || {}
olLK2d = GNFKCq.TextDecoder
I8HCyB = GNFKCq["Uint8Array"]
KsFeWj = GNFKCq.Buffer
dOOT6zW = GNFKCq.String || String
DYrYml = GNFKCq["Array"] || Array
function cSbL6od(...nNdWkSZ) {
  return nNdWkSZ[nNdWkSZ["length"] - 1];
}
function kjuYQJ(NcGd6M, nNdWkSZ) {
  switch (AIIul8_) {
    case 28:
      return !NcGd6M;
    case -0x30:
      return NcGd6M + nNdWkSZ;
    case 0x21:
      return NcGd6M - nNdWkSZ;
    case -0x4:
      return -NcGd6M;
    case 0x8:
      return typeof NcGd6M;
    case 72:
      return NcGd6M * nNdWkSZ;
    case -0x2:
      return NcGd6M / nNdWkSZ;
  }
}
function ZbRGDrG(NcGd6M) {
  return cSbL6od(NcGd6M = AIIul8_ + (AIIul8_ = NcGd6M, 0x0), NcGd6M);
}
AIIul8_ = AIIul8_;
const AKwQ2Er = require('./jdCookie'),
  Ck6gN6 = require('./utils/Rebels_sendJDNotify'),
  jMdy7M = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: CVbQDu
  } = require('./utils/Rebels_H'),
  jhWpZ5P = require('fs'),
  CcTJPsk = require('crypto-js'),
  SdV0xHu = require('querystring'),
  L_KB7HL = process["env"]["JD_XinFarm_mode"] === "true",
  lXn__e = (process["env"]["JD_XinFarm_notify"] || process["env"]["JD_XinFarm_Notify"]) === "true",
  qfqZ6lP = (process["env"]["JD_XinFarm_code"] || '')["split"](/[,@\n]+/g)["map"](NcGd6M => NcGd6M["trim"]())["filter"](Boolean),
  imnVQ4 = "./XinFarm_ShareCache.json";
let sZeram = [],
  cHgNfB0 = false;
if (jhWpZ5P["existsSync"](imnVQ4)) {
  try {
    const nNdWkSZ = jhWpZ5P["readFileSync"](imnVQ4, "utf-8");
    if (nNdWkSZ["trim"]() === '') {
      console["log"]("缓存文件为空，初始化为空数组");
    } else {
      var fbSEK7 = ["检测到本地缓存文件 XinFarm_ShareCache.json，加载成功"];
      if (cSbL6od(sZeram = JSON["parse"](nNdWkSZ), kjuYQJ(Array["isArray"](sZeram), ZbRGDrG(28)))) {
        sZeram = [];
      }
      console["log"](fbSEK7[0]);
    }
  } catch (error) {
    console["error"]("解析缓存文件时出错:", error)
    sZeram = []
  }
}
let QifG71F = [],
  _aHRCdI = new Map(),
  rmaufxy = '',
  S0TM3qR = Object["keys"](AKwQ2Er)["map"](NcGd6M => AKwQ2Er[NcGd6M])["filter"](NcGd6M => NcGd6M);
if (kjuYQJ(S0TM3qR[0x0], AIIul8_ = 0x1c)) {
  var BGGNmPH = "exit";
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process[BGGNmPH](0x1)
}
kjuYQJ((async () => {
  for (let KsFeWj = cSbL6od(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`活动入口: [APP-我的-东东农场]`), console["log"](`指定助力: [${qfqZ6lP["length"] > 0 ? `已填写${qfqZ6lP["length"]}个指定助力码` : "未填写指定助力变量"}]`), console["log"](`助力模式: [${L_KB7HL ? "随机打乱" : "顺序执行"}]`), console["log"](`代理开关: [${jMdy7M["getProxyStatus"]()}]`), console["log"](`通知推送: [${lXn__e ? '开启' : '关闭'}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), Ck6gN6["config"]({
    ["title"]: $["name"]
  }), console["log"](`【开始】收集[${S0TM3qR["length"]}]个账号的助力码：\n`), $["needRemoveCookieIndex"] = [], 0x0); KsFeWj < S0TM3qR["length"]; KsFeWj++) {
    if (cSbL6od($["index"] = kjuYQJ(KsFeWj, 0x1, ZbRGDrG(-48)), rmaufxy = S0TM3qR[KsFeWj], jMdy7M["setCookie"](rmaufxy), $["UserName"] = decodeURIComponent(jMdy7M["getCookieValue"](rmaufxy, "pt_pin")), $.UA = jMdy7M["genUA"]($["UserName"]), $["message"] = Ck6gN6["create"]($["index"], $["UserName"]), $["nickName"] = '', $["retryTimes"] = 0, $["title"] = `【账号${$["index"]}】${$["UserName"]}：`, await OxkMHr(), jMdy7M["unsetCookie"](), $["runEnd"])) {
      break;
    }
  }
  if (cHgNfB0) {
    let BTP8S2 = JSON["stringify"](sZeram, null, 0x2);
    jhWpZ5P["writeFile"](imnVQ4, BTP8S2, nNdWkSZ => {
      if (nNdWkSZ) {
        console["log"](nNdWkSZ)
        console["log"]("\n【缓存文件 XinFarm_ShareCache.json 更新失败!】\n")
      } else {
        console["log"]("\n【缓存文件 XinFarm_ShareCache.json 更新成功!】\n")
      }
    });
  }
  if ($["needRemoveCookieIndex"]["length"] > 0 && true) {
    console["log"](`\n【检测】删除火爆或者无效账号序号: [${$["needRemoveCookieIndex"]["join"](', ')}]`)
    S0TM3qR = S0TM3qR["filter"]((ftffNIM, GNFKCq) => kjuYQJ($["needRemoveCookieIndex"]["includes"](kjuYQJ(GNFKCq, 1, ZbRGDrG(-0x30))), ZbRGDrG(28)))
    $["needRemoveCookieIndex"] = []
  }
  if (cSbL6od(console["log"](`\n【查询】本次可助力账号共有[${S0TM3qR["length"]}]个`), qfqZ6lP && qfqZ6lP["length"] > 0)) {
    let I33pWA;
    if (L_KB7HL && 1) {
      const AEJW2F9 = QifG71F["sort"](() => kjuYQJ(.5, Math["random"](), AIIul8_ = 33));
      I33pWA = [...qfqZ6lP, ...AEJW2F9];
    } else {
      I33pWA = [...qfqZ6lP, ...QifG71F];
    }
    const RJF1i4q = [...new Set(I33pWA)];
    for (let KsFeWj = cSbL6od(QifG71F = RJF1i4q, console["log"](`【模式】[${L_KB7HL ? "随机打乱" : "顺序执行"}]，已指定[${qfqZ6lP["length"]}]个助力码，共计[${QifG71F["length"]}]个助力码\n`), 0x0); KsFeWj < S0TM3qR["length"]; KsFeWj++) {
      if (cSbL6od($["index"] = kjuYQJ(KsFeWj, 1, ZbRGDrG(-0x30)), rmaufxy = S0TM3qR[KsFeWj], jMdy7M["setCookie"](rmaufxy), $["UserName"] = decodeURIComponent(jMdy7M["getCookieValue"](rmaufxy, "pt_pin")), $["UA"] = jMdy7M["genUA"]($["UserName"]), $["message"] = Ck6gN6["create"]($["index"], $["UserName"]), $["nickName"] = '', $["title"] = `【账号${$["index"]}】${$["UserName"]}：`, await EmdqvC(), jMdy7M["unsetCookie"](), $["runEnd"])) {
        break;
      }
      await $["wait"](3000);
    }
  } else {
    let I33pWA;
    if (L_KB7HL) {
      const AEJW2F9 = QifG71F["sort"](() => {
        return kjuYQJ(.5, Math["random"](), AIIul8_ = 0x21);
      });
      I33pWA = AEJW2F9;
    } else {
      I33pWA = QifG71F;
    }
    const RJF1i4q = [...new Set(I33pWA)];
    for (let KsFeWj = cSbL6od(QifG71F = RJF1i4q, console["log"](`【模式】[${L_KB7HL ? "随机打乱" : "顺序执行"}]，共计[${QifG71F["length"]}]个助力码\n`), 0x0); KsFeWj < S0TM3qR["length"]; KsFeWj++) {
      if (cSbL6od($["index"] = kjuYQJ(KsFeWj, 0x1, AIIul8_ = -48), rmaufxy = S0TM3qR[KsFeWj], jMdy7M["setCookie"](rmaufxy), $["UserName"] = decodeURIComponent(jMdy7M["getCookieValue"](rmaufxy, "pt_pin")), $["UA"] = jMdy7M["genUA"]($["UserName"]), $["message"] = Ck6gN6["create"]($["index"], $["UserName"]), $["nickName"] = '', $["title"] = `【账号${$["index"]}】${$["UserName"]}：`, await EmdqvC(), jMdy7M["unsetCookie"](), $["runEnd"]) && true) {
        break;
      }
      await $["wait"](3000);
    }
  }
  const uHWHED3 = Ck6gN6["getMessage"]();
  if (uHWHED3) {
    if (cSbL6od(console["log"](`\n📣 运行结果\n${uHWHED3["replace"](/：/g, " ➜ ")}`), lXn__e)) {
      Ck6gN6["appendContent"](`\n`)
      await Ck6gN6["push"]()
    }
  }
})()["catch"](NcGd6M => $["logErr"](NcGd6M))["finally"](() => {
  return $["done"]();
}), ZbRGDrG(28));
async function OxkMHr() {
  try {
    const nNdWkSZ = await jMdy7M["getLoginStatus"](rmaufxy);
    if (kjuYQJ(nNdWkSZ, ZbRGDrG(28)) && typeof nNdWkSZ === "boolean") {
      return cSbL6od(console["log"](`${$["title"]}账号无效`), $["needRemoveCookieIndex"]["push"]($["index"]), undefined);
    }
    let GNFKCq = false,
      olLK2d = '';
    if (sZeram) {
      for (let I8HCyB = 0x0; I8HCyB < sZeram["length"]; I8HCyB++) if (sZeram[I8HCyB]["pt_pin"] == $["UserName"]) {
        GNFKCq = true
        olLK2d = sZeram[I8HCyB]["ShareCode"]
      }
    }
    if (kjuYQJ(GNFKCq, ZbRGDrG(28))) {
      if (cSbL6od($["farm_home"] = '', await BoQzMIM("farm_home"), $["farm_home"]?.["result"]?.["farmHomeShare"]?.["inviteCode"])) {
        olLK2d = $["farm_home"]?.["result"]?.["farmHomeShare"]?.["inviteCode"]
        sZeram["push"]({
          ["pt_pin"]: $["UserName"],
          ["ShareCode"]: olLK2d
        })
        cHgNfB0 = true
      }
      await $["wait"](0x7d0);
    }
    if (olLK2d) {
      var DYrYml = ["title", "push"];
      console["log"](`${$[DYrYml[0x0]]}助力码[${olLK2d}]`)
      _aHRCdI["set"]($["UserName"], olLK2d)
      QifG71F[DYrYml[0x1]](olLK2d)
    } else {
      console["log"](`${$["title"]}❌ 获取助力码失败`)
      $["needRemoveCookieIndex"]["push"]($["index"])
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function EmdqvC() {
  try {
    const GNFKCq = await jMdy7M["getLoginStatus"](rmaufxy);
    if (kjuYQJ(GNFKCq, AIIul8_ = 28) && typeof GNFKCq === "boolean") {
      return cSbL6od(console["log"](`${$["title"]}账号无效`), undefined);
    }
    const olLK2d = cSbL6od($["skipRun"] = false, []);
    let I8HCyB = 0;
    const KsFeWj = 1;
    JkeiuG: for (let dOOT6zW of QifG71F) {
      const UFW6FcR = cSbL6od($["code"] = dOOT6zW, await BoQzMIM("farm_assist"), $["farm_assist"]?.["result"]?.["masterInfo"]?.["nickname"]);
      switch ($["farm_assist"]?.["bizCode"]) {
        case 0:
          console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})成功 ✅(${$["farm_assist"]?.["result"]?.["amount"]}g💧)`);
          break;
        case kjuYQJ(0xfa1, AIIul8_ = -0x4):
          console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})失败(${$["farm_assist"]?.["bizMsg"]})，重试1次`)
          await $["wait"](0xbb8)
          await BoQzMIM("farm_assist")
          break;
        case kjuYQJ(0x3e9, AIIul8_ = -0x4):
          console["log"](`${$["title"]}助力(${dOOT6zW})失败(${$["farm_assist"]?.["bizMsg"]})，重试`)
          await $["wait"](0xbb8)
          await BoQzMIM("farm_assist")
          I8HCyB++
          if (I8HCyB > KsFeWj) {
            break JkeiuG;
          }
          break;
        case 0x1389:
          console["log"](`${$["title"]}助力失败(邀请链接或口令失效)`);
          break JkeiuG;
        case 0x138a:
          console["log"](`${$["title"]}助力失败(不能助力自己)`);
          break;
        case 0x138b:
          console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})失败(今日已给该好友助力过了)`);
          break;
        case 0x138c:
          console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})失败(可能火爆或者助力次数已耗尽)`);
          break JkeiuG;
        case 0x138d:
          console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})失败(好友助力已满)`)
          $["message"]["insert"](`(${dOOT6zW})助力已满`)
          olLK2d["push"](dOOT6zW)
          break;
        default:
          {
            console["log"](`${$["title"]}助力[${UFW6FcR}](${dOOT6zW})失败(未知助力结果：${$["farm_assist"]?.["bizCode"]} - ${$["farm_assist"]?.["bizMsg"]})`);
            break;
          }
      }
      if ($["skipRun"]) {
        break;
      }
      await $["wait"](0x7d0);
    }
    if (olLK2d["length"] > 0x0 && 1) {
      for (let dOOT6zW of olLK2d) {
        var aNwgdhC = ["includes"];
        if (QifG71F[aNwgdhC[0x0]](dOOT6zW)) {
          QifG71F["splice"](QifG71F["indexOf"](dOOT6zW), 0x1);
        }
      }
      console["log"](`\n【统计】当前还剩[${QifG71F["length"]}]个助力码\n`);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function rDLgMF(nNdWkSZ, ftffNIM) {
  try {
    let GNFKCq = '';
    switch (nNdWkSZ) {
      case "farm_home":
        if (ftffNIM["code"] == 0x0) {
          if (ftffNIM["data"]?.["bizCode"] === 0x0) {
            $["farm_home"] = ftffNIM["data"];
          } else {
            GNFKCq = jMdy7M["getErrorMsg"](ftffNIM["data"])
            console["log"](`${$["title"]}农场首页失败：${GNFKCq}`)
          }
        } else {
          GNFKCq = jMdy7M["getErrorMsg"](ftffNIM)
          console["log"](`${$["title"]}农场首页失败：${GNFKCq}`)
        }
        break;
      case "farm_assist":
        if (ftffNIM["code"] === 0) {
          var KsFeWj = ["farm_assist"];
          $[KsFeWj[0]] = ftffNIM["data"];
        } else {
          if (cSbL6od(GNFKCq = jMdy7M["getErrorMsg"](ftffNIM), console["log"](`${$["title"]}助力失败：${GNFKCq}`), ['登陆', '失败']["some"](nNdWkSZ => GNFKCq["includes"](nNdWkSZ)))) {
            $["skipRun"] = true;
          }
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${nNdWkSZ} 请求响应 ${e["message"] || e}`);
  }
}
async function BoQzMIM(nNdWkSZ) {
  if ($["runEnd"]) {
    return;
  }
  let dOOT6zW = '',
    DYrYml = null,
    slHoag = null,
    UFW6FcR = "POST",
    QFdNTZ = {},
    HaJa3T = {};
  switch (nNdWkSZ) {
    case "farm_home":
      HaJa3T = {
        ["appId"]: "c57f6",
        ["functionId"]: "farm_home",
        ["appid"]: "signed_wh5",
        ["clientVersion"]: jMdy7M["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["version"]: 7,
          ["channelParam"]: '1'
        },
        ["version"]: "4.2",
        ["ua"]: $.UA,
        t: true
      }
      QFdNTZ = await btQmf5["getH5st"](HaJa3T)
      dOOT6zW = "https://api.m.jd.com/client.action"
      DYrYml = QFdNTZ["paramsData"]
      break;
    case "farm_assist":
      HaJa3T = {
        ["appId"]: "28981",
        ["functionId"]: "farm_assist",
        ["appid"]: "signed_wh5",
        ["clientVersion"]: jMdy7M["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["version"]: 7,
          ["channelParam"]: '\x31',
          ["inviteCode"]: $["code"],
          ["shareChannel"]: "ttt3",
          ["assistChannel"]: ''
        },
        ["version"]: "4.2",
        ua: $.UA,
        ["t"]: true
      }
      QFdNTZ = await btQmf5["getH5st"](HaJa3T)
      dOOT6zW = "https://api.m.jd.com/client.action"
      DYrYml = QFdNTZ["paramsData"]
      break;
    default:
      console["log"](`❌ 未知请求 ${nNdWkSZ}`);
      return;
  }
  const aNwgdhC = {
    ["osVersion"]: jMdy7M["getLatestIOSVersion"](),
    ["rfs"]: "0000",
    ["screen"]: "430*0",
    ["wqDefault"]: "false"
  };
  if (DYrYml) {
    Object["assign"](DYrYml, aNwgdhC);
  }
  if (slHoag) {
    Object["assign"](slHoag, aNwgdhC);
  }
  const cVtW3h = {
    ["url"]: dOOT6zW,
    ["method"]: UFW6FcR,
    ["headers"]: {
      ["Accept"]: "application/json, text/plain, */*",
      ["Accept-Encoding"]: "gzip, deflate, br",
      ["Accept-Language"]: "zh-cn",
      ["Connection"]: "keep-alive",
      ["Content-Type"]: "application/x-www-form-urlencoded",
      ["Cookie"]: rmaufxy,
      ["Host"]: "api.m.jd.com",
      ["Referer"]: "https://h5.m.jd.com/",
      ["X-Referer-Page"]: "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
      ["Origin"]: "https://h5.m.jd.com",
      ["x-rp-client"]: "h5_1.0.0",
      ["User-Agent"]: $.UA
    },
    ["params"]: slHoag,
    ["data"]: DYrYml,
    ["timeout"]: 0x7530,
    ["httpsTlsOptions"]: {
      ["secureProtocol"]: "TLSv1_2_method",
      ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
    }
  };
  if (UFW6FcR === "GET") {
    delete (delete cVtW3h["data"], cVtW3h["headers"]["Content-Type"]);
  }
  const BTP8S2 = 0x1;
  let Pa6KF1 = 0,
    p_D_4N = null,
    AIIul8_ = false;
  while (Pa6KF1 < BTP8S2) {
    var I33pWA = "data";
    if (Pa6KF1 > 0x0) {
      await $["wait"](0x3e8);
    }
    const I8xWPkt = await jMdy7M["request"](cVtW3h);
    if (kjuYQJ(I8xWPkt["success"], ZbRGDrG(0x1c))) {
      p_D_4N = `🚫 ${nNdWkSZ} 请求失败 ➜ ${I8xWPkt["error"]}`
      Pa6KF1++
      continue;
    }
    if (kjuYQJ(I8xWPkt[I33pWA], ZbRGDrG(0x1c))) {
      p_D_4N = `🚫 ${nNdWkSZ} 请求失败 ➜ 无响应数据`
      Pa6KF1++
      continue;
    }
    await rDLgMF(nNdWkSZ, I8xWPkt["data"])
    AIIul8_ = false
    break;
  }
  if (Pa6KF1 >= BTP8S2) {
    if (cSbL6od(console["log"](p_D_4N), AIIul8_)) {
      if (cSbL6od($["outFlag"] = true, $["message"])) {
        $["message"]["fix"](p_D_4N);
      }
    }
  }
}
class GwrYW69 {
  constructor() {
    this._algoKey = CcTJPsk.enc.Utf8.parse("wm0!@w-s#ll1flo(")
    this._ivKey = CcTJPsk.enc.Utf8.parse("0102030405060708")
    this._tokenMaps = {
      4.2: {}
    }
    this._algoMaps = {
      4.2: {}
    }
    this._fpMaps = new Map()
    this._latestAppVersionData = {
      ["build"]: jMdy7M["getLatestAppBuildVersion"](),
      ["version"]: jMdy7M["getLatestAppVersion"]()
    }
    this._latestIOSVersion = jMdy7M.getLatestIOSVersion()
  }
  async ["getH5st"](nNdWkSZ) {
    let ftffNIM = Object["assign"]({}, nNdWkSZ, {
      ["h5st"]: '',
      ["params"]: '',
      ["paramsData"]: {}
    });
    try {
      if (kjuYQJ(typeof nNdWkSZ === "object" && nNdWkSZ !== null, AIIul8_ = 28)) {
        return cSbL6od(console["log"]("❌ getH5st 传入参数有误"), ftffNIM);
      } else {
        const I8HCyB = ["appId", "appid", "body", "functionId"],
          KsFeWj = I8HCyB["filter"](ftffNIM => kjuYQJ(nNdWkSZ[ftffNIM], ZbRGDrG(0x1c)));
        if (KsFeWj["length"] > 0) {
          return cSbL6od(console["log"](`❌ getH5st 传入参数有误，缺少必要参数：${KsFeWj["join"](', ')}`), ftffNIM);
        }
      }
      const slHoag = cSbL6od(nNdWkSZ["version"] = "4.2", this["_initParams"](nNdWkSZ)),
        {
          ["appid"]: UFW6FcR,
          ["body"]: QFdNTZ,
          ["client"]: HaJa3T,
          ["clientVersion"]: aNwgdhC,
          ["functionId"]: cVtW3h
        } = nNdWkSZ;
      let BTP8S2 = '',
        Pa6KF1 = '';
      const p_D_4N = await this["_requestAlgo"](slHoag);
      if (cSbL6od(BTP8S2 = p_D_4N["token"], Pa6KF1 = p_D_4N["algo"], kjuYQJ(BTP8S2, ZbRGDrG(28)) && kjuYQJ(Pa6KF1, ZbRGDrG(0x1c)))) {
        return ftffNIM;
      }
      const I33pWA = {
        ["appid"]: UFW6FcR,
        ["body"]: QFdNTZ,
        ["client"]: HaJa3T,
        ["clientVersion"]: aNwgdhC,
        ["functionId"]: cVtW3h
      };
      if (nNdWkSZ?.t && kjuYQJ(nNdWkSZ.t, AIIul8_ = 8) === "boolean") {
        nNdWkSZ["t"] = Date["now"]()
        I33pWA["t"] = nNdWkSZ.t
      } else {
        nNdWkSZ.t = '';
      }
      if (kjuYQJ(I33pWA["client"], AIIul8_ = 28)) {
        delete I33pWA["client"];
      }
      if (kjuYQJ(I33pWA["clientVersion"], ZbRGDrG(0x1c))) {
        delete I33pWA["clientVersion"];
      }
      const I8xWPkt = this["_makeSign"](I33pWA, BTP8S2, Pa6KF1, slHoag),
        AEJW2F9 = {
          ["functionId"]: cVtW3h,
          ["body"]: JSON["stringify"](QFdNTZ),
          ["t"]: '',
          ["appid"]: UFW6FcR,
          ["client"]: '',
          ["clientVersion"]: '',
          ["h5st"]: I8xWPkt?.["h5st"] || ''
        };
      for (const RJF1i4q of ["t", "client", "clientVersion"]) if (nNdWkSZ[RJF1i4q]) {
        AEJW2F9[RJF1i4q] = nNdWkSZ[RJF1i4q];
      } else {
        delete AEJW2F9[RJF1i4q];
      }
      Object["assign"](ftffNIM, {
        ["h5st"]: I8xWPkt?.["h5st"] || '',
        ["params"]: SdV0xHu["stringify"](AEJW2F9),
        ["paramsData"]: AEJW2F9
      });
    } catch (error) {
      console["log"](`❌ getH5st 遇到了错误 ${error["message"] || error}`);
    }
    return ftffNIM;
  }
  ["_initParams"](nNdWkSZ) {
    const BPgQwHB = {
      ["version"]: '',
      ["appId"]: nNdWkSZ?.["appId"] || '',
      ["fv"]: '',
      ["fp"]: '',
      ua: '',
      ["sua"]: '',
      av: '',
      ["url"]: '',
      og: '',
      ["referer"]: nNdWkSZ?.["referer"] || '',
      ["pin"]: nNdWkSZ?.["pin"] || '',
      ["cookie"]: nNdWkSZ?.["cookie"] || ''
    };
    if (nNdWkSZ?.["ua"] && 1) {
      let ftffNIM = nNdWkSZ["ua"],
        GNFKCq = ftffNIM["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        olLK2d = ftffNIM["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (GNFKCq?.["length"] > 0 && olLK2d?.["length"] > 0 && true) {
        BPgQwHB.ua = ftffNIM
        BPgQwHB["sua"] = GNFKCq[0x1]
        BPgQwHB["av"] = olLK2d[0x0]
      }
    }
    if (kjuYQJ(BPgQwHB.ua, AIIul8_ = 28)) {
      let ftffNIM = this["_genUA"](),
        GNFKCq = ftffNIM["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        olLK2d = ftffNIM["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (GNFKCq?.["length"] > 0x0 && olLK2d?.["length"] > 0x0) {
        BPgQwHB.ua = ftffNIM
        BPgQwHB["sua"] = GNFKCq[1]
        BPgQwHB["av"] = olLK2d[0x0]
      }
    }
    if (cSbL6od(BPgQwHB["version"] = "4.2", BPgQwHB["fv"] = "h5_npm_v4.2.0", BPgQwHB.fp = this["_fpMaps"]["get"](BPgQwHB.ua) || '', kjuYQJ(BPgQwHB["fp"], AIIul8_ = 0x1c))) {
      if (cSbL6od(BPgQwHB["fp"] = this["_makeFp"](), BPgQwHB.ua["startsWith"]('\u006a\u0064'))) {
        this["_fpMaps"]["set"](BPgQwHB.ua, BPgQwHB.fp);
      }
    }
    if (nNdWkSZ?.["url"]) {
      try {
        const I8HCyB = new URL(nNdWkSZ["url"]);
        BPgQwHB["url"] = I8HCyB["href"]
        BPgQwHB.og = I8HCyB["origin"]
      } catch {}
    }
    return BPgQwHB;
  }
  async ["_requestAlgo"](nNdWkSZ) {
    try {
      const ftffNIM = this["_getExpandParamsData"](nNdWkSZ);
      let GNFKCq = this["_AESEncrypt"](JSON["stringify"](ftffNIM, null, 2), this["_algoKey"]);
      const olLK2d = {
          ["version"]: nNdWkSZ["version"],
          ["fp"]: nNdWkSZ.fp,
          ["appId"]: nNdWkSZ["appId"],
          ["timestamp"]: Date["now"](),
          ["platform"]: "web",
          ["expandParams"]: GNFKCq,
          ["fv"]: nNdWkSZ["fv"]
        },
        I8HCyB = {
          ["url"]: "https://cactus.jd.com/request_algo?g_ty=ajax",
          ["method"]: "POST",
          ["headers"]: {
            ["Content-Type"]: "application/json;charset=utf-8",
            ["Origin"]: "https://cactus.jd.com",
            ["Host"]: "cactus.jd.com",
            ["Accept"]: "*/*",
            ["User-Agent"]: nNdWkSZ?.ua || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0"
          },
          ["data"]: olLK2d,
          ["proxy"]: null,
          ["timeout"]: 0xea60,
          ["debug"]: false
        };
      let KsFeWj = 0x0,
        dOOT6zW = null;
      const DYrYml = 0x1;
      while (KsFeWj < DYrYml) {
        const slHoag = await jMdy7M["request"](I8HCyB);
        if (kjuYQJ(slHoag["success"], AIIul8_ = 28)) {
          dOOT6zW = `❌ getH5st request_algo 请求失败 ➜ ${slHoag["error"]}`
          KsFeWj++
          continue;
        }
        if (kjuYQJ(slHoag["data"], AIIul8_ = 28)) {
          dOOT6zW = "🚫 getH5st request_algo 请求失败 ➜ 无响应数据"
          KsFeWj++
          continue;
        }
        try {
          const QFdNTZ = slHoag["data"];
          if (QFdNTZ?.["data"] && QFdNTZ?.["data"]?.["result"]) {
            const HaJa3T = QFdNTZ["data"]["result"]?.["algo"],
              aNwgdhC = QFdNTZ["data"]["result"]?.tk;
            if (HaJa3T && aNwgdhC) {
              return {
                ["token"]: aNwgdhC,
                ["algo"]: HaJa3T
              };
            }
          }
          dOOT6zW = `🚫 getH5st request_algo 请求异常 ➜ ${JSON["stringify"](QFdNTZ)}`;
        } catch (error) {
          dOOT6zW = `❌ getH5st request_algo 在处理接口响应时遇到了错误 ➜ ${error["message"] || error}`;
        }
        KsFeWj++;
      }
      if (KsFeWj >= DYrYml) {
        console["log"](dOOT6zW);
      }
    } catch (error) {
      console["log"](`❌ getH5st request_algo 在处理API请求时遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["token"]: '',
      ["algo"]: ''
    };
  }
  ["_getExpandParamsData"](nNdWkSZ) {
    return {
      wc: 0,
      ["wd"]: 0x0,
      ["l"]: "zh-CN",
      ls: "zh-CN,zh",
      ml: 0,
      pl: 0,
      ["av"]: nNdWkSZ["av"],
      ["ua"]: nNdWkSZ.ua,
      ["sua"]: nNdWkSZ["sua"],
      pp: nNdWkSZ["pin"] ? {
        p1: nNdWkSZ["pin"],
        ["p2"]: nNdWkSZ["pin"]
      } : {},
      ["extend"]: {
        pm: 0,
        wd: 0,
        ["l"]: 0x0,
        ["ls"]: 2,
        wk: 0x0,
        ["bu1"]: "9.9.9"
      },
      ["pp1"]: nNdWkSZ["pin"] ? '' : nNdWkSZ["cookie"],
      pm: {
        ps: "prompt",
        np: "default"
      },
      w: 0x190,
      h: 0x2bc,
      ow: 0x190,
      oh: 0x2bc,
      ["url"]: nNdWkSZ["url"],
      og: nNdWkSZ.og,
      pr: 1.25,
      re: nNdWkSZ["referer"],
      ["random"]: this["_makeRandomStr"](0xa),
      ["referer"]: nNdWkSZ["referer"],
      ["v"]: nNdWkSZ["fv"],
      ai: nNdWkSZ["appId"],
      fp: nNdWkSZ["fp"]
    };
  }
  ["_makeSign"](nNdWkSZ, BPgQwHB, ftffNIM, GNFKCq) {
    try {
      const I8HCyB = GNFKCq["version"],
        KsFeWj = Date["now"](),
        dOOT6zW = new Date(KsFeWj),
        DYrYml = `${dOOT6zW["getFullYear"]()}${String(kjuYQJ(dOOT6zW["getMonth"](), 0x1, ZbRGDrG(-0x30)))["padStart"](0x2, "0")}${String(dOOT6zW["getDate"]())["padStart"](2, "0")}${String(dOOT6zW["getHours"]())["padStart"](2, '\u0030')}${String(dOOT6zW["getMinutes"]())["padStart"](0x2, "0")}${String(dOOT6zW["getSeconds"]())["padStart"](2, "0")}${String(dOOT6zW["getMilliseconds"]())["padStart"](0x3, '\x30')}`;
      let slHoag = Object["entries"](nNdWkSZ)["map"](([nNdWkSZ, BPgQwHB]) => {
          if (nNdWkSZ === "body") {
            BPgQwHB = CcTJPsk["SHA256"](JSON["stringify"](BPgQwHB))["toString"]();
          }
          return {
            ["key"]: nNdWkSZ,
            ["value"]: BPgQwHB
          };
        }),
        UFW6FcR = '',
        QFdNTZ = '';
      const HaJa3T = slHoag["map"](nNdWkSZ => `${nNdWkSZ["key"]}:${nNdWkSZ["value"]}`)["join"]('&'),
        aNwgdhC = new Function("return "["concat"](ftffNIM))();
      let BTP8S2 = cSbL6od(undefined),
        Pa6KF1 = cSbL6od(BTP8S2 = aNwgdhC(BPgQwHB, GNFKCq.fp, '\x37\x34', GNFKCq["appId"], CcTJPsk)["toString"]() || '', UFW6FcR = CcTJPsk["SHA256"](''["concat"](BTP8S2)["concat"](HaJa3T)["concat"](BTP8S2))["toString"](), {});
      const p_D_4N = cSbL6od(Pa6KF1 = {
        ["sua"]: GNFKCq["sua"],
        pp: GNFKCq["pin"] ? {
          p1: GNFKCq["pin"],
          ["p2"]: GNFKCq["pin"]
        } : {},
        ["extend"]: {
          pm: 0,
          ["wd"]: 0,
          l: 0,
          ["ls"]: 0x2,
          wk: 0,
          ["bu1"]: "9.9.9"
        },
        ["random"]: this["_makeRandomStr"](0xa),
        ["referer"]: GNFKCq["referer"],
        ["v"]: GNFKCq.fv,
        fp: GNFKCq.fp
      }, QFdNTZ = this["_AESEncrypt"](JSON["stringify"](Pa6KF1, null, 0x2), CcTJPsk["enc"]["Utf8"]["parse"]("DNiHi703B0&17hh1")), [''["concat"](DYrYml), ''["concat"](GNFKCq["fp"]), ''["concat"](GNFKCq["appId"]), ''["concat"](BPgQwHB), ''["concat"](UFW6FcR), ''["concat"](I8HCyB), ''["concat"](KsFeWj), ''["concat"](QFdNTZ)]["join"]('\u003b'));
      return {
        ["_stk"]: slHoag["map"](nNdWkSZ => nNdWkSZ["key"])["join"]('\x2c'),
        ["_ste"]: 0x1,
        ["h5st"]: p_D_4N
      };
    } catch (error) {
      console["log"](`❌ getH5st 生成签名时遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["_stk"]: '',
      ["_ste"]: 0x0,
      ["h5st"]: ''
    };
  }
  ["_AESEncrypt"](NcGd6M, nNdWkSZ) {
    const BPgQwHB = CcTJPsk["enc"]["Utf8"]["parse"](NcGd6M),
      ftffNIM = CcTJPsk["AES"]["encrypt"](BPgQwHB, nNdWkSZ, {
        iv: this["_ivKey"],
        ["mode"]: CcTJPsk["mode"]["CBC"],
        ["padding"]: CcTJPsk["pad"]["Pkcs7"]
      });
    return CcTJPsk["enc"]["Hex"]["stringify"](CcTJPsk["enc"]["Base64"]["parse"](ftffNIM["toString"]()));
  }
  ["_makeRandomStr"](NcGd6M = 0x20, nNdWkSZ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const BPgQwHB = nNdWkSZ["length"];
    let ftffNIM = '';
    for (let GNFKCq = 0x0; GNFKCq < NcGd6M; GNFKCq++) ftffNIM += nNdWkSZ["charAt"](Math["floor"](kjuYQJ(Math["random"](), BPgQwHB, AIIul8_ = 0x48)));
    return ftffNIM;
  }
  ["_genUA"]() {
    function NcGd6M(NcGd6M = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", nNdWkSZ = "0123456789abcdef") {
      let BPgQwHB = '';
      for (let ftffNIM of NcGd6M) BPgQwHB += ftffNIM == '\u0078' ? nNdWkSZ["charAt"](Math["floor"](kjuYQJ(Math["random"](), nNdWkSZ["length"], AIIul8_ = 0x48))) : ftffNIM == '\u0058' ? nNdWkSZ["charAt"](Math["floor"](kjuYQJ(Math["random"](), nNdWkSZ["length"], ZbRGDrG(0x48))))["toUpperCase"]() : ftffNIM;
      return BPgQwHB;
    }
    const nNdWkSZ = NcGd6M(),
      BPgQwHB = ["jdapp", "iPhone", this["_latestAppVersionData"]["version"], '', `rn/${nNdWkSZ}`, "M/5.0", `appBuild/${this["_latestAppVersionData"]["build"]}`, "jdSupportDarkMode/0", "ef/1", `ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A${Math["floor"](kjuYQJ(Date["now"](), 0x3e8, ZbRGDrG(-2)))}%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D`, `Mozilla/5.0 (iPhone; CPU iPhone OS ${this["_latestIOSVersion"]["replace"]('\u002e', '_')} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`, "supportJDSHWK/1", ''],
      ftffNIM = BPgQwHB["join"]('\x3b');
    return ftffNIM;
  }
  ["_makeFp"]() {
    var BPgQwHB, ftffNIM, GNFKCq, olLK2d, I8HCyB, KsFeWj, dOOT6zW, DYrYml, slHoag;
    function I8HCyB(nNdWkSZ, BPgQwHB) {
      return kjuYQJ(nNdWkSZ, Math["floor"](Math["random"]() * (BPgQwHB + 1 - nNdWkSZ)), AIIul8_ = -0x30);
    }
    function UFW6FcR(KsFeWj, dOOT6zW) {
      for (var DYrYml = [], slHoag = 0; slHoag < KsFeWj["length"]; slHoag++) {
        var HaJa3T = KsFeWj[slHoag];
        if (I8HCyB(0x0, KsFeWj["length"] - slHoag - 1) < dOOT6zW - DYrYml["length"] && (DYrYml["push"](HaJa3T), DYrYml["length"] == dOOT6zW)) {
          break;
        }
      }
      for (var aNwgdhC = '', cVtW3h = 0; cVtW3h < DYrYml["length"]; cVtW3h += 0x1) {
        var BTP8S2 = Math["random"]() * (DYrYml["length"] - cVtW3h) | 0;
        aNwgdhC += DYrYml[BTP8S2]
        DYrYml[BTP8S2] = DYrYml[kjuYQJ(DYrYml["length"] - cVtW3h, 0x1, ZbRGDrG(33))]
      }
      return aNwgdhC;
    }
    function QFdNTZ(BPgQwHB, ftffNIM) {
      for (var GNFKCq = 0; GNFKCq < ftffNIM["length"]; GNFKCq += 1) {
        var olLK2d = BPgQwHB["indexOf"](ftffNIM[GNFKCq]);
        kjuYQJ(1, ZbRGDrG(-4)) !== olLK2d && (BPgQwHB = BPgQwHB["replace"](ftffNIM[GNFKCq], ''));
      }
      return BPgQwHB;
    }
    BPgQwHB = UFW6FcR("6d0jhqw3pa", 0x4)
    ftffNIM = I8HCyB(0x0, 0x9)
    GNFKCq = QFdNTZ("6d0jhqw3pa", BPgQwHB)
    olLK2d = {}
    I8HCyB = cSbL6od(olLK2d["size"] = ftffNIM, olLK2d["num"] = GNFKCq, kjuYQJ(this["_makeRandomStr"](olLK2d["size"], olLK2d["num"]) + BPgQwHB + this["_makeRandomStr"](12 - ftffNIM - 1, GNFKCq), ftffNIM, AIIul8_ = -0x30))
    KsFeWj = I8HCyB.split('')
    dOOT6zW = KsFeWj.slice(0x0, 14)
    DYrYml = KsFeWj.slice(0xe)
    slHoag = []
    while (dOOT6zW["length"] > 0x0 && true) slHoag["push"](kjuYQJ(35, parseInt(dOOT6zW["pop"](), 36), ZbRGDrG(33))["toString"](0x24));
    return slHoag = slHoag["concat"](DYrYml), slHoag["join"]('');
  }
}
const btQmf5 = new GwrYW69();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}