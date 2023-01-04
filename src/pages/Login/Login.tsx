import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/loginImg.svg";
import logo from "../../assets/images/logo.svg";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import Typography from "../../components/Typography/Typography";
import styles from "./Login.module.scss";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email && !password) {
      return;
    }
    setLoading(true);
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setTimeout(() => {
      setLoading(false);
      navigate("/users");
    }, 2000);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <div />
        <img src={logo} className={styles.logo} alt="lendsqr login" />
        <img src={loginImg} className={styles.loginImg} alt="lendsqr login" />
      </div>
      <div className={styles.loginRight}>
        <div className={styles.loginDetails}>
          <div>
            <Typography text="Welcome!" element="h1" title />
            <Typography text="Enter details to login" element="p" />
          </div>
          <div className={styles.loginForm}>
            <InputField
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={"Please enter your email"}
            />
            <InputField
              value={password}
              placeholder="Password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={"Please enter your password"}
            />
            <div className={styles.loginAction}>
              <Typography
                text="FORGOT PASSWORD?"
                element="p"
                variant="primary"
              />
              <Button
                onClick={handleSubmit}
                text="LOG IN"
                loading={loading}
                style={{ color: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
