import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { DefaultText } from '../DefaultText'
import { Flex } from '../Flex'

const Wrapper = styled.div`
  background-color: #111b21;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderPart = styled.div`
  height: 40%;
  width: 100%;
  background-color: #00a884;
  position: absolute;
  top: 0;
  left: 0;
`

const LoginContainer = styled(Flex)`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 17px 50px 0 rgba(11, 20, 26, 0.19),
    0 12px 15px 0 rgba(11, 20, 26, 0.24);
  padding: 20px;
`

// 1101820874
// 9b73b29520e44b62ad2fdbe046b0b2fb0728993c6c58496992

export const AuthPage: React.FC = () => {
  return (
    <Wrapper>
      <HeaderPart />
      <LoginContainer flexDirection="column" alignItems="center">
        <DefaultText>Login into WhatsApp</DefaultText>
        <Input placeholder="Enter idInstance" />
        <Input placeholder="Enter apiTokenInstance" />
      </LoginContainer>
    </Wrapper>
  )
}
