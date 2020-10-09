import {isObject} from "../util/utils"
import {parseContentType} from "./contentType"
import {Enhancer, ZIterator} from "../types"
import {FetchArgs} from "./fetcher"
import * as zqd from "../zqd"
import {eachLine} from "../ndjson/lines"

export async function* createIterator(
  resp: Response,
  args: FetchArgs
): ZIterator {
  if (!resp.ok) {
    let contents = await parseContentType(resp)
    if (isObject(contents)) throw contents
    else throw new Error(contents)
  }

  const enhancers = (args.enhancers || []).map((fn: Enhancer) => fn())

  for await (let json of eachLine(resp.body)) {
    yield enhancers.reduce(
      (payload: zqd.Payload, fn: (p: zqd.Payload) => any) => fn(payload),
      json
    )
  }
}