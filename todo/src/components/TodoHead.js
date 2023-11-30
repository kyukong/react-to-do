import styled from "styled-components";

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

function TodoHead() {
    const today = new Date();

    const dateString = today.toLocaleString('ko-KR', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const dayName = today.toLocaleString('ko-KR', {weekday: 'long'});

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
