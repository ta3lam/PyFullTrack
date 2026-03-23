@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  --bg:      #070d1a;
  --bg2:     #0d1525;
  --bg3:     #111e33;
  --card:    #0f1a2e;
  --border:  #1a2d4a;
  --accent:  #3b82f6;
  --accent2: #06b6d4;
  --accent3: #f59e0b;
  --green:   #10b981;
  --red:     #ef4444;
  --text:    #e2e8f0;
  --muted:   #5a7395;
  --mono:    'Space Mono', monospace;
  --sans:    'Plus Jakarta Sans', sans-serif;
  --radius:  14px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--sans);min-height:100vh;overflow-x:hidden}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(7,13,26,.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 2rem;height:58px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-family:var(--mono);font-size:1rem;color:var(--accent2);text-decoration:none;letter-spacing:-.5px}
.nav-logo span{color:var(--accent3)}
.nav-right{display:flex;align-items:center;gap:.8rem}
.progress-badge{font-family:var(--mono);font-size:.7rem;background:var(--bg3);border:1px solid var(--border);padding:.28rem .7rem;border-radius:20px;color:var(--accent2)}
.btn-outline{background:none;border:1px solid var(--border);color:var(--muted);padding:.36rem .9rem;border-radius:8px;cursor:pointer;font-family:var(--sans);font-size:.82rem;font-weight:500;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem}
.btn-outline:hover{border-color:var(--accent);color:var(--text)}

/* HERO */
.hero{padding:100px 2rem 60px;max-width:1100px;margin:0 auto;position:relative}
.hero::before{content:'';position:absolute;top:-100px;left:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(59,130,246,.1) 0%,transparent 70%);pointer-events:none;animation:blobFloat 8s ease-in-out infinite}
.hero::after{content:'';position:absolute;top:50px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(6,182,212,.07) 0%,transparent 70%);pointer-events:none;animation:blobFloat 11s ease-in-out infinite reverse}
@keyframes blobFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-28px) scale(1.04)}}

.hero-tag{font-family:var(--mono);font-size:.68rem;color:var(--accent2);letter-spacing:3px;text-transform:uppercase;margin-bottom:1.2rem;display:inline-flex;align-items:center;gap:.6rem;background:rgba(6,182,212,.08);border:1px solid rgba(6,182,212,.2);padding:.35rem .8rem;border-radius:20px;animation:fadeInDown .6s ease both}
.hero-tag::before{content:'◈';font-size:.65rem}

h1.hero-title{font-size:clamp(2.8rem,7vw,5rem);font-weight:800;line-height:1.04;letter-spacing:-3px;margin-bottom:1.4rem;animation:fadeInUp .7s ease .1s both}
h1.hero-title em{font-style:normal;color:transparent;background:linear-gradient(135deg,var(--accent2),var(--accent));-webkit-background-clip:text;background-clip:text}

.hero-sub{color:var(--muted);font-size:1.05rem;max-width:480px;line-height:1.8;margin-bottom:2.5rem;animation:fadeInUp .7s ease .2s both}

.hero-stats{display:flex;gap:0;margin-bottom:2.5rem;flex-wrap:wrap;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;animation:fadeInUp .7s ease .3s both;width:fit-content}
.stat{display:flex;flex-direction:column;align-items:center;gap:.2rem;padding:1rem 2rem;border-right:1px solid var(--border)}
.stat:last-child{border-right:none}
.stat-num{font-family:var(--mono);font-size:1.6rem;font-weight:700;background:linear-gradient(135deg,var(--accent2),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent}
.stat-lbl{font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:1px}

.overall-progress{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);padding:1rem 1.4rem;margin-bottom:2.8rem;display:flex;align-items:center;gap:1.5rem;animation:fadeInUp .7s ease .4s both}
.op-label{font-family:var(--mono);font-size:.67rem;color:var(--muted);white-space:nowrap;text-transform:uppercase;letter-spacing:1px}
.op-bar{flex:1;height:5px;background:var(--border);border-radius:3px;overflow:hidden}
.op-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px;transition:width .6s ease}
.op-pct{font-family:var(--mono);font-size:.82rem;color:var(--accent2);white-space:nowrap}

/* UNIT CARDS */
.units-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:1rem}

.unit-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:1.3rem;cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s;text-decoration:none;display:block;color:inherit;position:relative;overflow:hidden}
.unit-card:nth-child(1){animation:fadeInUp .5s ease .05s both}
.unit-card:nth-child(2){animation:fadeInUp .5s ease .1s both}
.unit-card:nth-child(3){animation:fadeInUp .5s ease .15s both}
.unit-card:nth-child(4){animation:fadeInUp .5s ease .2s both}
.unit-card:nth-child(5){animation:fadeInUp .5s ease .25s both}
.unit-card:nth-child(6){animation:fadeInUp .5s ease .3s both}
.unit-card:nth-child(7){animation:fadeInUp .5s ease .35s both}
.unit-card:nth-child(8){animation:fadeInUp .5s ease .4s both}
.unit-card:hover{border-color:var(--accent2);transform:translateY(-4px);box-shadow:0 16px 48px rgba(6,182,212,.1)}
.unit-card.done{border-color:rgba(16,185,129,.3)}
.unit-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--accent),var(--accent2));opacity:0;transition:opacity .2s}
.unit-card:hover::before{opacity:1}
.unit-card.done::before{background:var(--green);opacity:.5}

.unit-top{display:flex;align-items:center;gap:.8rem;margin-bottom:.85rem}
.unit-icon-wrap{width:38px;height:38px;border-radius:9px;background:var(--bg3);border:1px solid var(--border);display:grid;place-items:center;font-size:1.15rem;flex-shrink:0}
.unit-meta{flex:1;min-width:0}
.unit-num{font-family:var(--mono);font-size:.62rem;color:var(--muted);letter-spacing:1px;margin-bottom:.1rem}
.unit-title{font-size:.96rem;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.unit-done-badge{width:22px;height:22px;background:var(--green);border-radius:50%;display:grid;place-items:center;font-size:.68rem;color:#fff;flex-shrink:0}

.unit-desc{font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:.9rem}

.unit-prog-row{display:flex;align-items:center;gap:.7rem}
.unit-prog-bar{flex:1;height:3px;background:var(--border);border-radius:2px;overflow:hidden}
.unit-prog-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:2px;transition:width .5s ease}
.unit-prog-label{font-family:var(--mono);font-size:.62rem;color:var(--muted);white-space:nowrap}

/* UNIT PAGE */
.unit-page{max-width:900px;margin:0 auto;padding:76px 2rem 60px}
.breadcrumb{font-family:var(--mono);font-size:.68rem;color:var(--muted);margin-bottom:1.5rem;display:flex;align-items:center;gap:.5rem}
.breadcrumb a{color:var(--muted);text-decoration:none}
.breadcrumb a:hover{color:var(--accent2)}
.breadcrumb span{color:var(--text)}
.unit-header{margin-bottom:1.8rem}
.unit-header h2{font-size:1.8rem;font-weight:800;letter-spacing:-1px;margin-bottom:.4rem;animation:fadeInUp .4s ease both}
.unit-header p{color:var(--muted);font-size:.88rem}

/* TABS */
.tabs{display:flex;gap:.25rem;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;border-bottom:1px solid var(--border);margin-bottom:1.8rem;padding-bottom:0;scrollbar-width:thin;scrollbar-color:var(--border) transparent;-webkit-overflow-scrolling:touch}
.tabs::-webkit-scrollbar{height:3px}.tabs::-webkit-scrollbar-track{background:transparent}.tabs::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
.tab-btn{font-family:var(--sans);font-size:.78rem;font-weight:500;padding:.52rem .9rem;background:none;border:none;border-bottom:2px solid transparent;color:var(--muted);cursor:pointer;transition:all .2s;margin-bottom:-1px;white-space:nowrap;flex-shrink:0;border-radius:6px 6px 0 0}
.tab-btn:hover:not(.active){color:var(--text);background:var(--bg3)}
.tab-btn.active{color:var(--accent2);border-bottom-color:var(--accent2);background:rgba(6,182,212,.05)}
.tab-btn.done-tab{color:var(--green)}
.tab-btn.done-tab.active{border-bottom-color:var(--green);background:rgba(16,185,129,.05)}

/* LESSON PANEL */
.lesson-panel{display:none}
.lesson-panel.active{display:block;animation:fadeInUp .3s ease}
@keyframes fadeInUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}

.lesson-body{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:1.8rem;line-height:1.85}
.lesson-body h3{font-size:1.06rem;font-weight:700;margin:1.5rem 0 .72rem;color:var(--accent2);display:flex;align-items:center;gap:.45rem}
.lesson-body h3::before{content:'▸';font-size:.78rem;opacity:.7}
.lesson-body h3:first-child{margin-top:0}
.lesson-body p{color:var(--text);margin-bottom:.8rem;opacity:.9;font-size:.92rem}
.lesson-body ul,.lesson-body ol{padding-left:1.5rem;margin-bottom:.8rem;opacity:.9;font-size:.92rem}
.lesson-body li{margin-bottom:.32rem}
.lesson-body strong{color:var(--text);font-weight:600}

.code-block{background:#060d18;border:1px solid #1a2d4a;border-radius:10px;margin:1rem 0;overflow:hidden}
.code-header{background:#0a1628;padding:.42rem 1rem;font-family:var(--mono);font-size:.63rem;color:var(--muted);display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #1a2d4a}
.copy-btn{cursor:pointer;color:var(--muted);background:none;border:none;font-family:var(--mono);font-size:.63rem;transition:color .2s;padding:.2rem .4rem;border-radius:4px}
.copy-btn:hover{color:var(--accent2);background:rgba(6,182,212,.1)}
.code-body{padding:1.1rem 1.4rem;font-family:var(--mono);font-size:.81rem;line-height:1.72;overflow-x:auto;white-space:pre;color:#b8d0f0}

.output-block{background:#03100a;border:1px solid #0f3020;border-radius:10px;padding:.82rem 1.3rem;margin:.4rem 0 1rem;font-family:var(--mono);font-size:.78rem;color:#34d399;line-height:1.65;white-space:pre-wrap}
.output-label{font-size:.6rem;color:#1a6040;text-transform:uppercase;letter-spacing:1px;margin-bottom:.3rem}

.tip-box{background:rgba(245,158,11,.06);border-left:3px solid var(--accent3);border-radius:0 10px 10px 0;padding:.88rem 1.1rem;margin:1rem 0;font-size:.87rem;color:var(--text);opacity:.95}
.tip-box strong{color:var(--accent3)}
.note-box{background:rgba(6,182,212,.06);border-left:3px solid var(--accent2);border-radius:0 10px 10px 0;padding:.88rem 1.1rem;margin:1rem 0;font-size:.87rem;color:var(--text);opacity:.95}
.note-box strong{color:var(--accent2)}
.ci{font-family:var(--mono);background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.25);padding:.1rem .36rem;border-radius:4px;font-size:.83em;color:#93c5fd}

/* TASK SECTION */
.task-section{margin-top:1.5rem;background:linear-gradient(135deg,#0d1f14 0%,#0a1a2e 100%);border:1px solid rgba(245,158,11,.22);border-radius:var(--radius);padding:1.5rem;position:relative;overflow:hidden}
.task-section::before{content:'';position:absolute;top:-40px;right:-40px;width:130px;height:130px;background:radial-gradient(circle,rgba(245,158,11,.1),transparent 70%);pointer-events:none}
.task-header{display:flex;align-items:center;gap:.7rem;margin-bottom:.9rem}
.task-badge{font-family:var(--mono);font-size:.62rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#0d1f14;background:linear-gradient(135deg,var(--accent3),#f97316);padding:.26rem .65rem;border-radius:5px}
.task-title{font-weight:700;font-size:.98rem;color:var(--text)}
.task-desc{color:#c4bda8;font-size:.88rem;line-height:1.75;margin-bottom:1rem;padding:.75rem .95rem;background:rgba(245,158,11,.05);border-radius:8px;border:1px solid rgba(245,158,11,.1)}
.task-starter-label{font-family:var(--mono);font-size:.61rem;color:#7a6a4a;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:.32rem}
.btn-show-solution{margin-top:.65rem;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.28);color:var(--accent3);padding:.5rem 1rem;border-radius:8px;cursor:pointer;font-family:var(--sans);font-size:.83rem;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:.4rem}
.btn-show-solution:hover{background:rgba(245,158,11,.16);border-color:var(--accent3)}
.task-solution{margin-top:1rem;animation:fadeInUp .3s ease}
.solution-label{font-family:var(--mono);font-size:.61rem;color:var(--green);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:.4rem;display:flex;align-items:center;gap:.4rem}
.solution-label::before{content:'';width:14px;height:1px;background:var(--green)}

/* QUIZ BAR */
.lesson-quiz-bar{display:flex;align-items:center;gap:1rem;margin-top:1.4rem;padding:.9rem 1.1rem;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius)}
.quiz-done-badge{font-family:var(--mono);font-size:.68rem;color:var(--green);background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.28);padding:.26rem .65rem;border-radius:20px;display:none;align-items:center;gap:.3rem}

/* LESSON NAV */
.lesson-nav{display:flex;justify-content:space-between;align-items:center;margin-top:1.3rem;padding-top:1.3rem;border-top:1px solid var(--border)}
.btn-nav{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:.58rem 1.2rem;border-radius:10px;cursor:pointer;font-family:var(--sans);font-size:.84rem;font-weight:500;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem}
.btn-nav:hover{border-color:var(--accent);background:var(--card)}
.btn-nav:disabled{opacity:.25;cursor:not-allowed;pointer-events:none}
.btn-mark{background:linear-gradient(135deg,var(--green),#059669);border:none;color:#fff;padding:.58rem 1.3rem;border-radius:10px;cursor:pointer;font-family:var(--sans);font-size:.84rem;font-weight:700;transition:all .2s;display:inline-flex;align-items:center;gap:.4rem}
.btn-mark:hover{opacity:.88;transform:translateY(-1px);box-shadow:0 6px 18px rgba(16,185,129,.28)}
.btn-mark.marked{background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);color:var(--green);cursor:default;transform:none;box-shadow:none}
.btn-quiz{background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#fff;padding:.58rem 1.3rem;border-radius:10px;cursor:pointer;font-family:var(--sans);font-size:.84rem;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:.4rem}
.btn-quiz:hover{opacity:.88;transform:translateY(-1px);box-shadow:0 6px 18px rgba(59,130,246,.22)}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);backdrop-filter:blur(10px);z-index:200;display:none;place-items:center;padding:1rem}
.modal-overlay.open{display:grid;animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal{background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:1.8rem;max-width:560px;width:100%;max-height:88vh;overflow-y:auto;animation:slideUp .25s ease}
@keyframes slideUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes scaleIn{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
.modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.3rem}
.modal-header h3{font-size:1.03rem;font-weight:700}
.modal-close{background:none;border:none;color:var(--muted);font-size:1.5rem;cursor:pointer;line-height:1;width:30px;height:30px;border-radius:6px;display:grid;place-items:center;transition:.2s}
.modal-close:hover{background:var(--bg3);color:var(--text)}
.quiz-num{font-family:var(--mono);font-size:.63rem;color:var(--muted);margin-bottom:.48rem;letter-spacing:.5px}
.quiz-q{font-size:.94rem;font-weight:600;margin-bottom:.95rem;color:var(--text);line-height:1.65}
.quiz-options{display:flex;flex-direction:column;gap:.48rem;margin-bottom:1.1rem}
.quiz-option{background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:.7rem .95rem;cursor:pointer;transition:all .18s;font-size:.87rem;color:var(--text);text-align:left;font-family:var(--sans)}
.quiz-option:hover:not(.selected):not(.correct):not(.wrong){border-color:var(--accent);background:rgba(59,130,246,.06)}
.quiz-option.selected{border-color:var(--accent);background:rgba(59,130,246,.1)}
.quiz-option.correct{border-color:var(--green);background:rgba(16,185,129,.1);color:var(--green);font-weight:600}
.quiz-option.wrong{border-color:var(--red);background:rgba(239,68,68,.08);color:var(--red)}
.quiz-feedback{padding:.7rem .95rem;border-radius:8px;font-size:.85rem;margin-bottom:.95rem;display:none;line-height:1.6}
.quiz-feedback.show{display:block;animation:fadeInUp .25s ease}
.quiz-feedback.correct{background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.28);color:#6ee7b7}
.quiz-feedback.wrong{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.28);color:#fca5a5}
.quiz-actions{display:flex;justify-content:flex-end}
.btn-check{background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#fff;padding:.56rem 1.25rem;border-radius:8px;cursor:pointer;font-weight:700;font-size:.85rem;transition:.2s;font-family:var(--sans)}
.btn-check:hover{opacity:.88}
.btn-check:disabled{opacity:.28;cursor:not-allowed}
.quiz-score{text-align:center;padding:1.2rem 0}
.score-circle{width:88px;height:88px;border-radius:50%;border:3px solid var(--accent2);display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto 1.1rem;background:rgba(6,182,212,.06);animation:scaleIn .4s cubic-bezier(.34,1.56,.64,1) both}
.score-num{font-family:var(--mono);font-size:1.5rem;font-weight:700;color:var(--accent2)}
.score-total{font-family:var(--mono);font-size:.68rem;color:var(--muted)}
.score-msg{font-size:1.08rem;font-weight:700;margin-bottom:.4rem}
.score-sub{color:var(--muted);font-size:.84rem;margin-bottom:1.3rem}
.score-btns{display:flex;gap:.7rem;justify-content:center}

/* UNIT PILLS — hide, using new progress row */
.unit-pills{display:none}

@media(max-width:640px){
  h1.hero-title{font-size:2.4rem;letter-spacing:-2px}
  .hero-stats{width:100%}
  .stat{padding:.8rem 1.2rem}
  .lesson-body{padding:1.2rem}
  .task-section{padding:1.1rem}
  .modal{padding:1.2rem;border-radius:14px}
  nav{padding:0 1rem}
  .tab-btn{font-size:.72rem;padding:.44rem .65rem}
}

/* ═══════════════════════════════════════
   SIDEBAR LAYOUT
═══════════════════════════════════════ */
.lesson-page { display:flex; min-height:100vh; padding-top:58px; }

/* SIDEBAR */
.sidebar {
  width:260px; flex-shrink:0;
  background:var(--bg2); border-right:1px solid var(--border);
  position:fixed; top:58px; left:0; bottom:0;
  overflow-y:auto; z-index:100;
  scrollbar-width:thin; scrollbar-color:var(--border) transparent;
}
.sidebar::-webkit-scrollbar { width:4px; }
.sidebar::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

.sidebar-logo {
  padding:.9rem 1rem;
  border-bottom:1px solid var(--border);
  margin-bottom:.4rem;
}
.sidebar-home {
  font-family:var(--mono); font-size:.78rem; color:var(--muted);
  text-decoration:none; display:flex; align-items:center; gap:.5rem;
  transition:color .2s;
}
.sidebar-home:hover { color:var(--accent2); }

.sidebar-inner { padding:.4rem 0 3rem; }

/* Unit group header */
.sidebar-unit-header {
  display:flex; align-items:center; gap:.6rem;
  padding:.58rem 1rem; cursor:pointer;
  font-size:.76rem; font-weight:700; color:var(--muted);
  transition:color .15s; border-left:3px solid transparent;
  user-select:none;
}
.sidebar-unit-header:hover { color:var(--text); }
.sidebar-unit-header.active-unit { color:var(--text); border-left-color:var(--accent2); }

.sidebar-unit-arrow {
  margin-left:auto; font-size:.55rem;
  transition:transform .2s; opacity:.45;
}
.sidebar-unit-header.open .sidebar-unit-arrow { transform:rotate(90deg); opacity:.8; }

/* Lessons list */
.sidebar-lessons { display:none; }
.sidebar-lessons.open { display:block; }

.sidebar-lesson {
  display:flex; align-items:center; gap:.55rem;
  padding:.44rem 1rem .44rem 2rem;
  font-size:.75rem; color:var(--muted);
  text-decoration:none; cursor:pointer;
  transition:all .15s; border-left:3px solid transparent;
}
.sidebar-lesson:hover { color:var(--text); background:rgba(255,255,255,.025); }
.sidebar-lesson.active {
  color:var(--accent2); font-weight:600;
  background:rgba(6,182,212,.07);
  border-left-color:var(--accent2);
}

/* Checkmark circle */
.lesson-check {
  width:13px; height:13px; border-radius:50%;
  border:1.5px solid var(--border);
  display:grid; place-items:center; font-size:.5rem;
  flex-shrink:0; transition:all .2s; color:transparent;
}
.sidebar-lesson.done-lesson .lesson-check {
  background:var(--green); border-color:var(--green); color:#fff;
}

/* MAIN CONTENT */
.lesson-main {
  margin-left:260px; flex:1;
  padding:2rem 2.5rem 4rem;
  max-width:860px;
}

.lesson-title-bar { margin-bottom:1.6rem; }
.lesson-title-bar h2 {
  font-size:1.7rem; font-weight:800; letter-spacing:-1px;
  margin-bottom:.35rem; animation:fadeInUp .4s ease both;
}
.lesson-title-bar p { color:var(--muted); font-size:.86rem; }

/* LESSON PANELS */
.lesson-panel { display:none; }
.lesson-panel.active { display:block; animation:fadeInUp .3s ease; }

/* LESSON NAV in main */
.lesson-nav {
  display:flex; justify-content:space-between; align-items:center;
  margin-top:1.3rem; padding-top:1.3rem; border-top:1px solid var(--border);
}

/* BREADCRUMB */
.breadcrumb {
  font-family:var(--mono); font-size:.67rem; color:var(--muted);
  margin-bottom:1.4rem; display:flex; align-items:center; gap:.45rem;
}
.breadcrumb a { color:var(--muted); text-decoration:none; }
.breadcrumb a:hover { color:var(--accent2); }
.breadcrumb span { color:var(--text); }

/* LESSON BODY */
.lesson-body {
  background:var(--card); border:1px solid var(--border);
  border-radius:var(--radius); padding:1.8rem; line-height:1.85;
}
.lesson-body h3 {
  font-size:1.05rem; font-weight:700; margin:1.5rem 0 .7rem;
  color:var(--accent2); display:flex; align-items:center; gap:.45rem;
}
.lesson-body h3::before { content:'▸'; font-size:.78rem; opacity:.7; }
.lesson-body h3:first-child { margin-top:0; }
.lesson-body p { color:var(--text); margin-bottom:.8rem; opacity:.9; font-size:.92rem; }
.lesson-body ul, .lesson-body ol { padding-left:1.5rem; margin-bottom:.8rem; opacity:.9; font-size:.92rem; }
.lesson-body li { margin-bottom:.32rem; }
.lesson-body strong { color:var(--text); font-weight:600; }

/* CODE */
.code-block { background:#060d18; border:1px solid #1a2d4a; border-radius:10px; margin:1rem 0; overflow:hidden; }
.code-header { background:#0a1628; padding:.42rem 1rem; font-family:var(--mono); font-size:.63rem; color:var(--muted); display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1a2d4a; }
.copy-btn { cursor:pointer; color:var(--muted); background:none; border:none; font-family:var(--mono); font-size:.63rem; transition:color .2s; padding:.2rem .4rem; border-radius:4px; }
.copy-btn:hover { color:var(--accent2); background:rgba(6,182,212,.1); }
.code-body { padding:1.1rem 1.4rem; font-family:var(--mono); font-size:.81rem; line-height:1.72; overflow-x:auto; white-space:pre; color:#b8d0f0; }

/* OUTPUT */
.output-block { background:#03100a; border:1px solid #0f3020; border-radius:10px; padding:.82rem 1.3rem; margin:.4rem 0 1rem; font-family:var(--mono); font-size:.78rem; color:#34d399; line-height:1.65; white-space:pre-wrap; }
.output-label { font-size:.6rem; color:#1a6040; text-transform:uppercase; letter-spacing:1px; margin-bottom:.3rem; }

/* TIP / NOTE */
.tip-box { background:rgba(245,158,11,.06); border-left:3px solid var(--accent3); border-radius:0 10px 10px 0; padding:.88rem 1.1rem; margin:1rem 0; font-size:.87rem; }
.tip-box strong { color:var(--accent3); }
.note-box { background:rgba(6,182,212,.06); border-left:3px solid var(--accent2); border-radius:0 10px 10px 0; padding:.88rem 1.1rem; margin:1rem 0; font-size:.87rem; }
.note-box strong { color:var(--accent2); }
.ci { font-family:var(--mono); background:rgba(59,130,246,.15); border:1px solid rgba(59,130,246,.25); padding:.1rem .36rem; border-radius:4px; font-size:.83em; color:#93c5fd; }

/* TASK */
.task-section { margin-top:1.5rem; background:linear-gradient(135deg,#0d1f14 0%,#0a1a2e 100%); border:1px solid rgba(245,158,11,.22); border-radius:var(--radius); padding:1.5rem; position:relative; overflow:hidden; }
.task-section::before { content:''; position:absolute; top:-40px; right:-40px; width:130px; height:130px; background:radial-gradient(circle,rgba(245,158,11,.1),transparent 70%); pointer-events:none; }
.task-header { display:flex; align-items:center; gap:.7rem; margin-bottom:.9rem; }
.task-badge { font-family:var(--mono); font-size:.62rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#0d1f14; background:linear-gradient(135deg,var(--accent3),#f97316); padding:.26rem .65rem; border-radius:5px; }
.task-title { font-weight:700; font-size:.98rem; color:var(--text); }
.task-desc { color:#c4bda8; font-size:.88rem; line-height:1.75; margin-bottom:1rem; padding:.75rem .95rem; background:rgba(245,158,11,.05); border-radius:8px; border:1px solid rgba(245,158,11,.1); }
.task-starter-label { font-family:var(--mono); font-size:.61rem; color:#7a6a4a; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:.32rem; }
.btn-show-solution { margin-top:.65rem; background:rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.28); color:var(--accent3); padding:.5rem 1rem; border-radius:8px; cursor:pointer; font-family:var(--sans); font-size:.83rem; font-weight:600; transition:all .2s; display:inline-flex; align-items:center; gap:.4rem; }
.btn-show-solution:hover { background:rgba(245,158,11,.16); border-color:var(--accent3); }
.task-solution { margin-top:1rem; animation:fadeInUp .3s ease; }
.solution-label { font-family:var(--mono); font-size:.61rem; color:var(--green); text-transform:uppercase; letter-spacing:1.5px; margin-bottom:.4rem; display:flex; align-items:center; gap:.4rem; }
.solution-label::before { content:''; width:14px; height:1px; background:var(--green); }

/* QUIZ BAR */
.lesson-quiz-bar { display:flex; align-items:center; gap:1rem; margin-top:1.4rem; padding:.9rem 1.1rem; background:var(--bg3); border:1px solid var(--border); border-radius:var(--radius); }
.quiz-done-badge { font-family:var(--mono); font-size:.68rem; color:var(--green); background:rgba(16,185,129,.1); border:1px solid rgba(16,185,129,.28); padding:.26rem .65rem; border-radius:20px; display:none; }

/* NAV BUTTONS */
.btn-nav { background:var(--bg3); border:1px solid var(--border); color:var(--text); padding:.58rem 1.2rem; border-radius:10px; cursor:pointer; font-family:var(--sans); font-size:.84rem; font-weight:500; transition:all .2s; text-decoration:none; display:inline-flex; align-items:center; gap:.4rem; }
.btn-nav:hover { border-color:var(--accent); background:var(--card); }
.btn-nav:disabled { opacity:.25; cursor:not-allowed; pointer-events:none; }
.btn-mark { background:linear-gradient(135deg,var(--green),#059669); border:none; color:#fff; padding:.58rem 1.3rem; border-radius:10px; cursor:pointer; font-family:var(--sans); font-size:.84rem; font-weight:700; transition:all .2s; display:inline-flex; align-items:center; gap:.4rem; }
.btn-mark:hover { opacity:.88; transform:translateY(-1px); box-shadow:0 6px 18px rgba(16,185,129,.28); }
.btn-mark.marked { background:rgba(16,185,129,.1); border:1px solid rgba(16,185,129,.3); color:var(--green); cursor:default; transform:none; box-shadow:none; }
.btn-quiz { background:linear-gradient(135deg,var(--accent),var(--accent2)); border:none; color:#fff; padding:.58rem 1.3rem; border-radius:10px; cursor:pointer; font-family:var(--sans); font-size:.84rem; font-weight:600; transition:all .2s; display:inline-flex; align-items:center; gap:.4rem; }
.btn-quiz:hover { opacity:.88; transform:translateY(-1px); }

/* MODAL */
.modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,.85); backdrop-filter:blur(10px); z-index:300; display:none; place-items:center; padding:1rem; }
.modal-overlay.open { display:grid; animation:fadeIn .2s ease; }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
.modal { background:var(--bg2); border:1px solid var(--border); border-radius:18px; padding:1.8rem; max-width:560px; width:100%; max-height:88vh; overflow-y:auto; animation:slideUp .25s ease; }
@keyframes slideUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
@keyframes scaleIn { from{transform:scale(.5);opacity:0} to{transform:scale(1);opacity:1} }
.modal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.3rem; }
.modal-header h3 { font-size:1.03rem; font-weight:700; }
.modal-close { background:none; border:none; color:var(--muted); font-size:1.5rem; cursor:pointer; line-height:1; width:30px; height:30px; border-radius:6px; display:grid; place-items:center; transition:.2s; }
.modal-close:hover { background:var(--bg3); color:var(--text); }
.quiz-num { font-family:var(--mono); font-size:.63rem; color:var(--muted); margin-bottom:.48rem; }
.quiz-q { font-size:.94rem; font-weight:600; margin-bottom:.95rem; line-height:1.65; }
.quiz-options { display:flex; flex-direction:column; gap:.48rem; margin-bottom:1.1rem; }
.quiz-option { background:var(--bg3); border:1px solid var(--border); border-radius:10px; padding:.7rem .95rem; cursor:pointer; transition:all .18s; font-size:.87rem; color:var(--text); text-align:left; font-family:var(--sans); }
.quiz-option:hover:not(.selected):not(.correct):not(.wrong) { border-color:var(--accent); background:rgba(59,130,246,.06); }
.quiz-option.selected { border-color:var(--accent); background:rgba(59,130,246,.1); }
.quiz-option.correct { border-color:var(--green); background:rgba(16,185,129,.1); color:var(--green); font-weight:600; }
.quiz-option.wrong { border-color:var(--red); background:rgba(239,68,68,.08); color:var(--red); }
.quiz-feedback { padding:.7rem .95rem; border-radius:8px; font-size:.85rem; margin-bottom:.95rem; display:none; line-height:1.6; }
.quiz-feedback.show { display:block; animation:fadeInUp .25s ease; }
.quiz-feedback.correct { background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.28); color:#6ee7b7; }
.quiz-feedback.wrong { background:rgba(239,68,68,.08); border:1px solid rgba(239,68,68,.28); color:#fca5a5; }
.quiz-actions { display:flex; justify-content:flex-end; }
.btn-check { background:linear-gradient(135deg,var(--accent),var(--accent2)); border:none; color:#fff; padding:.56rem 1.25rem; border-radius:8px; cursor:pointer; font-weight:700; font-size:.85rem; transition:.2s; font-family:var(--sans); }
.btn-check:hover { opacity:.88; }
.btn-check:disabled { opacity:.28; cursor:not-allowed; }
.quiz-score { text-align:center; padding:1.2rem 0; }
.score-circle { width:88px; height:88px; border-radius:50%; border:3px solid var(--accent2); display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 1.1rem; background:rgba(6,182,212,.06); animation:scaleIn .4s cubic-bezier(.34,1.56,.64,1) both; }
.score-num { font-family:var(--mono); font-size:1.5rem; font-weight:700; color:var(--accent2); }
.score-total { font-family:var(--mono); font-size:.68rem; color:var(--muted); }
.score-msg { font-size:1.08rem; font-weight:700; margin-bottom:.4rem; }
.score-sub { color:var(--muted); font-size:.84rem; margin-bottom:1.3rem; }
.score-btns { display:flex; gap:.7rem; justify-content:center; }

/* ANIMATIONS */
@keyframes fadeInUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeInDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }

/* RESPONSIVE */
@media(max-width:768px) {
  .sidebar { transform:translateX(-100%); transition:transform .3s; }
  .sidebar.open { transform:translateX(0); }
  .lesson-main { margin-left:0; padding:1.5rem 1rem 3rem; }
}
@media(max-width:640px) {
  h1.hero-title { font-size:2.4rem; letter-spacing:-2px; }
  .hero-stats { width:100%; }
  .lesson-body { padding:1.2rem; }
  .task-section { padding:1.1rem; }
  .modal { padding:1.2rem; border-radius:14px; }
  nav { padding:0 1rem; }
}

/* ═══════════════════════════════════════════
   CODE PLAYGROUND STYLES
═══════════════════════════════════════════ */
.playground-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 150;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  color: #fff;
  border: none;
  padding: .62rem 1.25rem;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .5px;
  box-shadow: 0 6px 28px rgba(124,58,237,.4);
  transition: transform .2s, box-shadow .2s;
  display: inline-flex;
  align-items: center;
  gap: .45rem;
}
.playground-fab:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 36px rgba(124,58,237,.5);
}
.playground-modal-inner {
  max-width: 780px !important;
  width: 96vw !important;
}
.pg-status {
  display: flex;
  align-items: center;
  gap: .7rem;
  font-size: .83rem;
  color: var(--muted);
  margin-bottom: .8rem;
  padding: .6rem .9rem;
  background: rgba(124,58,237,.08);
  border: 1px solid rgba(124,58,237,.22);
  border-radius: 8px;
}
.pg-spinner {
  width: 14px; height: 14px;
  border: 2px solid rgba(124,58,237,.3);
  border-top-color: #7c3aed;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }
.pg-editor-wrap {
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: .8rem;
}
.pg-toolbar {
  background: #0a1628;
  padding: .4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1a2d4a;
}
.pg-lang {
  font-family: var(--mono);
  font-size: .63rem;
  color: var(--muted);
}
.pg-toolbar-right {
  display: flex;
  gap: .5rem;
  align-items: center;
}
.pg-btn-clear {
  background: none;
  border: 1px solid var(--border);
  color: var(--muted);
  padding: .28rem .7rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: .63rem;
  transition: .2s;
}
.pg-btn-clear:hover { color: var(--text); border-color: var(--accent); }
.pg-btn-run {
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border: none;
  color: #fff;
  padding: .32rem .88rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: .72rem;
  font-weight: 700;
  transition: .2s;
}
.pg-btn-run:hover { opacity: .88; }
.pg-btn-run:disabled { opacity: .4; cursor: not-allowed; }
.pg-editor {
  display: block;
  width: 100%;
  min-height: 200px;
  max-height: 340px;
  background: #060d18;
  color: #b8d0f0;
  border: none;
  padding: 1rem 1.3rem;
  font-family: var(--mono);
  font-size: .84rem;
  line-height: 1.72;
  resize: vertical;
  outline: none;
  tab-size: 4;
}
.pg-editor::placeholder { color: #2a4060; }
.pg-output-wrap {
  border: 1px solid #0f3020;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: .7rem;
}
.pg-output-header {
  background: #031a0e;
  padding: .38rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: .6rem;
  color: #1a6040;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #0f3020;
}
.pg-btn-copy-output {
  background: none; border: none; color: #1a6040;
  font-family: var(--mono); font-size: .6rem;
  cursor: pointer; transition: .2s;
}
.pg-btn-copy-output:hover { color: #34d399; }
.pg-output {
  min-height: 80px;
  max-height: 220px;
  overflow-y: auto;
  background: #03100a;
  padding: .85rem 1.3rem;
  font-family: var(--mono);
  font-size: .8rem;
  color: #34d399;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
}
.pg-output.pg-error { color: #fc8181; }
.pg-tip {
  font-size: .78rem;
  color: var(--muted);
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: .6rem .9rem;
}
.pg-tip code {
  font-family: var(--mono);
  background: rgba(59,130,246,.15);
  border: 1px solid rgba(59,130,246,.25);
  padding: .1rem .36rem;
  border-radius: 4px;
  font-size: .83em;
  color: #93c5fd;
}

/* TRY IT BUTTON */
.btn-try-it {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  background: rgba(124,58,237,.1);
  border: 1px solid rgba(124,58,237,.35);
  color: #a78bfa;
  padding: .38rem .85rem;
  border-radius: 7px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: .72rem;
  font-weight: 700;
  transition: .2s;
  margin-left: .5rem;
}
.btn-try-it:hover {
  background: rgba(124,58,237,.2);
  border-color: #7c3aed;
  color: #c4b5fd;
}

/* CAPSTONE PAGE */
.capstone-page { max-width: 900px; margin: 0 auto; padding: 76px 2rem 60px; }
.capstone-hero { margin-bottom: 2.5rem; }
.capstone-hero h1 { font-size: 2.2rem; font-weight: 800; letter-spacing: -1.5px; margin-bottom: .5rem; }
.capstone-hero h1 em { font-style: normal; color: var(--accent3); }
.capstone-hero p { color: var(--muted); font-size: .92rem; line-height: 1.8; max-width: 620px; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.2rem; margin-bottom: 2rem; }
.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color .2s, transform .2s;
  cursor: pointer;
}
.project-card:hover { border-color: var(--accent2); transform: translateY(-3px); }
.project-card.active { border-color: var(--accent3); background: rgba(245,158,11,.04); }
.project-icon { font-size: 2rem; margin-bottom: .8rem; }
.project-title { font-size: 1rem; font-weight: 700; margin-bottom: .4rem; }
.project-desc { color: var(--muted); font-size: .83rem; line-height: 1.65; margin-bottom: .85rem; }
.project-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
.project-tag {
  font-family: var(--mono);
  font-size: .6rem;
  padding: .2rem .55rem;
  border-radius: 20px;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--muted);
}
.project-detail { display: none; background: var(--card); border: 1px solid var(--accent3); border-radius: var(--radius); padding: 1.8rem; margin-bottom: 2rem; animation: fadeInUp .3s ease; }
.project-detail.show { display: block; }
.project-detail h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; color: var(--accent3); }
.project-steps { counter-reset: step; list-style: none; padding: 0; }
.project-steps li { counter-increment: step; padding: .7rem .9rem .7rem 2.8rem; position: relative; border-left: 2px solid var(--border); margin-bottom: .5rem; font-size: .9rem; line-height: 1.7; }
.project-steps li::before { content: counter(step); position: absolute; left: -.9rem; top: .6rem; width: 1.6rem; height: 1.6rem; background: var(--accent3); color: #000; font-weight: 700; font-size: .72rem; border-radius: 50%; display: grid; place-items: center; }
.dataset-table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: .85rem; }
.dataset-table th { background: var(--bg3); color: var(--muted); font-weight: 600; padding: .55rem .9rem; text-align: left; border-bottom: 1px solid var(--border); font-size: .78rem; text-transform: uppercase; letter-spacing: .5px; }
.dataset-table td { padding: .55rem .9rem; border-bottom: 1px solid var(--border); }
.dataset-table tr:last-child td { border-bottom: none; }
.dataset-link { color: var(--accent2); text-decoration: none; font-family: var(--mono); font-size: .78rem; }
.dataset-link:hover { text-decoration: underline; }


/* ── Code Playground Button ── */
.playground-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 150;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  color: #fff;
  border: none;
  padding: .62rem 1.25rem;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .5px;
  box-shadow: 0 6px 28px rgba(124,58,237,.4);
  transition: transform .2s, box-shadow .2s;
  display: inline-flex;
  align-items: center;
  gap: .45rem;
}
.playground-fab:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 36px rgba(124,58,237,.5);
}
