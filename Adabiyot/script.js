const questions = {
  1: [
    ["Hikoyada kelinoyimni eslaganda qanday tuyg‘u uyg‘onishi aytiladi?", ["Quvonch va faxr", "Keyinchalik ro‘y bergan og‘ir voqea sabab ma’yuslik", "G‘azab va nafrat"], 1],
    ["Buvining sersoy bog‘ida qarindoshlar nima bilan band bo‘lishardi?", ["To‘yga tayyorgarlik va uy yumushlari bilan", "Hosilni sotish bilan", "Safarga otlanish bilan"], 0],
    ["Bosh qahramon xat kelishini kimdan kutardi?", ["Mahalla raisidan", "Tog‘asidan", "Pochtachining o‘zidan"], 1],
    ["Bosh qahramon xatni kelinoyimga qanday yetkazishni orzu qilardi?", ["Yashirib qo‘yishni", "Uzoqdan ko‘rsatib, chopib borishni", "Buviga o‘qitishni"], 1],
    ["Kelinoyim daladan qaytgach odatda nima qilardi?", ["Mehmonxonada yotib, shiftga tikilardi", "Darhol qo‘shnilarnikiga borardi", "Bog‘ni sug‘orardi"], 0],
    ["Buvining ko‘ngli nimadan xavotirda edi?", ["Hosil nobud bo‘lishidan", "Kelinoyim ketib qolishidan", "Xo‘tik yo‘qolishidan"], 1],
    ["Voqea qaysi paytda tasvirlanadi?", ["Noyabr o‘rtalari, kunlar hali iliq", "Qishning qahraton kunlari", "Bahorning boshi"], 0],
    ["Kelinoyim tushida nimani ko‘rganini aytadi?", ["Tog‘asi ot o‘ynatib kelganini", "Pochtachi xatni yo‘qotganini", "Buvining safarga ketganini"], 0],
    ["Bosh qahramon ertalab qayerga borishga tayyorlanayotgan edi?", ["Bozorga", "Tegirmonga", "Maktabga"], 1],
    ["Kelinoyim qahramonga qaytishda nima tayyorlashni va’da qiladi?", ["Qovoq somsa", "Palov", "Manti"], 0],
    ["Bosh qahramon jo‘xorini torttirib qaytganda uyda kim bor edi?", ["Faqat buvisi", "Kelinoyim va buvisi", "Hech kim yo‘q edi"], 2],
    ["Buvini qayerda ko‘rib qoladi?", ["Keksa shotut tagidagi ulkan qabr yonida", "Tegirmon oldida", "Darvoza yonida"], 0],
    ["Buvining qabr yonida o‘tirishi qahramonga nega g‘alati tuyuladi?", ["Odatda u bunday paytda emas, namoz paytlarida borardi", "U yerda hech qachon o‘tirmagan", "U qabrni tozalayotgan edi"], 0],
    ["Kelinoyim soy bo‘yida nima qilayotgan edi?", ["Kir yuvayotgan", "Qatiq ivitayotgan", "Gul terayotgan"], 1],
    ["Bosh qahramon avliyo boboning qabri oldida nima so‘raydi?", ["Tog‘asining tezroq qaytishini", "Kelinoyimning tushi rost chiqib, ko‘z yoshlari qurishini", "O‘ziga yangi xo‘tik berilishini"], 1],
    ["Soyda bolalar qanday xabarni aytib qichqirishadi?", ["Tog‘a kelganini", "Pochtachi kelayotganini", "To‘y boshlanishini"], 1],
    ["Pochtachi qanday ko‘rinishda tasvirlanadi?", ["Yosh yigit, qo‘li snaryad parchasi sabab shikastlangan", "Keksa soqolli kishi", "Ot minib kelgan askar"], 0],
    ["Qahramon pochtachi tog‘asidan xat olib kelayotganiga qanday munosabatda edi?", ["Bunga zarracha ham shubha qilmasdi", "Bunga ishonmasdi", "Xatni olishni istamasdi"], 0],
    ["Pochtachi ularning hovlisiga to‘g‘ri keldimi?", ["Ha, darhol kirdi", "Yo‘q, qo‘shni hovliga o‘tib ketmoqchi bo‘ldi", "U qishloqdan qaytib ketdi"], 1],
    ["Buvining pochtachidan so‘ragan xati kimdan kelgan bo‘lishi kerak edi?", ["Tog‘asidan", "Qishloq raisidan", "Maktab direktoridan"], 0],
    ["Pochtachi xat aslida kimdan kelganini aytadi?", ["Tog‘aning o‘zidan", "Gospital boshlig‘idan", "Kelinoyimning otasidan"], 1],
    ["Xat qayerga topshirilgan edi?", ["Buvining uyiga", "Qishloq kengashi raisiga", "Tegirmonchiga"], 1],
    ["Kelinoyim pochtachining gapidan keyin qanday holatga tushadi?", ["Xursand bo‘lib kuladi", "Dahshat va qo‘rquv bilan qahramonga qaraydi", "Hech narsani eshitmaydi"], 1],
    ["Buvining pochtachiga dastlabki munosabati qanday bo‘ladi?", ["Uning gapini tushunmay, kulib e’tiroz bildiradi", "Uni ayblaydi", "Xatni o‘qib beradi"], 0],
    ["Kelinoyim qahramonga qanday savol beradi?", ["Nega tegirmonga kech qolding?", "Topgan xushxabaring shu bo‘ldimi?", "Nega somsa yemading?"], 1],
    ["Kelinoyim qahramonning yaxshilik qilish niyatiga qanday javob qaytaradi?", ["Darhol kechiradi", "Buni yaxshilik deb qabul qilmay, qattiq iztirob chekadi", "Kulib yuboradi"], 1],
    ["Qishloq kengashidan odam kelgach nima boshlanadi?", ["Bayram", "Xotin-xalaj yig‘ilib, yig‘i-sig‘i", "Hosil bayrami"], 1],
    ["Birinchi haftada qahramonning holati qanday edi?", ["Hamma uni yupatadi", "Uni eslaydigan odam topolmay, o‘zi bilan o‘zi qoladi", "U boshqa qishloqqa ketadi"], 1],
    ["Qahramon nima sababdan xabarni kelinoyimga aytganini tushuntiradi?", ["Uni quvontirish va yaxshilik qilish uchun", "O‘zini maqtash uchun", "Buvini qo‘rqitish uchun"], 0],
    ["Buvining qahramonga munosabati qanday bo‘ladi?", ["Uning iztirobini tushunadi va tinchlantiradi", "Uni uyidan haydaydi", "U bilan gaplashmaydi"], 0]
  ],

  2: [
    ["Kelinoyim keyinchalik qahramonga qanday munosabatda bo‘ladi?", ["Darhol kechiradi", "Unga qayrilib qaramaydi", "Har kuni suhbatlashadi"], 1],
    ["Kelinoyim qancha vaqt motam tutadi?", ["Bir hafta", "Bir oy", "Bir kun"], 1],
    ["Kelinoyim ketishidan oldin qahramon nimani kutadi?", ["Undan sovg‘a olishni", "Hech bo‘lmasa xayrlashishini yoki bir og‘iz gap aytishini", "U bilan birga ketishni"], 1],
    ["Kelinoyimni olib ketish uchun nima tayyorlanadi?", ["Poyezd", "Arava", "Avtobus"], 1],
    ["Qahramon kelinoyim bilan tog‘asini qayerda uchratgan edi?", ["Tegirmon oldida", "Buloq boshida", "Qishloq kengashida"], 1],
    ["Aravada kelinoyim qanday kiyingan edi?", ["Oq ko‘ylak va oq ro‘mol", "Qora palto va qora shol ro‘mol", "Ko‘k ko‘ylak va ko‘k ro‘mol"], 1],
    ["Kelinoyim aravada qanday o‘tirardi?", ["Qahramonga qarab", "Qahramonga teskari qarab", "Aravakash yonida tik turib"], 1],
    ["Aravakash chol qahramonni ko‘rgach nima qiladi?", ["Kelinoyimga nimadir deydi", "Aravani orqaga qaytaradi", "Qahramonni aravaga chiqaradi"], 0],
    ["Kelinoyim qahramonga qaragach nima qiladi?", ["Uning oldiga yuguradi", "Yana teskari o‘girilib oladi", "Qo‘l siltab xayrlashadi"], 1],
    ["Hikoya oxirida qahramon qanday holatda qoladi?", ["Xursand bo‘lib uyiga qaytadi", "Iltijo qilganicha orqada qoladi", "Kelinoyim bilan ketadi"], 1],
    ["Kelinoyim qahramonning yaxshiligini kechirdimi?", ["Ha, shu zahoti", "Yo‘q, kechirolmadi", "Bu haqda aytilmagan"], 1],
    ["Asardagi bosh qahramonning niyati qanday edi?", ["Kelinoyimni ataylab ranjitish", "Kelinoyimni quvontirish", "Tog‘asini qishloqqa qaytarmaslik"], 1],
    ["Qahramon xat haqidagi xabarni aytganida qanday muhim haqiqatni bilmas edi?", ["Kelinoyim ovqat tayyorlayotganini", "Aynan o‘sha kuni qoraxat kelganini", "Buvining qabr oldida o‘tirganini"], 1],
    ["Kelinoyim xat kelishini kutayotganida qaysi ishni qilayotgan edi?", ["Soy bo‘yida qatiq ivitayotgan", "Tegirmonda ishlayotgan", "Paxta sotayotgan"], 0],
    ["Bosh qahramon xatni kutish bilan nimaga umid qilardi?", ["Uyda yana mehr-inoqlik paydo bo‘lishiga", "Boyib ketishga", "Shaharga ko‘chishga"], 0],
    ["Buvining qabr yonida iltijo qilishi nimani anglatishi mumkin?", ["U oilasining tashvishi uchun umid va najot izlayotganini", "U hosilni hisoblayotganini", "U pochtachini kutayotganini"], 0],
    ["Pochtachining shikastlangan qo‘li nimadan jarohatlangan edi?", ["Ot tepishidan", "Snaryad parchasidan", "Ish qurolidan"], 1],
    ["Buvining pochtachiga qovoq somsa taklif qilishi nimani ko‘rsatadi?", ["Mehmonni izzat qilishga tayyorligini", "Pochtachidan g‘azablanganini", "Unga ishonmasligini"], 0],
    ["Qahramon pochtachi kelayotganini eshitganda nima qiladi?", ["Uyda yashirinadi", "Sakrab turib uy tomonga yuguradi", "Buvini chaqirmaydi"], 1],
    ["Pochtachi xatni bevosita oilaga bermasligining sababi nimada edi?", ["Xat tog‘asidan emas, gospital boshlig‘idan bo‘lib, raisga topshirilgan edi", "U xatni yo‘qotgan edi", "U oilani tanimasdi"], 0],
    ["Kelinoyimning ko‘zlaridagi dahshat nimani anglatardi?", ["Yomon xabarni anglab yetganini", "Pochtachini taniganini", "Qahramondan sovg‘a kutganini"], 0],
    ["Qahramon kelinoyimga uzr aytganda nima deydi?", ["Ataylab yolg‘on gapirganini", "Yaxshi niyat bilan unga yaxshilik qilmoqchi bo‘lganini", "Xatni o‘zi yozganini"], 1],
    ["Kelinoyimning yosh niholday ikki bukilishi qanday holatni ifodalaydi?", ["Qattiq qayg‘u va ruhiy zarbani", "Jismoniy charchoqni", "Kulib yuborganini"], 0],
    ["Qahramon bir hafta davomida nima uchun qiynaladi?", ["Kelinoyimni xafa qilganini tushuntira olmay, yolg‘iz qolganidan", "Tegirmonga borolmaganidan", "Xo‘tigi kasal bo‘lganidan"], 0],
    ["Buvining qahramonni chaqirib olishi qachon yuz beradi?", ["Bir haftadan keyin", "Ertasi kuni", "Bir oydan keyin"], 0],
    ["Qahramon buvisiga nimalarni aytib beradi?", ["Kelinoyimni yomon ko‘rishini", "Uni quvontirish uchun shunday qilganini va hanuz yaxshi ko‘rishini", "Tog‘asining xatini yashirganini"], 1],
    ["Kelinoyim qishloqdan ketayotgan kuni qahramon qayerga boradi?", ["Tegirmonga", "Buloq boshiga", "Qishloq kengashiga"], 1],
    ["Qahramon kelinoyimdan nimani so‘ramoqchi bo‘ladi?", ["Bir og‘iz gap aytishini, dardiga quloq solishini", "O‘ziga pul berishini", "Qaytib kelmasligini"], 0],
    ["Kelinoyim aravadan qahramonga qo‘l siltaydimi?", ["Ha, qo‘l siltaydi", "Yo‘q, qo‘lini ham siltamaydi", "Aravadan tushib gaplashadi"], 1],
    ["Asar yakunidagi asosiy ziddiyat nimada?", ["Yaxshi niyat bilan qilingan ishning og‘ir oqibat keltirishi", "Ikki qo‘shnining yer talashishi", "Tegirmonning buzilishi"], 0]
  ]
};

const state = {
  1: { index: 0, score: 0, locked: false, done: false },
  2: { index: 0, score: 0, locked: false, done: false }
};

let seconds = 180;
let timerInterval = null;
let started = false;
let ended = false;

const $ = (id) => document.getElementById(id);

function renderTeam(team) {
  const s = state[team];
  const q = questions[team][s.index];

  $("score" + team).textContent = s.score;
  $("progress" + team).style.width = (s.index / 30 * 100) + "%";
  $("counter" + team).textContent = s.done
    ? "30 ta savol tugadi"
    : `Savol ${s.index + 1} / 30`;

  const answerBox = $("answers" + team);
  answerBox.innerHTML = "";
  $("feedback" + team).textContent = "";
  $("feedback" + team).className = "feedback";

  if (!q || s.done) {
    $("question" + team).textContent =
      "Bu jamoa barcha savollarni yakunladi!";
    s.done = true;
    $("progress" + team).style.width = "100%";
    return;
  }

  $("question" + team).textContent = q[0];

  q[1].forEach((option, i) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = String.fromCharCode(65 + i) + ". " + option;
    button.addEventListener("click", () => chooseAnswer(team, i));
    button.disabled = !started || ended || s.locked;
    answerBox.appendChild(button);
  });
}

function chooseAnswer(team, choice) {
  const s = state[team];

  if (!started || ended || s.locked || s.done) return;

  s.locked = true;
  const q = questions[team][s.index];
  const buttons = $("answers" + team).querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === q[2]) {
      button.classList.add("correct");
    }

    if (i === choice && choice !== q[2]) {
      button.classList.add("wrong");
    }
  });

  const feedback = $("feedback" + team);

  if (choice === q[2]) {
    s.score++;
    $("score" + team).textContent = s.score;
    feedback.textContent = "To‘g‘ri! +1 ball";
    feedback.classList.add("good");
  } else {
    feedback.textContent =
      "Noto‘g‘ri. To‘g‘ri javob: " +
      String.fromCharCode(65 + q[2]) + ". " + q[1][q[2]];
    feedback.classList.add("bad");
  }

  setTimeout(() => {
    if (ended) return;

    s.index++;
    s.locked = false;

    if (s.index >= 30) {
      s.done = true;
    }

    renderTeam(team);

    if (state[1].done && state[2].done) {
      finishGame("Ikkala jamoa ham 30 ta savolni yakunladi!");
    }
  }, 1000);
}

function updateTimer() {
  const min = Math.floor(seconds / 60).toString().padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");

  $("timer").textContent = `${min}:${sec}`;

  if (seconds <= 30) {
    $("timer").style.color = "#b33a46";
  }

  if (seconds <= 0) {
    finishGame("Vaqt tugadi!");
    return;
  }

  seconds--;
}

function startGame() {
  if (started || ended) return;

  started = true;
  $("startBtn").disabled = true;

  renderTeam(1);
  renderTeam(2);

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function finishGame(message) {
  if (ended) return;

  ended = true;
  clearInterval(timerInterval);

  [1, 2].forEach(team => {
    $("answers" + team)
      .querySelectorAll("button")
      .forEach(button => button.disabled = true);
  });

  const a = state[1].score;
  const b = state[2].score;

  $("final1").textContent = a;
  $("final2").textContent = b;

  if (a > b) {
    $("resultTitle").textContent = "1-jamoa g‘olib!";
  } else if (b > a) {
    $("resultTitle").textContent = "2-jamoa g‘olib!";
  } else {
    $("resultTitle").textContent = "Durrang!";
  }

  $("resultText").textContent =
    `${message} Yakuniy hisob: ${a} : ${b}.`;

  $("resultModal").classList.remove("hidden");
}

function restartGame() {
  clearInterval(timerInterval);

  seconds = 180;
  started = false;
  ended = false;

  [1, 2].forEach(team => {
    Object.assign(state[team], {
      index: 0,
      score: 0,
      locked: false,
      done: false
    });
  });

  $("timer").style.color = "";
  $("timer").textContent = "03:00";
  $("startBtn").disabled = false;
  $("resultModal").classList.add("hidden");

  renderTeam(1);
  renderTeam(2);
}

$("startBtn").addEventListener("click", startGame);
$("restartBtn").addEventListener("click", restartGame);
$("playAgain").addEventListener("click", restartGame);

renderTeam(1);
renderTeam(2);