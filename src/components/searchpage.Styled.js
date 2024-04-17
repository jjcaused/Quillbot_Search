import { styled } from "@mui/system";

const StyledHeader = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box
`;

const StyledHeaderLeft = styled("div")`
  display: flex;
  margin: 1px;
  padding: 20px;
`;

const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px
`;

const StyledHeaderCenter = styled("div")`
  display: flex;
  align-items: center;
  z-index: 1;
  position: sticky;
  top: 0;
  margin-left: 80px;
`;

export {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderCenter,
};
