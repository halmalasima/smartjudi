import { useState, useEffect } from "react";
import { Router, Route, Link } from "wouter";
import "./App.css";

// صفحة رئيسية
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">منصة القضاء الذكي</h1>
          <div className="space-x-4 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">الرئيسية</Link>
            <Link href="/cases" className="text-gray-700 hover:text-indigo-600">القضايا</Link>
            <Link href="/lawyers" className="text-gray-700 hover:text-indigo-600">المحامون</Link>
          </div>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          مرحباً بكم في منصة القضاء الذكي
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          نظام شامل لإدارة القضايا القانونية والخدمات القضائية في اليمن
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">إدارة القضايا</h3>
            <p className="text-gray-600">تتبع وإدارة القضايا القانونية بسهولة</p>
            <Link href="/cases" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              عرض القضايا
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">المحامون</h3>
            <p className="text-gray-600">دليل شامل للمحامين والخدمات القانونية</p>
            <Link href="/lawyers" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              عرض المحامين
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">المساعد الذكي</h3>
            <p className="text-gray-600">مساعد ذكي للاستشارات القانونية</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              البدء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// صفحة القضايا
function CasesPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data.cases || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('خطأ في تحميل القضايا:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">منصة القضاء الذكي</h1>
          <div className="space-x-4 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">الرئيسية</Link>
            <Link href="/cases" className="text-indigo-600 font-semibold">القضايا</Link>
            <Link href="/lawyers" className="text-gray-700 hover:text-indigo-600">المحامون</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">إدارة القضايا</h2>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="text-lg text-gray-600">جاري تحميل القضايا...</div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">قائمة القضايا</h3>
            </div>
            <div className="divide-y">
              {cases.map((caseItem: any) => (
                <div key={caseItem.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{caseItem.title}</h4>
                      <p className="text-sm text-gray-500">رقم القضية: {caseItem.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      caseItem.status === 'نشطة' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// صفحة المحامين
function LawyersPage() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/lawyers')
      .then(res => res.json())
      .then(data => {
        setLawyers(data.lawyers || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('خطأ في تحميل المحامين:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">منصة القضاء الذكي</h1>
          <div className="space-x-4 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">الرئيسية</Link>
            <Link href="/cases" className="text-gray-700 hover:text-indigo-600">القضايا</Link>
            <Link href="/lawyers" className="text-indigo-600 font-semibold">المحامون</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">دليل المحامين</h2>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="text-lg text-gray-600">جاري تحميل قائمة المحامين...</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map((lawyer: any) => (
              <div key={lawyer.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{lawyer.name}</h3>
                <p className="text-gray-600 mb-4">{lawyer.specialization}</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                  عرض التفاصيل
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/cases" component={CasesPage} />
      <Route path="/lawyers" component={LawyersPage} />
    </Router>
  );
}

export default App;