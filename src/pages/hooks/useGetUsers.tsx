import { useEffect, useState } from "react";
import { User } from "../types";
import { formatDate } from "../utils";

function useGetUsers() {
  const [users, setUsers] = useState<User[]>({} as User[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setError(null);
      try {
        const response = await fetch(
          "https://randomuser.me/api/?nat=us,dk,fr&results=15"
        );
        const data = await response.json();
        console.log(data.results[0]);
        if (!data?.results.length) {
          setError(new Error("No data"));
          return;
        }
        const mapping = data.results.map(
          (item: any) =>
            ({
              name: item.name.first,
              phone: item.phone,
              email: item.email,
              address: item.location.street.name,
              birthday: formatDate(item.dob.date),
              url: item.picture.large,
            } as User)
        ) as User[];

        setUsers(mapping);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { users, isLoading, error };
}

export default useGetUsers;
