import "./Card.css";

export default function Card({title, image, author, date}) {
  return (
  <div className="card-main"> 
        <img src={image} alt="12321"className="card-image"></img>
        <h1 className="card-title">{title}</h1>
        <h6 className="card-author">{author}</h6>
        <h6 className="card-date">{date}</h6>
  </div>);
}
