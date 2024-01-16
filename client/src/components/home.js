import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    const onButtonClickLogin = () => {
      if (loggedIn) {
          localStorage.removeItem("user")
		  props.setLoggedIn(false)
		  props.setEmail("")
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
	const onClickLeaderboard = () => {
		navigate("/leaderboard")
	}
  
    return <div className="mainContainer">
      <div className={"titleContainer"}>
          <div>Welcome to RANKERS!</div>
      </div>
      <div className='phrase'>
          Connect People Through Sports
      </div>
      <div className={"buttonContainer"}>
        {(loggedIn ? <div>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClickFindMatch}
            value="Find Match" />
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
            className={loggedIn ? "logOut" : "inputButton"}
            type="button"
            onClick={onButtonClickLogin}
            value={loggedIn ? "Log out" : "Log in"} />
		      <input
            className={"inputButton"}
            type="button"
            onClick={onClickLeaderboard}
            value="Leaderboard" />
        </div>
    </div>
}

export default Home