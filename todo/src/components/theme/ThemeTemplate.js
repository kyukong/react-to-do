import styled from "styled-components";

const ThemeTemplateBlock = styled.div`
  width: 512px;
  height: 290px;
  
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function ThemeTemplate({children}) {
    return <ThemeTemplateBlock>{children}</ThemeTemplateBlock>;
}

export default ThemeTemplate;
