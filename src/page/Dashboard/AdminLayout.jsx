import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import api from "../../Api/api";
import "../../styles/admin.css"; 
import { 
  Home, MessageSquare, BookOpen, Phone, Heart, Gamepad2, Settings, LogOut,
  Search, Calendar, ChevronDown
} from "lucide-react";

function AdminLayout() {
  const [user, setUser] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    api.get("/auth/admin/me")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));

    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const handleLogout = async () => {
    try {
      await api.post("/auth/admin/logout");
      navigate("/admin/login");
    } catch (err) { console.log(err); }
  };

  const displayName = user?.name || "HOSHINO ICHIKA";
  // Tự động đổi Breadcrumb theo URL
  const breadcrumbMain = location.pathname.includes("product") ? "PRODUCTS" : "DASHBOARD";

  return (
    <div className="dashboard-container">
      {/* SIDEBAR - Giữ nguyên của bạn */}
      <aside className="sidebar">
        <img
          src={user?.avatar || "https://i.pinimg.com/736x/2e/49/e6/2e49e63e48f6d62bc9514af51dc036fc.jpg"}
          alt="Profile"
          className="profile-pic"
        />
        <div className="menu-icons">
          <div className={`icon ${location.pathname.includes('dashboard') ? 'active' : ''}`} onClick={() => navigate("/admin/dashboard")}><Home size={22} strokeWidth={2} /></div>
          <div className="icon"><MessageSquare size={22} strokeWidth={2} /></div>
          <div className={`icon ${location.pathname.includes('projects') ? 'active' : ''}`} onClick={() => navigate("/admin/projects")}><BookOpen size={22} strokeWidth={2} /></div>
          <div className="icon"><Phone size={22} strokeWidth={2} /></div>
          <div className="icon"><Heart size={22} strokeWidth={2} /></div>
          <div className="icon"><Gamepad2 size={22} strokeWidth={2} /></div>
          <div className="icon"><Settings size={22} strokeWidth={2} /></div>
          <div onClick={handleLogout} className="icon logout-icon"><LogOut size={22} strokeWidth={2} /></div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="header-area animate-fade-up">
          <div className="breadcrumb">
            {breadcrumbMain} / <span>{displayName.toUpperCase()}</span>
          </div>
          <div className="date">
            <Calendar size={18} />
            <span>{formattedDate}</span>
            <ChevronDown size={16} />
          </div>
        </header>

        <div className="search-bar animate-fade-up">
          <input type="text" placeholder="Search..." />
          <Search size={20} className="search-icon" />
        </div>

        {/* Phần nội dung riêng sẽ hiển thị ở đây */}
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}

export default AdminLayout;