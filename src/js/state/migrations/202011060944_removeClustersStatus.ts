import {getAllStates} from "src/js/state/migrations/utils/getTestState"
import {Lake} from "../Lakes/types"

export default function removeClustersStatus(state: any) {
  for (const s of getAllStates(state)) {
    if (!s.clusters) continue
    // @ts-ignore
    Object.values(s.clusters).forEach((c: Lake) => {
      // @ts-ignore
      delete c.status
    })
  }

  return state
}
