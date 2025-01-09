# TextLine

**TextLine**은 React 애플리케이션에서 텍스트 내 특정 키워드를 강조하고, 사용자 상호작용을 처리하기 위한 컴포넌트입니다. 이 컴포넌트는 키워드 강조, 사용자 정의 스타일링, 클릭 이벤트 처리 등을 지원합니다.

## 주요 기능

- **키워드 강조**: 지정된 키워드를 하이라이트하여 시각적으로 강조합니다.
- **사용자 정의 스타일링**: 하이라이트 색상, 텍스트 색상, 글꼴 두께 등을 설정할 수 있습니다.
- **애니메이션 효과**: 페이드, 스케일, 색상 변화 등의 애니메이션 효과를 적용할 수 있습니다.
- **클릭 이벤트 처리**: 강조된 키워드 클릭 시 사용자 정의 함수를 호출할 수 있습니다.

## 설치

```bash
npm install textline

## 사용예시
```
import React from 'react';
import TextLine from 'textline';

const App = () => {
  const handleKeywordClick = (keyword) => {
    alert(`Keyword clicked: ${keyword}`);
  };

  return (
    <TextLine
      keywords={['example', 'text']}
      highlightColor="yellow"
      textColor="red"
      fontWeight="bold"
      animationEffect="fade"
      onKeywordClick={handleKeywordClick}
    >
      This is an example text. Highlight certain words like example and text.
    </TextLine>
  );
};

export default App;
```

## 속성

| 속성명           | 타입                                     | 설명                                                                 | 필수 여부 | 기본값    |
|------------------|------------------------------------------|----------------------------------------------------------------------|----------|-----------|
| `children`       | `ReactNode`                              | 원본 텍스트를 전달합니다.                                            | 필수     | -         |
| `keywords`       | `string[]`                               | 강조할 키워드 목록을 지정합니다.                                    | 필수     | -         |
| `highlightColor` | `string`                                 | 하이라이트 배경 색상을 설정합니다.                                  | 선택     | `'yellow'`|
| `textColor`      | `string`                                 | 텍스트 색상을 설정합니다.                                            | 선택     | `'#000'`  |
| `fontWeight`     | `'normal'` \| `'bold'` \| `'bolder'` \| `'lighter'` \| `number` | 텍스트 굵기를 설정합니다. | 선택     | `'bold'`  |
| `animationEffect`| `'fade'` \| `'scale'` \| `'color'`       | 강조 효과를 설정합니다.                                              | 선택     | `'fade'`  |
| `onKeywordClick` | `(keyword: string) => void`              | 키워드 클릭 시 호출될 함수를 지정합니다.                            | 선택     | -         |
