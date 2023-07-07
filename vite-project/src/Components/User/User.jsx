import { useEffect } from "react";
import { getUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="bg-zinc-900 h-full text-white grid ">
      {user?.map((value, i) => (
        <div key={i}>
          <img src='https://i.pinimg.com/236x/ee/d1/76/eed176d5fb3f77e3e003b85a246ba7ad.jpg'/>
          <h2>{value.name}</h2>
          <h2>{value.phone}</h2>
          <h2>{value.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default User;
