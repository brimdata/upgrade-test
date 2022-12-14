import {isEmpty} from "lodash"

import {Thunk} from "../state/types"
import Current from "../state/Current"
import Handlers from "../state/Handlers"
import Pools from "../state/Pools"
import showIngestWarning from "./showIngestWarning"

export default (): Thunk<Promise<void>> => (dispatch, getState) => {
  const poolIds = Handlers.getIngestPoolIds(getState())

  if (isEmpty(poolIds)) {
    return Promise.resolve()
  } else {
    const lakeId = Current.getLakeId(getState())
    if (!lakeId) return Promise.reject()
    const names = poolIds.map((id) => {
      const pool = Pools.get(lakeId, id)(getState())
      if (pool) return pool.name
      else return id
    })
    return showIngestWarning(names)
  }
}
