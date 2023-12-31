import styled from "styled-components";

export const StyleButton = styled.button`
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 10px;
  margin: 10px 10px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #00b09b, #96c93d);
  background-size: 200% auto;
//   box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  transition: .5s;
&: hover {
  background-position: right center;}`