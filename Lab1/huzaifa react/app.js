// var h1 = React.createElement("h1", null, "Hello World")
// // what render
// // where render
// ReactDOM.render(
//     React.createElement('div', null, h1),
//     document.getElementById('root')
// )

class ABC extends React.Component{
    submit(args){
        console.log(this.check.value);
    }
    render(){
        const inputField = React.createElement('input',{type:'text', ref:(value)=>this.check = value});
        var btn = React.createElement("button",{onClick:this.submit.bind(this)},'Click Me');
     return React.createElement("div",null,inputField,btn);   
    }
}

ReactDOM.render(
    React.createElement(ABC),
    document.getElementById("root")
)


