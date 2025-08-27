import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || "5000", 10);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist/public")));

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "منصة القضاء الذكي تعمل بنجاح" });
});

// API routes for the judiciary platform
app.get("/api/cases", (req, res) => {
  res.json({ 
    message: "قائمة القضايا", 
    cases: [
      { id: 1, title: "قضية عقد تجاري", status: "نشطة" },
      { id: 2, title: "قضية ميراث", status: "معلقة" }
    ]
  });
});

app.get("/api/lawyers", (req, res) => {
  res.json({ 
    message: "قائمة المحامين", 
    lawyers: [
      { id: 1, name: "أحمد محمد", specialization: "القانون التجاري" },
      { id: 2, name: "فاطمة علي", specialization: "قانون الأسرة" }
    ]
  });
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "../dist/public/index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send("خطأ في تحميل الصفحة");
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 منصة القضاء الذكي تعمل على: http://0.0.0.0:${PORT}`);
  console.log(`📁 ملفات التطبيق في: ${path.join(__dirname, "../dist/public")}`);
});