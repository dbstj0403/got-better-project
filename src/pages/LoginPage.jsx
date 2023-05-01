import React, { useState } from "react";
import instance from "../api/axios";
import requests from "../api/requests";
import "./LoginPage.css"
import axios from "axios";


export default function LoginPage() {

  const [authId, setAuthId] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await instance.post( `/users/login`, {
        auth_id: authId,
        password: password,
      });
      localStorage.setItem('jwt', response.data.jwt);
        console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login-form">
      <div className="form-group">
        <label>Auth ID</label>
        <input id="authId" className="form-control" required value={authId} onChange={(e) => setAuthId(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className="btn" onClick={login}>로그인</button>
    </div>
  );
}
