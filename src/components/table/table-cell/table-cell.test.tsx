import { setUp, slotFinder } from "test/utils";
import { TableCell } from ".";

describe("Table cell", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(TableCell, {
        columns: [],
        column: { width: "250", checkable: true },
        item: {},
      }))
  );
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
});
