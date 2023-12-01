import styled from "styled-components";

const WeatherTemplateBlock = styled.div`
  width: 512px;
  height: 438px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

function WeatherTemplate({children}) {
    return <WeatherTemplateBlock>{children}</WeatherTemplateBlock>;
}

export default WeatherTemplate;
