// class ABC extends React.Component{
// submit(){
//     console.log(this.check.value)
// }
// render(){
//     let inputField = React.createElement("input",{type:'text',placeholder:"Enter Text",ref:(value)=>this.check = value})
//     let btn = React.createElement("button",{onClick:this.submit.bind(this)},"Click")

//     return React.createElement("div",null,inputField,btn);
// }



// }

// ReactDOM.render(
// React.createElement(ABC),
// document.getElementById("root")    
// );

// class ABC extends React.Component {
//     //har class me constructor banta hai or us ke andar super bnta hai warna parent class React.COmponnet nh chalegi
//     constructor() {
//         super()
//     }
//     submit() {
//         console.log(this.refs.username.value);
//     }
//     //render poori UI (all html) ke liye hota hai poori UI render me banti hai 
//     render() {
//         // const inputField = React.DOM.input({ type: "text", ref: "text" })
//         // const btn = React.DOM.button({ onClick: this.submit.bind(this) }, "Submit")
//         return React.DOM.div({ id: "form" },
//          React.DOM.input({ type: "text", ref: "username" }),
//          React.DOM.button({ onClick: this.submit.bind(this) }, "Submit"))
//     }
// }





// ReactDOM.render(
//     React.createElement(ABC),
//     document.getElementById("root")
// );



// class ABC extends React.Component {
//     //har class me constructor banta hai or us ke andar super bnta hai warna parent class React.COmponnet nh chalegi
//     constructor(prop) { //re render krne ke liye bhi 
//         super(prop)
//         this.state = {  //state jo hai render ko update krne ke liye hota hai
//             text: prop.name // render ko autocall krne ke liye banta hai state
//         }
//     }
//     submit(event) { //state ko update krne ke liye setState ka method
//         this.setState({ text: event.target.value }) //jese hee state update hoti hai render autocall hota hai
//         console.log(event.target.value) // setState basically state ki cheezain doosre function me lane ke liye hota hai
//     }
//     //render poori UI (all html) ke liye hota hai poori UI render me banti hai 
//     render() {
//         const textArea = React.DOM.textarea({ defaultValue: this.state.text, onChange: this.submit.bind(this) }, null)
//         // const btn = React.DOM.button({ onClick: this.submit.bind(this) }, "Submit")
//         const h1 = React.DOM.h1(null, this.state.text);
//         const h2 = React.DOM.h2({null}, this.state.text.length);
//         return React.DOM.div({ id: "form" }, textArea, h1, h2)
//     }
// }





// ReactDOM.render(
//     React.createElement(ABC, { name: "Huzaifa" }),
//     document.getElementById("root")
// );



class ABC extends React.Component {
    //har class me constructor banta hai or us ke andar super bnta hai warna parent class React.COmponnet nh chalegi
    constructor(prop) { //re render krne ke liye bhi 
        super(prop)
        this.state = {  //state jo hai render ko update krne ke liye hota hai
            count: 0, // render ko autocall krne ke liye banta hai state
        }
    }
    increm(event) { //state ko update krne ke liye setState ka method
        this.setState({count:++ event.state }) //jese hee state update hoti hai render autocall hota hai
        // console.log(event.target) // setState basically state ki cheezain doosre function me lane ke liye hota hai
    }
    // decrem(ev){

    // }

    //render poori UI (all html) ke liye hota hai poori UI render me banti hai 
    render() {
        // const textArea = React.DOM.textarea({ defaultValue: this.state.text, onChange: this.submit.bind(this) }, null)
        // const btn = React.DOM.button({ onClick: this.submit.bind(this) }, "Submit")
        const incr = React.DOM.button({ onClick: this.increm.bind(this) }, "Increment");
        // const decr = React.DOM.button({ onClick: this.decrem.bind(this) }, "Decrement");
        const h1 = React.DOM.h1(null,this.state.count)
        return React.DOM.div({ id: "form" }, incr)
    }
}





ReactDOM.render(
    React.createElement(ABC),
    document.getElementById("root")
);
