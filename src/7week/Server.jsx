import React, { useEffect, useState } from "react";

export default function Server(params) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.setIsOnline);
  }

  useEffect(() => {
    // SeverAPI.subscribeUserStatus(props.user.id, handleStatusChange);

    return () => {
      // SeverAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "대기 중...";
  }
  return isOnline ? "온라인" : "오프라인";
}
