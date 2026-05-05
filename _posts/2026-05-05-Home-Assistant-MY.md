---
title: "Home Assistant: The Lokal Integrations 🤝"
description: "Integrations built by Malaysians for Malaysians"
date: 2026-05-05 12:00:00 +0800
categories: [HA Guide]
tags: [homeassistant, smarthome, self-hosting, malaysia, integrations, lokal]
layout: mypost
author: zubirjamal
---
# The "Lokal" Advantage: Home Assistant Integrations Built by Malaysians

In my previous post, I talked about why hiring a "pro" for Home Assistant is a mismatch. One of the strongest arguments for the DIY route is the ability to integrate local context.

Standard smart home hubs are built for global markets. They don't know your TNB tariff block, and they certainly don't know when Maghrib is in Kajang. The Malaysian Home Assistant community has filled this gap with custom-built integrations.

Here are some of the most impactful local integrations that turn a "smart house" into a "Malaysian smart home."

### 1. Mastering the "Kita Beli Beras" (Utility & Energy)

Energy monitoring is a hobby for some, but in Malaysia, it's about managing the monthly bill.
- [TNB Calculator](https://github.com/salihinsaealal/home-assistant-tnb-calculator) (by Cikgu Salihin): This is a must-have. It tracks your consumption and applies the exact TNB tariff brackets—including NEM Rakyat credits—in real-time.
- [SAJ Monitor](https://github.com/LowKey88/SAJMonitor) (by Hisyam Nasir): For those running SAJ Solar Inverters, this integration pulls your PV generation and battery levels directly into your HA dashboard.

### 2. Spiritual & Lifestyle Integration

A home should reflect the routines of the people living in it.
- [eSolat Takwim](https://github.com/zubir2k/homeassistant-esolattakwim) (by Zubir Jamal): These integrations pull precise prayer times based on JAKIM data. You can use these to automate "Silent Mode" on your smart speakers or adjust lighting for prayer times.
- [MySolat](https://github.com/mysolat/homeassistant) (by Khairi Adnan): Another prayer time integration based on JAKIM with build in controls like audio selection and volume.
- [Daily Hadith](https://github.com/zubir2k/homeassistant-dailyhadith) (by Zubir Jamal): A simple way to bring a touch of mindfulness to your morning by displaying a daily Hadith on your smart screens or dashboards.

### 3. Safety, Weather, and AI

Local environmental data is often more accurate than generic global weather providers.
- [Malaysia Weather](https://github.com/zubir2k/homeassistant-malaysiaweather) (by Dr Yusri Salleh): This pulls live data directly from MET Malaysia. It provides localized rain warnings and weather alerts specific to your district.
- [Frigem](https://github.com/kucau0901/frigem) (by Dr Yusri Salleh): This is a powerful local contribution that leverages Google Gemini AI to analyze Frigate NVR footage. Instead of a generic "Motion detected," it can describe the scene—like "A delivery rider is at the gate"—giving you actual context.

## How to Install These

Most of these are available as Custom Components via the Home Assistant Community Store (HACS). You don't need to be a developer to use them; you just need to be a DIYer who knows how to add a GitHub repository to your setup.

## Join the Community

You don’t have to figure this out alone. The Malaysian Home Assistant community is incredibly active and helpful. Whether you are stuck on a TNB sensor configuration or looking for the best Zigbee smart switches available in local shops, these are the best places to ask:

- Facebook Group: [Home Assistant Malaysia](https://www.facebook.com/groups/homeassistantmalaysia) — Great for seeing others' dashboard inspirations and hardware reviews.
- Telegram Channel: [HASSMalaysia](https://t.me/HAssMalaysia) — Perfect for real-time troubleshooting and quick questions.

## Conclusion: Support Local Devs

These tools exist because local developers spent their personal time building solutions for our community. If you use these, head over to their GitHub repos, give them a Star, and report any bugs you find.
Building a smart home in Malaysia isn't just about buying the right gadgets. It's about using the right "lokal" logic.
