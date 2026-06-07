export type LpProgram = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  depthLabel: string;
  sessionsLabel: string;
  bullets: string[];
};

export type LpFounder = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const lpCopy = {
  brand: "臨床と内省が出会う空間 / Clinical Sanctuary",
  hero: {
    headline: "医療と心理療法が拓く、回復の新しい道",
    subhead:
      "抗うつ薬や従来の治療では十分な改善が得られなかった難治性うつ病や慢性疼痛に対し、LVX KTP（ケタミン療法プログラム）は、臨床的なケタミン投与と専門的なサイコセラピーを統合します。神経科学のエビデンスに基づき、脳の神経回路に新たな適応を促し、一過性の緩和ではない、持続的な回復への道を拓きます。",
    ctas: [
      { label: "プログラムを見る", href: "#programs" },
      { label: "適応性を評価する（AIスクリーニング）", href: "#screening" },
    ],
    videoSrc: "https://www.pexels.com/download/video/34723479/",
    typewriterWords: ["Noise", "Stuck", "Rewire", "統合"],
  },
  /** 白遷移直後のセカンドヒーロー（`videoSrc` が空なら `imageSrc` を表示） */
  postTransitionHero: {
    imageSrc: "/images/Gemini_Generated_Image_os34z0os34z0os34.png",
    videoSrc: "",
    imageAlt: "白相へ移行した後のビジュアル",
    eyebrow: "NEXT STEP",
    headline: "回復への一歩。まずはご案内をお届けします。",
    lead:
      "プログラムの概要、参加に至るまでのステップ、医療関係者の方への情報を、メールにて丁寧にお届けします。",
    emailPlaceholder: "メールアドレスを入力",
    submitLabel: "案内メールを受け取る",
    thanksMessage: "受け付けました。正式なフォーム公開まで今しばらくお待ちください。",
    privacyNote: "※ ご入力いただいたアドレスは案内目的以外には使用しません。",
    screeningCta: {
      label: "適応性をいま評価する（AIスクリーニング）",
      href: "#screening",
    },
  },
  sections: {
    philosophyTitle: "philosophyのタイトル",
    philosophyDesc:
      "Preparation（準備）・Experience（体験）・Integration（統合）。",
    scienceTitle: "意識医学（Consciousness Medicine）",
    scienceDesc:
      "フロートを「脳と意識の再配線（Rewire）」として提示。感覚遮断と医療管理下のプロトコルで、変化を“偶然”ではなく設計へ。",
    programsTitle: "プログラムの全体像",
    programsDesc:
      "医学的な裏付けと、丁寧な対話。そのすべてをパッケージに。\n「投薬 × セッション × 統合（インテグレーション）」を、\nひとつの「存在の医学」として設計し、提示します。",
    foundersTitle: "創設者メッセージ",
    foundersDesc:
      "臨床の安全性を軸に、評価から統合までを一貫して監督します。",
    screeningTitle: "ファーストステップ：適応性評価（スクリーニング）",
    screeningDesc:
      "私たちが最も重視するのは、お一人おひとりの心身の絶対的な安全です。本セッションには厳格な医療ガイドライン（適応基準）が設けられており、事前のスクリーニングを通じて、安全に体験を行える状態であるかを慎重に評価します。",
  },
} as const;

export const lpMotionText = {
  heroH1: ["Noise", "Stuck", "Rewire", "統合"],
  heroTheme: ["Silence", "DMN", "Rewire", "Integration"],
  styleGuideH1: ["その回路の癖を修正できないとき", "自己の物語を維持し続ける", "同じ苦しい思考のルートを自動的に辿り続けてしまう", "ケタミン療法プログラム"],
  styleGuideH2: ["Predictive Processing", "DMN", "KTP", "統合"],
} as const;

export const lpKTP = {
  mainCatch:
    "治療を重ねても変わらない苦しみが、思考の中に刻み込まれてしまったとき。",
  leadTitle: "脳の可塑性（神経回路の再構築）を、臨床治療の力に。",
  leadParagraphs: [
    "私たちの脳には、休息中に自動的に働く「デフォルトモードネットワーク（DMN）」という回路があります。自己の物語を紡ぎ続けますが、うつ病や慢性疼痛の状態が長く続くと、この回路は過剰に硬直化し、否定的な思考や痛みの認知が、同じパターンのまま繰り返されてしまいます——まるで、同じ苦しい思考のループから抜け出せなくなったかのように。",
    "臨床的なケタミン投与は、単に症状を和らげるだけではありません。根深く定着した神経回路の結合を一時的に緩め、脳が新しい学習や変化を受け入れやすくなる「神経可塑性の窓（変化を受け入れやすい一定の期間）」を開く——神経科学が示す、回復において不可欠なプロセスです。",
    "この限られた期間に、専門的なサイコセラピー（心理療法）を統合的に介入することで、得られた気づきや脳の変化を日常の行動へと定着させます。一過性の症状緩和にとどまらず、長期的な変容と機能回復を実現する——それがLVX KTPの設計思想です。",
  ],
  stepsIntro:
    "LVX KTPは、流動化・可塑性の最大化・再構成の三段階で、持続的な回復を目指します。",
  steps: {
    step1Title: "STEP 01：流動化（Phase Transition）",
    step1Body: [
      "臨床的プロトコルに基づくケタミン投与により、根深く定着した思考回路や痛みの伝達信号が一時的に和らぎます。",
      "脳がしなやかさを取り戻す——回復プロセスの最初の一歩です。",
    ],
    step2Title: "STEP 02：可塑性の最大化",
    step2Body: [
      "投与後、日常の認知的負荷から解放された深い内省の時間が訪れます。",
      "脳が新しい学習や回路の再編成に対して最も開かれている状態——「可塑性の窓（Window of Opportunity）」——を、丁寧に活かします。",
    ],
    step3Title: "STEP 03：再構成（Rewiring / Integration）",
    step3Body: [
      "統合セッションにおいて、専門医や心理療法士との対話を通じて、体験を言語化し、日常の行動変容へと定着させます。",
      "最も重要なフェーズです。一過性の体験で終わらせず、人生の物語を健康な状態へと再編成するプロセスを、専門家が寄り添いながら支えます。",
    ],
  },
  conceptTitle: "先進科学の知見と、決して妥協しない安全への配慮。この強固なフレームワークがあって初めて、深く、それでいて安全な意識の探求が守られます。",
  conceptBody: [
    "単なる対症療法ではなく、神経科学的な根拠に基づき、人生の物語を再編成する「存在の医学」。",
  ],
} as const;

export const lpPrograms: LpProgram[] = [
  {
    id: "plan-01",
    name: "Plan 01",
    title: "Standard Introduction",
    subtitle: "まずは、その扉を叩く。",
    priceLabel: "150,000",
    depthLabel: "浅層",
    sessionsLabel: "[1]",
    bullets: [
      "医師による評価・適応判定（初回）",
      "安全プロトコルの説明と同意",
      "体験後の簡易統合セッション",
    ],
  },
  {
    id: "plan-02",
    name: "Plan 02",
    title: "Integrate Float",
    subtitle: "静寂を深める。身体感覚の再統合。",
    priceLabel: "240,000",
    depthLabel: "中層",
    sessionsLabel: "[1]",
    bullets: [
      "診断・準備 → 体験 → 統合の一連を強化",
      "フロート環境での感覚統合（デモ）",
      "翌日以降の統合ガイダンス",
    ],
  },
  {
    id: "plan-03",
    name: "Plan 03",
    title: "Standard Course",
    subtitle: "本質的な書き換え。再調整の期間。",
    priceLabel: "660,000",
    depthLabel: "深層",
    sessionsLabel: "[6]",
    bullets: [
      "神経心理学的な“再配線”を想定した設計",
      "医師の全行程管理（毎回）",
      "統合セッションを段階的に深化",
    ],
  },
  {
    id: "plan-04",
    name: "Plan 04",
    title: "Premium Journey",
    subtitle: "究極の沈殿槽。最深部の静けさ。",
    priceLabel: "880,000",
    depthLabel: "最深",
    sessionsLabel: "[6]",
    bullets: [
      "ケタミン × フロートの旗艦設計（デモ）",
      "統合プロトコルを個別最適化",
      "“現代の寺院”としての最上位体験",
    ],
  },
];

export const lpScienceCards = [
  {
    title: "Rewire（再配線）という言葉で、誤解を減らす",
    body: "「治す」でも「飛ぶ」でもない。思考と感情の回路を“再起動し直す”ための、医療的な言語として提示します。",
  },
  {
    title: "KAP × フロート：脳と意識のための設計",
    body: "KAP（Ketamine-Assisted Psychotherapy）とフローティングタンクを組み合わせ、知覚のノイズを落として“統合”に向けた状態をつくります。",
  },
  {
    title: "医療管理下のプロトコル（安全と線引き）",
    body: "評価・同意・観察・統合。リクリエーショナルと決定的に違うのは、目的と管理体制、そして説明責任です。",
  },
] as const;

export const lpFounders: LpFounder[] = [
  {
    id: "doctor",
    name: "精神科医　Dr Void",
    role: "医療プロトコル / 安全監督",
    bio: "臨床経験に基づき、適切な評価からセッション、そして体験を日常へ着地させるプロセスまで、すべてのステップを丁寧に監修。私たちは、徹底した科学的エビデンスと張り詰めた安全管理によって、お預かりする心と身体の安全を約束します。",
  },
];

export const lpScreening = {
  buttonLabel: "あなたの適応性を評価する（AIスクリーニング）",
  helper:
    "※ 将来的に、スムーズなAI問診・オンライン予約システムへと統合される拡張性を持った設計です。",
} as const;

