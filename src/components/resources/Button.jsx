import styled from "styled-components";

export default function Button(props) {
  const {
    height,
    width,
    border,
    size,
    type,
    callback,
    obj,
    cor,
    margin,
    background,
  } = props;
  return (
    <Container
      height={height}
      width={width}
      border={border}
      size={size}
      type={type}
      margin={margin}
      cor={cor}
      background={background}
      onClick={
        obj
          ? (e) => {
              callback(e, obj);
            }
          : callback
      }
    >
      {props.children}
    </Container>
  );
}

const Container = styled.button`
  height: ${(props) => (props.height ? props.height : "40px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0 0 10px 0")};
  font-family: "Lexend Deca", sans-serif;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 10px;
  font-size: ${(props) => (props.size ? props.size : "16px")};
  color: ${(props) => (props.cor ? props.cor : "var(--white)")};
  background: ${(props) =>
    props.background ? props.background : "var(--green-linear)"};
`;
