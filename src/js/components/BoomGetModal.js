/* @flow */

import {useSelector} from "react-redux"
import React, {useState} from "react"

import {InputCheckbox} from "./form/Inputs"
import {reactElementProps} from "../test/integration"
import Boomd from "../state/Boomd"
import Form from "./form/Form"
import ModalBox from "./ModalBox/ModalBox"
import SearchBar from "../state/SearchBar"
import Tab from "../state/Tab"
import TextContent from "./TextContent"
import clickFeedback from "./clickFeedback"
import lib from "../lib"

export default function BoomGetModal() {
  function copyToClip(_, e) {
    clickFeedback(e.target, "Copied")
    var node = document.getElementById("boom-get-code")
    if (node) lib.doc.copyToClipboard(node.textContent)
  }

  return (
    <ModalBox
      buttons={[
        {label: "Copy", click: copyToClip},
        {label: "Done", click: (closeModal) => closeModal()}
      ]}
      name="boom-get"
      className="boom-get-modal"
      title="Boom Get Command"
      {...reactElementProps("boomGetModal")}
    >
      <BoomGetModalContents />
    </ModalBox>
  )
}

function BoomGetModalContents() {
  let [includeCreds, setIncludeCreds] = useState(false)
  let program = useSelector(SearchBar.getSearchProgram)
  let {username, password} = useSelector(Tab.cluster)
  let space = useSelector(Tab.spaceName)
  let useCache = useSelector(Boomd.usingCache)
  let useIndex = useSelector(Boomd.usingIndex)

  let s = () => `-s ${space} `
  let u = () => (includeCreds ? `-u ${username} ` : "")
  let p = () => (includeCreds ? `-p ${password} ` : "")
  let C = () => (useCache ? "" : "-C ")
  let X = () => (useIndex ? "" : "-X ")

  let cmd = ["boom ", s(), u(), p(), "get ", C(), X(), `"${program}"`].join("")

  return (
    <TextContent>
      <pre id="boom-get-code">{cmd}</pre>
      <Form>
        <InputCheckbox
          label="Include Credentials:"
          checked={includeCreds}
          onChange={(e) => setIncludeCreds(e.target.checked)}
        />
      </Form>
    </TextContent>
  )
}
