import {zed} from "@brimdata/zealot"
import BrimApi from "src/js/api"

export function isSuricataAlert(value: zed.Value) {
  if (value instanceof zed.Record) {
    return (
      value.has("event_type", zed.TypeString) &&
      value.has("ts", zed.TypeTime) &&
      value.has("community_id", zed.TypeString)
    )
  }
  return false
}

export function findCid(value: zed.Record) {
  return value.has("community_id") ? value.get("community_id").toString() : null
}

export const whenSuricata = (api: BrimApi) => {
  return (
    isSuricataAlert(api.current.value) &&
    findCid(api.current.value) &&
    api.current.poolName
  )
}
