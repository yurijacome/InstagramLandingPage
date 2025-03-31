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
    margin-top: 50px;
    width: 350px;


    img {
      width: 400px;
      height: 80px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
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
        width: 300px;

      }

      button {
        background-color: #0095f6;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 14px;
        margin-top: 6px;
        height: 38px;
        width: 300px;

  }
  }
  

    .divider {
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
      color: #8e8e8e;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      &:before,
      &:after {
        content: " ";
        flex: 1;
        height: 0.1px;
        background-color: #8e8e8e;
        margin: 0 10px;
      }
    }

    .facebookLogin {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color:rgb(0, 157, 248);
      font-size: 16px;
      font-weight: bold;
      border: none;
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
      font-size: 16px;

      a {
        color: #0095f6;
        font-weight: bold;
        text-decoration: none;
      }

    }

    .getAPP {
      font-size: 16px;
      margin-top: 50px;
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
    margin-top: 10px;
    margin-bottom: 10px;

    a {
      color: #8e8e8e;
      font-size: 15px;
      text-decoration: none;
      cursor: pointer;
      margin-right: 7px;
    }
  }

    .languageSelect {
    margin-right: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: none;
    color: #8e8e8e;
    font-size: 16px;
    height: 40px;
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
