import React from 'react';
import ReactDOM from 'react-dom';

function ExampleComponent(){
    return (
        <div>
            <h1>This is my app!!</h1>
        </div>
    )
}

ReactDOM.render(<ExampleComponent/>,document.querySelector('#app'))

if(module.hot){
    module.hot.accept()
}