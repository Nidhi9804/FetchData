import './App.css';
import  {useState} from "react"

export default function App() {

  const [data , setData] =useState(
  [
  {
id:0 ,username:'Amit', marks: 50 },
{id:1 ,username:'Achal' ,marks: 80 },
{id:2 ,username:'Nia' ,marks: 60 },
{id:3 ,username:'Riya' , marks: 40 },
{id:4 ,username:'Misha', marks: 70},
{id:5 ,username:'Shiva' , marks: 90 },
{id:6 ,username:'Kanha', marks: 100},

]

)
const handledelete=(id)=>{

const newData =data.filter(data=>data.id!==id)
setData (newData);

}
  return (

    
    <div className="App" style={{textAlign:"center"}}>
{data.map((data)=>(
  <div > 
    <div className="id"> {data.id} 
     {data.username} 
     {data.marks}
     <button onClick={()=>handledelete(data.id)}>Delete</button>
      
      </div>
      </div>
))}

    </div>
  );
}
  