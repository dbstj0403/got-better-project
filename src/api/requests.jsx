const requests = {
  /**
   * 회원 API
   */
  signup: "/users", // 회원가입
  duplicationCheck: "/users/verify", // 아이디 중복 확인
  login: "/users/login", // 로그인
  refreshTokenReissuance: "/users/login", // 리프레시 토큰 재발급
  getUsers: "/users", // 사용자 정보 조회

  
}

export default requests;
