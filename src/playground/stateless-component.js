// stateless functional component
// no this call
// just simple component
// fast no overhead
// easy to write and test

const User = (props) =>{
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};


ReactDOM.render(<User name="Sikharin" age="33" />, document.getElementById('app'));



