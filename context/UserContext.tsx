// create user context
'use client'
import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  user: any;
  logIn: boolean;
  userDataFromClerk: any;
  setUserDataFromClerk: (userData: any) => void;
  isProUser: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()
  const [userDataFromClerk, setUserDataFromClerk] = useState(null);
  const [logIn, setLogIn] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isProUser, setIsProUser] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (isLoaded) {
        setLogIn(true)
        const getProfile = async (id: string) => {
          const response = await fetch(`/api/profiles?clerkID=${id}`)
          const data = await response.json()
          if (data.error) {
            return false
          }
          return data
        }
        if (user && user.id) {
          const profile = await getProfile(user.id);
          console.log(profile)
          if (profile === false) {
            const createProfile = async () => {
              const response = await fetch(`/api/profiles`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: user.firstName,
                  email: user.emailAddresses[0].emailAddress,
                  clerkID: user.id,
                  apiKey: user.id.replace("user_", "")
                }),
              })
              const data = await response.json()
              console.log(data)
              return data
            }
            createProfile()
          }
          setUserDataFromClerk(profile)
        }
      }
    };

    fetchData();
    setIsLoaded(true)
  }, [user, isLoaded])
  console.log(user)
  // console.log(logIn)
  const userValue: UserContextType = {
    user,
    logIn,
    userDataFromClerk,
    setUserDataFromClerk,
    isProUser,
  };

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserContext must be used within UserContextProvider')
  return context
}