import './Css/Card.css';

const Card = ({text,date,time}) => {
  
  return (
    <div className="card-component">
      <div className="card-content">{text}</div>
      <div className="date-time">{date} <div className="bullet"></div> {time} </div>
    </div>
  );
};

export default Card;
