import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.message);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    color: "green",
    display: "none",
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
