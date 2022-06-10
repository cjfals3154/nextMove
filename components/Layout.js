import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";

//이제 antd 커스터마이징 해야됌

const TopMenu = styled(Menu)`
  background-color: #ffb500;
  border-bottom: none;
  line-height: 75px;
  font-size: 17px;
  font-weight: bold;
`;

const Alink = styled.a`
  padding: 40px;
`;
function Layout({ children }) {
  return (
    <div>
      <TopMenu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <div style={{ fontFamily: "Lobster, cursive", fontSize: 40 }}>
              <Alink>ShinCheolMin</Alink>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/hotmove">
            <Alink>인기영화</Alink>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/nowmove">
            <Alink>상영중인 영화</Alink>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="liked">
            <Alink>찜한영화</Alink>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <Alink>회원가입</Alink>
          </Link>
        </Menu.Item>
      </TopMenu>
      {children}
    </div>
  );
}

export default Layout;
