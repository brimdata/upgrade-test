/* @flow */

import {getBoomOptions} from "./boom"
import {setBoomdCredentials, useBoomCache, useBoomIndex} from "../actions/boomd"
import {setCurrentSpaceName} from "../actions/spaces"
import {setOuterTimeWindow} from "../actions/timeWindow"
import initStore from "../test/initStore"

test("#getBoomOptions", () => {
  const store = initStore()
  const state = store.dispatchAll([
    setBoomdCredentials({
      host: "boom.com",
      port: "123",
      user: "rosie",
      pass: "puppy"
    }),
    setOuterTimeWindow([new Date(0), new Date(1)]),
    setCurrentSpaceName("work-zone"),
    useBoomCache(true),
    useBoomIndex(false)
  ])

  expect(getBoomOptions(state)).toEqual(
    expect.objectContaining({
      adapter: "BrowserFetch",
      enableCache: true,
      enableIndex: false,
      username: "rosie",
      host: "boom.com",
      port: "123",
      password: "puppy",
      searchSpace: "work-zone",
      searchSpan: [
        new Date("1970-01-01T00:00:00.000Z"),
        new Date("1970-01-01T00:00:00.001Z")
      ]
    })
  )
})
