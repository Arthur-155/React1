//  1 - Dê um bom nome ao seu componente;
//  2 - Faça o componente renderizar na tela um parágrafo colorido
//  e com todas as letras maiúsculas usando JS;
//  3 - Utilize props para passar o texto e a cor de texto desejada
//  para dentro do componente (a cor pode ser uma palavra, como
//  'red', ou um hexadecimal);
//  4 - Pode utilizar o style inline para colorir o componente da forma
//  que foi mostrado nas aulas;

const TextTransform = (props) => {
    const buttonModifications = () => {
        const inputElement = document.getElementById('text');
        const displayElement = document.getElementById('display');
        const inputValue = inputElement.value;
        displayElement.textContent = inputValue || 'nenhum valor digitado';
    };

    return (
        <div>
            <h1>
                <p 
                id="display" style={{color: props.color, textTransform: "uppercase"}}
                >
                  {props.text}  
                </p>
            </h1>

            <button onClick={buttonModifications}>Clique Aqui</button>
        </div>
    )
}

export default TextTransform;

