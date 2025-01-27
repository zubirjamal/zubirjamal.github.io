---
title: Install Home Assistant 🏡
description: Macamana nak mula
date: 2025-01-26 12:00:00 +0800
categories: [Home Assistant]
tags: [homeassistant, smarthome]
author: zubirjamal
---
# Install Home Assistant?

Kalau korang tengok kat [Home-Assistant.io](https://www.home-assistant.io/installation/), ada memacam cara nak install Home Assistant (HA) ni.
Tapi kalau korang just nak cuba-cuba install, boleh guna method ni: (kot laa belum decide nak set dedicated hardware macam RaspberryPi ke, mini PC ke..)

## Setup HA kat Windows PC
1. Guna Hyper-V pada saya cara paling ringkas. Cuma limitation pada Hyper-V ni dia tak support USB (kalau nak guna USB Zigbee ke)
2. Also, make sure Windows PC korang versi yg Professional.. yang bukan kene consider option lain (VirtualBox).
3. Memula, install Hyper-V
4. Kemudian download image HA (make sure pilih image untuk Hyper-V)
5. Setup virtual machine untuk HA
6. Lepas VM dah up, leh nampak URL HA tu (contoh http://192.168.1.123:8123)
7. Copy URL tu pastu buka kat web browser.
8. Kalau ngam, korang akan nampak HA punya setup page

## Setup HA kat MacOS
1. Option yang ada.. VirtualBox

## Reference
1. Step kat atas ni merupakan step 'ringkas'
2. Untuk step satu per satu, leh refer guide kat bawah ni

Guide untuk Hyper-V \
https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v

Guide untuk Windows \
https://www.home-assistant.io/installation/windows

Guide untuk MacOS \
https://www.home-assistant.io/installation/macos

Selamat mencuba ~
