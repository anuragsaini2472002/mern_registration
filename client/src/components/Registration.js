import React, {useState} from 'react';

const Registration = () => {

  const [user, setUser] = useState({
     name:"", email:"", phone:"", work:"", password:"", cpassword:""
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value})
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch('/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Invalid successful");
      console.log("Invalid successful");
    }
  }

  return( <>
  <section className="form_">
 <form method="POST">
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="name" aria-describedby="nameHelp" value={user.name} onChange={handleInput} autoComplete="off"/>
    <div id="nameHelp" className="form-text">Enter your name</div>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={user.email} onChange={handleInput} autoComplete='off'/>
    <div id="emailHelp" className="form-text">Enter your email</div>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="number" className="form-control" name="phone" id="phone" aria-describedby="phoneHelp" value={user.phone} onChange={handleInput} autoComplete='off'/>
    <div id="phoneHelp" className="form-text">Enter your phone</div>
  </div>
  <div className="mb-3">
    <label htmlFor="work" className="form-label">Work</label>
    <input type="text" className="form-control" name="work" id="work" aria-describedby="workHelp" value={user.work} onChange={handleInput} autoComplete='off'/>
    <div id="workHelp" className="form-text">Enter your work</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" aria-describedby="passwordHelp" value={user.password} onChange={handleInput} autoComplete='off'/>
    <div id="passwordHelp" className="form-text">Enter your password</div>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="cpassword" id="cpassword" aria-describedby="cpasswordHelp" value={user.cpassword} onChange={handleInput} autoComplete='off'/>
    <div id="cpasswordHelp" className="form-text">Enter your cpassword</div>
  </div>
  
  <input type="submit" id="signup" name="signup" value="register" onClick={PostData} className="btn btn-primary"/>
</form>
</section>
  </>);
};

export default Registration;
