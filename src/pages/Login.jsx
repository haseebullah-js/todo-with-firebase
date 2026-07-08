import { motion } from "framer-motion";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import "./Login.css";

const Login = () => {

  return (

    <div className="login-page">

      <motion.div
        className="login-card"

        initial={{
          opacity:0,
          y:80
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

      >

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue with TodoPro
        </p>


        <div className="input-box">

          <FaUser/>

          <input
          type="email"
          placeholder="Email Address"
          />

        </div>



        <div className="input-box">

          <FaLock/>

          <input
          type="password"
          placeholder="Password"
          />

        </div>



        <motion.button

        whileHover={{
          scale:1.05
        }}

        whileTap={{
          scale:.95
        }}

        >

          Login
          <FaArrowRight/>

        </motion.button>



        <div className="signup">

          Don't have an account?
          <span>
            Signup
          </span>

        </div>


      </motion.div>


    </div>

  )
}


export default Login;