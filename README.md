[![Brim CI](https://github.com/brimdata/brim/workflows/Brim%20CI/badge.svg)](https://github.com/brimdata/brim/actions?query=workflow%3A%22Brim+CI%22+branch%3Amain)

# Brim

Brim is an open source desktop application for security and network
specialists. Brim makes it easy to search and analyze data from:

- packet captures, like those created by [Wireshark](https://www.wireshark.org/), and
- structured logs, especially from the [Zeek](https://www.zeek.org) network analysis framework.

Brim is especially useful to security and network operators that need to handle large packet captures,
especially those that are cumbersome for Wireshark, tshark, or other packet analyzers.

[![Brim and Wireshark large pcap file comparison](docs/media/brim-and-wireshark.gif?raw=true)](https://www.youtube.com/watch?v=InT-7WZ5Y2Y)

Brim is built from open source components, including:

- [Zed](https://github.com/brimdata/zed), a structured log query engine;
- [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/) for multi-platform UI;
- [Zeek](https://www.zeek.org), to generate network analysis data from packet capture files.

## Installing Brim

See the [installation guide](https://github.com/brimdata/brim/wiki/Installation)
in the [wiki](https://github.com/brimdata/brim/wiki). Release notes are
available at the [releases](https://github.com/brimdata/brim/releases) page.

## Having a problem?

Please browse the [wiki](https://github.com/brimdata/brim/wiki) to review common problems and helpful tips before [opening an issue](https://github.com/brimdata/brim/wiki/Troubleshooting#opening-an-issue).

## Development and contributing

We'd love your help! Please see the [contributing guide](CONTRIBUTING.md) for
development information like building and testing Brim.

## Join the Community

Join our [Public Slack](https://www.brimdata.io/join-slack/) workspace for announcements, Q&A, and to trade tips!
