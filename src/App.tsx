import { useAuth0 } from "@auth0/auth0-react";
import { MouseEventHandler } from "react"; // Import MouseEventHandler type from React

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  // Define click handlers with the correct type
  const handleLoginWithPopup: MouseEventHandler<HTMLButtonElement> = () => {
    loginWithPopup();
  };

  const handleLoginWithRedirect: MouseEventHandler<HTMLButtonElement> = () => {
    loginWithRedirect();
  };

  const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
    logout();
  };

  return (
    <>
      <div>
        <h1>Auth0 authentication</h1>
        <ul>
          <li>
            <button onClick={handleLoginWithPopup}>Login With Popup</button>
          </li>
          <li>
            <button onClick={handleLoginWithRedirect}>Login with Redirect</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <h3>
      User id {isAuthenticated?"Loggged in":"Not Logged out"}
    </h3>
    {isAuthenticated &&
        <pre style ={{textAlign:"start"}}>{JSON.stringify(user,null,2)}</pre>
    }
      </div>
    </>
  );
}

export default App;

  
  
  
    

  
  


