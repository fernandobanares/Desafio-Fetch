const tabla = document.querySelector('#lista-usuarios tbody');

function cargarProductos() {
    fetch('productos.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(productos => {
            productos.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.img}</td>
                `;
                tabla.appendChild(row);

                // const card = document.createElement('card');
                // card.classList = 'card';
                // card.innerHTML += `
                //                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
                //                     <div class="container">
                //                         <h4><b>${producto.id}</b></h4>
                //                         <p>${producto.nombre}</p>
                //                     </div>
                            
                //             `;

                // tabla.appendChild(card);

            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarProductos();