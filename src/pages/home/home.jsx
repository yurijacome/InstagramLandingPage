import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { Container, Content, Footer } from './homeStyle';
import mainImage from '../../assets/mainImage.png';
import InstagramName from '../../assets/InstagramName.svg';
import AppStore from '../../assets/AppStoreButton.png';
import Microsoft from '../../assets/MicrosoftButton.png';


const Home = () => {
  return (
    <Container>
      <Content>
        <div className="phonePreview">
          <img src={mainImage} alt="Prévia do telefone" />
        </div>

        <div className="login-section">
          <img src={InstagramName} alt="Instagram" className="logo" />
          <form>
            <input type="text" placeholder="Número de telefone, nome de usuário ou email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>

          <div className="divider">OU</div>
<button className="facebookLogin">
  <FaFacebook style={{ fontSize: '22px', marginRight: '10px',  }} />
  Entrar com o Facebook
</button>
          <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
          
          <p className="signup">
            Não tem uma conta? <a href="/">Cadastre-se</a>
          </p>

          <p className="getAPP">Obtenha o aplicativo.</p>

          <div className="appLinks">
            <img src={AppStore} alt="Google Play" />
            <img src={Microsoft} alt="Microsoft Store" />
          </div>

        </div>

      </Content>

      <Footer>
        <div className="footerLinks">
          <a href="/">Meta</a>
          <a href="/">Sobre</a>
          <a href="/">Blog</a>
          <a href="/">Ajuda</a>
          <a href="/">API</a>
          <a href="/">Privacidade</a>
          <a href="/">Termos</a>
          <a href="/">Localizações</a>
          <a href="/">Instagram Lite</a>
          <a href="/">Threads</a>
          <a href="/">Upload de contatos e não usuários</a>
          <a href="/">Meta Verified</a>
        </div>

        <div className="footerCopy"> 
          <select className="languageSelect">
            <option value="pt">Português(Brasil)</option>
            <option value="en">English</option>
            <option value="es">Españhol</option>
            <option value="fr">Italiano</option>
          </select>
          <p>© 2025 Instagram from Meta</p>
        </div>
      </Footer>

    </Container>
  );
};

export default Home;
