import {migrate} from "src/test/unit/helpers/migrate"
import {getAllTabs} from "src/js/state/migrations/utils/getTestState"

test("migrating 202101151201_addMainView", async () => {
  const next = await migrate({state: "v0.21.1", to: "202101151201"})

  for (const tab of getAllTabs(next)) {
    expect(tab.layout.mainView).toBe("search")
  }
})
