import React, { useState, useEffect, ReactNode, JSX } from 'react';

interface TextLineProps {
  children: ReactNode; // 원본 텍스트를 children으로 받음
  keywords: string[]; // 강조할 키워드 목록
  highlightColor?: string; // 하이라이트 배경 색상
  textColor?: string; // 텍스트 색상
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number; // 텍스트 굵기
  animationEffect?: 'fade' | 'scale' | 'color'; // 강조 효과
  onKeywordClick?: (keyword: string) => void; // 키워드 클릭 이벤트
}

const TextLine: React.FC<TextLineProps> = ({
  children,
  keywords,
  highlightColor = 'yellow', // 기본 하이라이트 배경색
  textColor = '#000', // 기본 텍스트 색상
  fontWeight = 'bold',
  animationEffect = 'fade', // 기본 애니메이션 효과
  onKeywordClick,
}) => {
  const [highlightedText, setHighlightedText] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (typeof children !== 'string') {
      console.error('TextLine children must be a string');
      return;
    }

    const text = children; // children을 텍스트로 사용
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi'); // 키워드 정규식
    const parts = text.split(regex); // 키워드 기준으로 텍스트 분할

    const processedText = parts.map((part, index) => {
      if (keywords.includes(part)) {
        return (
          <span
            key={index}
            style={{
              backgroundColor: highlightColor,
              color: textColor,
              fontWeight: fontWeight,
              transition: 'all 0.3s ease-in-out',
              ...(animationEffect === 'scale' && { transform: 'scale(1.2)' }),
              ...(animationEffect === 'color' && { backgroundColor: 'lightblue' }),
            }}
            onClick={() => onKeywordClick && onKeywordClick(part)} // 키워드 클릭 이벤트 실행
            className={`highlight ${animationEffect}`} // 애니메이션 클래스 추가
          >
            {part}
          </span>
        );
      } else {
        return <span key={index}>{part}</span>; // 일반 텍스트 처리
      }
    });

    setHighlightedText(processedText);
  }, [children, keywords, highlightColor, textColor, fontWeight, animationEffect, onKeywordClick]);

  return <div>{highlightedText}</div>;
};

export default TextLine;
