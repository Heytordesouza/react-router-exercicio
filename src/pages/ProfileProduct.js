import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProfileProduct() {
  const { id } = useParams();

  return (
    <section>
      <Header />
      <br></br>
      <h1>Página do {id}</h1>
    </section>
  );
}

export default ProfileProduct;