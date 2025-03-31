import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .phonePreview {
    margin-right: 50px;

    img {
      width: 600px;
      height: 500px;
    }

  }


  .login-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;

    h1 {
      font-family: "Roboto", sans-serif;
      font-size: 36px;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 30px;

      input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid rgb(143, 143, 143);
        border-radius: 5px;
        background:rgb(17, 17, 17);
        color: #fff;
        height: 45px;
      }

      button {
        background-color: #0095f6;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
        height: 35px;
      }
    }

    .divider {
      margin-top: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #8e8e8e;
    }

    .facebookLogin {
      background: none;
      color:rgb(0, 157, 248);
      font-size: 16px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .forgot-password {
      font-size: 16px;
      color:rgb(255, 255, 255);
      margin-top: 20px;
      margin-bottom: 20px;
      text-decoration: none;
    }



    .signup {
      margin-top: 30px;
      font-size: 18px;

      a {
        color: #0095f6;
        font-weight: bold;
        text-decoration: none;
      }

    }

    .getAPP {
      font-size: 16px;
      margin-top: 60px;
    }

    .appLinks {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;

      img {
        width: 150px;
        height: 50px;
        cursor: pointer;
      }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;

  .footerLinks {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 10px;

    a {
      color: #8e8e8e;
      font-size: 15px;
      text-decoration: none;
      cursor: pointer;
      margin-right: 7px;
    }
  }

  .footerCopy {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }


  p {
    font-size: 15px;
    color: #8e8e8e;
  }

`;
