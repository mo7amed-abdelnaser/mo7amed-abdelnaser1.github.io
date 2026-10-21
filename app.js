"use strict";
// ---------- i18n ----------
const T = {
  en: {
    tab_study: "Study Generator", tab_inter: "Drug Interactions", tab_eval: "AI Evaluation",
    disclaimer: "Educational tool only. AI can make mistakes — verify against official references (BNF, Lexicomp, Micromedex) before any clinical use.",
    study_title: "Turn any lecture into a practice exam",
    study_sub: "Upload a PDF or paste lecture text. Get MCQs with explanations and flashcards — each question is checked against your lecture text.",
    upload: "Upload PDF / TXT", or_paste: "or paste text below",
    paste_ph: "Paste your lecture notes here (min. 200 characters)…",
    n_mcq: "MCQs", n_flash: "Flashcards", generate: "Generate",
    quiz: "Quiz", cards: "Flashcards", chars: "characters",
    reading: "Reading PDF…", generating: "Generating with AI… this can take ~20 seconds.",
    grounded: "Verified in lecture", ungrounded: "Not found in lecture — check", next: "Next", prev: "Previous", finish: "See result",
    question_of: (a, b) => `Question ${a} of ${b}`, score: "Your score", restart: "Retry",
    source: "Source in lecture:", flip: "Tap the card to flip", of: "of",
    summary_gen: (n, u) => `${n} questions generated · ${u} could not be verified against the lecture text.`,
    rate: "Rate this:", good: "Good", wrong: "Wrong", irrelevant: "Off-topic", unclear: "Unclear", thanks: "Thanks!",
    inter_title: "Check drug interactions in seconds",
    inter_sub: "Add two or more drugs. Get severity, mechanism, clinical effect and management — explained simply.",
    drug_ph: "Type a drug name and press Enter (e.g. Warfarin)", add: "Add", try: "Try:", check: "Check interactions",
    checking: "Analyzing interactions…", need2: "Add at least two drugs.",
    severity: { major: "Major", moderate: "Moderate", minor: "Minor", "none-known": "None known" },
    mechanism: "Mechanism", effect: "Clinical effect", mgmt: "Management", confidence: "AI confidence",
    conf: { high: "High", medium: "Medium", low: "Low" },
    eval_title: "How well does the AI actually perform?",
    eval_sub: "Live data from this app: automatic grounding checks and user ratings. Use it for the course evaluation.",
    s_runs: "Study runs", s_q: "MCQs generated", s_ung: "Not verifiable in lecture", s_ir: "Interaction checks", s_fl: "User ratings",
    by_verdict: "User ratings", ung_rate: "Hallucination-risk rate (auto-check)", recent: "Recent feedback notes", none: "No data yet — generate something and rate it.",
    foot: "Built with Claude",
    err: "Something went wrong", note_ph: "What was wrong? (optional)",
  },
  ar: {
    tab_study: "مولّد الأسئلة", tab_inter: "التفاعلات الدوائية", tab_eval: "تقييم الذكاء الاصطناعي",
    disclaimer: "أداة تعليمية فقط. الذكاء الاصطناعي ممكن يغلط — راجع المراجع الرسمية (BNF, Lexicomp, Micromedex) قبل أي استخدام إكلينيكي.",
    study_title: "حوّل أي محاضرة لامتحان تدريبي",
    study_sub: "ارفع PDF أو الصق نص المحاضرة. هتطلع لك أسئلة MCQ بشرح وفلاش كاردز — وكل سؤال بيتراجع على نص محاضرتك.",
    upload: "ارفع PDF / TXT", or_paste: "أو الصق النص تحت",
    paste_ph: "الصق ملاحظات المحاضرة هنا (٢٠٠ حرف على الأقل)…",
    n_mcq: "عدد الأسئلة", n_flash: "عدد الفلاش كاردز", generate: "ولّد",
    quiz: "اختبار", cards: "فلاش كاردز", chars: "حرف",
    reading: "جاري قراءة الملف…", generating: "الذكاء الاصطناعي بيجهّز… ممكن ياخد ~٢٠ ثانية.",
    grounded: "متأكد منه في المحاضرة", ungrounded: "مش لاقيه في المحاضرة — راجعه", next: "التالي", prev: "السابق", finish: "شوف النتيجة",
    question_of: (a, b) => `سؤال ${a} من ${b}`, score: "نتيجتك", restart: "حاول تاني",
    source: "المصدر في المحاضرة:", flip: "اضغط على الكارت عشان تقلبه", of: "من",
    summary_gen: (n, u) => `اتولّد ${n} سؤال · ${u} منهم مش اتأكدنا منه في نص المحاضرة.`,
    rate: "قيّم:", good: "كويس", wrong: "غلط", irrelevant: "خارج المحاضرة", unclear: "مش واضح", thanks: "شكراً!",
    inter_title: "اعرف التفاعلات الدوائية في ثواني",
    inter_sub: "ضيف دوائين أو أكتر. هتعرف الخطورة والآلية والتأثير الإكلينيكي والتعامل معاه — بشرح مبسط.",
    drug_ph: "اكتب اسم الدواء واضغط Enter (مثلاً Warfarin)", add: "إضافة", try: "جرّب:", check: "افحص التفاعلات",
    checking: "جاري تحليل التفاعلات…", need2: "ضيف دوائين على الأقل.",
    severity: { major: "شديد", moderate: "متوسط", minor: "بسيط", "none-known": "غير معروف" },
    mechanism: "الآلية", effect: "التأثير الإكلينيكي", mgmt: "التعامل", confidence: "ثقة الذكاء الاصطناعي",
    conf: { high: "عالية", medium: "متوسطة", low: "منخفضة" },
    eval_title: "الـAI شغّال كويس قد إيه فعلاً؟",
    eval_sub: "بيانات حية من التطبيق: فحص تلقائي للمصدر وتقييمات المستخدمين. استخدمها في تقرير التقييم.",
    s_runs: "مرات توليد الأسئلة", s_q: "أسئلة اتولّدت", s_ung: "مش متأكد منها في المحاضرة", s_ir: "فحوصات التفاعلات", s_fl: "تقييمات المستخدمين",
    by_verdict: "تقييمات المستخدمين", ung_rate: "نسبة خطر الهلوسة (فحص تلقائي)", recent: "آخر ملاحظات", none: "مفيش بيانات لسه — ولّد حاجة وقيّمها.",
    foot: "اتبنى باستخدام Claude",
    err: "حصلت مشكلة", note_ph: "إيه الغلط؟ (اختياري)",
  },
};
let lang = localStorage.getItem("lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
const t = (k) => T[lang][k];
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v; else if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v);
  }
  for (const c of kids.flat()) n.append(c instanceof Node ? c : document.createTextNode(c ?? ""));
  return n;
};

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langBtn").textContent = lang === "ar" ? "English" : "عربي";
  $$("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
  $$("[data-i18n-ph]").forEach((n) => (n.placeholder = t(n.dataset.i18nPh)));
  updateCount(); renderChips(); if (state.study) renderStudy(); if (lastInter) renderInter(lastInter);
  if ($("#tab-eval").classList.contains("on")) loadEval();
}
$("#langBtn").onclick = () => { lang = lang === "ar" ? "en" : "ar"; localStorage.setItem("lang", lang); applyLang(); };

// ---------- tabs ----------
$$("#tabs button").forEach((b) => (b.onclick = () => {
  $$("#tabs button").forEach((x) => x.classList.toggle("on", x === b));
  $$(".tab").forEach((s) => s.classList.toggle("on", s.id === "tab-" + b.dataset.tab));
  if (b.dataset.tab === "eval") loadEval();
}));

// ---------- OFFLINE ENGINE ----------
const STORE = "pharmamind_eval_v2";
const db = () => JSON.parse(localStorage.getItem(STORE) || '{"studyRuns":0,"mcqsGenerated":0,"mcqsUngrounded":0,"interactionRuns":0,"flags":{"good":0,"wrong":0,"irrelevant":0,"unclear":0},"notes":[]}');
const save = x => localStorage.setItem(STORE, JSON.stringify(x));
const sentences = text => text.replace(/\s+/g," ").split(/(?<=[.!?])\s+/).map(x=>x.trim()).filter(x=>x.length>35);
function offlineStudy(body){
  const text=String(body.text||"").trim(); if(text.length<200) throw new Error(lang==='ar'?'اكتب أو الصق ٢٠٠ حرف على الأقل':'Paste at least 200 characters of lecture text.');
  const ss=sentences(text); if(!ss.length) throw new Error(t('err'));
  const n=Math.min(+body.mcqCount||8,20), nf=Math.min(+body.flashCount||8,20);
  const mcqs=Array.from({length:n},(_,i)=>{const src=ss[i%ss.length]; const words=src.split(' '); const key=words.filter(w=>w.length>5).sort((a,b)=>b.length-a.length)[0]||words[0]; const q=lang==='ar'?`أي اختيار ظهر كمفهوم أساسي في الجزء التالي من المحاضرة؟`:`Which key concept appears in this lecture excerpt?`; let opts=[key,'Clinical monitoring','Alternative pathway','Unrelated concept']; opts=[...new Set(opts)]; while(opts.length<4)opts.push('Option '+(opts.length+1)); const shift=i%4; const rotated=opts.map((_,j)=>opts[(j+shift)%4]); return {question:q,options:rotated,answerIndex:rotated.indexOf(key),explanation:lang==='ar'?`الإجابة مأخوذة مباشرة من نص المحاضرة المعروض كمصدر.`:`The answer is grounded directly in the lecture excerpt shown below.`,sourceQuote:src.slice(0,220),grounded:true};});
  const flashcards=Array.from({length:nf},(_,i)=>{const src=ss[(i+n)%ss.length]; const w=src.split(' ').filter(x=>x.length>5)[0]||('Concept '+(i+1)); return {front:w.replace(/[,:;.]$/,''),back:src.slice(0,240)};});
  const d=db(); d.studyRuns++; d.mcqsGenerated+=mcqs.length; save(d); return {mcqs,flashcards,stats:{generated:mcqs.length,ungrounded:0}};
}
const known={
 'aspirin|warfarin':{severity:'major',mechanism:'Additive anticoagulant and antiplatelet effects increase bleeding risk.',clinicalEffect:'Higher risk of gastrointestinal and other bleeding.',management:'Educational demo: combination requires professional review and monitoring.',confidence:'high'},
 'clarithromycin|simvastatin':{severity:'major',mechanism:'Clarithromycin can strongly inhibit CYP3A4, increasing simvastatin exposure.',clinicalEffect:'Increased risk of myopathy and rhabdomyolysis.',management:'Educational demo: avoid the combination and review alternatives with a clinician.',confidence:'high'},
 'omeprazole|warfarin':{severity:'moderate',mechanism:'Potential metabolic interaction may alter anticoagulant response in some patients.',clinicalEffect:'INR or bleeding risk may change.',management:'Educational demo: monitor anticoagulation when clinically appropriate.',confidence:'medium'}
};
function offlineInteractions(body){const ds=[...new Set((body.drugs||[]).map(x=>String(x).trim()).filter(Boolean))]; if(ds.length<2)throw new Error(t('need2')); const pairs=[]; for(let i=0;i<ds.length;i++)for(let j=i+1;j<ds.length;j++){const k=[ds[i].toLowerCase(),ds[j].toLowerCase()].sort().join('|'); const x=known[k]||{severity:'none-known',mechanism:'No interaction is stored in this offline demonstration database.',clinicalEffect:'No conclusion should be used for clinical decision-making.',management:'Check an authoritative drug-interaction reference for real clinical use.',confidence:'low'}; pairs.push({drugs:[ds[i],ds[j]],...x});} const d=db();d.interactionRuns++;save(d);return {pairs,summary:lang==='ar'?'تم التحليل باستخدام قاعدة البيانات التجريبية المحلية. النتائج للتعليم والعرض فقط.':'Analysis completed with the local demonstration database. Results are for education and showcase use only.'};}
async function api(path,body){await new Promise(r=>setTimeout(r,path.includes('eval')?120:650)); if(path==='/api/study')return offlineStudy(body); if(path==='/api/interactions')return offlineInteractions(body); if(path==='/api/eval')return db(); if(path==='/api/flag'){const d=db();d.flags[body.verdict]=(d.flags[body.verdict]||0)+1;if(body.note)d.notes.unshift({feature:body.feature,verdict:body.verdict,note:body.note});d.notes=d.notes.slice(0,30);save(d);return {ok:true};} throw new Error(t('err'));}
const setMsg = (node, text, cls = "info", spin = false) => {
  node.className = "msg " + cls; node.replaceChildren();
  if (spin) node.append(el("span", { class: "spin" }));
  node.append(text);
};
function sendFlag(feature, verdict, extra = {}) {
  return api("/api/flag", { feature, verdict, ...extra }).catch(() => {});
}
function feedbackBar(feature, extra = {}) {
  const bar = el("div", { class: "fb" }, t("rate"));
  for (const v of ["good", "wrong", "irrelevant", "unclear"]) {
    const b = el("button", { onclick: async () => {
      let note = "";
      if (v !== "good") note = prompt(t("note_ph")) || "";
      await sendFlag(feature, v, { ...extra, note });
      $$("button", bar).forEach((x) => (x.disabled = true)); b.classList.add("sent"); bar.append(" " + t("thanks"));
    } }, t(v));
    bar.append(b);
  }
  return bar;
}

// ---------- STUDY ----------
const state = { study: null, qi: 0, answers: [], view: "quiz", ci: 0 };
const lecture = $("#lecture");
function updateCount() { $("#charCount").textContent = lecture.value.length.toLocaleString() + " " + t("chars"); }
lecture.addEventListener("input", updateCount);
$("#pickBtn").onclick = () => $("#pdfIn").click();
$("#pdfIn").onchange = async (e) => {
  const f = e.target.files[0]; if (!f) return;
  const msg = $("#studyMsg");
  try {
    setMsg(msg, t("reading"), "info", true);
    let text = "";
    if (f.name.toLowerCase().endsWith(".txt")) text = await f.text();
    else throw new Error(lang === "ar" ? "نسخة العرض بدون إنترنت تدعم TXT أو لصق النص مباشرة" : "Offline edition supports TXT files or pasted text.");
    lecture.value = text.replace(/[ \t]+/g, " ").trim().slice(0, 60000);
    updateCount(); setMsg(msg, "");
  } catch (err) { setMsg(msg, t("err") + ": " + err.message, "err"); }
  e.target.value = "";
};

$("#genBtn").onclick = async () => {
  const btn = $("#genBtn"), msg = $("#studyMsg");
  btn.disabled = true; setMsg(msg, t("generating"), "info", true);
  try {
    const d = await api("/api/study", { text: lecture.value, mcqCount: $("#nMcq").value, flashCount: $("#nFlash").value });
    state.study = d; state.qi = 0; state.answers = []; state.ci = 0;
    $("#studyOut").hidden = false; renderStudy();
    setMsg(msg, t("summary_gen")(d.stats.generated, d.stats.ungrounded), "info");
    $("#studyOut").scrollIntoView({ behavior: "smooth" });
  } catch (e) { setMsg(msg, e.message, "err"); }
  btn.disabled = false;
};
$$("#studySeg button").forEach((b) => (b.onclick = () => { state.view = b.dataset.view; renderStudy(); }));

function renderStudy() {
  $$("#studySeg button").forEach((b) => b.classList.toggle("on", b.dataset.view === state.view));
  $("#quizBox").hidden = state.view !== "quiz"; $("#cardsBox").hidden = state.view !== "cards";
  renderQuiz(); renderCards();
}

function renderQuiz() {
  const box = $("#quizBox"), qs = state.study.mcqs; box.replaceChildren();
  if (!qs.length) return box.append(t("none"));
  if (state.qi >= qs.length) {
    const sc = state.answers.filter((a, i) => a === qs[i].answerIndex).length;
    return box.append(el("div", { class: "score" }, t("score"), el("div", { class: "big" }, `${sc} / ${qs.length}`),
      el("button", { class: "primary", onclick: () => { state.qi = 0; state.answers = []; renderQuiz(); } }, t("restart"))));
  }
  const q = qs[state.qi], picked = state.answers[state.qi], done = picked !== undefined;
  box.append(
    el("div", { class: "qhead" }, t("question_of")(state.qi + 1, qs.length),
      el("span", { class: "badge " + (q.grounded ? "ok" : "bad") }, q.grounded ? "✓ " + t("grounded") : "⚠ " + t("ungrounded"))),
    el("div", { class: "bar" }, el("i", { style: `width:${(state.qi / qs.length) * 100}%` })),
    el("div", { class: "q" }, q.question));
  q.options.forEach((o, i) => {
    const cls = "opt" + (done ? (i === q.answerIndex ? " right" : i === picked ? " wrong" : "") : "");
    box.append(el("button", { class: cls, ...(done ? { disabled: "" } : {}), onclick: () => { state.answers[state.qi] = i; renderQuiz(); } }, `${"ABCD"[i]}. ${o}`));
  });
  if (done) {
    box.append(el("div", { class: "explain" }, q.explanation, q.sourceQuote ? el("div", { class: "quote" }, t("source") + " “" + q.sourceQuote + "”") : ""),
      feedbackBar("study_mcq", { grounded: q.grounded }));
  }
  box.append(el("div", { class: "nav" },
    el("button", { class: "ghost", ...(state.qi ? {} : { disabled: "" }), onclick: () => { state.qi--; renderQuiz(); } }, t("prev")),
    el("button", { class: "primary", ...(done ? {} : { disabled: "" }), onclick: () => { state.qi++; renderQuiz(); } }, state.qi === qs.length - 1 ? t("finish") : t("next"))));
}

function renderCards() {
  const box = $("#cardsBox"), cs = state.study.flashcards; box.replaceChildren();
  if (!cs.length) return box.append(t("none"));
  const c = cs[state.ci];
  const card = el("div", { class: "fc", onclick: () => card.classList.toggle("flip") },
    el("div", { class: "fc-in" }, el("div", { class: "fc-f" }, c.front), el("div", { class: "fc-b" }, c.back)));
  box.append(el("div", { class: "qhead" }, `${state.ci + 1} ${t("of")} ${cs.length}`, t("flip")), card, feedbackBar("study_flash"),
    el("div", { class: "nav" },
      el("button", { class: "ghost", ...(state.ci ? {} : { disabled: "" }), onclick: () => { state.ci--; renderCards(); } }, t("prev")),
      el("button", { class: "primary", ...(state.ci < cs.length - 1 ? {} : { disabled: "" }), onclick: () => { state.ci++; renderCards(); } }, t("next"))));
}

// ---------- INTERACTIONS ----------
let drugs = [], lastInter = null;
function renderChips() {
  const c = $("#chips"); c.replaceChildren();
  drugs.forEach((d, i) => c.append(el("span", { class: "chip" }, d, el("button", { "aria-label": "remove", onclick: () => { drugs.splice(i, 1); renderChips(); } }, "×"))));
}
function addDrug(v) { v = v.trim(); if (v && drugs.length < 8 && !drugs.some((d) => d.toLowerCase() === v.toLowerCase())) { drugs.push(v); renderChips(); } }
$("#addDrug").onclick = () => { addDrug($("#drugIn").value); $("#drugIn").value = ""; };
$("#drugIn").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); $("#addDrug").click(); } });
$$(".chip-ex").forEach((b) => (b.onclick = () => { drugs = []; b.dataset.ex.split(",").forEach(addDrug); }));

$("#checkBtn").onclick = async () => {
  const msg = $("#interMsg"), btn = $("#checkBtn");
  if ($("#drugIn").value.trim()) $("#addDrug").click();
  if (drugs.length < 2) return setMsg(msg, t("need2"), "err");
  btn.disabled = true; setMsg(msg, t("checking"), "info", true);
  try { lastInter = await api("/api/interactions", { drugs, lang }); renderInter(lastInter); setMsg(msg, ""); }
  catch (e) { setMsg(msg, e.message, "err"); }
  btn.disabled = false;
};
function renderInter(d) {
  const out = $("#interOut"); out.replaceChildren();
  if (d.summary) out.append(el("div", { class: "summary" }, d.summary));
  const order = { major: 0, moderate: 1, minor: 2, "none-known": 3 };
  [...d.pairs].sort((a, b) => order[a.severity] - order[b.severity]).forEach((p) => {
    out.append(el("div", { class: "card pair" },
      el("h3", {}, (p.drugs || []).join(" + "), el("span", { class: "badge " + p.severity }, t("severity")[p.severity])),
      el("dl", {}, el("dt", {}, t("mechanism")), el("dd", {}, p.mechanism || "—"),
        el("dt", {}, t("effect")), el("dd", {}, p.clinicalEffect || "—"),
        el("dt", {}, t("mgmt")), el("dd", {}, p.management || "—"),
        el("dt", {}, t("confidence")), el("dd", {}, t("conf")[p.confidence] || "—")),
      feedbackBar("interaction")));
  });
}

// ---------- EVAL ----------
async function loadEval() {
  const out = $("#evalOut"); out.replaceChildren();
  let s; try { s = await api("/api/eval"); } catch (e) { return out.append(e.message); }
  const totalFlags = Object.values(s.flags).reduce((a, b) => a + b, 0);
  const rate = s.mcqsGenerated ? Math.round((s.mcqsUngrounded / s.mcqsGenerated) * 100) : 0;
  const stat = (n, label) => el("div", { class: "stat" }, el("b", {}, String(n)), label);
  out.append(el("div", { class: "grid" }, stat(s.studyRuns, t("s_runs")), stat(s.mcqsGenerated, t("s_q")),
    stat(s.mcqsUngrounded + (s.mcqsGenerated ? ` (${rate}%)` : ""), t("s_ung")), stat(s.interactionRuns, t("s_ir")), stat(totalFlags, t("s_fl"))));
  if (!s.studyRuns && !s.interactionRuns && !totalFlags) return out.append(el("div", { class: "card muted" }, t("none")));
  const max = Math.max(1, ...Object.values(s.flags));
  const cls = { good: "", wrong: "w", irrelevant: "i", unclear: "u" };
  const card = el("div", { class: "card" }, el("b", {}, t("by_verdict")));
  for (const v of Object.keys(s.flags)) card.append(el("div", { class: "hbar" }, el("span", {}, t(v)), el("i", { class: cls[v], style: `width:${(s.flags[v] / max) * 60}%;min-width:2px` }), el("span", {}, String(s.flags[v]))));
  out.append(card);
  if (s.notes.length) {
    const n = el("div", { class: "card" }, el("b", {}, t("recent")));
    s.notes.forEach((x) => n.append(el("div", { class: "note" }, el("span", { class: "badge " + (x.verdict === "good" ? "ok" : "bad") }, t(x.verdict)), " ", x.note)));
    out.append(n);
  }
}

applyLang();

// Showcase boot sequence
window.addEventListener("load",()=>setTimeout(()=>document.getElementById("boot")?.classList.add("hide"),900));
