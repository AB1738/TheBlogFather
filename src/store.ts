import { create } from 'zustand';
import { fetchUserSession } from './app/actions/actions';


type User={
    id: string;
    email: string;
    username: string;
}|undefined

 type UserAuthState = {
    user: User;
    fetchUser: () => Promise<void>;
    setUser: (user: User) => void;

  }


  export const UserAuthStore=create<UserAuthState>((set)=>({
    user:undefined,
    setUser: (user) => set({ user }),
    fetchUser:async()=>{
        try{
            const user=await fetchUserSession()
            set({ user })

        }catch(e){
            console.error('Error fetching user session',e)
            set({ user: undefined })
        }
    }
  }))


