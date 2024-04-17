//import {data} from '../data.js';
import { CardList } from '../components/Cards.js';
import { useState } from 'react';

export default function Blog(){

    const [filterText, setFilterText] = useState("");
    const [data, setData] = useState([{id_post: 0, title: "", date: "", text: "", image: "", id_author: "0"}])

    function handleChange(e){
      setFilterText(e.target.value);
    }
    
    return(
        <>
            <h1>Blog de comida</h1>
            <div>
                <p>Buscar por título</p>
                <input type="text" value={filterText} onChange={handleChange}></input>
            </div>
            <CardList posts={data} text={filterText}></CardList>
            {/* <Card title="Pizza" date="12/08/2024" image="pizza"></Card>*/}
        </>
    );
}