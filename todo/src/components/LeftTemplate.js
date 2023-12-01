import styled from "styled-components";

const LeftTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function LeftTemplate({children}) {
    return <LeftTemplateBlock>{children}</LeftTemplateBlock>;
}

export default LeftTemplate;
