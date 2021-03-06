import axiosClients from './axiosClient';
// import axiosJWT from './axiosJWT';
const authApi = {
  loginUser(body) {
    const url = `/auth/login`;
    return axiosClients.post(
      url,
      { username: body.loginInput, password: body.passwordInput },
      { withCredentials: true }
    );
  },
  logoutUser(data) {
    const url = '/auth/logout';
    console.log('hello: ', data.token);
    return data.axiosJWT.post(url, {}, { headers: { token: `Bearer ${data.token}` } });
  },
  refreshToken() {
    const url = `/auth/refresh`;
    return axiosClients.post(
      url,
      {},
      {
        withCredentials: true,
      }
    );
  },
  signUpUser(body) {
    const url = `/auth/registration`;
    return axiosClients.post(url, body);
  },
  sendEmailPassword(body) {
    const url = `/auth/forget-password/send-mail`;
    return axiosClients.post(url, { email: body.emailInput }, { withCredentials: true });
  },
  verifyOtpPassword(body) {
    console.log(body);
    const url = `/auth/forget-password/verify-otp`;
    return axiosClients.post(url, { otp: body.otp, uid: body.uid });
  },
  changePassword(body) {
    console.log(body);
    const url = `/auth/forget-password/change-password`;
    return axiosClients.post(url, { uid: body.uid, newpassword: body.passwordInput });
  },
};
export default authApi;
