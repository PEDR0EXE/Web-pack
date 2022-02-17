import '../css/componentes.css';
import webpacklogo from '../asset/img/webpack-logo.png'

export const Saludar = (nombre) => {

  console.log('Creadon etiqueta h1');

  const h1 = document.createElement('h1')
  h1.innerText = `hola, ${nombre}`;

  document.body.append(h1)

  console.log(webpacklogo);
  const img = document.createElement('img');
  img.src = webpacklogo;
  document.body.append(img);



}



