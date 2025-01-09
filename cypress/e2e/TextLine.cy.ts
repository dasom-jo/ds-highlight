describe('TextLine Component', () => {
    beforeEach(() => {
      // Storybook의 TextLine 컴포넌트 스토리로 이동
      cy.visit('/iframe.html?id=components-textline--default');
    });

    it('should render with highlighted keywords', () => {
      // 'example' 키워드가 하이라이트되어 있는지 확인
      cy.contains('span', 'example')
        .should('have.css', 'background-color', 'rgb(255, 255, 0)'); // yellow
    });

    it('should trigger onKeywordClick event when a keyword is clicked', () => {
      // 'example' 키워드를 클릭
      cy.contains('span', 'example').click();
      // 클릭 시 알림 창의 텍스트를 확인
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Keyword clicked: example');
      });
    });
  });
