import { CardPrincipal, Img } from "./style";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardPrincipal onClick={reproduzVideo}>
      <Img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </CardPrincipal>
  );
}

export default CardVideo;
