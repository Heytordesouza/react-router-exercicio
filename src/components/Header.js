import {goToHomePage, goToProfilePage, ProfileProduct } from "../Router/coordinator"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <br></br>
      <br></br>
      <button onClick={() => goToProfilePage(navigate, "Heytor")}>
        Ir para página de perfil
      </button>
      <br></br>
      <br></br>
      <button onClick={() => ProfileProduct(navigate, "Produto")}>
        Ir para página do Produto
      </button>
    </header>
  );
}

export default Header;