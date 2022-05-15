import { ChangeEvent, FC, useCallback, useState } from 'react';
import styled from "styled-components";
import {MemoList} from "./MemoList";

export const App: FC = () => {
  const [memos, setMemos] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => 
  setText(e.target.value);
  
  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  },[memos]);

  return (
    <div>
      <h1>メモ帳</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
margin-left: 16px;
`;

const SContainer = styled.div`
border: solid 1px #ccc;
padding: 16px;
margin: 8px; 
`;

const SMemoWrapper = styled.div`
display: flex;
align-items: center;
`;

