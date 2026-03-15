import { useState } from "react";
import "../../styles/Login.css";
import api from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { sileo, Toaster } from "sileo";
function Login() {
  const navigate = useNavigate();
  const [data, SetData] = useState({
    email: "",
    password: "",
  });
  const handleChange = async (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/admin/login", data);
      const user = await api.get("/auth/admin/me");
      if (user.data.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      }
    } catch (err) {
      // console.log(err.response?.data?.message);
      sileo.error({
        title: "Failed Login",
        fill: "black",
        description: err.response?.data?.message,
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
      });
    }
  };
  return (
    <>
      <Toaster position="top-center" />
      <div className="login-wrapper">
        <div className="login-bg-decoration">
          <div className="login-blob login-blob-1"></div>
          <div className="login-blob login-blob-2"></div>
        </div>

        <div className="login-container">
          <div className="login-header">
            <h1 className="login-title">Đăng nhập</h1>
            <p className="login-subtitle">Chào mừng bạn quay trở lại</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="login-input-group login-delay-100">
              <input
                type="email"
                className="login-input"
                placeholder=" "
                name="email"
                value={data.email}
                onChange={handleChange}
              />

              <label className="login-label">Email</label>

              <span className="login-underline"></span>
            </div>

            <div className="login-input-group login-delay-200">
              <input
                type="password"
                className="login-input"
                placeholder=" "
                name="password"
                value={data.password}
                onChange={handleChange}
              />

              <label className="login-label">Mật khẩu</label>

              <span className="login-underline"></span>
            </div>

            <div className="login-actions login-delay-300">
              <label className="login-checkbox-label">
                <div className="login-checkbox-box">
                  <input type="checkbox" className="login-checkbox-input" />

                  <svg
                    className="login-checkbox-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  <div className="login-checkbox-bg"></div>
                </div>

                <span className="login-remember-text">Remember me</span>
              </label>

              <a href="/forgot-password" className="login-forgot-pass">
                Quên mật khẩu
              </a>
            </div>

            <div className="login-btn-container login-delay-400">
              <button type="submit" className="login-btn">
                <div className="login-btn-shine"></div>

                <span className="login-btn-content">
                  Đăng nhập
                  <svg
                    className="login-btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          <div className="login-footer">
            Chưa có tài khoản?
            <a href="/register" className="login-create-account">
              Tạo tài khoản
              <span className="login-create-line"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
