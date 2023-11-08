import { useAuth0 } from "@auth0/auth0-react";
import { MouseEventHandler } from "react"; // Import MouseEventHandler type from React
import { useQuery,
  //  useMutation 
  } from '@apollo/client';
import {
  GET_ALL_BOOKS,
  // GET_BOOK,
  // CREATE_BOOK,
  // UPDATE_BOOK,
  // DELETE_BOOK,
} from "./graphql/graphql";

function App() {

  const {loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  const { loading, error, data } = useQuery(GET_ALL_BOOKS,{
    variables:{userId:user?.sub}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;





  const handleLoginWithRedirect: MouseEventHandler<HTMLButtonElement> = () => {
    loginWithRedirect();
  };

  const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
    logout();
  }; 

  return (
    <>
      <div className="app">
        <h1>Auth0 authentication</h1>
        <ul>
          <li>
            <button onClick={handleLoginWithRedirect}>Login with Redirect</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <h3>
      User {isAuthenticated?"Loggged in":"Not Logged out"}
    </h3>
      </div>
      {isAuthenticated &&
        <pre style ={{textAlign:"start"}}>{JSON.stringify(user?.sub,null,2)}</pre>
    }

{data.Books.length>0 &&
<ul>
      {data.Books.map((book:any) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
    }
    </>
  );
}

export default App;
  
  
  
  
    

  
  


