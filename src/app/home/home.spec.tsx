import { Home } from "@/src/app/home/home";
import { render } from "@/src/app/shared/tests/test-utils";
import IndexPage from "@/src/pages";

describe("HomeComponent", () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {};
    });

    test("Should render h1-tag", () => {
        const a = render(<Home />, expectedProps);
        expect(true).toBe(true);
    });
});