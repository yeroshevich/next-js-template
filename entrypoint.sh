#!/bin/sh

echo " 🧩🧩🧩🧩🧩 Starting build ... 🖥️ 🔎🔎"
npm run build

echo ' '
echo " ╔════════════════════════════════╗"
echo " ║            groshyk             ║"
echo " ╟────────────────────────────────╢"
echo " ║             front              ║"
echo " ╚════════════════════════════════╝"
echo ' '

echo " 🧩🧩🧩🧩🧩 Starting app ... 🖥️ 🔎🔎"
npm run dev
