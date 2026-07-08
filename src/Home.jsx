import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaFire,
  FaArrowRight,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import "./Home.css";


const tasks = [
  {
    id: 1,
    title: "Learn React",
    description: "Complete React Hooks and Components.",
    icon: <FaFire />,
    color: "#ff6b6b",
  },
  {
    id: 2,
    title: "Firebase Auth",
    description: "Implement Login & Signup Authentication.",
    icon: <FaCheckCircle />,
    color: "#00c896",
  },
  {
    id: 3,
    title: "Todo Dashboard",
    description: "Build CRUD operations for Todo App.",
    icon: <FaClock />,
    color: "#4f8cff",
  },
];


const Home = () => {

  const todoRef = useRef(null);

  const [task,setTask] = useState("");
  const [description,setDescription] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(null);


  const addTodo = () => {

    if(!task.trim() || !description.trim()) return;


    if(editId){

      setTodos(
        todos.map((todo)=>
          todo.id === editId
          ?
          {
            ...todo,
            task,
            description
          }
          :
          todo
        )
      );

      setEditId(null);

    }

    else{

      setTodos([
        ...todos,
        {
          id:Date.now(),
          task,
          description
        }
      ]);

    }


    setTask("");
    setDescription("");

  };


  const deleteTodo = (id)=>{

    setTodos(
      todos.filter((todo)=>todo.id !== id)
    );

  };


  const editTodo = (todo)=>{

    setTask(todo.task);
    setDescription(todo.description);
    setEditId(todo.id);


    todoRef.current.scrollIntoView({
      behavior:"smooth"
    });

  };


return (

<div className="home">


{/* HERO SECTION */}

<section className="hero">


<motion.div
className="hero-text"
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0}}
transition={{duration:.8}}
>


<h1>
Organize Your Life
<br/>
With <span>TodoPro</span>
</h1>


<p>
Manage your daily tasks with a beautiful,
modern and responsive Todo application.
</p>


<motion.button

whileHover={{scale:1.05}}

whileTap={{scale:.95}}

onClick={()=>{

todoRef.current.scrollIntoView({
behavior:"smooth"
})

}}

>

Get Started <FaArrowRight/>

</motion.button>


</motion.div>




<motion.div

className="hero-image"

initial={{opacity:0,x:80}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

>


<img

src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"

alt="todo"

/>


</motion.div>


</section>





{/* TASK SECTION */}


<section className="tasks">


<h2>
Today's Tasks
</h2>


<div className="task-grid">


{
tasks.map((item,index)=>(


<motion.div

key={item.id}

className="task-card"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.2
}}

whileHover={{
y:-10,
scale:1.03
}}

>


<div

className="icon"

style={{
background:item.color
}}

>

{item.icon}

</div>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


</motion.div>


))
}


</div>


</section>
{/* STATS SECTION */}

<section className="stats">

<motion.div
className="stat"
whileHover={{scale:1.05}}
>

<h1>
10K+
</h1>

<p>
Users
</p>

</motion.div>



<motion.div
className="stat"
whileHover={{scale:1.05}}
>

<h1>
100K+
</h1>

<p>
Tasks Completed
</p>

</motion.div>




<motion.div
className="stat"
whileHover={{scale:1.05}}
>

<h1>
99%
</h1>

<p>
Satisfaction
</p>

</motion.div>


</section>





{/* TODO SECTION */}


<section
className="todo-section"
ref={todoRef}
>


<motion.div

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

>


<h2>
Create Your Todo
</h2>



<input

type="text"

placeholder="Enter Task"

value={task}

onChange={(e)=>setTask(e.target.value)}

/>



<textarea

placeholder="Enter Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>




<motion.button

className="add-btn"

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

onClick={addTodo}

>

{
editId
?
"Save Changes"
:
"Add Todo"
}

</motion.button>





<div className="todo-list">


<AnimatePresence>


{

todos.length === 0 ?


(

<motion.p

className="empty"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

>

No tasks yet. Create your first Todo 🚀

</motion.p>


)


:


(

todos.map((todo)=>(


<motion.div

key={todo.id}

className="todo-card"

layout

initial={{

opacity:0,

y:50,

scale:.8

}}

animate={{

opacity:1,

y:0,

scale:1

}}

exit={{

opacity:0,

x:100

}}

transition={{

type:"spring",

stiffness:120

}}

>



<div className="todo-content">


<h3>

{todo.task}

</h3>


<p>

{todo.description}

</p>


</div>




<div className="todo-actions">


<motion.button

className="edit-btn"

whileHover={{
scale:1.15,
rotate:-10
}}

whileTap={{
scale:.9
}}

onClick={()=>editTodo(todo)}

>

<FaEdit/>

</motion.button>




<motion.button

className="delete-btn"

whileHover={{
scale:1.15,
rotate:10
}}

whileTap={{
scale:.9
}}

onClick={()=>deleteTodo(todo.id)}

>

<FaTrash/>

</motion.button>



</div>



</motion.div>


))


)


}


</AnimatePresence>


</div>


</motion.div>


</section>



</div>

);

};


export default Home;