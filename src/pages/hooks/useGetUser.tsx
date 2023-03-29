import { useEffect, useState } from "react";
import { User } from "../types";

function useGetUser() {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setError(null);
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data.results[0]);
        if (!data?.results.length) {
          setError(new Error("No data"));
          return;
        }
        setUser({
          url: data.results[0].picture.large,
          password: data.results[0].login.password,
          name: data.results[0].name.first,
          phone: data.results[0].phone,
          email: data.results[0].email,
          address: data.results[0].location.street.name,
          birthday: data.results[0].dob.date,
        });
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, isLoading, error };
}

export default useGetUser;
