console.log('App.js is running');


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    console.log('option', option);
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
};

const onRemoveAll = (e) =>{
    app.options = [];
    render();

};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender

const appRoot = document.getElementById('app');


const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are yours options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>  
            <ol>
                {
                    app.options.map( (option)=> <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();

