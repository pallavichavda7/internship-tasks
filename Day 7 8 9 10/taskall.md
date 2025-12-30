Pallavi, this is a **big milestone set (Day 7 → Day 10)**. I’ll walk you through this **step-by-step like a real backend project**, exactly how an interviewer or mentor expects.
We’ll do this **clean, structured, error-free** — and you can reuse it for interviews and GitHub.


---

# 📁 PROJECT STRUCTURE (IMPORTANT)

Create this once. We’ll keep using it for Day 7–10.

```
student-api/
│
├── server.js
├── package.json
│
├── data/
│   └── students.js          # file-based data (Day 7–8)
│
├── middlewares/
│   ├── logger.js
│   ├── time.js
│   ├── counter.js
│   ├── checkEmptyBody.js
│   └── validateStudent.js
│
├── routes/
│   └── studentRoutes.js
│
├── controllers/
│   └── studentController.js
│
├── utils/
│   └── stats.js
│
└── docs/
    └── testing_scenarios.md
```

---

# 🟢 DAY 7 — EXPRESS + MIDDLEWARE + FILE CRUD

---

## ✅ STEP 1: Initialize Project

```bash
npm init -y
npm install express
```

---

## ✅ STEP 2: `server.js`

```js
const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Test 👉 `http://localhost:3000`

---

## ✅ STEP 3: Student Data (`data/students.js`)

```js
let students = [
  { name: "Pallavi", age: 20, email: "pallavi@gmail.com", city: "Ahmedabad" },
  { name: "Amit", age: 22, email: "amit@gmail.com", city: "Surat" },
  { name: "Riya", age: 17, email: "riya@gmail.com", city: "Ahmedabad" }
];

module.exports = students;
```

---

# 🟢 TASK 1 — CREATE 5 MIDDLEWARES

### 1️⃣ Logger (`middlewares/logger.js`)

```js
module.exports = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};
```

### 2️⃣ Time (`middlewares/time.js`)

```js
module.exports = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};
```

### 3️⃣ Request Counter (`middlewares/counter.js`)

```js
let count = 0;
module.exports = (req, res, next) => {
  count++;
  console.log("Requests:", count);
  next();
};
```

### 4️⃣ Empty Body Check

```js
module.exports = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Body is empty" });
  }
  next();
};
```

### 5️⃣ Validate Name + Email

```js
module.exports = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name & Email required" });
  }
  next();
};
```

---

# 🟢 TASK 2 — ALL 4 CRUD APIs

## `routes/studentRoutes.js`

```js
const express = require("express");
const router = express.Router();

const logger = require("../middlewares/logger");
const time = require("../middlewares/time");
const counter = require("../middlewares/counter");
const checkEmpty = require("../middlewares/checkEmptyBody");
const validate = require("../middlewares/validateStudent");

const students = require("../data/students");

// Attach middlewares
router.use(logger, time, counter);

// GET
router.get("/", (req, res) => {
  res.json(students);
});

// POST
router.post("/", checkEmpty, validate, (req, res) => {
  students.push(req.body);
  res.status(201).json(req.body);
});

// PUT
router.put("/:name", (req, res) => {
  const student = students.find(s => s.name === req.params.name);
  if (!student) return res.status(404).json({ message: "Not found" });

  Object.assign(student, req.body);
  res.json(student);
});

// DELETE
router.delete("/:name", (req, res) => {
  const index = students.findIndex(s => s.name === req.params.name);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  students.splice(index, 1);
  res.json({ message: "Deleted" });
});

module.exports = router;
```

---

# 🟢 TASK 3 — SEARCH APIs

Add below in same routes file:

```js
router.get("/search/:keyword", (req, res) => {
  const k = req.params.keyword.toLowerCase();
  res.json(students.filter(s =>
    s.name.toLowerCase().includes(k) ||
    s.email.toLowerCase().includes(k)
  ));
});

router.get("/city/:city", (req, res) => {
  res.json(students.filter(s => s.city === req.params.city));
});

router.get("/age/:age", (req, res) => {
  res.json(students.filter(s => s.age >= req.params.age));
});
```

---

# 🟢 TASK 4 — STATS API

```js
router.get("/stats", (req, res) => {
  const ages = students.map(s => s.age);
  res.json({
    total: students.length,
    adults: students.filter(s => s.age >= 18).length,
    uniqueCities: [...new Set(students.map(s => s.city))],
    minAge: Math.min(...ages),
    maxAge: Math.max(...ages)
  });
});
```

---

# 🟢 TASK 5 — ADVANCED FILTER (POST)

```js
router.post("/filter", (req, res) => {
  const { city, minAge, maxAge } = req.body;

  let result = students.filter(s =>
    (!city || s.city === city) &&
    (!minAge || s.age >= minAge) &&
    (!maxAge || s.age <= maxAge)
  );

  res.json(result);
});
```

---

# 🟢 DAY 8 — QUERY APIs + DOCS

### Query Example

```js
router.get("/search", (req, res) => {
  const { name, email, city } = req.query;

  let result = students.filter(s =>
    (!name || s.name.includes(name)) &&
    (!email || s.email.includes(email)) &&
    (!city || s.city === city)
  );

  res.json(result);
});
```

---

## 📄 `docs/testing_scenarios.md`

```md
### Positive Tests
1. Add valid student
2. Update existing student
...

### Negative Tests
1. Empty body
2. Missing email
3. Duplicate email
...
```

---

# 🟢 DAY 9 & 10 — MONGODB + MONGOOSE (OVERVIEW)

You **replace file logic** with DB logic.

### DB Connection

```js
mongoose.connect(process.env.MONGO_URI);
```

### Student Schema

```js
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  city: String
});
```

### Replace:

```js
students.push()
```

with:

```js
Student.create()
```

---

# ✅ WHAT YOU ACHIEVE AFTER THIS

✔ Real backend project
✔ Express mastery
✔ CRUD + Search + Filters
✔ Middleware confidence
✔ MongoDB readiness
✔ Interview-ready explanation

---

### 🔥 NEXT STEP (VERY IMPORTANT)

Tell me:
1️⃣ Do you want **Day 7 fully finished first** (with Postman screenshots guidance)?
2️⃣ Or should we **jump to MongoDB (Day 9)** now?

I’ll guide you **exactly like a mentor**, not fast, not slow — *right pace for you* 💙
