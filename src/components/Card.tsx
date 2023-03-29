import { useState } from "react";
import Image from "next/image";
import type { User } from "../types";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineLock,
} from "react-icons/ai";
import { formatDate } from "../utils";

type CardProps = User;
const Card: React.FC<CardProps> = ({
  url,
  name,
  phone,
  password,
  email,
  birthday,
  address,
}) => {
  const [selected, setSelected] = useState<keyof typeof options>("name");

  const options = {
    name: {
      label: "Hi, My name is",
      value: name,
    },
    phone: {
      label: "My phone number is",
      value: phone,
    },
    email: {
      label: "My email is",
      value: email,
    },
    address: {
      label: "My address is",
      value: address,
    },
    birthday: {
      label: "My birthday is",
      value: formatDate(birthday),
    },
    password: {
      label: "My password is",
      value: password,
    },
  } as const;

  const getClassBySelected = (key: keyof typeof options) => {
    return `${
      selected === key ? "text-green-600" : "bg-white"
    } w-5 transition duration-300 transform hover:-translate-y-1`;
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            className="rounded-full"
            src={url}
            height={150}
            width={150}
            alt="User image"
          />
        </div>
        <div className="my-3">
          <p className="text-lg text-gray-600">{options[selected].label}</p>
          <h2 className="text-2xl">{options[selected].value}</h2>
        </div>
        <div className="flex gap-8 justify-center">
          <button
            onClick={() => setSelected("name")}
            className={getClassBySelected("name")}
          >
            <AiOutlineUser size={25} />
          </button>
          <button
            onClick={() => setSelected("phone")}
            className={getClassBySelected("phone")}
          >
            <AiOutlinePhone size={25} />
          </button>
          <button
            onClick={() => setSelected("email")}
            className={getClassBySelected("email")}
          >
            <AiOutlineMail size={25} />
          </button>
          <button
            onClick={() => setSelected("address")}
            className={getClassBySelected("address")}
          >
            <AiOutlineContacts size={25} />
          </button>
          <button
            onClick={() => setSelected("birthday")}
            className={getClassBySelected("birthday")}
          >
            <AiOutlineCalendar size={25} />
          </button>
          <button
            onClick={() => setSelected("password")}
            className={getClassBySelected("password")}
          >
            <AiOutlineLock size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
