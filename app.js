const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.6 8.4-2 5.2-5.2 2 2-5.2z"/>',
  play: '<rect x="3" y="4" width="18" height="16" rx="4"/><path d="m10.2 8.6 5.3 3.4-5.3 3.4z"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.4-.7L3 21l1.8-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
  heart: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/>',
  comment: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.4-.7L3 21l1.8-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
  share: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
  more: '<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m21 16-4.5-4.5L7 21"/>',
  emoji: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4 4 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
  send: '<path d="M21 3 3 10.5l7 2.5 2.5 7z"/><path d="M21 3 10 13"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  verified: '<circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"/><path d="m8.3 12.1 2.4 2.4 5-5.1" stroke="#fff" stroke-width="2"/>',
  trend: '<path d="M3 17l6-6 4 4 7-7"/><path d="M14 8h6v6"/>',
  camera: '<path d="M3 8h3l2-3h8l2 3h3v12H3z"/><circle cx="12" cy="14" r="3.5"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 21a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 21a6.5 6.5 0 0 0-2-4.7"/>',
  sparkles: '<path d="M12 3l1.8 4.8L18.5 9.5l-4.7 1.7L12 16l-1.8-4.8L5.5 9.5l4.7-1.7z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  back: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  trash: '<path d="M4 7h16M9 7V5h6v2M6 7l1 14h10l1-14"/>',
  logout: '<path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/>',
  music: '<circle cx="7" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M10 18V6l11-2v12"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8 16a5.5 5.5 0 0 1 8 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>'
};

const PALETTE = [
  ['#7c3aed', '#ec4899'],
  ['#0ea5e9', '#8b5cf6'],
  ['#f59e0b', '#ef4444'],
  ['#10b981', '#0ea5e9'],
  ['#ec4899', '#f59e0b'],
  ['#6366f1', '#22d3ee'],
  ['#f43f5e', '#7c3aed'],
  ['#14b8a6', '#84cc16']
];

const TRENDS = [
  { tag: 'صدى_المجاني', count: '12.4 ألف منشور' },
  { tag: 'تصميم_الواجهات', count: '8.9 ألف منشور' },
  { tag: 'مفتوح_المصدر', count: '6.2 ألف منشور' },
  { tag: 'قهوة_الصباح', count: '3.1 ألف منشور' },
  { tag: 'تحدي_30_يوم', count: '1.8 ألف منشور' }
];

const REPLIES = [
  'أهلاً! سعيد بوجودك هنا 😄',
  'فكرة رائعة، لنتحدث عنها أكثر ✨',
  'أتفق معك تمامًا 👌',
  'شكرًا على رسالتك! سأرد عليك قريبًا 🌟',
  'هذا مثير للاهتمام، أخبرني المزيد 🙌',
  'تم! أرسلت لك التفاصيل الآن 📩'
];

const STORAGE_KEY = 'sada_social_v1';
const VERSION = 1;
const artCache = new Map();
let idSeq = 0;
let storyTimer = null;
let currentStory = null;
let installPrompt = null;

const modalRoot = document.getElementById('modal-root');
const toastRoot = document.getElementById('toast-root');

const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

const hash = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const mulberry32 = (a) => () => {
  a |= 0;
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const uid = (prefix) => `${prefix}_${Date.now().toString(36)}_${++idSeq}`;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function palette(seed) {
  return PALETTE[hash(seed) % PALETTE.length];
}

function formatText(text) {
  return esc(text).replace(/#([\p{L}\p{N}_]+)/gu, '<span class="tag">#$1</span>');
}

function nl2br(text) {
  return esc(text).replace(/\n/g, '<br>');
}

function handle(user) {
  return `<span class="handle" dir="ltr">@${esc(user.username)}</span>`;
}

function timeAgo(ts) {
  const diff = Math.max(0, Date.now() - ts);
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'الآن';
  if (mins < 60) return `قبل ${mins} د`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `قبل ${hours} س`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'أمس';
  if (days < 7) return `قبل ${days} أيام`;
  return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'short' }).format(new Date(ts));
}

function clock(ts) {
  const d = new Date(ts);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function fmtCount(n) {
  n = Number(n) || 0;
  if (n >= 1000000) return `${(n / 1000000).toFixed(1).replace('.0', '')} مليون`;
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace('.0', '')} ألف`;
  return String(n);
}

function avatar(user, size = 42, extra = '') {
  const style = `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.38)}px`;
  if (user.avatar) {
    return `<span class="avatar ${extra}" style="${style}"><img src="${user.avatar}" alt="${esc(user.name)}" loading="lazy"></span>`;
  }
  const [a, b] = palette(user.username || user.id);
  return `<span class="avatar ${extra}" style="${style};--a:${a};--b:${b}" aria-label="${esc(user.name)}">${esc((user.name || 'ص').trim().charAt(0))}</span>`;
}

function storyAvatar(user, size = 62) {
  return avatar(user, size);
}

function art(seed, ratio = 'portrait') {
  const key = `${seed}|${ratio}`;
  if (artCache.has(key)) return artCache.get(key);
  const w = 900;
  const h = ratio === 'wide' ? 560 : ratio === 'square' ? 900 : 1120;
  const rand = mulberry32(hash(seed));
  const [c1, c2] = palette(seed);
  const [c3] = palette(`${seed}-accent`);
  const shapes = [];

  for (let i = 0; i < 4; i++) {
    const cx = Math.round(rand() * w);
    const cy = Math.round(rand() * h);
    const r = Math.round(140 + rand() * 260);
    const fill = i % 2 ? c3 : '#ffffff';
    shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${(0.1 + rand() * 0.18).toFixed(2)}" filter="url(#blur)"/>`);
  }

  for (let i = 0; i < 3; i++) {
    const x1 = Math.round(rand() * w);
    const y1 = Math.round(rand() * h);
    const x2 = x1 + Math.round((rand() - 0.5) * w);
    const y2 = y1 + Math.round((rand() - 0.5) * h);
    const cx = Math.round((x1 + x2) / 2 + (rand() - 0.5) * 200);
    const cy = Math.round((y1 + y2) / 2 + (rand() - 0.5) * 200);
    shapes.push(`<path d="M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}" fill="none" stroke="#ffffff" stroke-opacity="${(0.16 + rand() * 0.2).toFixed(2)}" stroke-width="${Math.round(8 + rand() * 34)}" stroke-linecap="round"/>`);
  }

  for (let i = 0; i < 16; i++) {
    shapes.push(`<circle cx="${Math.round(rand() * w)}" cy="${Math.round(rand() * h)}" r="${(1.5 + rand() * 4).toFixed(1)}" fill="#ffffff" opacity="${(0.14 + rand() * 0.3).toFixed(2)}"/>`);
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="vig" cx="0.5" cy="0.42" r="0.8">
        <stop offset="0.55" stop-color="#000000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000000" stop-opacity="0.32"/>
      </radialGradient>
      <filter id="blur" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="55"/>
      </filter>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    ${shapes.join('')}
    <rect width="${w}" height="${h}" fill="url(#vig)"/>
  </svg>`;

  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  artCache.set(key, url);
  return url;
}

function minutesAgo(mins) {
  return Date.now() - mins * 60000;
}

function makeSeed() {
  const users = [
    { id: 'u0', name: 'عبدالله', username: 'abdullah', bio: 'أشارك لحظاتي وأفكاري هنا. مهتم بالتقنية والتصميم ✨', followers: 1248, following: 386, verified: false },
    { id: 'u1', name: 'نور الشمري', username: 'noor', bio: 'مصوّرة ومهتمة بالسفر ☕️🌍\nأوثّق الجمال في كل زاوية.', followers: 28400, following: 210, verified: true },
    { id: 'u2', name: 'خالد العتيبي', username: 'khaled_dev', bio: 'مهندس برمجيات | أبني أدوات مفتوحة المصدر 🚀', followers: 15300, following: 184, verified: true },
    { id: 'u3', name: 'سارة أحمد', username: 'sara.design', bio: 'مصممة واجهات ومستخدم. أؤمن أن البساطة أصعب ما في التصميم 🎨', followers: 9800, following: 312, verified: true },
    { id: 'u4', name: 'فيصل الحربي', username: 'faisal', bio: 'رياضة، كتب، وقهوة. أشارك رحلتي اليومية 💪', followers: 4200, following: 198, verified: false },
    { id: 'u5', name: 'ليان', username: 'layan', bio: 'لحظات صغيرة، سعادة كبيرة 🌇', followers: 7600, following: 267, verified: false },
    { id: 'u6', name: 'عمر', username: 'omar.app', bio: 'مطور تطبيقات ومهتم بتجربة المستخدم 📱', followers: 3100, following: 145, verified: false },
    { id: 'u7', name: 'مها', username: 'maha', bio: 'فن وطبخ وحياة 🎨🍰', followers: 5400, following: 233, verified: false }
  ];

  const posts = [
    {
      id: 'p1', userId: 'u1', text: 'قهوة الصباح وإطلالة تفتح النفس ☕️🌅\nمن جبال أبها، أفضل بداية لليوم. #قهوة_الصباح',
      art: art('abha-coffee-1'), likes: 1284, liked: false, saved: false, at: minutesAgo(28),
      comments: [
        { id: 'c1', userId: 'u3', text: 'الصورة تحفة! أي كاميرا استخدمتِ؟', at: minutesAgo(20) },
        { id: 'c2', userId: 'u5', text: 'أبها في الصباح شيء ثاني 😍', at: minutesAgo(12) }
      ]
    },
    {
      id: 'p2', userId: 'u2', text: 'أطلقنا اليوم النسخة الجديدة من مشروعنا مفتوح المصدر 🚀\nكل الأدوات مجانية للجميع، بدون اشتراكات أو قيود. شاركونا رأيكم! #مفتوح_المصدر',
      art: art('opensource-launch-2'), likes: 892, liked: true, saved: false, at: minutesAgo(125),
      comments: [
        { id: 'c3', userId: 'u6', text: 'مبروك! جاري التجربة الآن 👨‍💻', at: minutesAgo(98) },
        { id: 'c4', userId: 'u0', text: 'خطوة رائعة، الدعم الكامل لكم 🙌', at: minutesAgo(75) },
        { id: 'c5', userId: 'u3', text: 'أخيرًا! كنت أنتظر هذا الإصدار.', at: minutesAgo(40) }
      ]
    },
    {
      id: 'p3', userId: 'u3', text: 'التصميم الجيد لا يُرى فقط… بل يُحسّ 🎨\nجرّبت أسلوبًا جديدًا في الواجهات الداكنة، ما رأيكم؟ #تصميم_الواجهات',
      art: art('design-neon-3'), likes: 2140, liked: false, saved: true, at: minutesAgo(310),
      comments: [
        { id: 'c6', userId: 'u2', text: 'التباين ممتاز والتفاصيل نظيفة جدًا.', at: minutesAgo(280) },
        { id: 'c7', userId: 'u7', text: 'الألوان مريحة للعين، أحببتها ✨', at: minutesAgo(250) }
      ]
    },
    {
      id: 'p4', userId: 'u5', text: 'غروب لا يشبه أي غروب 🌇\nبعض اللحظات لا تحتاج كلمات.',
      art: art('sunset-dunes-4'), likes: 3470, liked: false, saved: false, at: minutesAgo(500),
      comments: [{ id: 'c8', userId: 'u1', text: 'السماء هنا كأنها لوحة 🧡', at: minutesAgo(470) }]
    },
    {
      id: 'p5', userId: 'u4', text: 'خطوة صغيرة كل يوم، وبعد سنة ستكون النتيجة مذهلة 💪\nتحدي 30 يومًا يبدأ الآن! #تحدي_30_يوم',
      art: art('fitness-challenge-5'), likes: 648, liked: false, saved: false, at: minutesAgo(22 * 60),
      comments: [{ id: 'c9', userId: 'u6', text: 'معك في التحدي، نبدأ غدًا 🔥', at: minutesAgo(20 * 60) }]
    },
    {
      id: 'p6', userId: 'u0', text: 'أول منشور لي هنا في صدى 👋\nأبحث عن أصدقاء يشاركونني شغف التقنية والتصميم، عرّفوني بنفسكم!',
      art: art('hello-sada-6'), likes: 96, liked: false, saved: false, at: minutesAgo(185),
      comments: [{ id: 'c10', userId: 'u3', text: 'أهلاً بك! سعيدين بانضمامك 🎉', at: minutesAgo(160) }]
    }
  ];

  const stories = [
    { id: 's1', userId: 'u1', art: art('story-abha', 'square'), at: minutesAgo(35), viewed: false },
    { id: 's2', userId: 'u3', art: art('story-design', 'square'), at: minutesAgo(80), viewed: false },
    { id: 's3', userId: 'u2', art: art('story-code', 'square'), at: minutesAgo(140), viewed: false },
    { id: 's4', userId: 'u5', art: art('story-sunset', 'square'), at: minutesAgo(190), viewed: false },
    { id: 's5', userId: 'u4', art: art('story-gym', 'square'), at: minutesAgo(240), viewed: true },
    { id: 's6', userId: 'u7', art: art('story-art', 'square'), at: minutesAgo(300), viewed: true }
  ];

  const chats = [
    {
      id: 'ch1', userId: 'u1', unread: 2, messages: [
        { id: 'm1', from: 'them', text: 'شفتِ الصور الجديدة من أبها؟ 😍', at: minutesAgo(46) },
        { id: 'm2', from: 'me', text: 'يا سلام! الصورة الثانية رهيبة', at: minutesAgo(42) },
        { id: 'm3', from: 'them', text: 'أرسل لك الألبوم كامل الليلة ✨', at: minutesAgo(38) },
        { id: 'm4', from: 'them', text: 'وإذا تحب نصور سوا في الرحلة القادمة؟', at: minutesAgo(37) }
      ]
    },
    {
      id: 'ch2', userId: 'u2', unread: 1, messages: [
        { id: 'm5', from: 'them', text: 'جاهز نساعدك في إعداد المشروع؟', at: minutesAgo(120) },
        { id: 'm6', from: 'me', text: 'أكيد! أرسل لي رابط المستودع', at: minutesAgo(115) },
        { id: 'm7', from: 'them', text: 'تم، شوف الرسائل المثبتة 📌', at: minutesAgo(110) }
      ]
    },
    {
      id: 'ch3', userId: 'u3', unread: 0, messages: [
        { id: 'm8', from: 'me', text: 'تصميمك الأخير أعجبني جدًا', at: minutesAgo(300) },
        { id: 'm9', from: 'them', text: 'شكرًا لك! هذا يعني الكثير 🙏', at: minutesAgo(295) }
      ]
    },
    {
      id: 'ch4', userId: 'u5', unread: 0, messages: [
        { id: 'm10', from: 'them', text: 'سنذهب لتصوير الغروب اليوم، تفضل معنا؟', at: minutesAgo(420) },
        { id: 'm11', from: 'me', text: 'فكرة رائعة، أرسل لي الموقع', at: minutesAgo(410) }
      ]
    },
    {
      id: 'ch5', userId: 'u6', unread: 0, messages: [
        { id: 'm12', from: 'them', text: 'هل جربت النسخة الجديدة من التطبيق؟', at: minutesAgo(620) },
        { id: 'm13', from: 'me', text: 'نعم، سلسة جدًا 👌', at: minutesAgo(610) }
      ]
    }
  ];

  const notifications = [
    { id: 'n1', type: 'like', userId: 'u1', postId: 'p6', text: 'أعجبت بمنشورك', at: minutesAgo(9), read: false },
    { id: 'n2', type: 'follow', userId: 'u3', text: 'بدأت بمتابعتك', at: minutesAgo(41), read: false },
    { id: 'n3', type: 'comment', userId: 'u2', postId: 'p6', text: 'علّق على منشورك: تصميم رائع، واصل!', at: minutesAgo(88), read: false },
    { id: 'n4', type: 'mention', userId: 'u5', postId: 'p4', text: 'أشارت إليك في تعليق', at: minutesAgo(150), read: true },
    { id: 'n5', type: 'like', userId: 'u4', postId: 'p6', text: 'أعجب بمنشورك', at: minutesAgo(320), read: true },
    { id: 'n6', type: 'system', text: 'مرحبًا بك في صدى! كل الميزات مجانية بالكامل، وبياناتك محفوظة على جهازك.', at: minutesAgo(600), read: true }
  ];

  const reels = [
    { id: 'r1', userId: 'u5', art: art('reel-sunset', 'portrait'), caption: 'غروب في الصحراء… سكون لا يوصف 🌅 #لحظات', audio: 'صوت الرياح — Nature', likes: 4200, liked: false },
    { id: 'r2', userId: 'u2', art: art('reel-code', 'portrait'), caption: 'كيف تبني تطبيقًا كاملًا مجانًا؟ ٣ خطوات فقط 👨‍💻', audio: 'Lo-fi Focus — Studio', likes: 6120, liked: false },
    { id: 'r3', userId: 'u1', art: art('reel-camera', 'portrait'), caption: 'خلف الكواليس: جلسة تصوير في الجبال 📸', audio: 'Golden Hour — Ambient', likes: 3480, liked: false },
    { id: 'r4', userId: 'u7', art: art('reel-art', 'portrait'), caption: 'لوحة جديدة بعد أسبوع من العمل 🎨 رأيكم؟', audio: 'Soft Piano — Calm', likes: 2760, liked: false }
  ];

  return {
    version: VERSION,
    theme: 'dark',
    view: 'home',
    query: '',
    filter: 'all',
    profileId: null,
    profileTab: 'posts',
    activeChat: null,
    draft: { text: '', image: null },
    user: users[0],
    users,
    posts,
    stories,
    chats,
    reels,
    notifications,
    following: ['u1', 'u3', 'u4']
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return makeSeed();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== VERSION) return makeSeed();
    return parsed;
  } catch {
    return makeSeed();
  }
}

let state = loadState();

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    toast('تعذر حفظ البيانات محليًا');
  }
}

function userById(id) {
  return state.users.find((u) => u.id === id) || state.user;
}

function postById(id) {
  return state.posts.find((p) => p.id === id);
}

function chatById(id) {
  return state.chats.find((c) => c.id === id);
}

function isFollowing(id) {
  return state.following.includes(id);
}

function unreadChats() {
  return state.chats.reduce((sum, c) => sum + (c.unread || 0), 0);
}

function unreadNotifications() {
  return state.notifications.filter((n) => !n.read).length;
}

function profileUser() {
  return state.profileId ? userById(state.profileId) : state.user;
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#08080d' : '#f4f4fa');
}

function toast(message, iconName = 'check') {
  const item = document.createElement('div');
  item.className = 'toast';
  item.innerHTML = `${icon(iconName)}<span>${esc(message)}</span>`;
  toastRoot.appendChild(item);
  setTimeout(() => {
    item.classList.add('out');
    setTimeout(() => item.remove(), 260);
  }, 2400);
}

function navItem(view, name, label, badge = 0) {
  const active = state.view === view ? 'active' : '';
  return `<button class="nav-item ${active}" data-action="nav" data-view="${view}">
    ${icon(name)}<span class="nav-label">${label}</span>
    ${badge ? `<span class="nav-badge">${badge > 99 ? '99+' : badge}</span>` : ''}
  </button>`;
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div class="brand">
      <span class="logo-mark">ص</span>
      <div class="brand-text"><strong>صدى</strong><small>تواصل بلا حدود</small></div>
    </div>
    <button class="btn btn-primary btn-block" data-action="open-compose">${icon('plus')}<span>إنشاء منشور</span></button>
    <nav class="side-nav">
      ${navItem('home', 'home', 'الرئيسية')}
      ${navItem('explore', 'compass', 'استكشاف')}
      ${navItem('reels', 'play', 'الريلز')}
      ${navItem('messages', 'message', 'الرسائل', unreadChats())}
      ${navItem('notifications', 'bell', 'الإشعارات', unreadNotifications())}
      ${navItem('profile', 'user', 'الملف الشخصي')}
    </nav>
    <div class="free-card">
      <div class="free-card-title">${icon('sparkles')} مجاني للأبد</div>
      <p>كل الميزات متاحة بدون اشتراك، بدون إعلانات مزعجة، وبدون خادم مدفوع.</p>
      <button class="btn btn-soft btn-sm btn-block" data-action="free-plan">اكتشف ميزاتك</button>
    </div>
    <div class="user-chip">
      <button data-action="nav" data-view="profile" aria-label="ملفك الشخصي">${avatar(state.user, 38)}</button>
      <div class="user-chip-info"><strong>${esc(state.user.name)}</strong><span>${handle(state.user)}</span></div>
      <button class="icon-btn" data-action="theme" aria-label="تبديل المظهر">${icon(state.theme === 'dark' ? 'sun' : 'moon')}</button>
      <button class="icon-btn" data-action="settings" aria-label="الإعدادات">${icon('settings')}</button>
    </div>
  `;
}

function renderMobileHeader() {
  const header = document.getElementById('mobile-header');
  header.innerHTML = `
    <div class="mh-brand"><span class="logo-mark">ص</span>صدى</div>
    <div class="mh-actions">
      <button class="icon-btn" data-action="nav" data-view="explore" aria-label="استكشاف">${icon('search')}</button>
      <button class="icon-btn" data-action="nav" data-view="notifications" aria-label="الإشعارات" style="position:relative">
        ${icon('bell')}${unreadNotifications() ? '<i class="badge-dot"></i>' : ''}
      </button>
      <button class="icon-btn" data-action="theme" aria-label="تبديل المظهر">${icon(state.theme === 'dark' ? 'sun' : 'moon')}</button>
      <button class="icon-btn mh-avatar" data-action="nav" data-view="profile" aria-label="ملفك الشخصي">${avatar(state.user, 31)}</button>
    </div>
  `;
}

function renderBottomNav() {
  const nav = document.getElementById('bottom-nav');
  const item = (view, name, label) => `
    <button class="bn-item ${state.view === view ? 'active' : ''}" data-action="nav" data-view="${view}" aria-label="${label}">
      ${icon(name)}
    </button>`;
  nav.innerHTML = `
    ${item('home', 'home', 'الرئيسية')}
    ${item('explore', 'compass', 'استكشاف')}
    <button class="bn-create" data-action="open-compose" aria-label="إنشاء منشور">${icon('plus')}</button>
    ${item('reels', 'play', 'الريلز')}
    ${item('messages', 'message', 'الرسائل')}
  `;
}

function renderRail() {
  const rail = document.getElementById('rail');
  const suggestions = state.users.filter((u) => u.id !== state.user.id && !isFollowing(u.id)).slice(0, 3);
  const fallback = state.users.filter((u) => u.id !== state.user.id).slice(0, 3);
  const list = suggestions.length ? suggestions : fallback;
  rail.innerHTML = `
    <form class="search-form" data-form="rail-search" role="search">
      ${icon('search')}
      <input type="search" name="q" placeholder="ابحث في صدى…" aria-label="بحث" value="${esc(state.query)}">
    </form>
    <div class="rail-block">
      <div class="rail-title"><span>مقترح لك</span>${icon('users')}</div>
      ${list.map((u) => `
        <div class="suggest-row">
          ${avatar(u, 36)}
          <div class="suggest-info"><strong>${esc(u.name)}</strong><span>${handle(u)}</span></div>
          <button class="follow-btn ${isFollowing(u.id) ? 'following' : ''}" data-action="follow" data-id="${u.id}">${isFollowing(u.id) ? 'متابَع' : 'متابعة'}</button>
        </div>
      `).join('')}
    </div>
    <div class="rail-block">
      <div class="rail-title"><span>الرائج الآن</span>${icon('trend')}</div>
      ${TRENDS.map((t) => `
        <button class="trend-row" data-action="trend" data-q="${t.tag}">
          <div><strong>#${t.tag}</strong><span>${t.count}</span></div>
          ${icon('trend')}
        </button>
      `).join('')}
    </div>
    <div class="rail-block">
      <div class="rail-title"><span>لماذا صدى؟</span>${icon('sparkles')}</div>
      <div class="suggest-row">
        <span class="feature-check">${icon('check')}</span>
        <div class="suggest-info"><strong>مجاني 100%</strong><span>بدون اشتراكات أو إعلانات</span></div>
      </div>
      <div class="suggest-row">
        <span class="feature-check">${icon('lock')}</span>
        <div class="suggest-info"><strong>خصوصية أولًا</strong><span>بياناتك على جهازك فقط</span></div>
      </div>
      <button class="btn btn-ghost btn-sm btn-block" data-action="free-plan">اعرف المزيد</button>
    </div>
    <div class="rail-footer">صدى © 2026<br>صُنع بحب — مجاني للجميع</div>
  `;
}

function storyHTML(story) {
  const user = userById(story.userId);
  return `<button class="story" data-action="open-story" data-id="${story.id}">
    <span class="story-ring ${story.viewed ? 'viewed' : ''}">${storyAvatar(user, 62)}</span>
    <span class="story-name">${esc(user.name.split(' ')[0])}</span>
  </button>`;
}

function postCard(post) {
  const user = userById(post.userId);
  const likes = post.likes + (post.liked ? 1 : 0);
  const last = post.comments[post.comments.length - 1];
  const lastUser = last ? userById(last.userId) : null;
  return `<article class="post" data-post-id="${post.id}">
    <header class="post-head">
      <button class="post-user" data-action="open-profile" data-id="${user.id}">
        ${avatar(user, 42)}
        <span class="post-user-info">
          <strong>${esc(user.name)}${user.verified ? icon('verified', 'verified') : ''}</strong>
          <span>${handle(user)} · ${timeAgo(post.at)}</span>
        </span>
      </button>
      <button class="icon-btn" data-action="post-menu" data-id="${post.id}" aria-label="خيارات المنشور">${icon('more')}</button>
    </header>
    <p class="post-text">${formatText(post.text)}</p>
    <div class="post-art" data-action="art-double" data-id="${post.id}">
      <img src="${post.art}" alt="${esc(user.name)}" loading="lazy" draggable="false">
      <span class="heart-burst">♥</span>
    </div>
    <div class="post-actions">
      <div class="post-actions-left">
        <button class="action-btn ${post.liked ? 'liked' : ''}" data-action="like" data-id="${post.id}" aria-label="إعجاب">
          ${icon('heart')}<span class="like-count">${fmtCount(likes)}</span>
        </button>
        <button class="action-btn" data-action="open-comments" data-id="${post.id}" aria-label="التعليقات">
          ${icon('comment')}<span>${post.comments.length}</span>
        </button>
        <button class="action-btn" data-action="share" data-id="${post.id}" aria-label="مشاركة">${icon('share')}</button>
      </div>
      <button class="action-btn ${post.saved ? 'saved' : ''}" data-action="save" data-id="${post.id}" aria-label="حفظ">
        ${icon('bookmark')}
      </button>
    </div>
    <div class="post-likes" data-likes-label>${fmtCount(likes)} إعجاب</div>
    <div class="post-caption">
      ${post.comments.length ? `<button class="view-comments" data-action="open-comments" data-id="${post.id}">عرض كل التعليقات (${post.comments.length})</button>` : ''}
      ${last ? `<div class="latest-comment"><strong>${esc(lastUser.name.split(' ')[0])}</strong><span>${esc(last.text)}</span></div>` : ''}
    </div>
    <button class="add-comment-bar" data-action="open-comments" data-id="${post.id}">
      ${avatar(state.user, 28)}<span class="add-comment-input">أضف تعليقًا…</span>
    </button>
  </article>`;
}

function homeHTML() {
  return `<section class="page">
    <div class="stories">
      <button class="story" data-action="create-story">
        <span class="story-ring create">
          ${avatar(state.user, 62)}
          <span class="plus-badge">${icon('plus')}</span>
        </span>
        <span class="story-name">قصتك</span>
      </button>
      ${state.stories.map(storyHTML).join('')}
    </div>
    <div class="composer-bar">
      ${avatar(state.user, 40)}
      <button class="composer-input" data-action="open-compose">بماذا تفكر، ${esc(state.user.name)}؟</button>
      <div class="composer-tools">
        <button class="icon-btn" data-action="open-compose" aria-label="إضافة صورة">${icon('image')}</button>
        <button class="icon-btn" data-action="open-compose" aria-label="إضافة شعور">${icon('emoji')}</button>
      </div>
    </div>
    <div class="feed">
      ${state.posts.map(postCard).join('')}
    </div>
    <div class="feed-end">
      <span>لقد شاهدت كل المنشورات ✨</span>
      <button class="btn btn-ghost btn-sm" data-action="nav" data-view="explore">اكتشف المزيد</button>
    </div>
  </section>`;
}

function matchesQuery(text, query) {
  return !query || text.toLowerCase().includes(query);
}

function personRowHTML(u) {
  return `<div class="person-row">
    <button class="post-user" data-action="open-profile" data-id="${u.id}">
      ${avatar(u, 44)}
      <span class="post-user-info">
        <strong>${esc(u.name)}${u.verified ? icon('verified', 'verified') : ''}</strong>
        <span>${handle(u)} · ${fmtCount(u.followers)} متابع</span>
      </span>
    </button>
    <button class="btn ${isFollowing(u.id) ? 'btn-ghost' : 'btn-soft'} btn-sm" data-action="follow" data-id="${u.id}">${isFollowing(u.id) ? 'متابَع' : 'متابعة'}</button>
  </div>`;
}

function tileHTML(post) {
  return `<button class="tile" data-action="open-post" data-id="${post.id}" aria-label="فتح المنشور">
    <img src="${post.art}" alt="" loading="lazy">
    <span class="tile-overlay">
      <span>${icon('heart')}${fmtCount(post.likes + (post.liked ? 1 : 0))}</span>
      <span>${icon('comment')}${post.comments.length}</span>
    </span>
  </button>`;
}

function reelTileHTML(reel) {
  const user = userById(reel.userId);
  return `<button class="tile" data-action="nav" data-view="reels" aria-label="فتح الريلز">
    <img src="${reel.art}" alt="" loading="lazy">
    <span class="tile-overlay"><span>${icon('play')}${fmtCount(reel.likes + (reel.liked ? 1 : 0))}</span></span>
  </button>`;
}

function exploreResultsHTML() {
  const q = state.query.trim().toLowerCase();
  if (state.filter === 'people') {
    const people = state.users.filter((u) => u.id !== state.user.id && (matchesQuery(`${u.name} ${u.username} ${u.bio}`, q)));
    if (!people.length) return `<div class="empty-state">${icon('users')}<strong>لا توجد نتائج</strong><span>جرّب اسمًا أو حسابًا آخر</span></div>`;
    return `<div class="people-list">${people.map(personRowHTML).join('')}</div>`;
  }
  if (state.filter === 'reels') {
    const reels = state.reels.filter((r) => {
      const user = userById(r.userId);
      return matchesQuery(`${r.caption} ${user.name} ${user.username}`, q);
    });
    if (!reels.length) return `<div class="empty-state">${icon('play')}<strong>لا توجد ريلز</strong><span>جرّب كلمة بحث أخرى</span></div>`;
    return `<div class="explore-grid">${reels.map(reelTileHTML).join('')}</div>`;
  }
  const posts = state.posts.filter((p) => {
    const user = userById(p.userId);
    return matchesQuery(`${p.text} ${user.name} ${user.username}`, q);
  });
  if (!posts.length) return `<div class="empty-state">${icon('search')}<strong>لا توجد نتائج لـ «${esc(state.query)}»</strong><span>جرّب البحث عن موضوع أو شخص آخر</span></div>`;
  return `<div class="explore-grid">${posts.map(tileHTML).join('')}</div>`;
}

function exploreHTML() {
  const filters = [
    ['all', 'الكل'],
    ['photos', 'صور'],
    ['reels', 'ريلز'],
    ['people', 'أشخاص']
  ];
  return `<section class="page">
    <div class="page-head"><h1 class="page-title">استكشاف</h1><span class="chip-dark" style="color:var(--muted);background:var(--panel);border-color:var(--border)">${icon('sparkles')} مجاني للجميع</span></div>
    <form class="search-form" data-form="explore-search" role="search">
      ${icon('search')}
      <input type="search" id="explore-search" name="q" placeholder="ابحث عن أشخاص، مواضيع، أو لحظات…" aria-label="بحث" value="${esc(state.query)}">
      ${state.query ? `<button type="button" class="icon-btn" data-action="clear-search" aria-label="مسح البحث" style="width:28px;height:28px">${icon('close')}</button>` : ''}
    </form>
    <div class="chips">
      ${filters.map(([key, label]) => `<button class="chip ${state.filter === key ? 'active' : ''}" data-action="filter" data-filter="${key}">${label}</button>`).join('')}
    </div>
    <div id="explore-results">${exploreResultsHTML()}</div>
  </section>`;
}

function reelHTML(reel) {
  const user = userById(reel.userId);
  return `<article class="reel" data-reel-id="${reel.id}">
    <img class="reel-art" src="${reel.art}" alt="${esc(user.name)}" loading="lazy">
    <div class="reel-shade"></div>
    <div class="reel-top">
      <span class="chip-dark">${icon('play')} ريلز</span>
      <span class="chip-dark">${icon('wifi')} مجاني</span>
    </div>
    <div class="reel-side">
      <button class="reel-action ${reel.liked ? 'liked' : ''}" data-action="reel-like" data-id="${reel.id}" aria-label="إعجاب">
        ${icon('heart')}<span>${fmtCount(reel.likes + (reel.liked ? 1 : 0))}</span>
      </button>
      <button class="reel-action" data-action="reel-comments" data-id="${reel.id}" aria-label="تعليقات">
        ${icon('comment')}<span>${Math.round(reel.likes / 47)}</span>
      </button>
      <button class="reel-action" data-action="share" data-id="${reel.id}" aria-label="مشاركة">${icon('share')}</button>
      <button class="reel-action" data-action="reel-save" data-id="${reel.id}" aria-label="حفظ">${icon('bookmark')}</button>
    </div>
    <div class="reel-info">
      <div class="reel-user">
        ${avatar(user, 34)}
        <strong>${esc(user.name)}${user.verified ? icon('verified', 'verified') : ''}</strong>
        <button class="reel-follow" data-action="follow" data-id="${user.id}">${isFollowing(user.id) ? 'متابَع' : 'متابعة'}</button>
      </div>
      <p class="reel-caption">${formatText(reel.caption)}</p>
      <div class="reel-audio">${icon('music')} ${esc(reel.audio)}</div>
    </div>
    <div class="reel-progress"><i></i></div>
  </article>`;
}

function reelsHTML() {
  return `<section class="page">
    <div class="page-head"><h1 class="page-title">الريلز</h1><span class="chip" style="background:var(--panel);border-color:var(--border)">${icon('play')} تلقائي</span></div>
    <div class="reels">${state.reels.map(reelHTML).join('')}</div>
    <div class="feed-end"><span>هذا كل ما لدينا الآن — استمتع ✨</span></div>
  </section>`;
}

function chatRowHTML(chat) {
  const user = userById(chat.userId);
  const last = chat.messages[chat.messages.length - 1];
  return `<button class="chat-row ${state.activeChat === chat.id ? 'active' : ''} ${chat.unread ? 'unread' : ''}" data-action="open-chat" data-id="${chat.id}" data-user="${user.id}">
    <span class="avatar-wrap">${avatar(user, 45)}<span class="online-dot"></span></span>
    <span class="chat-row-info">
      <span class="chat-row-top"><strong>${esc(user.name)}</strong><time>${last ? timeAgo(last.at) : ''}</time></span>
      <p>${last ? (last.from === 'me' ? 'أنت: ' : '') + esc(last.text) : 'ابدأ المحادثة'}</p>
    </span>
    ${chat.unread ? '<span class="unread-dot"></span>' : ''}
  </button>`;
}

function chatPanelHTML(chat) {
  const user = userById(chat.userId);
  return `<section class="chat-panel">
    <header class="chat-header">
      <button class="icon-btn back-btn" data-action="back-chats" aria-label="رجوع">${icon('back')}</button>
      ${avatar(user, 40)}
      <div class="chat-header-info"><strong>${esc(user.name)}${user.verified ? icon('verified', 'verified') : ''}</strong><span>متصل الآن</span></div>
      <button class="icon-btn" data-action="open-profile" data-id="${user.id}" aria-label="الملف الشخصي">${icon('user')}</button>
    </header>
    <div class="chat-body">
      <div class="day-divider">اليوم</div>
      ${chat.messages.map((m) => `<div class="bubble ${m.from === 'me' ? 'mine' : ''}">${esc(m.text)}<time>${clock(m.at)}</time></div>`).join('')}
      ${chat.typing ? '<div class="typing"><i></i><i></i><i></i></div>' : ''}
    </div>
    <form class="chat-form" data-form="chat" data-chat="${chat.id}">
      <button type="button" class="icon-btn" data-action="chat-emoji" aria-label="إيموجي">${icon('emoji')}</button>
      <input type="text" id="chat-input" placeholder="اكتب رسالة…" aria-label="رسالة" autocomplete="off" maxlength="500">
      <button class="send-btn" type="submit" aria-label="إرسال">${icon('send')}</button>
    </form>
  </section>`;
}

function messagesHTML() {
  const chat = state.activeChat ? chatById(state.activeChat) : null;
  return `<section class="page">
    <div class="page-head"><h1 class="page-title">الرسائل</h1><span class="chip" style="background:var(--panel);border-color:var(--border)">${unreadChats()} غير مقروءة</span></div>
    <div class="messages ${chat ? 'has-chat' : ''}">
      <aside class="chat-list">
        <div class="chat-list-head">
          <strong>محادثاتك</strong>
          <div class="chat-search">${icon('search')}<input type="search" id="chat-search" placeholder="ابحث في المحادثات…" aria-label="بحث في المحادثات"></div>
        </div>
        <div class="chat-rows">${state.chats.map(chatRowHTML).join('')}</div>
      </aside>
      ${chat ? chatPanelHTML(chat) : `<div class="chat-panel"><div class="chat-empty">
        ${icon('message')}<strong>اختر محادثة</strong><span>رسائلك مجانية بلا حدود، وتبقى محفوظة على جهازك.</span>
      </div></div>`}
    </div>
  </section>`;
}

function notificationRow(n) {
  const user = n.userId ? userById(n.userId) : null;
  const typeIcon = n.type === 'follow' ? 'users' : n.type === 'comment' ? 'comment' : n.type === 'system' ? 'sparkles' : 'heart';
  return `<button class="notif ${n.read ? '' : 'unread'}" data-action="open-notification" data-id="${n.id}">
    <span class="notif-icon ${n.type}">${icon(typeIcon)}</span>
    ${user ? avatar(user, 40) : ''}
    <span class="notif-body">
      <p>${user ? `<strong>${esc(user.name)}</strong> ` : ''}${esc(n.text)}</p>
      <span>${timeAgo(n.at)}${n.read ? '' : ' · جديد'}</span>
    </span>
    ${n.read ? '' : '<span class="unread-dot"></span>'}
  </button>`;
}

function notificationsHTML() {
  const unread = unreadNotifications();
  return `<section class="page">
    <div class="page-head">
      <h1 class="page-title">الإشعارات</h1>
      <button class="btn btn-ghost btn-sm" data-action="mark-read">${unread ? 'تحديد الكل كمقروء' : 'كل شيء مقروء'}</button>
    </div>
    <div class="notif-list">${state.notifications.map(notificationRow).join('')}</div>
  </section>`;
}

function profilePostsHTML(user) {
  if (state.profileTab === 'saved') {
    const saved = state.posts.filter((p) => p.saved);
    if (!saved.length) return `<div class="empty-state">${icon('bookmark')}<strong>لا توجد منشورات محفوظة</strong><span>احفظ ما يعجبك لتجده هنا لاحقًا.</span></div>`;
    return `<div class="explore-grid">${saved.map(tileHTML).join('')}</div>`;
  }
  if (state.profileTab === 'gallery') {
    const arts = state.posts.filter((p) => p.userId === user.id);
    if (!arts.length) return `<div class="empty-state">${icon('image')}<strong>المعرض فارغ</strong><span>ستظهر هنا صور ومنشورات الحساب.</span></div>`;
    return `<div class="explore-grid">${arts.map(tileHTML).join('')}</div>`;
  }
  const posts = state.posts.filter((p) => p.userId === user.id);
  if (!posts.length) return `<div class="empty-state">${icon('image')}<strong>لا توجد منشورات بعد</strong><span>${user.id === state.user.id ? 'شارك أول لحظة لك في صدى.' : 'هذا الحساب لم ينشر شيئًا بعد.'}</span>${user.id === state.user.id ? '<button class="btn btn-primary btn-sm" data-action="open-compose">إنشاء منشور</button>' : ''}</div>`;
  return `<div class="feed">${posts.map(postCard).join('')}</div>`;
}

function profileHTML() {
  const user = profileUser();
  const own = user.id === state.user.id;
  const postsCount = state.posts.filter((p) => p.userId === user.id).length;
  const followers = user.followers + (!own && isFollowing(user.id) ? 1 : 0);
  const tabs = own
    ? [['posts', 'المنشورات'], ['gallery', 'المعرض'], ['saved', 'المحفوظات']]
    : [['posts', 'المنشورات'], ['gallery', 'المعرض']];
  return `<section class="page">
    <div class="profile-card">
      <div class="profile-cover"><img src="${art(`cover-${user.username}`, 'wide')}" alt="" loading="lazy"></div>
      <div class="profile-main">
        <div class="profile-avatar">${avatar(user, 96)}</div>
        <div class="profile-top-row">
          <div class="profile-identity">
            <h1>${esc(user.name)}${user.verified ? icon('verified', 'verified') : ''}</h1>
            <span>${handle(user)}${own ? ' · حسابك' : ''}</span>
          </div>
          <div class="profile-actions">
            ${own ? `
              <button class="btn btn-ghost" data-action="edit-profile">${icon('settings')} تعديل الملف</button>
              <button class="btn btn-primary" data-action="share-profile">${icon('share')} مشاركة</button>
            ` : `
              <button class="btn ${isFollowing(user.id) ? 'btn-ghost' : 'btn-primary'}" data-action="follow" data-id="${user.id}">${isFollowing(user.id) ? 'متابَع' : 'متابعة'}</button>
              <button class="btn btn-ghost" data-action="message-user" data-id="${user.id}">${icon('message')} رسالة</button>
            `}
          </div>
        </div>
        <p class="profile-bio">${nl2br(user.bio)}</p>
        <div class="profile-stats">
          <span><b>${postsCount}</b> منشور</span>
          <span><b>${fmtCount(followers)}</b> متابع</span>
          <span><b>${fmtCount(user.following)}</b> أتابع</span>
        </div>
      </div>
      <div class="profile-tabs">
        ${tabs.map(([key, label]) => `<button class="profile-tab ${state.profileTab === key ? 'active' : ''}" data-action="profile-tab" data-tab="${key}">${label}</button>`).join('')}
      </div>
    </div>
    <div class="profile-content">${profilePostsHTML(user)}</div>
  </section>`;
}

function renderView() {
  const view = document.getElementById('view');
  const map = {
    home: homeHTML,
    explore: exploreHTML,
    reels: reelsHTML,
    messages: messagesHTML,
    notifications: notificationsHTML,
    profile: profileHTML
  };
  view.innerHTML = (map[state.view] || homeHTML)();
  document.body.classList.toggle('chat-open', state.view === 'messages' && !!state.activeChat);
  requestAnimationFrame(() => {
    if (state.view === 'messages' && state.activeChat) scrollChatBottom();
  });
}

function render(scrollTop = false) {
  const y = window.scrollY;
  renderSidebar();
  renderMobileHeader();
  renderBottomNav();
  renderRail();
  renderView();
  requestAnimationFrame(() => window.scrollTo(0, scrollTop ? 0 : y));
}

function scrollChatBottom() {
  const body = document.querySelector('.chat-body');
  if (body) body.scrollTop = body.scrollHeight;
}

function go(view) {
  state.view = view;
  if (view === 'profile') {
    state.profileId = null;
    state.profileTab = 'posts';
  }
  if (view !== 'messages') state.activeChat = null;
  save();
  render(true);
}

function openProfile(id) {
  state.profileId = id === state.user.id ? null : id;
  state.profileTab = 'posts';
  state.view = 'profile';
  save();
  render(true);
}

function syncPostUI(id) {
  const post = postById(id);
  if (!post) return;
  const card = document.querySelector(`.post[data-post-id="${id}"]`);
  if (!card) return;
  const likes = post.likes + (post.liked ? 1 : 0);
  const likeBtn = card.querySelector('[data-action="like"]');
  if (likeBtn) {
    likeBtn.classList.toggle('liked', post.liked);
    const count = likeBtn.querySelector('.like-count');
    if (count) count.textContent = fmtCount(likes);
  }
  const label = card.querySelector('[data-likes-label]');
  if (label) label.textContent = `${fmtCount(likes)} إعجاب`;
  const saveBtn = card.querySelector('[data-action="save"]');
  if (saveBtn) saveBtn.classList.toggle('saved', post.saved);
}

function toggleLike(id) {
  const post = postById(id);
  if (!post) return;
  post.liked = !post.liked;
  save();
  syncPostUI(id);
  const likes = post.likes + (post.liked ? 1 : 0);
  modalRoot.querySelectorAll(`[data-action="like"][data-id="${id}"]`).forEach((btn) => {
    btn.classList.toggle('liked', post.liked);
    const count = btn.querySelector('.like-count');
    if (count) count.textContent = fmtCount(likes);
  });
  const card = document.querySelector(`.post[data-post-id="${id}"]`);
  if (card && post.liked) {
    const burst = card.querySelector('.heart-burst');
    if (burst) {
      burst.classList.remove('pop');
      void burst.offsetWidth;
      burst.classList.add('pop');
    }
  }
}

function toggleSave(id) {
  const post = postById(id);
  if (!post) return;
  post.saved = !post.saved;
  save();
  syncPostUI(id);
  modalRoot.querySelectorAll(`[data-action="save"][data-id="${id}"]`).forEach((btn) => {
    btn.classList.toggle('saved', post.saved);
    const label = btn.querySelector('span');
    if (label) label.textContent = post.saved ? 'محفوظ' : 'حفظ';
  });
  toast(post.saved ? 'تم حفظ المنشور' : 'أُزيل من المحفوظات', 'bookmark');
}

function toggleFollow(id) {
  const user = userById(id);
  if (id === state.user.id) return;
  if (isFollowing(id)) {
    state.following = state.following.filter((f) => f !== id);
    toast(`ألغيت متابعة ${user.name}`);
  } else {
    state.following.push(id);
    toast(`تابعت ${user.name}`, 'check');
  }
  save();
  render();
}

function shareItem() {
  const url = `${location.origin}${location.pathname}#sada`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).catch(() => {});
  }
  toast('تم نسخ رابط المنشور', 'share');
}

function markAllRead() {
  state.notifications.forEach((n) => { n.read = true; });
  save();
  render();
  toast('تم تحديد كل الإشعارات كمقروءة');
}

function markNotificationRead(id) {
  const n = state.notifications.find((item) => item.id === id);
  if (!n) return;
  n.read = true;
  save();
}

function openNotification(id) {
  const n = state.notifications.find((item) => item.id === id);
  if (!n) return;
  markNotificationRead(id);
  if (n.type === 'follow' && n.userId) {
    openProfile(n.userId);
    return;
  }
  if (n.type === 'system') {
    render();
    openFreePlan();
    return;
  }
  if (n.postId && postById(n.postId)) {
    render();
    openPost(n.postId);
    return;
  }
  render();
}

function openChat(id) {
  state.activeChat = id;
  const chat = chatById(id);
  if (chat) chat.unread = 0;
  save();
  render();
}

function openChatWithUser(userId) {
  let chat = state.chats.find((c) => c.userId === userId);
  if (!chat) {
    chat = { id: uid('ch'), userId, unread: 0, messages: [] };
    state.chats.unshift(chat);
  }
  state.activeChat = chat.id;
  state.view = 'messages';
  save();
  render(true);
}

function scrollToReels() {
  const reel = document.querySelector('.reel');
  if (reel) reel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleReelLike(id) {
  const reel = state.reels.find((r) => r.id === id);
  if (!reel) return;
  reel.liked = !reel.liked;
  save();
  const card = document.querySelector(`.reel[data-reel-id="${id}"]`);
  if (card) {
    const btn = card.querySelector('[data-action="reel-like"]');
    if (btn) {
      btn.classList.toggle('liked', reel.liked);
      const count = btn.querySelector('span');
      if (count) count.textContent = fmtCount(reel.likes + (reel.liked ? 1 : 0));
    }
  }
}

function openModal(html, options = {}) {
  modalRoot.innerHTML = `<div class="modal-backdrop">${html}</div>`;
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
  if (options.focus) {
    requestAnimationFrame(() => {
      const field = modalRoot.querySelector(options.focus);
      if (field) field.focus();
    });
  }
}

function closeModal() {
  modalRoot.innerHTML = '';
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

function openCompose() {
  state.draft = { text: '', image: null };
  openModal(`<form class="modal-card" data-form="compose">
    <div class="modal-head">
      <strong>إنشاء منشور</strong>
      <button type="button" class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button>
    </div>
    <div class="modal-body">
      <div class="compose-user">
        ${avatar(state.user, 42)}
        <div><strong>${esc(state.user.name)}${state.user.verified ? icon('verified', 'verified') : ''}</strong><span>سيظهر للجميع · ${icon('globe')}</span></div>
      </div>
      <textarea class="compose-textarea" data-draft-text placeholder="بماذا تفكر؟ شارك لحظة أو فكرة أو إبداعًا…" maxlength="500" aria-label="نص المنشور"></textarea>
      <div class="compose-preview" id="compose-preview" hidden></div>
      <div class="compose-tools">
        <div class="compose-tools-left">
          <button type="button" class="icon-btn" data-action="pick-image" aria-label="إضافة صورة">${icon('image')}</button>
          <button type="button" class="icon-btn" data-action="compose-emoji" aria-label="إضافة إيموجي">${icon('emoji')}</button>
        </div>
        <span class="counter" id="compose-counter">0 / 500</span>
      </div>
      <div class="emoji-row">
        ${['😊', '✨', '🔥', '❤️', '👏', '🌅', '☕️', '🚀'].map((e) => `<button type="button" class="emoji-btn" data-action="compose-emoji" data-emoji="${e}">${e}</button>`).join('')}
      </div>
    </div>
    <div class="modal-foot">
      <button type="button" class="btn btn-ghost" data-action="close-modal">إلغاء</button>
      <button type="submit" class="btn btn-primary" id="compose-submit" disabled>نشر</button>
    </div>
  </form>`, { focus: '.compose-textarea' });
}

function updateComposeState() {
  const form = modalRoot.querySelector('[data-form="compose"]');
  if (!form) return;
  const text = form.querySelector('.compose-textarea').value;
  const counter = form.querySelector('#compose-counter');
  const submit = form.querySelector('#compose-submit');
  if (counter) counter.textContent = `${text.length} / 500`;
  if (submit) submit.disabled = !text.trim() && !state.draft.image;
}

function updateComposePreview() {
  const preview = modalRoot.querySelector('#compose-preview');
  if (!preview) return;
  if (state.draft.image) {
    preview.hidden = false;
    preview.innerHTML = `<img src="${state.draft.image}" alt="معاينة الصورة"><button type="button" class="remove-media" data-action="remove-media" aria-label="إزالة الصورة">${icon('close')}</button>`;
  } else {
    preview.hidden = true;
    preview.innerHTML = '';
  }
  updateComposeState();
}

function publishPost(form) {
  const text = form.querySelector('.compose-textarea').value.trim();
  const image = state.draft.image;
  if (!text && !image) return;
  state.posts.unshift({
    id: uid('p'),
    userId: state.user.id,
    text,
    art: image || art(`new-post-${Date.now()}`),
    likes: 0,
    liked: false,
    saved: false,
    at: Date.now(),
    comments: []
  });
  state.draft = { text: '', image: null };
  state.view = 'home';
  save();
  closeModal();
  render(true);
  toast('تم نشر منشورك ✨');
}

function openComments(id) {
  const post = postById(id);
  if (!post) return;
  const user = userById(post.userId);
  const likes = post.likes + (post.liked ? 1 : 0);
  openModal(`<div class="modal-card" data-comments-modal="${id}">
    <div class="modal-head">
      <strong>التعليقات (${post.comments.length})</strong>
      <button class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button>
    </div>
    <div class="post-summary">
      <img src="${post.art}" alt="">
      <div><strong>${esc(user.name)}</strong><p>${esc(post.text)}</p></div>
    </div>
    <div class="comments-list" id="comments-list">
      ${post.comments.length ? post.comments.map((c) => {
        const cu = userById(c.userId);
        return `<div class="comment-row">
          ${avatar(cu, 34)}
          <div class="comment-row-body">
            <p><strong>${esc(cu.name)}</strong>${esc(c.text)}</p>
            <span>${timeAgo(c.at)} · أعجبني</span>
          </div>
        </div>`;
      }).join('') : `<div class="empty-state" style="padding:26px">${icon('comment')}<strong>لا توجد تعليقات</strong><span>كن أول من يعلّق.</span></div>`}
    </div>
    <div class="comment-form">
      ${avatar(state.user, 32)}
      <form data-form="comment" data-post="${id}" style="display:flex;gap:7px;flex:1;align-items:center">
        <input type="text" id="comment-input" placeholder="أضف تعليقًا…" maxlength="300" aria-label="تعليق" autocomplete="off">
        <button class="send-btn" type="submit" aria-label="إرسال">${icon('send')}</button>
      </form>
    </div>
    <div class="modal-foot" style="justify-content:space-between">
      <button class="action-btn ${post.liked ? 'liked' : ''}" data-action="like" data-id="${id}">${icon('heart')}<span class="like-count">${fmtCount(likes)}</span></button>
      <button class="action-btn ${post.saved ? 'saved' : ''}" data-action="save" data-id="${id}">${icon('bookmark')}<span>${post.saved ? 'محفوظ' : 'حفظ'}</span></button>
    </div>
  </div>`, { focus: '#comment-input' });
}

function submitComment(form) {
  const id = form.dataset.post;
  const post = postById(id);
  const input = form.querySelector('input');
  const text = input.value.trim();
  if (!post || !text) return;
  post.comments.push({ id: uid('c'), userId: state.user.id, text, at: Date.now() });
  save();
  syncPostUI(id);
  render();
  openComments(id);
  toast('تمت إضافة تعليقك');
}

function openPost(id) {
  const post = postById(id);
  if (!post) return;
  const user = userById(post.userId);
  const likes = post.likes + (post.liked ? 1 : 0);
  openModal(`<div class="lightbox">
    <img src="${post.art}" alt="${esc(user.name)}">
    <div class="lightbox-info">
      ${avatar(user, 40)}
      <div style="flex:1;min-width:0">
        <strong>${esc(user.name)}${user.verified ? icon('verified', 'verified') : ''}</strong>
        <p style="color:var(--faint);font-size:10.5px">${handle(user)} · ${timeAgo(post.at)}</p>
      </div>
      <button class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button>
    </div>
    <p class="post-text" style="padding-top:0">${formatText(post.text)}</p>
    <div class="post-actions" style="padding:0 14px 12px">
      <div class="post-actions-left">
        <button class="action-btn ${post.liked ? 'liked' : ''}" data-action="like" data-id="${post.id}">${icon('heart')}<span class="like-count">${fmtCount(likes)}</span></button>
        <button class="action-btn" data-action="open-comments" data-id="${post.id}">${icon('comment')}<span>${post.comments.length}</span></button>
      </div>
      <button class="action-btn ${post.saved ? 'saved' : ''}" data-action="save" data-id="${post.id}" aria-label="حفظ">${icon('bookmark')}</button>
    </div>
  </div>`);
}

function openStory(id) {
  const index = state.stories.findIndex((s) => s.id === id);
  if (index < 0) return;
  currentStory = id;
  const story = state.stories[index];
  story.viewed = true;
  save();
  renderStoryView();
}

function renderStoryView() {
  if (!currentStory) return;
  const index = state.stories.findIndex((s) => s.id === currentStory);
  if (index < 0) return closeStory();
  const story = state.stories[index];
  const user = userById(story.userId);
  modalRoot.innerHTML = `<div class="story-view-backdrop">
    <div class="story-card">
      <div class="story-bars">
        ${state.stories.map((s, i) => `<span class="story-bar ${i < index ? 'done' : ''} ${i === index ? 'active' : ''}"><i></i></span>`).join('')}
      </div>
      <div class="story-view-head">
        ${avatar(user, 32)}
        <strong>${esc(user.name)}</strong>
        <time>${timeAgo(story.at)}</time>
        <button class="icon-btn story-close" data-action="close-story" aria-label="إغلاق">${icon('close')}</button>
      </div>
      <img class="story-view-art" src="${story.art}" alt="${esc(user.name)}">
      <div class="story-nav">
        <button data-action="story-prev" aria-label="السابق"></button>
        <button data-action="story-next" aria-label="التالي"></button>
      </div>
      <div class="story-view-foot">
        <form data-form="story-reply" style="display:flex;gap:7px;flex:1">
          <input type="text" placeholder="أرسل ردًا على القصة…" aria-label="رد على القصة" maxlength="200">
          <button class="send-btn" type="submit" aria-label="إرسال">${icon('send')}</button>
        </form>
      </div>
    </div>
  </div>`;
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(() => advanceStory(1), 5000);
  renderSidebar();
}

function advanceStory(direction) {
  if (!currentStory) return;
  const index = state.stories.findIndex((s) => s.id === currentStory);
  const next = index + direction;
  if (next < 0) {
    renderStoryView();
    return;
  }
  if (next >= state.stories.length) {
    closeStory();
    return;
  }
  currentStory = state.stories[next].id;
  state.stories[next].viewed = true;
  save();
  renderStoryView();
}

function closeStory() {
  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = null;
  currentStory = null;
  modalRoot.innerHTML = '';
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
  render();
}

function createStoryFlow() {
  pickImage((url) => {
    state.stories.unshift({ id: uid('s'), userId: state.user.id, art: url, at: Date.now(), viewed: false });
    save();
    render();
    toast('تمت إضافة قصتك ✨');
  });
}

function openPostMenu(id) {
  const post = postById(id);
  if (!post) return;
  const own = post.userId === state.user.id;
  openModal(`<div class="modal-card" style="max-width:340px">
    <div class="modal-head"><strong>خيارات المنشور</strong><button class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button></div>
    <div class="modal-body" style="display:flex;flex-direction:column;gap:6px;padding:10px">
      <button class="nav-item" style="width:100%" data-action="share" data-id="${id}">${icon('share')} نسخ رابط المنشور</button>
      <button class="nav-item" style="width:100%" data-action="hide-post" data-id="${id}">${icon('close')} إخفاء من خلاصتي</button>
      ${own ? `<button class="nav-item" style="width:100%;color:#fb7185" data-action="confirm-delete-post" data-id="${id}">${icon('trash')} حذف المنشور</button>` : ''}
    </div>
  </div>`);
}

function hidePost(id) {
  state.posts = state.posts.filter((p) => p.id !== id);
  save();
  closeModal();
  render();
  toast('تم إخفاء المنشور');
}

function confirmDeletePost(id) {
  const post = postById(id);
  if (!post) return;
  openModal(`<div class="modal-card confirm-card">
    <div class="danger-icon">${icon('trash')}</div>
    <h3>حذف المنشور؟</h3>
    <p>سيُحذف المنشور وتعليقاته نهائيًا من جهازك.</p>
    <div class="confirm-actions">
      <button class="btn btn-ghost" data-action="close-modal">إلغاء</button>
      <button class="btn btn-danger" data-action="delete-post" data-id="${id}">حذف</button>
    </div>
  </div>`);
}

function deletePost(id) {
  state.posts = state.posts.filter((p) => p.id !== id);
  save();
  closeModal();
  render();
  toast('تم حذف المنشور');
}

function openFreePlan() {
  openModal(`<div class="modal-card" style="max-width:430px">
    <div class="plan-hero">
      <span class="logo-mark">ص</span>
      <h2>صدى مجاني للأبد</h2>
      <p>كل ما تحتاجه للتواصل، بدون فواتير أو التزامات.</p>
      <span class="plan-price">السعر <b>0</b> ريال / دائمًا</span>
    </div>
    <div class="feature-list">
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>نشر بلا حدود</strong><span>منشورات وقصص وصور بدون عدّاد أو قيود.</span></div></div>
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>رسائل وريلز</strong><span>محادثات فورية وريلز بتجربة سلسة على كل الأجهزة.</span></div></div>
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>بدون إعلانات</strong><span>لا إعلانات مزعجة ولا تتبع لسلوكك.</span></div></div>
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>خصوصية كاملة</strong><span>بياناتك محفوظة على جهازك فقط ولا تُرسل لأي خادم.</span></div></div>
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>وضع ليلي ونهاري</strong><span>مظهر مريح للعين في أي وقت.</span></div></div>
      <div class="feature-item"><span class="feature-check">${icon('check')}</span><div><strong>يعمل دون اتصال</strong><span>بعد التحميل الأول، تصفح منشوراتك بدون إنترنت.</span></div></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-primary btn-block" data-action="close-modal">ابدأ الآن — مجانًا</button>
    </div>
  </div>`);
}

function openSettings() {
  const bytes = new Blob([JSON.stringify(state)]).size;
  openModal(`<div class="modal-card">
    <div class="modal-head"><strong>الإعدادات</strong><button class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="setting-row">
        <div class="setting-info"><strong>المظهر</strong><span>اختر الوضع المريح لعينيك</span></div>
        <div class="segmented">
          <button data-action="set-theme" data-theme="dark" class="${state.theme === 'dark' ? 'active' : ''}">${icon('moon')} داكن</button>
          <button data-action="set-theme" data-theme="light" class="${state.theme === 'light' ? 'active' : ''}">${icon('sun')} فاتح</button>
        </div>
      </div>
      <div class="setting-row">
        <div class="setting-info"><strong>الملف الشخصي</strong><span>عدّل اسمك ونبذتك وصورتك</span></div>
        <button class="btn btn-ghost btn-sm" data-action="edit-profile">تعديل</button>
      </div>
      <div class="setting-row">
        <div class="setting-info"><strong>الخطة المجانية</strong><span>كل الميزات متاحة لك</span></div>
        <button class="btn btn-soft btn-sm" data-action="free-plan">التفاصيل</button>
      </div>
      <div class="setting-row">
        <div class="setting-info"><strong>مساحة البيانات</strong><span>${(bytes / 1024).toFixed(1)} كيلوبايت على جهازك</span></div>
        <span class="feature-check">${icon('lock')}</span>
      </div>
      <div class="setting-row">
        <div class="setting-info"><strong>تثبيت التطبيق</strong><span>أضف صدى إلى شاشتك الرئيسية وافتحه كتطبيق مستقل.</span></div>
        <button class="btn btn-ghost btn-sm" data-action="install-app">${installPrompt ? 'تثبيت' : 'كيف؟'}</button>
      </div>
      <div class="setting-row">
        <div class="setting-info"><strong>إعادة ضبط</strong><span>حذف كل البيانات المحلية والبدء من جديد</span></div>
        <button class="btn btn-danger btn-sm" data-action="confirm-reset">إعادة ضبط</button>
      </div>
      <div class="setting-row" style="border-bottom:0">
        <div class="setting-info"><strong>عن صدى</strong><span>شبكة تواصل اجتماعي عربية · الإصدار 1.0 · مجانية بالكامل</span></div>
        ${icon('sparkles')}
      </div>
    </div>
  </div>`);
}

function openEditProfile() {
  openModal(`<form class="modal-card" data-form="edit-profile">
    <div class="modal-head"><strong>تعديل الملف الشخصي</strong><button type="button" class="icon-btn" data-action="close-modal" aria-label="إغلاق">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="compose-user" style="margin-bottom:16px">
        <span id="edit-avatar">${avatar(state.user, 62)}</span>
        <div style="flex:1"><strong>${esc(state.user.name)}</strong><span>${handle(state.user)}</span></div>
        <button type="button" class="btn btn-ghost btn-sm" data-action="pick-avatar">${icon('camera')} تغيير</button>
      </div>
      <div class="form-field"><label for="edit-name">الاسم</label><input id="edit-name" name="name" value="${esc(state.user.name)}" maxlength="40" required></div>
      <div class="form-field"><label for="edit-username">اسم المستخدم</label><input id="edit-username" name="username" value="${esc(state.user.username)}" maxlength="24" required></div>
      <div class="form-field"><label for="edit-bio">نبذة</label><textarea id="edit-bio" name="bio" maxlength="160">${esc(state.user.bio)}</textarea></div>
    </div>
    <div class="modal-foot">
      <button type="button" class="btn btn-ghost" data-action="close-modal">إلغاء</button>
      <button class="btn btn-primary" type="submit">حفظ التغييرات</button>
    </div>
  </form>`);
}

function saveProfile(form) {
  const name = form.querySelector('[name="name"]').value.trim();
  const username = form.querySelector('[name="username"]').value.trim().replace(/^@/, '').replace(/\s+/g, '_');
  const bio = form.querySelector('[name="bio"]').value.trim();
  if (!name || !username) return;
  state.user.name = name;
  state.user.username = username;
  state.user.bio = bio;
  save();
  closeModal();
  render();
  toast('تم تحديث ملفك الشخصي');
}

function confirmReset() {
  openModal(`<div class="modal-card confirm-card">
    <div class="danger-icon">${icon('trash')}</div>
    <h3>إعادة ضبط التطبيق؟</h3>
    <p>ستُحذف كل منشوراتك ورسائلك وإعداداتك المحلية. لا يمكن التراجع.</p>
    <div class="confirm-actions">
      <button class="btn btn-ghost" data-action="close-modal">إلغاء</button>
      <button class="btn btn-danger" data-action="do-reset">إعادة الضبط</button>
    </div>
  </div>`);
}

function resetApp() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  state = makeSeed();
  setTheme(state.theme);
  closeModal();
  render();
  toast('تمت إعادة ضبط التطبيق');
}

function applyEditAvatar(url) {
  state.user.avatar = url;
  save();
  const holder = document.getElementById('edit-avatar');
  if (holder) holder.innerHTML = avatar(state.user, 62);
  renderSidebar();
  renderMobileHeader();
  toast('تم تحديث صورتك');
}

function scheduleReply(chatId) {
  const chat = chatById(chatId);
  if (!chat) return;
  chat.typing = true;
  save();
  if (state.view === 'messages' && state.activeChat === chatId) {
    render();
    scrollChatBottom();
  }
  const delay = 1400 + Math.random() * 1200;
  setTimeout(() => {
    const target = chatById(chatId);
    if (!target) return;
    target.typing = false;
    const text = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    target.messages.push({ id: uid('m'), from: 'them', text, at: Date.now() });
    if (state.view === 'messages' && state.activeChat === chatId) {
      save();
      render();
      scrollChatBottom();
    } else {
      target.unread = (target.unread || 0) + 1;
      save();
      renderSidebar();
      renderMobileHeader();
      renderBottomNav();
    }
  }, delay);
}

function pickImage(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file) return;
    compressImage(file, callback);
  });
  input.click();
}

function compressImage(file, callback) {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1280;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      try {
        callback(canvas.toDataURL('image/jpeg', 0.82));
      } catch {
        callback(reader.result);
      }
    };
    img.onerror = () => callback(reader.result);
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function handleAction(action, ds, el) {
  switch (action) {
    case 'nav':
      go(ds.view);
      break;
    case 'theme':
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
      save();
      render();
      break;
    case 'set-theme':
      setTheme(ds.theme);
      save();
      render();
      modalRoot.querySelectorAll('[data-action="set-theme"]').forEach((b) => b.classList.toggle('active', b.dataset.theme === state.theme));
      break;
    case 'open-compose':
      openCompose();
      break;
    case 'close-modal':
      closeModal();
      break;
    case 'open-story':
      openStory(ds.id);
      break;
    case 'create-story':
      createStoryFlow();
      break;
    case 'close-story':
      closeStory();
      break;
    case 'story-next':
      advanceStory(1);
      break;
    case 'story-prev':
      advanceStory(-1);
      break;
    case 'like':
      toggleLike(ds.id);
      break;
    case 'save':
      toggleSave(ds.id);
      break;
    case 'share':
      shareItem();
      break;
    case 'open-comments':
      openComments(ds.id);
      break;
    case 'open-post':
      openPost(ds.id);
      break;
    case 'open-profile':
      closeModal();
      openProfile(ds.id);
      break;
    case 'follow':
      toggleFollow(ds.id);
      break;
    case 'filter':
      state.filter = ds.filter;
      save();
      render();
      break;
    case 'clear-search':
      state.query = '';
      save();
      render();
      break;
    case 'trend':
      state.query = ds.q;
      state.filter = 'all';
      state.view = 'explore';
      save();
      render(true);
      break;
    case 'open-chat':
      openChat(ds.id);
      break;
    case 'back-chats':
      state.activeChat = null;
      save();
      render();
      break;
    case 'open-notification':
      openNotification(ds.id);
      break;
    case 'mark-read':
      markAllRead();
      break;
    case 'settings':
      openSettings();
      break;
    case 'free-plan':
      openFreePlan();
      break;
    case 'edit-profile':
      openEditProfile();
      break;
    case 'install-app':
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt.userChoice.finally(() => { installPrompt = null; });
        closeModal();
        toast('جارٍ تثبيت صدى على جهازك', 'sparkles');
      } else {
        toast('من قائمة المتصفح اختر «إضافة إلى الشاشة الرئيسية»', 'sparkles');
      }
      break;
    case 'confirm-reset':
      confirmReset();
      break;
    case 'do-reset':
      resetApp();
      break;
    case 'profile-tab':
      state.profileTab = ds.tab;
      save();
      render();
      break;
    case 'post-menu':
      openPostMenu(ds.id);
      break;
    case 'hide-post':
      hidePost(ds.id);
      break;
    case 'confirm-delete-post':
      confirmDeletePost(ds.id);
      break;
    case 'delete-post':
      deletePost(ds.id);
      break;
    case 'share-profile':
      shareItem();
      break;
    case 'message-user':
      openChatWithUser(ds.id);
      break;
    case 'reel-like':
      toggleReelLike(ds.id);
      break;
    case 'reel-comments':
      toast('تعليقات الريلز ستُفتح قريبًا في هذا العرض التجريبي', 'comment');
      break;
    case 'reel-save':
      toast('حفظ الريلز سيتوفر قريبًا', 'bookmark');
      break;
    case 'pick-image':
      pickImage((url) => {
        state.draft.image = url;
        updateComposePreview();
      });
      break;
    case 'pick-avatar':
      pickImage((url) => applyEditAvatar(url));
      break;
    case 'remove-media':
      state.draft.image = null;
      updateComposePreview();
      break;
    case 'compose-emoji': {
      const field = modalRoot.querySelector('.compose-textarea');
      if (!field) break;
      const emoji = ds.emoji || '😊';
      const start = field.selectionStart ?? field.value.length;
      field.value = field.value.slice(0, start) + emoji + field.value.slice(field.selectionEnd ?? start);
      field.focus();
      field.selectionStart = field.selectionEnd = start + emoji.length;
      updateComposeState();
      break;
    }
    case 'chat-emoji': {
      const input = document.getElementById('chat-input');
      if (input) {
        input.value += '😊';
        input.focus();
      }
      break;
    }
    case 'art-double':
      break;
    default:
      break;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (target) {
    handleAction(target.dataset.action, target.dataset, target);
    return;
  }
  if (event.target.classList.contains('modal-backdrop')) closeModal();
  if (event.target.classList.contains('story-view-backdrop')) closeStory();
  if (event.target.classList.contains('lightbox-backdrop')) closeModal();
});

document.addEventListener('dblclick', (event) => {
  const artEl = event.target.closest('.post-art');
  if (artEl) {
    const id = artEl.dataset.id;
    const post = postById(id);
    if (post && !post.liked) {
      post.liked = true;
      save();
      syncPostUI(id);
    }
    const burst = artEl.querySelector('.heart-burst');
    if (burst) {
      burst.classList.remove('pop');
      void burst.offsetWidth;
      burst.classList.add('pop');
    }
    return;
  }
  const reelArt = event.target.closest('.reel-art');
  if (reelArt) {
    const reel = reelArt.closest('.reel');
    if (reel) toggleReelLike(reel.dataset.reelId);
  }
});

document.addEventListener('input', (event) => {
  const el = event.target;
  if (el.id === 'explore-search') {
    state.query = el.value;
    const results = document.getElementById('explore-results');
    if (results) results.innerHTML = exploreResultsHTML();
  }
  if (el.id === 'chat-search') {
    const q = el.value.trim().toLowerCase();
    document.querySelectorAll('.chat-row').forEach((row) => {
      const user = userById(row.dataset.user);
      const hay = `${user.name} ${user.username}`.toLowerCase();
      row.style.display = hay.includes(q) ? '' : 'none';
    });
  }
  if (el.matches('[data-draft-text]')) {
    state.draft.text = el.value;
    updateComposeState();
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  const kind = form.dataset.form;
  if (!kind) return;
  event.preventDefault();
  if (kind === 'compose') {
    publishPost(form);
  } else if (kind === 'comment') {
    submitComment(form);
  } else if (kind === 'chat') {
    const chatId = form.dataset.chat;
    const input = form.querySelector('input');
    const text = input.value.trim();
    if (!text) return;
    const chat = chatById(chatId);
    if (!chat) return;
    chat.messages.push({ id: uid('m'), from: 'me', text, at: Date.now() });
    chat.unread = 0;
    save();
    render();
    scrollChatBottom();
    scheduleReply(chatId);
  } else if (kind === 'edit-profile') {
    saveProfile(form);
  } else if (kind === 'rail-search') {
    state.query = form.querySelector('input').value.trim();
    state.filter = 'all';
    state.view = 'explore';
    save();
    render(true);
  } else if (kind === 'explore-search') {
    state.query = form.querySelector('input').value.trim();
    const results = document.getElementById('explore-results');
    if (results) results.innerHTML = exploreResultsHTML();
  } else if (kind === 'story-reply') {
    const input = form.querySelector('input');
    if (input.value.trim()) {
      input.value = '';
      toast('تم إرسال ردك على القصة', 'send');
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (currentStory) closeStory();
    else if (modalRoot.innerHTML) closeModal();
  }
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
});

window.addEventListener('appinstalled', () => {
  installPrompt = null;
  toast('تم تثبيت صدى بنجاح', 'sparkles');
});

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

setTheme(state.theme);
render();
window.scrollTo(0, 0);
