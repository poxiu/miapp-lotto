import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Title from "../Title";
import ItemList from "../ItemList";
import './ItemListContainer.css';
import TitleTienda from "../TitleTienda";
// lo que aparece en la tienda, productos en general
const productos = [
    {id:1, image:'https://acdn.mitiendanube.com/stores/438/112/products/julia-julio-velatiloylavanda21-0e5ef46a51b75b9cbd16152196656630-240-0.jpg', title:'Tilo y Lavanda', categoria:'vela', categoria:'vela', price: 50}, 

    {id:2, image:'https://acdn.mitiendanube.com/stores/438/112/products/julia-julio-velatiloylavanda111-ea9948d841cc57896116152196656419-240-0.jpg', title:'Vainilla', categoria:'vela', price: 50},

    {id:3, image:'https://www.eltigreazul.com.ar/wp-content/uploads/2016/11/Apotheke-Nuevas-Velas-Vidrio-Sprays-Septiembre-2023-Cuadrado-14.jpg', title:'Jazmin Blanco', categoria:'vela', price: 50},

    {id:4, image:'https://cosmeticapedroches.com/wp-content/uploads/2018/01/Beneficios-del-jabon-artesanal.jpg', title:'Jabón de Jazmin', categoria:'jabones', price: 50},

    {id:5, image:'https://cdn.shopify.com/s/files/1/0229/0839/files/vender_jabon.jpg?v=1656493262', title:'Jabon de Estrella', categoria:'jabones', price: 50},

    {id:6, image:'https://mejorconsalud.as.com/wp-content/uploads/2018/04/jabones-naturales-hacer-en-casa.jpg', title:'Jabón de Lavanda', categoria:'jabones', price: 50}
]
export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    
    useEffect(() => {
        const getData = new Promise((res)=>{
            setTimeout(()=>{
                res(productos)
            }, 2000)
        })
        if(categoriaId) {
            getData.then(res => setData(res.filter(producto => producto.categoria === categoriaId)))
        }else{
            getData.then(res => setData(res))
        }
    },[categoriaId])

    return (
        <>
        <TitleTienda/>
        
        <div className="contenedor">
            <ItemList data={data}/>
        </div>
        
        </>
    )
}

export default ItemListContainer;