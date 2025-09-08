import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MemberSystem from '../data/MemberSystem'
import "../scss/member.scss"
// 引入圖片
import googleIcon from "../assets/images/GooglePlus.png"
import fbIcon from "../assets/images/Facebook.png"
import memberBG from "../assets/images/member-bg.avif"
import logo from "../assets/images/topbarLogo.png"

const Member = () => {
  const navigate = useNavigate();
  // 若為登入狀態，直接跳轉到會員管理頁面
  useEffect(()=>{
    const currentUser = MemberSystem.getCurrentUser();
    if (currentUser) {
      navigate("/MemberManagement");
    }
  },[navigate]);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = '請輸入電子郵件';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '電子郵件格式不正確';
    }

    if (!formData.password) {
      newErrors.password = '請輸入密碼';
    } else if (formData.password.length < 6) {
      newErrors.password = '密碼至少需要6個字符';
    }

    if (!isLogin) {
      if (!formData.username) newErrors.username = '請輸入使用者名稱';
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = '請確認密碼';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '密碼不一致';
      }
      if (!agreeTerms) newErrors.terms = '請同意服務條款及隱私權政策';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!validateForm()) return;
    try {
      if (isLogin) {
        const user = MemberSystem.login(formData.email, formData.password);
        alert(`登入成功！歡迎回來，${user.username || user.email}！`);
        navigate("/MemberManagement");
      } else {
        const newUser = MemberSystem.register({
          email: formData.email,
          username: formData.username,
          password: formData.password
        });
        alert(`註冊成功！歡迎，${newUser.username}！`);
        setIsLogin(true);
        setFormData({ email: formData.email, username: '', password: '', confirmPassword: '' });
      }
    } catch (error) {
      setErrors({ submit: error.message });
    } 
  };

  const toggleMode = (loginMode) => {
    setIsLogin(loginMode);
    setFormData({ email: '', username: '', password: '', confirmPassword: '' });
    setErrors({});
    setAgreeTerms(false);
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      setErrors({ email: '請先輸入電子郵件' });
      return;
    }
    alert('密碼重設連結已發送至您的電子郵件');
  };
  return (
    <section className="member-page">
      <div className="bg-box">
        <img src={memberBG} alt="member-background" id='member-bg' />
      </div>
      <div className="login-container">
        <div className="login-card">
          <div className="toggle-container">
            <button className={`toggle-btn ${!isLogin ? 'active' : ''}`} onClick={() => toggleMode(false)}>註冊</button>
            <button className={`toggle-btn ${isLogin ? 'active' : ''}`} onClick={() => toggleMode(true)}>登入</button>
          </div>

          <div className="logo">
            <img src={logo} alt="ELOALOGO" id='eloa-logo' />
          </div>

          <div className="login-form">
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="請輸入電郵或手機號碼" className={errors.email ? 'error' : ''} />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="使用者名稱" className={errors.username ? 'error' : ''} />
                {errors.username && <span className="error-text">{errors.username}</span>}
              </div>
            )}

            <div className="form-group">
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="密碼" className={errors.password ? 'error' : ''} />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="確認密碼" className={errors.confirmPassword ? 'error' : ''} />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            )}

            {!isLogin && (
              <div className="form-group">
                <label className="checkbox-container">
                  <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                  <span className="checkmark"></span>
                  我已閱讀並同意 網站服務條款 及 隱私權政策
                </label>
                {errors.terms && <span className="error-text">{errors.terms}</span>}
              </div>
            )}
            {errors.submit && <div className="error-text submit-error">{errors.submit}</div>}
            {isLogin && <button type="button" className="forgot-password" onClick={handleForgotPassword}>忘記密碼</button>}
          </div>

          <div className="login-area">
            <button type="button" className="submit-btn" onClick={handleSubmit}>
                {isLogin ? '登入' : '下一步'}
            </button>
            <div className="social-login">
              <div className="social-btn"><img src={googleIcon} alt="connectGoogle" /></div>
              <div className="social-btn"><img src={fbIcon} alt="connectFaceBook" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Member
