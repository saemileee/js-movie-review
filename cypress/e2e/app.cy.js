describe("영화앱", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  describe("최초 렌더링", () => {
    it("영화 리스트 20개가 렌더링된다.", () => {
      const movieList = cy.get(".movie-item");
      movieList.should("have.length", 20);
      movieList.each((movie) => {
        const movieEl = cy.wrap(movie);
        movieEl.should("be.visible");
        movieEl.get(".movie-thumbnail").should("be.visible");
        movieEl.get(".movie-title").should("be.visible");
        movieEl.get(".movie-rate").should("be.visible");
      });
    });

    it("더보기 버튼이 렌더링된다.", () => {
      const viewMoreButtonEl = cy.get(".view-more");
      viewMoreButtonEl.should("be.visible");
      viewMoreButtonEl.should("have.text", "더보기");
    });
  });

  it("더보기 버튼을 클릭하면 20개의 영화가 추가로 렌더링된다.", () => {
    cy.get(".view-more").click();
    cy.get(".movie-item").should("have.length", 40);
  });
});
