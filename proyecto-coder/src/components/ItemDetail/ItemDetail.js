import './ItemDetail.css'

export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    return (
        <div className="contenedor-ditail">
            
            <div className="foto">
            <img src={img} alt={nombre}/>

               
            </div>
            
            <div className="detalles">
            <br/>
            <br/>
                <h3>{nombre}</h3>
                
                
                <p>{desc}</p>
                <br/>
                <h5>Precio: ${precio}</h5>
            </div>
            

           
           
        </div>
    )
}

{/* <img src={img} alt={nombre}/> */}

 {/* CONTADOR */}