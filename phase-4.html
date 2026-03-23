/* ═══════════════════════════════════════════
   PyTrack — App Logic v4
   Sidebar navigation + quiz + progress
═══════════════════════════════════════════ */

const TOTAL_UNITS   = 9;
const LESSONS_EACH  = 10;
const TOTAL_LESSONS = 90;

function getProgress() {
  try { return JSON.parse(localStorage.getItem('pytrack_v3') || '{}'); }
  catch { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem('pytrack_v3', JSON.stringify(p)); }
  catch {}
}
function markDone(unitId, lessonIdx) {
  const p = getProgress();
  if (!p[unitId]) p[unitId] = {};
  p[unitId][lessonIdx] = true;
  saveProgress(p);
}
function isDone(unitId, lessonIdx) {
  const p = getProgress();
  return !!(p[unitId] && p[unitId][lessonIdx]);
}
function unitDoneCount(unitId) {
  const p = getProgress();
  return p[unitId] ? Object.keys(p[unitId]).filter(k => !k.startsWith('q')).length : 0;
}
function totalDone() {
  const p = getProgress();
  return Object.values(p).reduce((s, u) =>
    s + Object.keys(u).filter(k => !k.startsWith('q')).length, 0);
}
function updateNavBadge() {
  const el = document.getElementById('nav-progress');
  if (el) el.textContent = `${totalDone()} / ${TOTAL_LESSONS} lessons`;
}
function copyCode(btn) {
  const code = btn.closest('.code-block').querySelector('.code-body').textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'copied!';
    setTimeout(() => btn.textContent = 'copy', 2000);
  });
}
function toggleSolution(btn) {
  const sol = btn.nextElementSibling;
  const visible = sol.style.display !== 'none';
  sol.style.display = visible ? 'none' : 'block';
  btn.textContent = visible ? '👁 Show Solution' : '🙈 Hide Solution';
}

let currentLesson = 0;
let unitData      = null;
let quizState     = {};

function initUnit(data) {
  unitData = data;
  currentLesson = 0;
  updateNavBadge();
  showLesson(0);
  updateSidebarDone();
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.onclick = () => copyCode(btn);
  });
  addPlaygroundBtn();
}

function showLesson(idx) {
  currentLesson = idx;
  document.querySelectorAll('.lesson-panel').forEach((p, i) =>
    p.classList.toggle('active', i === idx));

  const markBtn = document.getElementById('btn-mark');
  if (markBtn) {
    const done = isDone(unitData.id, idx);
    markBtn.textContent = done ? '✓ Done' : '✓ Mark Done & Next →';
    markBtn.className   = done ? 'btn-mark marked' : 'btn-mark';
  }
  const prev = document.getElementById('btn-prev');
  if (prev) prev.disabled = (idx === 0);

  // Show/hide Next vs Next Unit button
  const btnNext     = document.getElementById('btn-next');
  const btnNextUnit = document.getElementById('btn-next-unit');
  const isLast = idx >= LESSONS_EACH - 1;
  if (btnNext)     btnNext.style.display    = isLast ? 'none'        : 'inline-flex';
  if (btnNextUnit) btnNextUnit.style.display = isLast ? 'inline-flex' : 'none';

  // Quiz badge
  const p = getProgress();
  const quizDone = p[unitData.id] && p[unitData.id]['q'+idx];
  const badge = document.getElementById('quiz-done-global');
  if (badge) badge.style.display = quizDone ? 'inline-flex' : 'none';
  const quizBtn = document.getElementById('quiz-btn');
  if (quizBtn) quizBtn.textContent = quizDone ? '✓ Quiz done' : '📝 Lesson Quiz — 5 Questions';

  updateSidebar(idx);
  window.scrollTo({ top: 60, behavior: 'smooth' });
}

function prevLesson() { if (currentLesson > 0) showLesson(currentLesson - 1); }

function markAndNext() {
  markDone(unitData.id, currentLesson);
  updateNavBadge();
  const markBtn = document.getElementById('btn-mark');
  if (markBtn) { markBtn.textContent = '✓ Done'; markBtn.className = 'btn-mark marked'; }
  updateSidebarDone();
  if (currentLesson < LESSONS_EACH - 1) setTimeout(() => showLesson(currentLesson + 1), 200);
}

function openCurrentQuiz() {
  openQuiz(currentLesson);
}

function openQuiz(lessonIdx) {
  if (!unitData) return;
  const lesson = unitData.lessons[lessonIdx];
  quizState = { lessonIdx, idx:0, score:0, answered:false, selected:null, questions:lesson.quizzes };
  document.getElementById('quiz-title').textContent = `Quiz — ${lesson.title}`;
  document.getElementById('quiz-modal').classList.add('open');
  renderQuestion();
}
function closeQuiz() { document.getElementById('quiz-modal').classList.remove('open'); }

function renderQuestion() {
  const { idx, questions } = quizState;
  if (idx >= questions.length) { renderScore(); return; }
  const q = questions[idx];
  document.getElementById('quiz-body').innerHTML = `
    <div class="quiz-num">Question ${idx+1} of ${questions.length}</div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-options">
      ${q.opts.map((o,i)=>`<button class="quiz-option" onclick="selectOpt(${i})">${o}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="qfb"></div>
    <div class="quiz-actions">
      <button class="btn-check" id="btn-check" onclick="checkAnswer()" disabled>Check Answer</button>
    </div>`;
  quizState.answered = false;
  quizState.selected = null;
}

function selectOpt(i) {
  if (quizState.answered) return;
  quizState.selected = i;
  document.querySelectorAll('.quiz-option').forEach((el,j)=>el.classList.toggle('selected',j===i));
  document.getElementById('btn-check').disabled = false;
}

function checkAnswer() {
  if (quizState.answered || quizState.selected===null) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.idx];
  const correct = quizState.selected === q.ans;
  if (correct) quizState.score++;
  document.querySelectorAll('.quiz-option')[q.ans].classList.add('correct');
  if (!correct) document.querySelectorAll('.quiz-option')[quizState.selected].classList.add('wrong');
  const fb = document.getElementById('qfb');
  fb.className = `quiz-feedback show ${correct?'correct':'wrong'}`;
  fb.textContent = (correct?'✅ Correct! ':'❌ Wrong. ') + q.exp;
  const btn = document.getElementById('btn-check');
  btn.textContent = quizState.idx < quizState.questions.length-1 ? 'Next Question →' : 'See Results';
  btn.onclick = () => { quizState.idx++; renderQuestion(); };
}

function renderScore() {
  const { score, questions, lessonIdx } = quizState;
  const total = questions.length;
  const pct   = Math.round(score/total*100);
  const msg   = pct===100?'Perfect! 🏆':pct>=80?'Great job! 🎉':pct>=60?'Good effort! 📚':'Keep practicing! 💪';
  const p = getProgress();
  if (!p[unitData.id]) p[unitData.id] = {};
  p[unitData.id]['q'+lessonIdx] = {score,total,pct};
  saveProgress(p);
  if (pct>=60) { markDone(unitData.id,lessonIdx); updateNavBadge(); }
  // Update quiz btn
  const quizBtn = document.getElementById('quiz-btn');
  if (quizBtn) quizBtn.textContent = '✓ Quiz done';
  document.getElementById('quiz-body').innerHTML = `
    <div class="quiz-score">
      <div class="score-circle">
        <div class="score-num">${score}/${total}</div>
        <div class="score-total">${pct}%</div>
      </div>
      <p class="score-msg">${msg}</p>
      <p class="score-sub">${pct>=60?'✅ Lesson marked as complete!':'💡 Score 60%+ to mark this lesson complete.'}</p>
      <div class="score-btns">
        <button class="btn-nav" onclick="closeQuiz()">Close</button>
        <button class="btn-quiz" onclick="openQuiz(${lessonIdx})">Retry Quiz</button>
      </div>
    </div>`;
}

// ── Sidebar ─────────────────
function toggleUnit(header) {
  const lessons = header.nextElementSibling;
  const isOpen  = lessons.classList.contains('open');
  document.querySelectorAll('.sidebar-lessons').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.sidebar-unit-header').forEach(el => el.classList.remove('open'));
  if (!isOpen) { lessons.classList.add('open'); header.classList.add('open'); }
}
function updateSidebar(lessonIdx) {
  document.querySelectorAll('.sidebar-lesson').forEach(el => el.classList.remove('active'));
  const active = document.getElementById(`slink-${unitData.id}-${lessonIdx}`);
  if (active) active.classList.add('active');
}
function updateSidebarDone() {
  if (!unitData) return;
  for (let i = 0; i < LESSONS_EACH; i++) {
    const link = document.getElementById(`slink-${unitData.id}-${i}`);
    const chk  = document.getElementById(`chk-${unitData.id}-${i}`);
    if (isDone(unitData.id, i)) {
      if (link) link.classList.add('done-lesson');
      if (chk)  chk.textContent = '✓';
    }
  }
}

// ── Code Playground — opens external Python editor ─────────────────
function addPlaygroundBtn() {
  if (document.getElementById('playground-fab')) return;
  const btn = document.createElement('button');
  btn.id = 'playground-fab';
  btn.className = 'playground-fab';
  btn.innerHTML = '⚡ Code Playground';
  btn.onclick = openPlayground;
  document.body.appendChild(btn);
}

function openPlayground() {
  // Get starter code from current lesson's task if available
  const panel = document.querySelector('.lesson-panel.active');
  const codeEl = panel ? panel.querySelector('.task-section .code-body') : null;
  const code = codeEl ? encodeURIComponent(codeEl.textContent.trim()) : '';
  // Open Programiz Python editor - lightweight, no install needed
  const url = 'https://www.programiz.com/python-programming/online-compiler/';
  window.open(url, 'pytrack-playground', 'width=900,height=650,resizable=yes,scrollbars=yes');
}

function tryCode(codeText) {
  window.open('https://www.programiz.com/python-programming/online-compiler/', 
    'pytrack-playground', 'width=900,height=650,resizable=yes,scrollbars=yes');
}
