import React from "react";
import { PopoverColContainer } from "./styled";

interface NotificationColProps {
  notifications: any;
}

const NotificationCol = ({ notifications }: NotificationColProps) => {
  // const isDarkMode: any = useSelector(themeData).darkmode

  return (
    <div>
      {notifications.map((n) => {
        return <PopoverColContainer key={n.id}>{n.mesej}</PopoverColContainer>;
      })}
    </div>
  );
};

export default NotificationCol;
