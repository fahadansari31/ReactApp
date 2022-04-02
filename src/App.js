import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
    
    const onDelete = (todo_title) => {
        console.log("I am on delete", todo_title);
    }

    let todos = [{
            sno: 1,
            title: 'Todo1',
            desc: 'Description of todo1'
        },
        {
            sno: 2,
            title: 'Todo2',
            desc: 'Description of todo2'
        },
        {
            sno: 3,
            title: 'Todo3',
            desc: 'Description of todo3'
        }
    ]
    return ( 
        <>
        <Header search = {true}/> 
        <Todos todos = {todos} onDelete = {onDelete}/> 
        <Footer footer_content="My React App"/>
        </>
    );
}

    
 


export default App;