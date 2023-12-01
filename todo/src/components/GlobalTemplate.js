import styled from "styled-components";

const GlobalTemplateBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

function GlobalTemplate({children}) {
    return <GlobalTemplateBlock>{children}</GlobalTemplateBlock>;
}

export default GlobalTemplate;
