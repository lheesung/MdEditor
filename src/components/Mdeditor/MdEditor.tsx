import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function MdEditor(): JSX.Element {
  const eRef = useRef<Editor | null>(null);
  const handleSubmitBtnHTML = (): void => {
    console.log(eRef.current?.getInstance().getHTML()); // 입력창에 입력한 내용을 HTML 태그형식으로 반환
  };

  const handleSubmitBtnMD = (): void => {
    console.log(eRef.current?.getInstance().getMarkdown()); // 입력창에 입력한 내용을 HTML 태그형식으로 반환
  };

  return (
    <>
      <h2>이거슨 마크다운 작성 폼이다 이 말이야</h2>
      <Editor
        ref={eRef}
        placeholder='내용을 입력해주세요.'
        previewStyle="vertical" // 미리보기 스타일
        height='300px' // 수정 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(default: markdown) / What You See Is What You Get
        toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
          ]}
      />
      <button onClick={handleSubmitBtnHTML}>get HTML</button>
      <button onClick={handleSubmitBtnMD}>get Markdown</button>
    </>
  );
}
