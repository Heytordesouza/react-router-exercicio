import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const pathParams = useParams();

  return (
    <section>
      <Header />
      <br></br>
      <h1>Página de perfil {pathParams.name}</h1>
    </section>
  );
}

export default ProfilePage;
