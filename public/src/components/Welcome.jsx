import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");



  // useEffect(async () => {
  //   setUserName(
  //     await JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     ).username
  //   );
  // }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      setUserName(user.username);
    };
  
    fetchUserName();
  }, []);
  


  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      <p>Powered By Devainer</p>
    </Container>
  );
}

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   flex-direction: column;
//   img {
//     height: 20rem;
//   }
//   span {
//     // color: #4e0eff;
//     color: #2a9df4;
//   }
//   p{
//     margin-top: 30px;
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;

  img {
    height: 20rem;
  }

  span {
    color: #2a9df4;
  }

  p {
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 15rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
      margin-top: 20px;
    }
  }
`;
