import { IUser } from "../interfaces/IUser";

async function getUser(token: string | null, id: string | undefined, callback: Function){

    if(token !== null && id !== undefined){
      fetch(`http://localhost:8000/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
    })
    .then((response) => response.json())
    .then((data: IUser) => {
        callback(data);
    })
    .catch((error) => {
      throw new Error(error);
    })
    }
  }

  export { getUser }