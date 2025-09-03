import React from 'react'

const STORAGE_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

const MemberSystem = {
  // 從 localStorage 取得用戶資料
  getUsers: () => {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  },

  // 更新 localStorage
  saveUsers: (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  },

  // 註冊
  register: (userData) => {
    const users = MemberSystem.getUsers();

    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('此電子郵件已被註冊');
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      order: [],
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    MemberSystem.saveUsers(users);
    return newUser;
  },

  // 登入
  login: (email, password) => {
    const users = MemberSystem.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('電子郵件或密碼錯誤');
    }
    if (!user.orders) {
      user.orders = [];
      const users = MemberSystem.getUsers();
      const userIndex = users.findIndex(u => u.id === user.id);
      users[userIndex] = user;
      MemberSystem.saveUsers(users);

    }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
  },
  // 取得當前登入用戶
  getCurrentUser: () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },
  // 登出
  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // 檢查 email 是否存在
  emailExists: (email) => {
    const users = MemberSystem.getUsers();
    return users.some(user => user.email === email);
  },

  // 新增訂單到用戶中
  addOrderToUser: (userId, orderData) => {
    const users = MemberSystem.getUsers();
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error("找不到用戶");
    }
    // 確保用戶有orders陣列
    if (!users[userIndex].orders) {
      users[userIndex].orders = [];
    }

    // 訂單創建
    const newOrder = {
      id: 'A' + Date.now(),
      ...orderData,
      orderDate: new Date().toISOString(),
      status: "訂單確認"
    };
    users[userIndex].orders.push(newOrder);
    MemberSystem.saveUsers(users);

    // 更新用戶資料
    localStorage.setItem(CURRENT_USER_KEY,JSON.stringify(users[userIndex]));
    
    return newOrder;

  },

  //取得用戶訂單
  getUserOrders: (userId) => {
    const users = MemberSystem.getUsers();
    const user = users.find(user=> user.id === userId);
    return user?.orders || [];
  } 
};

export default MemberSystem;

