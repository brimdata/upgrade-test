import {FixedSizeList} from "react-window"
import styled from "styled-components"
import {ComponentType, PropsWithChildren} from "react"

export const List: ComponentType<PropsWithChildren<any>> = styled(
  FixedSizeList
)`
  font-size: 13px;
  font-family: var(--mono-font), sans-serif;
  line-height: 20px;

  .inspector-row {
    display: inline-flex;
    white-space: pre;
    align-items: center;
  }

  a {
    cursor: default;
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    &:active {
      background: rgba(0, 0, 0, 0.07);
    }
    border-radius: 3px;
    display: inline-flex;
    white-space: pre;
    align-items: center;
  }

  i {
    display: inline-flex;
    align-items: center;
    height: 20px;
    margin-right: 2px;
    svg {
      fill: var(--aqua);
      width: 14px;
      height: 14px;
    }
  }

  a.render-more {
    background: var(--button-background);
    color: var(--zed-key);
    padding: 0 12px;
    &:hover {
      background: var(--button-background-hover);
      color: var(--foreground-color);
    }
    &:active {
      background: var(--button-background-active);
    }
  }
`
