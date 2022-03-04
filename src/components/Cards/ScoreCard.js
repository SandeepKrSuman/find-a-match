import "./ScoreCard.css";

export default function ScoreCard(props) {
  return (
    <div className="btn btnb">
      {`${props.msg}`} <br /> {`${props.dat}`}
    </div>
  );
}
