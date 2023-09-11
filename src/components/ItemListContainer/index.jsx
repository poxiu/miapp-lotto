import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Title from "../Title";
import ItemList from "../ItemList";

const productos = [
    {id:1, image:'https://www.eltigreazul.com.ar/wp-content/uploads/2020/06/Vela-aromatica-apotheke-5.jpg', title:'Tilo y Lavanda', categoria:'vela', categoria:'vela', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'}, 

    {id:2, image:'https://www.eltigreazul.com.ar/wp-content/uploads/2020/06/Vela-aromatica-apotheke-4.jpg', title:'Vainilla', categoria:'vela'},

    {id:3, image:'https://acdn.mitiendanube.com/stores/983/987/products/botane-velas-web-9dic2020-151-3825fe1eb1f0a4c25716080006690508-640-0.jpg', title:'Jazmin Blanco', categoria:'vela'},

    {id:4, image:'https://cosmeticapedroches.com/wp-content/uploads/2018/01/Beneficios-del-jabon-artesanal.jpg', title:'Jabón de Jazmin', categoria:'jabones'},

    {id:5, image:'https://cdn.shopify.com/s/files/1/0229/0839/files/vender_jabon.jpg?v=1656493262', title:'Jabon de Estrella', categoria:'jabones'},

    {id:6, image:'https://mejorconsalud.as.com/wp-content/uploads/2018/04/jabones-naturales-hacer-en-casa.jpg', title:'Jabón de Lavanda', categoria:'jabones'}
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
        <Title greeting={texto}/>
        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;