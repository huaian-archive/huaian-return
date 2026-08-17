"use client";

import { useState } from "react";

const people = [
  { no: "01", name: "喬以棠", role: "危機公關顧問", age: "37", mark: "173 cm · 烏黑低馬尾", core: "擅長整理混亂資訊並預判反應。願意失控，也不相信臨場坦白必然有用。", key: "供詞", image: "/characters/qiao-yitang-optimized.jpg", quote: "先確認一件事" },
  { no: "02", name: "唐霽", role: "系統測試工程師", age: "36", mark: "181 cm · 黑框眼鏡", core: "重視因果與可重複驗證，對『先發生行為、紀錄才改變』尤其敏感。", key: "程序", image: "/characters/tang-ji-optimized.jpg", quote: "再做一次就知道" },
  { no: "03", name: "江敘衡", role: "戶政事務所課員", age: "36", mark: "165 cm · 薄硬文件袋", core: "相信紀錄持續生效必有依據；制度修正傷人時，也需要證據承認程序本身有錯。", key: "戶籍", image: "/characters/jiang-xuheng-optimized.jpg", quote: "這份紀錄尚未成立" },
  { no: "04", name: "顏舒綺", role: "諮商心理師", age: "35", mark: "168 cm · 左耳銀耳扣", core: "擅長觀察反應與記憶落差，知道安撫既能協助，也能誘導。", key: "辨識", image: "/characters/yan-shuqi-optimized.jpg", quote: "先核對你記得的" },
  { no: "05", name: "周蘊慈", role: "出版社校對編輯", age: "34", mark: "158 cm · 習慣戴白手套", core: "對文字敏感，能辨出用詞與描述被替換；危險時會把自己排除在決策之外。", key: "校對", image: "/characters/zhou-yunci-optimized.jpg", quote: "那句話以前沒有" },
  { no: "06", name: "裴其聲", role: "聲音後期製作師", age: "37", mark: "177 cm · 右耳銀色助聽器", core: "能保存聲紋、拆解呼吸與背景音；不相信內容，只保留原始檔與版本。", key: "聲紋", image: "/characters/pei-qisheng-optimized.jpg", quote: "這段剪得真差" },
  { no: "07", name: "程復", role: "消防安全顧問", age: "37", mark: "187 cm · 左腕磨損機械錶", core: "先判斷出口、傷勢與時間，再決定風險。願意留下斷後，但不抽象地要求犧牲。", key: "救援", image: "/characters/cheng-fu-optimized.jpg", quote: "先出去" },
  { no: "08", name: "賀文野", role: "戶外體能教練", age: "35", mark: "184 cm · 左側犬齒缺一角", core: "行動快於抽象規則，先看眼前的人是否受傷；正受傷也會掩飾並停止眼前行為。", key: "行動", image: "/characters/he-wenye-optimized.jpg", quote: "先把人放開" },
];

const timeline = [
  ["21:40", "江敘衡偷取父親保管的總鑰匙，開啟側門。"],
  ["22:17", "火警啟動；第八人同時看見共同目擊者。"],
  ["22:19", "廣播出現聲紋異常，其聲音後來被第009號取代。"],
  ["2007", "水下槐安竣工，舊址沉沒，戶籍與檔案開始錯位。"],
  ["2026", "水位下降，八名事件目擊者收到臨時安置通知。"],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const p = people[active];
  return (
    <main>
      <nav className="nav"><a className="brand" href="#top"><span>槐</span> 安歸籍</a><div className="navlinks"><a href="#persons">八人</a><a href="#records">紀錄</a><a href="#rules">守則</a></div><span className="status">檔案已啟封</span></nav>
      <section className="hero" id="top">
        <div className="seal" aria-hidden="true"><span>009</span><small>戶籍空號</small></div>
        <div className="hero-copy"><p className="eyebrow">槐安市政府 · 事故資料補正通知</p><h1>你被記得，<br />所以你<span>仍在這裡。</span></h1><p className="lede">2006 年，一場無人完整記得的事故，留下八個名字與一個不存在的戶籍。二十年後，水位下降，舊城重新出土。</p><div className="hero-actions"><a className="primary" href="#persons">查閱八人檔案</a><a className="textlink" href="#records">查看 22:17 紀錄 →</a></div></div>
        <aside className="notice"><p>臨時安置須知</p><strong>若工作人員、廣播、區域告示或其他版本與本須知衝突，只以蓋有紅色「歸籍章」的文字為準。</strong><div><span>現時</span><b>2026</b></div><div><span>事故</span><b>2006</b></div></aside>
      </section>
      <section className="persons" id="persons">
        <header className="section-head"><div><p className="eyebrow">PERSONNEL / 01—08</p><h2>八人的名字，都是真的。</h2></div><p>每次只能由一人清點。<br />少一人，便無法閉合。</p></header>
        <div className="person-layout"><div className="person-list" role="tablist" aria-label="八人名冊">{people.map((person, i) => <button key={person.no} role="tab" aria-selected={i === active} onClick={() => setActive(i)}><em>{person.no}</em><span>{person.name}<small>{person.role}</small></span><i>{person.key}</i></button>)}</div>
          <article className="dossier" aria-live="polite"><div className="dossier-top"><span>第 {p.no} 項</span><span>STATUS / 在籍</span></div><div className="dossier-content"><div className="portrait-wrap">{p.image ? <img className="portrait" src={p.image} alt={`${p.name}角色照片`} /> : <div className="portrait-missing"><b>01</b><span>影像缺件</span></div>}<q>{p.quote}</q></div><div className="record-copy"><p className="filelabel">PERSONNEL RECORD</p><h3>{p.name}</h3><p className="role">{p.role} · {p.age} 歲</p><div className="redline" /><dl><div><dt>識別特徵</dt><dd>{p.mark}</dd></div><div><dt>核心判斷</dt><dd>{p.core}</dd></div></dl></div></div><div className="stamp">已核<br />在籍</div></article></div>
      </section>
      <section className="records" id="records"><div className="record-intro"><p className="eyebrow">INCIDENT / 2006</p><h2>一個時間點，<br />八份不完整的真相。</h2><p>第009號不是房號、真人或寄件者。它是八項行為與八份供詞拼成的空殼。</p></div><div className="timeline">{timeline.map(([time, text], i) => <div key={time} className={i === 1 ? "hot" : ""}><time>{time}</time><span /><p>{text}</p></div>)}</div></section>
      <section className="rules" id="rules"><header className="section-head light"><div><p className="eyebrow">TEMPORARY RESETTLEMENT NOTICE</p><h2>槐安縣返鄉人員<br />臨時安置須知</h2></div><b>八條守則</b></header><ol>
        <li><b>姓名</b><span>只能回答安置證所列姓名；若有人叫出正確姓名，不得回應。</span></li><li><b>人數</b><span>每次集合只可由一人清點；結果不是八人，不得重數。</span></li><li><b>紅衣</b><span>至少一人持續注視，所有人退入最近房間並關門。</span></li><li><b>火警</b><span>22:17 後若響起又自行中止，留在原處，照明恢復前不得點名。</span></li><li><b>廣播</b><span>女聲若引導前往東側出口或地下通道，不得依指示移動。</span></li><li><b>門後</b><span>若有人求救、叫名或自稱熟人，只可回答一次：「你認錯了」。</span></li><li><b>記憶</b><span>正確記憶與紀錄衝突時，也只可回答一次，不得立即核對細節。</span></li><li><b>孔洞</b><span>若同時看見相同面孔，持續注視，並以實體門隔離兩者。</span></li></ol><footer><span>HUAIAN COUNTY / ARCHIVE 009</span><p>違規只新增錯位，不停止歸籍。</p></footer></section>
    </main>
  );
}
