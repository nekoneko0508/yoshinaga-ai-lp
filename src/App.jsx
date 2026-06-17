import React from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, FileText, Handshake, MessageCircle, Mic2, Settings } from 'lucide-react';

const contactUrl = 'https://calendar.app.google/upnhBkh2tjp5CE5c8';
const ctaText = 'まずは30分無料相談する';

const concerns = [
  '人が足りず、事務作業が後回しになっている',
  '会議の内容が記録されず、TODOがあいまいになる',
  'マニュアルがなく、教育が属人化している',
  'SNSを続けたいが、担当者の負担が大きい',
  'ChatGPTを契約したが、仕事でどう使えばいいかわからない',
  '情報共有がうまくいかず、同じ説明を何度もしている',
];

const monitorItems = [
  '困りごとの整理',
  'AIで改善する業務を1つ選定',
  'ChatGPTやNotebookLMなどの使い方支援',
  '実務用テンプレート作成',
  '社内で使い続けるための運用ルールづくり',
];

const services = [
  {
    icon: MessageCircle,
    title: 'AI担当者育成モニター',
    text: '社内の担当者様と一緒に、AIを使って業務を1つ改善する伴走支援です。',
  },
  {
    icon: Mic2,
    title: 'AIセミナー・研修',
    text: '経営者・担当者向けに、難しい言葉を使わず、業務で使うところまでお伝えします。',
  },
  {
    icon: Handshake,
    title: '伴走支援',
    text: 'テンプレート作成、運用ルールづくり、社内で続ける仕組みづくりまで支援します。',
  },
];

const reasons = [
  '食品品質管理15年以上の現場経験',
  'ISO、HACCP、食品表示など実務への理解',
  'デジタルが苦手な人にもわかりやすく伝えられる',
  'AIを理論ではなく、実際の業務に落とし込める',
  '相談、研修、伴走支援まで対応できる',
];

const aiEmployees = [
  ['きろくちゃん', '議事録・会議整理をAIで回す教材。TODO整理、次回アクションの明確化を支援します。'],
  ['ひろげるちゃん', 'SNS広報をAIで続ける教材。投稿ネタ整理、投稿文作成を支援します。'],
  ['メルカリちゃん', '商品登録・在庫管理をAIで整える教材。商品説明や在庫情報の整理を支援します。'],
  ['食品品質AI事務員', '品質管理・規格書業務をAIで支える専門教材。表示チェックや品質文書の整理を支援します。'],
];

const workExamples = [
  '議事録・情報整理',
  'マニュアル作成',
  'SNS広報',
  '商品登録・在庫管理',
  '品質管理・規格書業務',
  '社内AI活用ルールづくり',
];

const faqs = [
  ['AIに詳しい社員がいなくても大丈夫ですか？', '大丈夫です。AI初心者の担当者様と一緒に、業務を1つ選び、使い方から運用ルールまで整えます。'],
  ['ChatGPTを契約しただけで止まっています。', 'よくある状況です。議事録、マニュアル、SNS、情報整理など、使いやすい業務から始めます。'],
  ['食品会社以外でも相談できますか？', 'はい。製造業、地方中小企業、ひとり広報・ひとり事務・ひとり品質管理の担当者がいる会社を支援できます。'],
];

function App() {
  return (
    <main className="page">
      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">中小企業AIプロデューサー</p>
          <h1>食品会社・製造業のためのAI担当者育成モニター</h1>
          <p className="lead">
            中小企業AIプロデューサー 吉永さとこ が、議事録・マニュアル作成・SNS広報・情報整理など、
            後回しになりがちな業務をAIで進められる担当者を育てます。
          </p>
          <p className="supportText">AIを売るのではなく、人が足りなくても回る仕組みを一緒に作ります。</p>
          <div className="heroActions">
            <a className="primaryButton" href={contactUrl}>{ctaText}<ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="heroPanel" aria-hidden="true">
          <div className="panelHeader">人材不足と業務改善をAIで支援</div>
          <div className="flowItem"><span>1</span>困りごとを整理する</div>
          <div className="flowItem"><span>2</span>AIで回せる業務を1つ選ぶ</div>
          <div className="flowItem"><span>3</span>社内の担当者が使える形にする</div>
        </div>
      </section>

      <section className="section problem">
        <div className="sectionHeader">
          <p className="eyebrow">Problem</p>
          <h2>こんなお悩みはありませんか？</h2>
        </div>
        <div className="concernGrid">
          {concerns.map((item) => (
            <div className="checkItem" key={item}><CheckCircle2 size={20} aria-hidden="true" /><span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="messageSection">
        <div className="messageIcon"><Settings size={34} aria-hidden="true" /></div>
        <div>
          <p className="eyebrow">Mission</p>
          <h2>社内でAIを使える担当者を育てる</h2>
          <p>AIに詳しくなることが目的ではありません。人が足りなくても回る仕組みを1つ作ることが目的です。</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Monitor</p>
          <h2>AI担当者育成モニター</h2>
          <p>社内の担当者様と一緒に、AIを使って業務を1つ改善する伴走支援です。</p>
        </div>
        <div className="cardGrid two">
          {monitorItems.map((item) => (
            <div className="workItem" key={item}><ClipboardList size={20} aria-hidden="true" /><span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Service</p>
          <h2>提供サービス</h2>
        </div>
        <div className="cardGrid three">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="serviceCard" key={title}>
              <div className="iconBadge"><Icon size={24} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">AI Staff Series</p>
          <h2>AI社員シリーズは、社内AI担当者を育てるための教材です</h2>
          <p>AIを売るための商品ではなく、中小企業の現場でどのようにAIを使えばよいかを伝えるための教材・事例です。</p>
        </div>
        <div className="cardGrid two">
          {aiEmployees.map(([title, text]) => (
            <article className="serviceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">Reason</p>
          <h2>選ばれる理由</h2>
          <p>現場の困りごとを整理し、社内の人がAIを使える状態になるまで伴走します。</p>
        </div>
        <div className="reasonList">
          {reasons.map((reason) => (
            <div className="reasonItem" key={reason}><CheckCircle2 size={18} aria-hidden="true" /><span>{reason}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Use Case</p>
          <h2>支援できる業務例</h2>
        </div>
        <div className="cardGrid two">
          {workExamples.map((item) => (
            <div className="workItem" key={item}><ClipboardList size={20} aria-hidden="true" /><span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="profileSection">
        <div className="profileBox">
          <p className="eyebrow">Profile</p>
          <h2>吉永さとこ</h2>
          <p>
            中小企業AIプロデューサー。食品品質管理15年以上。ISO、HACCP、食品表示、よろず相談、起業支援、SNS支援に関わってきました。
            現在はサイバー大学でAIを学びながら、地方中小企業の人材不足と業務改善をAIで支援しています。
            46歳大学生として、AIプラチナマイクロクレデンシャル取得も目標にしています。福岡を拠点に、人が足りなくても回る仕組みづくりを支援しています。
          </p>
        </div>
      </section>

      <section className="section faq">
        <div className="sectionHeader">
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faqList">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>30分無料相談で、AIで回せる業務を整理しませんか。</h2>
        <p>相談内容がまとまっていなくても大丈夫です。今の業務でAIに任せられることを一緒に整理します。</p>
        <div className="contactActions">
          <a className="primaryButton light" href={contactUrl}>{ctaText}<ArrowRight size={18} aria-hidden="true" /></a>
          <a className="outlineButton" href={contactUrl}><FileText size={18} aria-hidden="true" />{ctaText}</a>
        </div>
      </section>
    </main>
  );
}

export default App;
