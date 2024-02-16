import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';




const Create = () => {

   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [branch,setBranch] = useState("");
   const [age,setAge] = useState("0");
   const[error,setError]=useState("");

   const navigate = useNavigate();

   console.log(name,email,branch,age);

   const handleSubmit = async(e)=>{
         e.preventDefault();

         const addUser = {name,email,branch,age}
         console.log(addUser);

         const response = await fetch("https://crud-mernbackend-fj3w.onrender.com/",{
            method: "POST",
            body : JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json",
              },
         });

         const result = await response.json();

         if (!response.ok) {
            console.log(result.error);
            setError(result.error);
          }
          if (response.ok) {
            // console.log(result);
            setName("");
            setEmail("");
            setBranch("");
            setAge(0);
            setError("");
            navigate("/all");
          }

   };

  return (
    <div className='container my-2'>
          
          {error && <div className="alert alert-danger"> {error} </div>}

          <h2 className='text-center'>Enter the data</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label  className="form-label">Name</label>

            <input type="text" 
            className="form-control" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
             />
          </div>

          <div className="mb-3">
             <label  className="form-label">Email address</label>
             <input type="email" 
             className="form-control"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
              />
          </div>

          <div className="mb-3">
             <label  className="form-label">Branch</label>
             <input type="text" 
             className="form-control"
             value={branch}
             onChange={(e)=>setBranch(e.target.value)}
              />
          </div>

         <div className="mb-3">
            <label  className="form-label">Age</label>
            <input type="number" className="form-control"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
         </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Create