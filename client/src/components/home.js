import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClickLogin = () => {
      if (loggedIn) {
          localStorage.removeItem("user")
          props.setLoggedIn(false)
      } else {
          navigate("/login")
      }
    }
  
    const onButtonClickSignup = () => {
      navigate("/signup")
    }

    const onButtonClickFindMatch = () => {
      navigate("/findmatch")
  }
  
    return <div className="mainContainer">
      <div className={"titleContainer"}>
          <div>Welcome to RANKERS!</div>
      </div>
      <div>
          This is the home page.
      </div>
      <div className={"buttonContainer"}>
        {(loggedIn ? <div>
          <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClickSignup}
            value="Find Match" /><br/><br/><br/><br/>
          </div>: <div/>
        )}
        {(!loggedIn ? <div>
          <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClickSignup}
            value="Sign Up" />
          </div>: <div/>
        )}
          <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClickLogin}
              value={loggedIn ? "Log out" : "Log in"} />
          {(loggedIn ? <div>
              Your email address is {email}
          </div> : <div/>)}
        </div>
    </div>
}

export default Home