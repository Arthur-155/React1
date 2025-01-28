// Componente que colore e transforma um texto para
//  maiúsculo (uppercase) utilizando JS.
//  O nome do componente e o nome das props devem ser bem
//  pensados, lembre-se de dar bons nomes que sejam fáceis de
//  outras pessoas entenderem.
//  1 - Dê um bom nome ao seu componente;
//  2 - Faça o componente renderizar na tela um parágrafo colorido
//  e com todas as letras maiúsculas usando JS;
//  3 - Utilize props para passar o texto e a cor de texto desejada
//  para dentro do componente (a cor pode ser uma palavra, como
//  'red', ou um hexadecimal);
//  4 - Pode utilizar o style inline para colorir o componente da forma
//  que foi mostrado nas aulas;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextTransform from './components/TextTransform'

function App() {

  return (
    <>
      <div className="input-text">
        <input type="text" id='text' placeholder='Digite algo'/>
        {<TextTransform color = "red" text=""/>}
      </div>
    </>
  )
}



export default App
