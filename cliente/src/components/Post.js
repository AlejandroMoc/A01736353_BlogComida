import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Post(){
    const {id_post} = useParams();
    const [post, setPost] = useState({id_post: 0, title:"", date:"", image: "", text: "", id_author: ""})
    
    /* UseEffect recibe los parámetros {} y dependencias [] */
    useEffect(()=>{
        fetch('http://localhost:8000/posts/'+id_post)
        /* Convertirlo al formato que queremos */
        .then((res) => res.json())
        /* Hacer lo que queramos */
        .then((data) => setPost(data));
        /* .catch((error) => console.error('Error fetching post:', error)); */

        /* Si pongo como dependencia id_post, si se modifica el valor
        se va a tener que hacer nuevamente el fetch de arriba */
    }, [id_post])

    return(
        //TODO cambiar a CSS propio en vez del de card
        <div className="card">
            {/* Como guardamos las cosas en post (linea 6), podemos poner los elementos */}
            <h1>{post.title}</h1>
            {/* Con la imagen si no tengo nada me va a marcar un error.
            Por eso hay que ponerle la condición cuando solamente exista */}
            {post.image && <img src={require("../img/"+post.image+".jpg")} alt =""></img>}

            <Link to={"/autor/" + post.id_author}><h2>Autor: {post.id_author}</h2></Link>

            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}