import React, { useCallback, useEffect } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequestAction } from "../reducer/user";

function UserProfile() {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  return (
    <Card>
      <Card.Meta
        avatar={<Avatar>하하하</Avatar>}
        description="일상을 공유해 보세요"
      />
      <Button onClick={onLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
}
export default UserProfile;
