import Async from "./Async";

describe("비동기 컴포넌트", () => {
  test("요청 성공시, 기사를 렌더링한다.", async () => {
    //given
    render(<Async />);
    //when

    //then
    let articleList = [];
    await waitFor(
      async () => {
        articleList = await screen.findAllByRole("listitem");
      },
      { timeout: 5000 }
    );
    expect(articleList).not.toHaveLength(0);
  });
});
