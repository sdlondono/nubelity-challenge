import Image from "next/image";
import { User } from "../types";
type UserProps = User;
const User: React.FC<UserProps> = ({
  birthday,
  name,
  email,
  password,
  phone,
  url,
}) => {
  return (
    <div className="grid shadow max-w-xl md:grid-cols-2 w-full my-3 p-3 hover:border-green-500 border transition duration-300 hover:scale-105">
      <div className="grid">
        <Image src={url} alt="User Image" height={150} width={150} />
      </div>
      <div className="flex flex-col">
        <p className="text-2xl flex">{name}</p>
        <p className="text-lg">{email}</p>
        <p className="text-lg">{password}</p>
        <p className="text-lg">{phone}</p>
        <p className="text-lg">{birthday}</p>
      </div>
    </div>
  );
};

export default User;
