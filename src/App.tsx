import React from 'react';
import TextLine from './components/TextLine';

const App: React.FC = () => {
  const handleKeywordClick = (keyword: string) => {
    alert(`Keyword clicked: ${keyword}`);
  };

  return (
    <div>
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
    </div>
  );
};

export default App;
