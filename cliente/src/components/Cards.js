export function Card({image, title, date}){
    return (
        <div className="card">
        <img src={require("../img/"+image+".jpg")} alt=""></img>
        <h2>{title}</h2>
        <p>{date}</p>
        </div>
    );
}
  
export function CardList({posts, text}){
    const list = posts.map(post =>
        //Si el texto de busqueda aparece en el title, imprimir tarjeta
        post.title.toLowerCase().includes(text.toLowerCase()) && 
        <Card title = {post.title} date={post.date} image={post.image} key={post.id}></Card>
    );
    return(
        <div>
        {list}
        </div>
    );
}