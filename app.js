// =============================================
//  InfoTerm AI — Main Application Logic
// =============================================

// ── Knowledge Base ──────────────────────────────────────────────
const knowledgeBase = {
  // Algorithms & Data Structures
  "algorithm": {
    definition: "Algorithm — muayyan masalani hal qilish uchun ketma-ket bajariluvchi aniq ko'rsatmalar to'plami.",
    detail: "Algoritm — bu kompyuter dasturlashning asosi. U muammoni bosqichma-bosqich hal qilishning puxta rejasi hisoblanadi. Har bir algoritm aniq kirish (input) oladi, bir qator amallarni bajaradi va natijani (output) qaytaradi. Yaxshi algoritm to'g'ri, samarali va tushunarli bo'lishi lozim. Algoritmlar vaqt murakkabligi (time complexity) va xotira murakkabligi (space complexity) bilan baholanadi.",
    example: "🌍 Real misol: Siz do'konga borib mahsulot sotib olishingiz — bu ham bir turdagi algoritmdir: do'konga kir → ro'yxatni ko'r → mahsulotlarni savatchaga sol → kassaga bor → to'lov qil → chiqib ket.",
    code: `# Python: Oddiy qidiruv algoritmi
def chiziqli_qidiruv(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # indeksni qaytaradi
    return -1  # topilmasa -1

ro'yxat = [10, 25, 8, 42, 15]
natija = chiziqli_qidiruv(ro'yxat, 42)
print(f"Element {natija}-indeksda")  # 3-indeksda`
  },

  "variable": {
    definition: "Variable (O'zgaruvchi) — dasturda ma'lumotlarni saqlash uchun xotiradagi nomlanган joy.",
    detail: "O'zgaruvchi — bu qutichaga o'xshaydi: unga har xil qiymat solib, keyin ishlatishingiz mumkin. O'zgaruvchilar nom (identifier), qiymat (value) va tur (type) dan iborat bo'ladi. Dasturlashda o'zgaruvchilar muhim, chunki ular ma'lumotlarni dinamik tarzda saqlash va o'zgartirish imkonini beradi. Ko'pgina tillarda o'zgaruvchi e'lon qilishdan oldin turini belgilash kerak.",
    example: "🌍 Real misol: Savatdagi yoki sumkadagi buyumlarni hisobladingiz — 5 ta olma. 'Miqdor = 5' deb yozsangiz, 'miqdor' bu o'zgaruvchi, '5' esa uning qiymati.",
    code: `# Python misoli
ism = "Alisher"         # string (matn)
yosh = 20               # integer (butun son)
oylik = 2500000.50      # float (kasr son)
talaba = True           # boolean (mantiqiy)

print(f"Ismi: {ism}, Yoshi: {yosh}")

// JavaScript misoli
let shahar = "Toshkent";
const PI = 3.14159;
var soni = 42;`
  },

  "api": {
    definition: "API (Application Programming Interface) — dasturlar o'rtasida muloqot qilish imkonini beruvchi interfeys.",
    detail: "API — bu restoran menyusiga o'xshaydi: siz nima buyurtma berishingizni bilasiz, oshxona esa uni qanday tayyorlashini. API orqali bir dastur boshqa dastur xizmatlaridan foydalanadi. Masalan, ilovalar ob-havo ma'lumotlarini OpenWeatherMap API orqali oladi. API REST, GraphQL, SOAP va boshqa turlarida bo'lishi mumkin. JSON yoki XML formatida ma'lumot uzatadi.",
    example: "🌍 Real misol: Aviasayt orqali chipta sotib olgansiz — bu sayt aviakompaniya API'siga so'rov yuboradi va erkin o'rinlarni ko'rsatadi. Siz API mexanizmini ko'rmaysiz, lekin u ishlaydi.",
    code: `// JavaScript: Fetch API bilan so'rov yuborish
async function ob_havoOlish(shahar) {
  const url = \`https://api.weather.com/v1/\${shahar}\`;
  const javob = await fetch(url);
  const malumot = await javob.json();
  return malumot.temperature;
}

// API javob namunasi (JSON)
{
  "shahar": "Toshkent",
  "temperatura": 28,
  "holat": "Quyoshli"
}`
  },

  "database": {
    definition: "Database (Ma'lumotlar bazasi) — tizimli tarzda saqlangan va boshqariladigan katta hajmdagi ma'lumotlar to'plami.",
    detail: "Ma'lumotlar bazasi — bu ulkan elektron arxiv. Unda ma'lumotlar jadvallar (tables), hujjatlar (documents) yoki graflar shaklida saqlanadi. Ma'lumotlar bazasini boshqarish uchun DBMS (Database Management System) ishlatiladi. MySQL, PostgreSQL, MongoDB, SQLite — eng mashhur tizimlar. Ikki asosiy tur mavjud: Relyatsion (SQL) va Norelyatsion (NoSQL).",
    example: "🌍 Real misol: Kutubxonadagi katalog — har bir kitob haqida (nomi, muallifi, joyi) ma'lumot tartibli saqlanadi. Kitob bazasi tizimi aynan shu ishlaydi.",
    code: `-- SQL: Jadval yaratish va so'rov
CREATE TABLE talabalar (
    id       INT PRIMARY KEY AUTO_INCREMENT,
    ism      VARCHAR(50),
    yosh     INT,
    ball     FLOAT
);

-- Ma'lumot qo'shish
INSERT INTO talabalar (ism, yosh, ball)
VALUES ('Kamola', 19, 95.5);

-- So'rov yuborish
SELECT ism, ball
FROM talabalar
WHERE ball > 90
ORDER BY ball DESC;`
  },

  "machine learning": {
    definition: "Machine Learning (Mashina o'rganishi) — kompyuterga aniq dasturlamsdan, ma'lumotlardan o'z-o'zidan o'rganish qobiliyatini beradigan AI sohasi.",
    detail: "ML — bu boladek: bola ko'plab mushuklar rasmini ko'rib, 'mushuk nima' deb tushunadi. Xuddi shunday, ML modeli minglab misollardan o'rganib, yangi ma'lumotlarni tasniflaydi. Asosiy turlari: Supervised Learning (nazoratli), Unsupervised Learning (nazorat qilinmaydigan) va Reinforcement Learning (mukofot asosida). Amaliyotda spam-filtrlash, tavsiya tizimlari, tibbiy tashxislarda ishlatilади.",
    example: "🌍 Real misol: Netflix sizga film tavsiya qilsa — bu ML! Tizim siz tomosha qilgan filmlar asosida sizga mos yangi filmlarni topadi. Gmail spam xatlarni ham ML orqali aniqlaydi.",
    code: `# Python: Sklearn bilan oddiy ML modeli
from sklearn.linear_model import LinearRegression
import numpy as np

# O'qitish ma'lumotlari
X = np.array([[1], [2], [3], [4], [5]])  # xona soni
y = np.array([100, 180, 260, 340, 420])   # narx (ming $)

# Modelni o'qitish
model = LinearRegression()
model.fit(X, y)

# Bashorat
narx = model.predict([[6]])
print(f"6 xonali uy narxi: {narx[0]:.0f} ming $")`
  },

  "recursion": {
    definition: "Recursion (Rekursiya) — funksiya o'zini-o'zi chaqirishi orqali masalani hal qilish usuli.",
    detail: "Rekursiya — bu oynalarni bir-biriga qaratish kabi: siz cheksiz ko'rinish ko'rasiz. Lekin dasturlashda rekursiya cheksiz emas — u bazaviy holat (base case) ga yetganda to'xtaydi. Rekursiya murakkab masalalarni kichik bo'laklarga bo'lib hal qilishga yordam beradi. Daraxt (tree) va graflarни o'tishda, dynamic programming da keng ishlatiladi. Muhim: bazaviy holatsiz rekursiya Stack Overflow xatosiga olib keladi.",
    example: "🌍 Real misol: Matryoshka qo'g'irchoq — katta qo'g'irchoqni ochasiz, ichidan kichigi chiqadi, uni ochasiz — yana kichigi... Eng kichigiga yetganda to'xtaysiz. Bu rekursiyaning mohiyati.",
    code: `// JavaScript: Faktorial (n!) rekursiya bilan
function faktorial(n) {
  // Bazaviy holat
  if (n <= 1) return 1;
  
  // Rekursiv chaqiruv
  return n * faktorial(n - 1);
}

console.log(faktorial(5));
// 5 × 4 × 3 × 2 × 1 = 120

// Fibonacci ketma-ketligi
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
// fibonacci(6) → 8`
  },

  "oop": {
    definition: "OOP (Object-Oriented Programming — Ob'ektga Yo'naltirilgan Dasturlash) — dasturni real dunyodagi ob'ektlar asosida modellashtirish paradigmasi.",
    detail: "OOP — real dunyoni dasturda tasvirlash usuli. Masalan, 'Avtomobil' degan sinf (class) yaratib, uning xususiyatlari (rang, tezlik) va harakatlari (yur, to'xta) ni belgilaysiz. OOP to'rtta asosiy tamoyilga asoslanadi: Encapsulation (qadoqlash), Inheritance (meros), Polymorphism (ko'p shakllilik) va Abstraction (abstraksiya). Ko'pchilik zamonaviy tillar OOP qo'llab-quvvatlaydi: Java, Python, C++, C#.",
    example: "🌍 Real misol: Hayvonot bog'ini tasavvur qiling. Har bir hayvon — ob'ekt. Ularning barchasi 'Hayvon' sinfidan meros oladi (nafas olish, ovqatlanish), lekin har biri o'ziga xos ovoz chiqaradi (polymorphism).",
    code: `# Python: OOP misoli
class Hayvon:
    def __init__(self, ism, tur):
        self.ism = ism  # encapsulation
        self.tur = tur
    
    def ovoz_chiqar(self):
        return "..."

class It(Hayvon):  # inheritance
    def ovoz_chiqar(self):  # polymorphism
        return "Vov vov!"

class Mushuk(Hayvon):
    def ovoz_chiqar(self):
        return "Miyov!"

it = It("Bars", "it")
mushuk = Mushuk("Yulduz", "mushuk")
print(it.ovoz_chiqar())     # Vov vov!
print(mushuk.ovoz_chiqar()) # Miyov!`
  },

  "git": {
    definition: "Git — dastur kodidagi o'zgarishlarni kuzatib boruvchi, jamoa ishini boshqaruvchi versiyalarni boshqarish tizimi.",
    detail: "Git — bu kod tarixi. Har bir o'zgarish (commit) saqlanib, kerak bo'lsa oldingi holatga qaytish mumkin. Linus Torvalds tomonidan 2005-yilda yaratilgan. GitHub va GitLab kabi platformalar orqali jamoa a'zolari bir loyihada parallel ishlaydi. Asosiy tushunchalar: repository (ombor), commit, branch (shox), merge, push, pull.",
    example: "🌍 Real misol: Google Docs tarixi funksiyasi — har kim hujjatga nima qo'shganini ko'rasiz va muayyan paytga qaytishingiz mumkin. Git ham xuddi shunday ishlaydi, lekin kod uchun.",
    code: `# Git asosiy buyruqlari

# Yangi repository boshlash
git init

# Loyiha nusxasini olish
git clone https://github.com/user/loyiha.git

# Holat ko'rish
git status

# O'zgarishlarni qo'shish
git add fayl.py        # bitta fayl
git add .              # hammasi

# Commit (saqlash)
git commit -m "Login tizimi qo'shildi"

# GitHub ga yuklash
git push origin main

# Yangi branch
git checkout -b yangi-funksiya`
  },

  "docker": {
    definition: "Docker — dasturni barcha kerakli komponentlari bilan birga konteynerga joylashtirib, har qanday muhitda ishlatish imkonini beruvchi platforma.",
    detail: "Docker — bu yuklarni tashuv konteynerlari kabi. Dasturingizni 'quticha'ga solar ekan siz, u quticha ixtiyoriy kompyuterda bir xil ishlaydi. 'Mening kompyuterimda ishlaydi' muammosini hal qiladi. Asosiy tushunchalar: Image (tasvir), Container (konteyner), Dockerfile, Docker Hub. Dasturni boshqa muhitga ko'chirish, test qilish va deploy qilishni osonlashtiradi. Kubernetes bilan birgalikda katta tizimlarda ishlatiladi.",
    example: "🌍 Real misol: Pizzani qutilanada etsangiz — quti ichida hamma narsa (pizza, qoshiq, salfetka) tayyorlanib keladi. Docker ham shunday: dastur va uning barcha kutubxonalari birga 'qutila' joylashadi.",
    code: `# Dockerfile misoli
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["python", "app.py"]

# Docker buyruqlari
# Image yaratish
docker build -t mening-ilovam:1.0 .

# Konteyner ishga tushirish
docker run -p 8000:8000 mening-ilovam:1.0

# Ishlab turgan konteynerlar
docker ps`
  },

  "encryption": {
    definition: "Encryption (Shifrlash) — ma'lumotni faqat maxsus kalit egasigina o'qiy oladigan tarzda o'zgartirish jarayoni.",
    detail: "Shifrlash — bu maxfiy xat yozishga o'xshaydi: harflarni o'rnini almashtirish orqali. Zamonaviy shifrlash esa juda murakkab matematik algoritmlardan foydalanadi. Ikki asosiy tur: Simmetrik (bir xil kalit) va Asimmetrik (ochiq va yopiq kalit juftligi). HTTPS veb-saytlarda, WhatsApp xabarlarida, bank operatsiyalarida ishlatiladi. AES, RSA, SHA eng mashhur algoritmlar.",
    example: "🌍 Real misol: ATM'da karta PIN kodingizni kiritganda, bu raqamlar shifrlangan holda bankka yuboriladi. Huchumchi tarmoqni 'tinglab' tursa ham, u faqat shifrni ko'radi — haqiqiy PIN'ni emas.",
    code: `# Python: Oddiy Sezar shifri misoli
def shifrlash(matn, kalit):
    natija = ""
    for harf in matn:
        if harf.isalpha():
            # harfni siljitish
            baza = ord('A') if harf.isupper() else ord('a')
            natija += chr((ord(harf) - baza + kalit) % 26 + baza)
        else:
            natija += harf
    return natija

xabar = "SALOM"
shifr = shifrlash(xabar, 3)
print(f"Shifrlangan: {shifr}")  # VDORP

deshifr = shifrlash(shifr, -3)
print(f"Qayta ochildi: {deshifr}")  # SALOM`
  },

  "cloud computing": {
    definition: "Cloud Computing (Bulut hisoblash) — internet orqali kompyuter resurslari (server, xotira, dastur) ni ijaraga olish texnologiyasi.",
    detail: "Bulut hisoblash — bu elektr energiyasi kabi: siz generatorsiz turasiz, lekin elektr ishlatasiz. Xuddi shunday, o'z serveringiz bo'lmasdan ham katta hisoblash kuchidan foydalanasiz. AWS, Google Cloud, Microsoft Azure — eng yirik provayderlar. IaaS (Infrastructure), PaaS (Platform), SaaS (Software) — asosiy xizmat modellari. Miqyoslilik (scalability) va tejamkorlik asosiy afzalliklari.",
    example: "🌍 Real misol: Google Drive — fayllaringiz sizning kompyuterda emas, Googlening serverlarida. Siz istalgan qurilmadan, istalgan joydan ularga kira olasiz. Bu bulut xizmati.",
    code: `# AWS S3 ga fayl yuklash (Python boto3)
import boto3

s3 = boto3.client('s3',
    aws_access_key_id='KEY',
    aws_secret_access_key='SECRET',
    region_name='us-east-1'
)

# Fayl yuklash
s3.upload_file(
    'rasm.jpg',           # lokal fayl
    'mening-bucket',      # S3 bucket nomi
    'uploads/rasm.jpg'    # bulutdagi yo'l
)

print("✅ Fayl bulutga yuklandi!")

# Xizmat modellari
# SaaS: Gmail, Zoom, Salesforce
# PaaS: Heroku, Google App Engine
# IaaS: AWS EC2, Azure VMs`
  },

  "compiler": {
    definition: "Compiler (Kompilyator) — yuqori darajali dasturlash tilini mashina tiliga to'liq tarjima qiluvchi dastur.",
    detail: "Kompilyator — bu kitob tarjimoniga o'xshaydi: butun kitobni o'qib, boshqa tilda yozadi. Dastur manba kodi (C, C++, Go) avval to'liq kompilatsiya qilinadi, keyin bajariladigan fayl (.exe) hosil bo'ladi. Afzalliklari: tez bajariladi, xatolar kompilyatsiyada aniqlanadi. Kamchiligi: har bir platforma uchun alohida kompilatsiya kerak.",
    example: "🌍 Real misol: Siz o'zbek tilida yozilgan kitobni ingliz tiliga tarjimon tarjima qiladi — bir marta tarjima qilinadi, so'ng ixtiyoriy ingliz o'qiydi. Kompilyator ham shunday: bir marta kompilatsiya, kerak joyda ishlatiladi.",
    code: `/* C kodi — manba (source) */
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("Yig'indi: %d\\n", a + b);
    return 0;
}

// Kompilatsiya buyrug'i
// gcc dastur.c -o dastur

// Natijada: dastur.exe fayli hosil bo'ladi
// Bu fayl mustaqil ishlaydi — kompilyatorsiz

// Kompilyatsiya bosqichlari:
// 1. Preprocessing (oldindan ishlash)
// 2. Compilation (kompilyatsiya)
// 3. Assembly (assembly kodi)
// 4. Linking (bog'lash)`
  },

  "interpreter": {
    definition: "Interpreter (Interpretator) — dastur kodini satr-satr tarjima qilib, darhol bajaruvchi dastur.",
    detail: "Interpretator — bu tilmochga o'xshaydi: har bir gapni eshitib, darhol tarjima qiladi. Python, JavaScript, Ruby interpretatsiya qilinuvchi tillar. Kod avval to'liq tarjima qilinmaydi — har bir qator o'qilib, bajariladi. Afzalliklari: platformastandart, debug qilish oson. Kamchiligi: kompilatsiya qilingan dasturlarga nisbatan sekinroq.",
    example: "🌍 Real misol: Tilmoch konferensiyada doimiy tarjima qiladi — spiker gapirsa, tilmoch darhol tarjima qiladi. To'g'ridan-to'g'ri va zudlik bilan. Xuddi interpretator kabi.",
    code: `# Python (interpretatsiya qilinadi)
# Bu kod satr-satr bajariladi

print("1-satr bajarildi")   # ← shu payt bajarilar

x = 10                       # ← shu payt bajarilar

# Xato bo'lsa, faqat shu satrgacha ishlaydi
# y = x / 0                  # ZeroDivisionError

print(f"x = {x}")            # ← shu payt bajarilar

# Solishtirish:
# Compiler: kitobni tarjima → keyin o'qi
# Interpreter: kitobni gapir → darhol tarjima`
  },

  "big data": {
    definition: "Big Data — an'anaviy vositalar bilan qayta ishlash qiyin bo'lgan juda katta hajmdagi, turli xil va tez o'zuvchi ma'lumotlar to'plami.",
    detail: "Big Data 5V tamoyili bilan tavsiflanadi: Volume (hajm — petabaytlar), Velocity (tezlik — real-time), Variety (xilma-xillik — matn, rasm, video), Veracity (ishonchlilik) va Value (qiymat). Hadoop, Apache Spark — asosiy texnologiyalar. Big Data biznesda qarorlar qabul qilish, mijozlarni tahlil qilish, tibbiyot va meteorologiyada keng ishlatiladi.",
    example: "🌍 Real misol: Facebook har kunda 500 terabayt ma'lumot saqlaydi — xabarlar, rasmlar, like'lar, joylashuvlar. Bu ma'lumotlarni tahlil qilib, reklamani sizga maqsadli ko'rsatadi. Yoki COVID pandemiyasida kasallik tarqalishini bashorat qilishda Big Data ishlatildi.",
    code: `# Apache Spark bilan Big Data qayta ishlash
from pyspark.sql import SparkSession
from pyspark.sql.functions import count, avg

# Spark session yaratish
spark = SparkSession.builder \\
    .appName("InfoTermAnaliz") \\
    .getOrCreate()

# Katta CSV faylni o'qish (GB/TB hajmda)
df = spark.read.csv("savdo_malumotlari.csv",
                     header=True,
                     inferSchema=True)

# Shahar bo'yicha o'rtacha savdo
natija = df.groupBy("shahar") \\
           .agg(count("id").alias("soni"),
                avg("summa").alias("o_rtacha")) \\
           .orderBy("o_rtacha", ascending=False)

natija.show(10)
# Milliardlab qatorni minutlarda tahlil qiladi`
  },

  "artificial intelligence": {
    definition: "Artificial Intelligence (Sun'iy Intellekt — AI) — kompyuterlarga inson zehni bilan bajariladigan vazifalarni bajarishga imkon beruvchi texnologiya sohasi.",
    detail: "AI — bu kompyuterni 'aqlli' qilish sa'y-harakati. O'rganish (Learning), fikrlash (Reasoning) va muammo hal qilish (Problem Solving) AI ning asosiy yo'nalishlari. Zamonaviy AI: Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision kabi tarmoqlari bor. ChatGPT, Google Bard, DALL-E — zamonaviy AI tizimlari. AI tor (narrow AI) va umumiy (AGI) turlarga bo'linadi.",
    example: "🌍 Real misol: Siri, Alexa va Google Assistant — ovozingizni eshitib, buyruqlarni bajaradi. Bu NLP va AI ning amaliy qo'llanishi. Yoki tibbiyotda rentgen rasmlarida o'sma aniqlash — bu Computer Vision + AI.",
    code: `# OpenAI GPT API bilan ishlash
import openai

client = openai.OpenAI(api_key="sizning_kalitingiz")

javob = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
            "role": "system",
            "content": "Sen O'zbek tilida yordam beruvchi AI"
        },
        {
            "role": "user",
            "content": "Algoritm nima?"
        }
    ]
)

print(javob.choices[0].message.content)

# AI yo'nalishlari:
# NLP    → Matn tahlil, tarjima, suhbat
# CV     → Rasm/video tahlil
# RL     → O'yinlar, robotika
# ML     → Bashorat, tasniflash`
  },

  "internet protocol": {
    definition: "Internet protokollari — qurilmalar internetda bir-biri bilan qanday muloqot qilishi kerakligini belgilovchi standart qoidalar to'plami.",
    detail: "Protokollar — bu til qoidalari kabi. HTTP/HTTPS veb-sahifalar uchun, SMTP email uchun, FTP fayl uzatish uchun, TCP/IP asosiy ma'lumot uzatish uchun. TCP (Transmission Control Protocol) ma'lumotni to'g'ri yetkazilishini ta'minlaydi. IP (Internet Protocol) manzillash tizimini belgilaydi. DNS domen nomlarini IP manzillarga tarjima qiladi.",
    example: "🌍 Real misol: Pochta tizimi kabi — xat yuborish qoidalari bor: konvertga manzil yozing, pochta indeksini kiriting, muhrlang. HTTP ham xuddi shunday: so'rov yuborishning qat'iy qoidalari mavjud.",
    code: `# HTTP so'rov tuzilmasi
# ────────────────────────────────
GET /api/talabalar HTTP/1.1
Host: www.universitet.uz
Authorization: Bearer token123
Content-Type: application/json

# HTTP javob
HTTP/1.1 200 OK
Content-Type: application/json

{
  "talabalar": [
    {"id": 1, "ism": "Kamola"},
    {"id": 2, "ism": "Jasur"}
  ]
}

# Asosiy protokollar
# HTTP/HTTPS  → web (80/443-port)
# SMTP        → email yuborish (25-port)
# FTP         → fayl uzatish (21-port)
# SSH         → xavfsiz ulanish (22-port)
# DNS         → nom → IP tarjima (53-port)`
  }
};

// ── Off-topic keywords ──────────────────────────────────────────
const offTopicPatterns = [
  /oshxona|taom|ovqat|pishir|retsept/i,
  /sport|futbol|basketbol|tennis/i,
  /film|kino|serial|aktyor/i,
  /musiqa|qo'shiq|artist|singer/i,
  /siyosat|hukumat|prezident|parlament/i,
  /din|islom|namoz|qur'on/i,
  /sevgi|muhabbat|yor|qiz|yigit|nikoh/i,
  /ob-havo.*(qanday|bugun|holat)/i,
  /qancha.*(narx|pul|dollar)/i,
  /tarjima.*(matn|gap|so'z)(?!.*kod|dastur)/i
];

// ── Tech keywords for fuzzy matching ──────────────────────────
const techKeywords = {
  "algorithm": ["algoritm", "algorithm", "algo"],
  "variable": ["variable", "o'zgaruvchi", "o'zgaruvchi", "var", "let", "const"],
  "api": ["api", "interface", "web service", "endpoint"],
  "database": ["database", "ma'lumotlar bazasi", "db", "sql", "nosql", "mongodb", "mysql", "postgresql"],
  "machine learning": ["machine learning", "ml", "mashina o'rganishi", "neural network", "neyron", "deep learning"],
  "recursion": ["recursion", "rekursiya", "recursive", "o'zini chaqirish"],
  "oop": ["oop", "ob'ektga yo'naltirilgan", "object oriented", "class", "inheritance", "sinf"],
  "git": ["git", "github", "version control", "commit", "branch", "repo"],
  "docker": ["docker", "container", "konteyner", "dockerfile", "kubernetes", "k8s"],
  "encryption": ["encryption", "shifrlash", "kriptografiya", "cryptography", "aes", "rsa", "https", "ssl"],
  "cloud computing": ["cloud computing", "bulut hisoblash", "cloud", "aws", "azure", "google cloud", "saas", "paas", "iaas"],
  "compiler": ["compiler", "kompilyator", "compile", "kompilyatsiya"],
  "interpreter": ["interpreter", "interpretator", "interpret", "python ishlash"],
  "big data": ["big data", "katta ma'lumot", "hadoop", "spark", "petabyte"],
  "artificial intelligence": ["artificial intelligence", "sun'iy intellekt", "ai", "gpt", "chatgpt", "chatbot", "nlp"],
  "internet protocol": ["protokol", "protocol", "http", "https", "tcp", "ip", "dns", "ftp", "smtp"]
};

// ── Fuzzy match function ───────────────────────────────────────
function findTopic(input) {
  const lower = input.toLowerCase();
  for (const [topic, keywords] of Object.entries(techKeywords)) {
    for (const kw of keywords) {
      if (lower.includes(kw)) return topic;
    }
  }
  return null;
}

function isOffTopic(input) {
  return offTopicPatterns.some(p => p.test(input));
}

function isTechRelated(input) {
  const lower = input.toLowerCase();
  const techWords = ["nima", "qanday", "tushundir", "izohla", "aytib", "dastur",
    "kod", "program", "tech", "kompyuter", "internet", "network", "server",
    "software", "hardware", "data", "byte", "bit", "ram", "cpu", "gpu",
    "framework", "library", "funksiya", "function", "class", "object",
    "loop", "array", "string", "boolean", "null", "undefined", "async",
    "promise", "callback", "event", "dom", "css", "html", "javascript",
    "python", "java", "c++", "rust", "typescript", "node", "react", "vue",
    "angular", "django", "flask", "spring", "laravel", "php"];
  return techWords.some(w => lower.includes(w));
}

// ── Generate AI Response ───────────────────────────────────────
function generateResponse(input) {
  if (isOffTopic(input) && !isTechRelated(input)) {
    return {
      type: "off-topic",
      text: "Bu savolga javob bera olmayman, men faqat informatika va dasturlash terminlarini izohlayman. 💡 Iltimos, dasturlash, kompyuter fanlari yoki internet texnologiyalari haqida savol bering!"
    };
  }

  const topic = findTopic(input);

  if (topic && knowledgeBase[topic]) {
    return { type: "structured", data: knowledgeBase[topic] };
  }

  // Generic response for tech terms not in KB
  return {
    type: "not-found",
    text: `"${input.slice(0, 40)}" haqida ma'lumot topilmadi. 🔍\n\nMavjud mavzulardan birini sinab ko'ring:\n• Algoritm, Variable, API, Database\n• Machine Learning, OOP, Git, Docker\n• Encryption, Cloud Computing, Big Data\n• Compiler, Interpreter, AI, Internet protokollari`
  };
}

// ── Render Response ────────────────────────────────────────────
function renderStructuredResponse(data) {
  const div = document.createElement('div');
  div.className = 'bubble';

  const sections = [
    {
      tag: '📌 Ta\'rif', tagClass: 'tag-definition',
      content: data.definition, type: 'plain'
    },
    {
      tag: '📖 Batafsil', tagClass: 'tag-detail',
      content: data.detail, type: 'plain'
    },
    {
      tag: '🌍 Real misol', tagClass: 'tag-example',
      content: data.example, type: 'example'
    },
    {
      tag: '💻 Texnik misol', tagClass: 'tag-code',
      content: data.code, type: 'code'
    }
  ];

  sections.forEach(s => {
    const sec = document.createElement('div');
    sec.className = 'response-section';

    const tag = document.createElement('div');
    tag.className = `section-tag ${s.tagClass}`;
    tag.textContent = s.tag;
    sec.appendChild(tag);

    const content = document.createElement('div');
    if (s.type === 'code') {
      content.className = 'code-block';
      content.textContent = s.content;
    } else if (s.type === 'example') {
      content.className = 'example-box';
      content.textContent = s.content;
    } else {
      content.className = 'section-content';
      content.textContent = s.content;
    }
    sec.appendChild(content);
    div.appendChild(sec);
  });

  return div;
}

function renderSimpleResponse(text) {
  const div = document.createElement('div');
  div.className = 'bubble';
  div.style.color = 'var(--text-secondary)';
  div.style.whiteSpace = 'pre-line';
  div.textContent = text;
  return div;
}

// ── DOM helpers ────────────────────────────────────────────────
function addMessage(text, isUser) {
  const welcomeScreen = document.getElementById('welcomeScreen');
  if (welcomeScreen) {
    welcomeScreen.style.animation = 'none';
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(0.95)';
    welcomeScreen.style.transition = 'all 0.3s ease';
    setTimeout(() => welcomeScreen.remove(), 300);
  }

  const list = document.getElementById('messagesList');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${isUser ? 'user' : 'bot'}`;

  const avatar = document.createElement('div');
  avatar.className = `avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
  avatar.textContent = isUser ? '👤' : '🤖';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  bubble.style.color = isUser ? '#d0e4ff' : 'var(--text-primary)';

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  list.appendChild(msgDiv);
  scrollToBottom();
}

function addBotResponse(response) {
  const list = document.getElementById('messagesList');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';

  const avatar = document.createElement('div');
  avatar.className = 'avatar bot-avatar';
  avatar.textContent = '🤖';

  let bubble;
  if (response.type === 'structured') {
    bubble = renderStructuredResponse(response.data);
  } else {
    bubble = renderSimpleResponse(response.text);
  }

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  list.appendChild(msgDiv);
  scrollToBottom();
}

function showTyping() {
  const list = document.getElementById('messagesList');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';
  msgDiv.id = 'typingMsg';

  const avatar = document.createElement('div');
  avatar.className = 'avatar bot-avatar';
  avatar.textContent = '🤖';

  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'typing-dot';
    typing.appendChild(dot);
  }

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(typing);
  list.appendChild(msgDiv);
  scrollToBottom();

  return msgDiv;
}

function scrollToBottom() {
  const container = document.getElementById('messagesContainer');
  container.scrollTop = container.scrollHeight;
}

// ── Send Message ───────────────────────────────────────────────
async function sendMessage(inputText) {
  const text = (inputText || '').trim();
  if (!text) return;

  const input = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');

  input.value = '';
  input.style.height = 'auto';
  sendBtn.disabled = true;

  addMessage(text, true);

  const typingEl = showTyping();

  // Simulate thinking delay
  const delay = 600 + Math.random() * 800;
  await new Promise(r => setTimeout(r, delay));

  typingEl.remove();

  const response = generateResponse(text);
  addBotResponse(response);

  sendBtn.disabled = false;
  input.focus();
}

// ── Event Listeners ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const clearBtn = document.getElementById('clearChat');
  const menuBtn = document.getElementById('menuBtn');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.getElementById('sidebar');

  // Auto-resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 140) + 'px';
  });

  // Send on Enter (Shift+Enter = new line)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  sendBtn.addEventListener('click', () => sendMessage(input.value));

  // Sidebar toggle
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    sidebar.classList.toggle('open');
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('collapsed');
    sidebar.classList.remove('open');
  });

  // Topic buttons (sidebar)
  document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMessage(btn.dataset.q);
      if (window.innerWidth < 768) {
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('open');
      }
    });
  });

  // Welcome chips
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      sendMessage(e.target.dataset.q);
    }
  });

  // Clear chat
  clearBtn.addEventListener('click', () => {
    const list = document.getElementById('messagesList');
    list.innerHTML = '';

    // Re-add welcome screen
    const container = document.getElementById('messagesContainer');
    if (!document.getElementById('welcomeScreen')) {
      const welcome = document.createElement('div');
      welcome.className = 'welcome-screen';
      welcome.id = 'welcomeScreen';
      welcome.innerHTML = `
        <div class="welcome-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="url(#wg)" stroke-width="2" opacity="0.6"/>
            <path d="M20 32h24M32 20v24M24 24l16 16M40 24L24 40" stroke="url(#wg2)" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="32" cy="32" r="4" fill="url(#wg2)" opacity="0.8"/>
            <defs>
              <linearGradient id="wg" x1="0" y1="0" x2="64" y2="64">
                <stop stop-color="#00d4ff"/><stop offset="1" stop-color="#7b2ff7"/>
              </linearGradient>
              <linearGradient id="wg2" x1="0" y1="0" x2="64" y2="64">
                <stop stop-color="#00d4ff"/><stop offset="1" stop-color="#a855f7"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="welcome-title">Suhbat tozalandi ✨</h1>
        <p class="welcome-desc">Yangi savolingizni yozing yoki tezkor mavzulardan birini tanlang.</p>
        <div class="welcome-chips">
          <button class="chip" data-q="Algorithm nima?">Algorithm nima?</button>
          <button class="chip" data-q="Variable nima?">Variable nima?</button>
          <button class="chip" data-q="API nima?">API nima?</button>
          <button class="chip" data-q="OOP nima?">OOP nima?</button>
        </div>
      `;
      container.insertBefore(welcome, list);
    }
  });

  // Focus input
  input.focus();
});
