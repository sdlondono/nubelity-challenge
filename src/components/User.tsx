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
    <div className="flex gap-3 w-80 my-3 hover:border-green-500 border transition duration-300 hover:scale-105">
      <div>
        <Image src={url} alt="User Image" height={100} width={100} />
      </div>
      <div className="grid">
        <p className="text-lg">{name}</p>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{password}</p>
        <p className="text-sm">{phone}</p>
        <p className="text-sm">{birthday}</p>
      </div>
    </div>
  );
};

export default User;
