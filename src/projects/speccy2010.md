---
title: "speccy2010"
company: "Speccy2010"
logo: ../images/projects/speccy2010.png
jobTitle: "ZX-Spectrum clone firmware"
website: "https://github.com/mborik/speccy2010"
skills:
  [
    { title: "VHDL", image: ../images/skills/vhdl.svg },
    { title: "Verilog", image: ../images/skills/verilog.svg },
    { title: "C", image: ../images/skills/c.svg },
    { title: "C++", image: ../images/skills/cpp.svg },
    { title: "Z80", image: ../images/skills/z80.svg },
  ]
images: [
  {
    caption: "speccy2010",
    title: "Speccy2010",
    description: "<ul>
      <li>FPGA development board built for the implementation of various gaming computers (but originally focused on <b>ZX Spectrum and its clones</b>).</li>
      <li>This project is <b>next iteration of the firmware</b> primarily aimed at implementation of various disk interfaces, which was common in the Central European region:<br>
        DivMMC interface and objectively the most advanced disk system MB-02.</li></ul>
      <p>Use arrows or cursor keys to navigate through the advanced features...</p>",
    layout: "6",
    files: [
      { image: ../images/projects/speccy2010/board.jpg },
    ],
  },
  {
    caption: "filemanager",
    title: "File Manager",
    description: "<ul>
      <li>Improved <b>File Manager</b> which look like old good DOS commanders and let you to autoload snapshots, TAPs or disk images into the current machine configuration.</li>
      <li>Provides enhanced capabilities when the <b>ESXDOS</b> is loaded into DivMMC to autoload TAP and TRD files directly, without accessing NMI menu.</li>
      <li>Including text viewer, hex-viewer and editor.</li></ul>",
    layout: "2",
    files: [
      { image: ../images/projects/speccy2010/fw124snap.jpg },
      { image: ../images/projects/speccy2010/fw123hexedit.jpg },
      { image: ../images/projects/speccy2010/fw123cmd.jpg },
    ],
  },
  {
    caption: "debugger",
    title: "Debugger",
    description: "Full-featured debugger built over the emulation core. It controling Z80 processor directly so all states, registers and every byte of a memory is accessible and modifiable.",
    layout: "3",
    files: [
      { image: ../images/projects/speccy2010/fw123dbg2.jpg },
      { image: ../images/projects/speccy2010/fw123dbg4.jpg },
      { image: ../images/projects/speccy2010/fw123dbg3.jpg },
    ],
  },
]
dateFrom: "2017-07-15"
dateTo: "2020-09-09"
---
