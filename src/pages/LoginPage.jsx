import React, { useState } from "react";
import instance from "../api/axios";
//import requests from "../api/requests";
import "./LoginPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

  const [authId, setAuthId] = useState("");
  const [password, setPassword] = useState("");
  
  const movePage = useNavigate();
  const goSignUp = () => {
    movePage('/users');
  }

  const login = async () => {
    try {
      const response = await instance.post( '/users/login', {
        auth_id: authId,
        password: password,
      });

      localStorage.setItem('jwt', response.data.jwt);
        console.log(response);
        alert("로그인 완료!");

    } catch (error) {
      console.error(error);
      alert("아이디와 비밀번호를 확인해 주세요!");
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
      <br></br>
      <button className="btn" onClick={goSignUp}>회원가입</button> 
    </div>
  );
}
