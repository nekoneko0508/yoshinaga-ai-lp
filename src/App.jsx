import React from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, FileText, Handshake, MessageCircle, Mic2, Settings } from 'lucide-react';

const concerns = [
  'AIに興味はあるけど、何から始めればいいかわからない',
  '人手不足で現場改善まで手が回らない',
  '会議、SNS、引き継ぎが属人化している',
  'ChatGPTを触ったけど、業務に使いきれていない',
  '社内にデジタルを教えられる人がいない',
  'DXと言われても、現場に余裕がない',
];

const services = [
  {
    icon: MessageCircle,
    title: 'AI導入相談',
    text: '今の業務や困りごとを伺い、AIで整えられる部分と最初に取り組む一歩を整理します。',
  },
  {
    icon: Mic2,
    title: 'AIセミナー・研修',
    text: '経営者・社員・地域事業者向けに、専門用語を抑えて実務で使えるAI活用をお伝えします。',
  },
  {
    icon: Handshake,
    title: '伴走支援',
    text: '会議メモ、SNS、引き継ぎ、文章作成など、現場で続く使い方になるまで一緒に整えます。',
  },
];

const reasons = [
  '食品業界15年の現場経験',
  '品質管理、ISO、HACCPなど実務への理解',
  'デジタルが苦手な人にもわかりやすく伝えられる',
  'AIを理論ではなく、実際の業務に落とし込める',
  '相談、研修、伴走支援まで対応できる',
];

const workExamples = [
  {
    title: '会議メモ・議事録の整理',
    text: '会議後の記録や決定事項を、次の行動につながる形に整えます。',
  },
  {
    title: 'SNS投稿や文章作成の下書き',
    text: '発信や案内文を、ゼロから考え込まない仕組みにします。',
  },
  {
    title: '引き継ぎ資料・手順書づくり',
    text: '属人化している作業を、社内で共有できる形にまとめます。',
  },
  {
    title: '問い合わせ対応文の整理',
    text: 'よくある質問や返信文を整え、対応のばらつきを減らします。',
  },
  {
    title: '品質管理まわりの記録・確認',
    text: '食品業界・品質管理の実務感を踏まえ、記録整理を支援します。',
  },
  {
    title: '社内AI活用ルールの整理',
    text: '何に使ってよいか、どこに注意するかをわかりやすく整えます。',
  },
];

const faqs = [
  {
    q: 'AIに詳しくなくても相談できますか？',
    a: 'はい。何から始めればよいかわからない段階から、業務の状況を伺って整理します。',
  },
  {
    q: '小さな会社でも依頼できますか？',
    a: 'もちろんです。少人数の会社や地方企業でも、無理なく始められる範囲からご提案します。',
  },
  {
    q: 'セミナーだけの依頼もできますか？',
    a: '可能です。参加者の業種や理解度に合わせて、事例やワークを調整します。',
  },
  {
    q: '相談内容がまとまっていません。',
    a: '大丈夫です。「何が困っているのかわからない」状態から一緒に整理します。',
  },
];

function App() {
  return (
    <main className="page">
      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">中小企業AIプロデューサー 吉永さとこ</p>
          <h1>中小企業の未来をAIでつくる</h1>
          <p className="lead">人手不足・属人化・業務のぐちゃぐちゃを、現場で続くAI活用で整えます。</p>
          <p className="supportText">
            食品業界15年／品質管理・ISO経験／デジタルが苦手な企業にも対応。
            小さな会社の「まず何をすればいい？」から伴走します。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">
              無料相談する
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondaryButton" href="#contact">
              セミナーを依頼する
            </a>
          </div>
        </div>
        <div className="heroPanel" aria-hidden="true">
          <div className="placeholderImage">
            <span>仮画像</span>
            <strong>社長と現場担当者が相談しているイメージ</strong>
          </div>
          <div className="panelHeader">現場で続くAI活用</div>
          <div className="flowItem"><span>1</span>業務を整理する</div>
          <div className="flowItem"><span>2</span>小さく試す</div>
          <div className="flowItem"><span>3</span>社内で続く形にする</div>
        </div>
      </section>

      <section className="section problem">
        <div className="sectionHeader">
          <p className="eyebrow">Problem</p>
          <h2>こんなお悩みありませんか？</h2>
        </div>
        <div className="concernGrid">
          {concerns.map((item) => (
            <div className="checkItem" key={item}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="messageSection">
        <div className="messageIcon">
          <Settings size={34} aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">Approach</p>
          <h2>中小企業に必要なのは「最先端AI」ではなく「現場で続くAI活用」</h2>
          <p>
            大きなシステムを入れる前に、まずは御社の今の業務を一緒に整理します。
            会議、SNS、引き継ぎ、記録、問い合わせ対応など、毎日の仕事の中で負担になっている部分から、
            無理なく使えるAI活用を作ります。
          </p>
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

      <section className="splitSection">
        <div>
          <p className="eyebrow">Reason</p>
          <h2>選ばれる理由</h2>
          <p>AIの知識だけでなく、中小企業の現場で「実際に使えるか」を大切にしています。</p>
        </div>
        <div className="reasonList">
          {reasons.map((reason) => (
            <div className="reasonItem" key={reason}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{reason}</span>
            </div>
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
            <div className="workItem" key={item.title}>
              <ClipboardList size={20} aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="profileSection">
        <div className="profileBox">
          <p className="eyebrow">Profile</p>
          <h2>実績・プロフィール</h2>
          <p>
            吉永さとこ。中小企業AIプロデューサー。食品業界で15年、品質管理・ISO・HACCPなど現場実務に関わる。
            現在は中小企業・地方企業・小規模事業者に向けて、AI導入相談、セミナー、伴走支援を行っています。
          </p>
        </div>
      </section>

      <section className="section faq">
        <div className="sectionHeader">
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>まずは、御社の業務を一緒に整理しませんか。</h2>
        <p>相談内容がまとまっていなくても大丈夫です。現場の困りごとを伺い、最初の一歩をご提案します。</p>
        <div className="contactActions">
          <a className="primaryButton light" href="mailto:example@example.com">
            無料相談する
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="outlineButton" href="mailto:example@example.com">
            <FileText size={18} aria-hidden="true" />
            セミナーを依頼する
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
