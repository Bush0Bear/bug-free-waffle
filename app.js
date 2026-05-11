// Life Roulette — let the universe decide
// Vanilla JS, no build step required.

const POOLS = {
  meal: {
    emoji: "🍕",
    label: "Meal",
    options: [
      { e: "🍜", t: "Slurp ramen — the louder, the better" },
      { e: "🥑", t: "Avocado toast, but make it fancy" },
      { e: "🌮", t: "Taco Tuesday energy (any day)" },
      { e: "🍳", t: "Breakfast for dinner. Yes, really." },
      { e: "🥟", t: "Dumplings until you can't move" },
      { e: "🍝", t: "Pasta with whatever's in the fridge" },
      { e: "🍕", t: "Pizza — order it, don't cook it" },
      { e: "🥗", t: "Salad with a wildcard ingredient" },
      { e: "🍔", t: "A burger and zero regrets" },
      { e: "🍣", t: "Sushi, even if it's grocery store sushi" },
      { e: "🌯", t: "Burrito the size of your forearm" },
      { e: "🥘", t: "One-pot mystery stew" },
      { e: "🥪", t: "Build the most chaotic sandwich" },
      { e: "🍲", t: "Soup. Just soup. Trust the soup." },
      { e: "🧀", t: "A cheese board counts as dinner" },
    ],
  },
  activity: {
    emoji: "🎨",
    label: "Activity",
    options: [
      { e: "📚", t: "Read one chapter of a book you abandoned" },
      { e: "🎧", t: "Make a playlist titled with today's mood" },
      { e: "🚶", t: "Walk a route you've never taken" },
      { e: "✏️", t: "Sketch something on a napkin in 60 seconds" },
      { e: "📷", t: "Take 5 photos of mundane beautiful things" },
      { e: "💌", t: "Write a postcard you'll never send" },
      { e: "🧩", t: "Do a puzzle (jigsaw, crossword, your life)" },
      { e: "🪴", t: "Repot a plant or rearrange one shelf" },
      { e: "🎮", t: "Play a game from before you were 15" },
      { e: "🍵", t: "Brew tea slowly and stare out a window" },
      { e: "📞", t: "Call someone you keep meaning to call" },
      { e: "🧘", t: "Lie on the floor for 7 minutes. Just 7." },
      { e: "🎬", t: "Watch a movie someone weird recommended" },
      { e: "🧹", t: "10-minute speed clean — set a timer" },
      { e: "🛁", t: "Bath/shower with the lights off" },
    ],
  },
  mood: {
    emoji: "🌈",
    label: "Mood Boost",
    options: [
      { e: "☀️", t: "Step outside. Two minutes. Eyes up." },
      { e: "💃", t: "Dance to one (1) embarrassing song" },
      { e: "📝", t: "List 3 things that didn't go terribly today" },
      { e: "🤗", t: "Hug something. A person. A pillow. A cat." },
      { e: "🌬️", t: "Box breathe: 4 in, 4 hold, 4 out, 4 hold" },
      { e: "💧", t: "Drink a full glass of water right now" },
      { e: "📵", t: "Phone in another room for 20 minutes" },
      { e: "🎉", t: "Celebrate a tiny win you skipped over" },
      { e: "🪞", t: "Tell yourself one nice thing out loud" },
      { e: "🌿", t: "Touch a real plant. Soil counts." },
      { e: "🎵", t: "Loud song, headphones, eyes closed" },
      { e: "📔", t: "Brain-dump for 90 seconds onto paper" },
      { e: "😴", t: "20-minute nap. Set the alarm. Trust." },
      { e: "🍫", t: "One square of chocolate, eaten slowly" },
    ],
  },
  kindness: {
    emoji: "💝",
    label: "Random Kindness",
    options: [
      { e: "📨", t: "Text someone something specific you appreciate" },
      { e: "⭐", t: "Leave a glowing review for a small business" },
      { e: "💸", t: "Tip extra on your next coffee" },
      { e: "🎁", t: "Drop off something you don't need to a friend" },
      { e: "👋", t: "Compliment a stranger on something they chose" },
      { e: "🤝", t: "Help one person carry/move/lift something" },
      { e: "📬", t: "Reply to that DM you've been avoiding" },
      { e: "🌷", t: "Buy flowers for someone — or yourself" },
      { e: "📞", t: "Check in on someone who's been quiet" },
      { e: "🥡", t: "Bring food to someone who's been busy" },
      { e: "💌", t: "Write a thank-you note. Paper, not text." },
      { e: "🛒", t: "Pay for the person behind you in line" },
    ],
  },
  adventure: {
    emoji: "🚀",
    label: "Mini Adventure",
    options: [
      { e: "🚇", t: "Take public transit to a random stop" },
      { e: "🗺️", t: "Walk until you find something new" },
      { e: "☕", t: "Order a drink you can't pronounce" },
      { e: "📍", t: "Visit a museum/store you keep walking past" },
      { e: "🌃", t: "Watch the sunset from a roof or hill" },
      { e: "🎪", t: "Say yes to the next invite, no matter what" },
      { e: "🚲", t: "Bike somewhere you usually drive" },
      { e: "🥾", t: "Take a trail. Even a small one." },
      { e: "📕", t: "Buy a book by flipping to a random page" },
      { e: "🍴", t: "Eat at the weirdest spot on the block" },
      { e: "🎤", t: "Karaoke. Alone in the car counts." },
      { e: "🎨", t: "Visit a gallery and pick your one favorite" },
      { e: "🛶", t: "Get near water you don't usually visit" },
      { e: "🌌", t: "Stargaze, even just for five minutes" },
    ],
  },
  chaos: {
    emoji: "🌀",
    label: "Pure Chaos",
    options: [
      { e: "🥒", t: "Buy a pickle. Don't explain yourself." },
      { e: "🎩", t: "Wear something you'd never wear" },
      { e: "🦆", t: "Name an inanimate object. Use the name." },
      { e: "📜", t: "Write your own fortune cookie" },
      { e: "🧦", t: "Mismatched socks. On purpose." },
      { e: "📻", t: "Listen to a genre you actively dislike" },
      { e: "🍦", t: "Ice cream before noon. No rules apply." },
      { e: "🐦", t: "Speak to a bird. Make eye contact." },
      { e: "🪩", t: "Rearrange one piece of furniture, badly" },
      { e: "🎭", t: "Adopt a fake accent for 10 minutes" },
      { e: "🥄", t: "Eat dinner with the wrong utensil" },
      { e: "🃏", t: "Make a decision by flipping a coin" },
      { e: "🦖", t: "Replace one word in your vocabulary with 'dinosaur' for an hour" },
      { e: "🧃", t: "Drink something out of a wine glass that isn't wine" },
    ],
  },
};

const VIBES = ["✨ glowy", "🌧️ soft", "⚡ jittery", "🌊 chill", "🔥 spicy", "🌙 dreamy", "🌪️ feral", "🎈 buoyant"];

const STORAGE_KEY = "life-roulette/v1";

const state = {
  category: "meal",
  current: null,         // { e, t, cat, ts }
  log: [],
  spinCount: 0,
  lastSpinDate: null,
  streak: 0,
  vibe: VIBES[Math.floor(Math.random() * VIBES.length)],
  spinning: false,
};

const els = {
  catBtns: document.querySelectorAll(".cat-btn"),
  wheel: document.getElementById("wheel"),
  resultEmoji: document.getElementById("resultEmoji"),
  resultText: document.getElementById("resultText"),
  spinBtn: document.getElementById("spinBtn"),
  acceptBtn: document.getElementById("acceptBtn"),
  rerollBtn: document.getElementById("rerollBtn"),
  skipBtn: document.getElementById("skipBtn"),
  logList: document.getElementById("logList"),
  clearBtn: document.getElementById("clearBtn"),
  exportBtn: document.getElementById("exportBtn"),
  spinCount: document.getElementById("spinCount"),
  streakCount: document.getElementById("streakCount"),
  vibeScore: document.getElementById("vibeScore"),
  toast: document.getElementById("toast"),
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.assign(state, data);
  } catch (e) {
    console.warn("Could not load state:", e);
  }
}

function save() {
  const { category, log, spinCount, lastSpinDate, streak, vibe } = state;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ category, log, spinCount, lastSpinDate, streak, vibe })
  );
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak() {
  const t = today();
  if (state.lastSpinDate === t) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastSpinDate === yesterday ? state.streak + 1 : 1;
  state.lastSpinDate = t;
}

function renderStats() {
  els.spinCount.textContent = state.spinCount;
  els.streakCount.textContent = state.streak;
  els.vibeScore.textContent = state.vibe;
}

function renderCategories() {
  els.catBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === state.category);
  });
}

function renderLog() {
  if (!state.log.length) {
    els.logList.innerHTML = '<li class="log-empty">No spins yet. The day is wide open.</li>';
    return;
  }
  els.logList.innerHTML = state.log
    .slice()
    .reverse()
    .map((item) => {
      const time = new Date(item.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const statusClass = item.status ? `status-${item.status}` : "";
      return `
        <li class="log-item ${statusClass}">
          <span class="log-emoji">${item.e}</span>
          <span class="log-text">${escapeHtml(item.t)}</span>
          <span class="log-time">${time}</span>
        </li>
      `;
    })
    .join("");
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function setResult(item) {
  els.resultEmoji.textContent = item.e;
  els.resultText.textContent = item.t;
}

function setControls({ canSpin, canDecide }) {
  els.spinBtn.disabled = !canSpin;
  els.acceptBtn.disabled = !canDecide;
  els.rerollBtn.disabled = !canDecide;
  els.skipBtn.disabled = !canDecide;
}

function pickRandom(cat, exclude = null) {
  const pool = POOLS[cat].options;
  if (pool.length === 1) return { ...pool[0], cat };
  let pick;
  do {
    pick = pool[Math.floor(Math.random() * pool.length)];
  } while (exclude && pick.t === exclude.t);
  return { ...pick, cat };
}

function spin() {
  if (state.spinning) return;
  state.spinning = true;
  setControls({ canSpin: false, canDecide: false });
  els.wheel.classList.add("spinning");
  els.wheel.classList.remove("landed");

  const pool = POOLS[state.category].options;
  const totalMs = 1200 + Math.random() * 400;
  const tickMs = 70;
  const ticks = Math.floor(totalMs / tickMs);
  let i = 0;

  const interval = setInterval(() => {
    const sneak = pool[Math.floor(Math.random() * pool.length)];
    setResult(sneak);
    i++;
    if (i >= ticks) {
      clearInterval(interval);
      const final = pickRandom(state.category, state.current);
      setResult(final);
      state.current = { ...final, ts: Date.now() };
      state.spinCount += 1;
      bumpStreak();
      els.wheel.classList.remove("spinning");
      els.wheel.classList.add("landed");
      setControls({ canSpin: true, canDecide: true });
      state.spinning = false;
      renderStats();
      save();
    }
  }, tickMs);
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function accept() {
  if (!state.current) return;
  state.log.push({ ...state.current, status: "accepted" });
  state.current = null;
  setControls({ canSpin: true, canDecide: false });
  renderLog();
  save();
  showToast("Logged. Go do the thing. 🫡");
}

function skip() {
  if (!state.current) return;
  state.log.push({ ...state.current, status: "skipped" });
  state.current = null;
  setControls({ canSpin: true, canDecide: false });
  renderLog();
  save();
  showToast("Skipped. Next universe please.");
}

function reroll() {
  if (state.spinning) return;
  spin();
}

function clearHistory() {
  if (!state.log.length) return;
  if (!confirm("Clear today's logbook? This can't be undone.")) return;
  state.log = [];
  renderLog();
  save();
  showToast("Logbook wiped. Fresh start.");
}

function exportLog() {
  if (!state.log.length) {
    showToast("Nothing to export yet.");
    return;
  }
  const lines = state.log.map((item) => {
    const time = new Date(item.ts).toLocaleString();
    const status = item.status === "accepted" ? "[✓]" : item.status === "skipped" ? "[✕]" : "[ ]";
    return `${status} ${item.e} ${item.t}  — ${time}`;
  });
  const blob = new Blob([`Life Roulette — Logbook\n\n${lines.join("\n")}\n`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `life-roulette-${today()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Exported. Check your downloads.");
}

function wireEvents() {
  els.catBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      renderCategories();
      save();
      if (!state.spinning && !state.current) {
        setResult({ e: POOLS[state.category].emoji, t: `${POOLS[state.category].label} — press SPIN` });
      }
    });
  });

  els.spinBtn.addEventListener("click", spin);
  els.acceptBtn.addEventListener("click", accept);
  els.skipBtn.addEventListener("click", skip);
  els.rerollBtn.addEventListener("click", reroll);
  els.clearBtn.addEventListener("click", clearHistory);
  els.exportBtn.addEventListener("click", exportLog);

  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      if (!els.spinBtn.disabled) spin();
    } else if (e.key.toLowerCase() === "a" && !els.acceptBtn.disabled) {
      accept();
    } else if (e.key.toLowerCase() === "s" && !els.skipBtn.disabled) {
      skip();
    } else if (e.key.toLowerCase() === "r" && !els.rerollBtn.disabled) {
      reroll();
    }
  });
}

function init() {
  load();
  // Reset streak window if last spin was older than yesterday
  if (state.lastSpinDate) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (state.lastSpinDate !== today() && state.lastSpinDate !== yesterday) {
      state.streak = 0;
    }
  }
  // Refresh today's vibe once per session
  state.vibe = VIBES[Math.floor(Math.random() * VIBES.length)];

  renderCategories();
  renderStats();
  renderLog();
  setControls({ canSpin: true, canDecide: false });
  setResult({ e: "🎲", t: "Press SPIN to begin" });
  wireEvents();
}

init();
