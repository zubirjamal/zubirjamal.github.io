---
title: "Home Assistant: The Lokal Integrations 🤝"
description: "Integrations built by Malaysians for Malaysians"
date: 2026-05-05 12:00:00 +0800
categories: [Home Assistant]
tags: [homeassistant, smarthome, self-hosting, malaysia, integrations, lokal]
layout: mypost
author: zubirjamal
image: "https://github.com/user-attachments/assets/78c5ef8e-aeb2-4680-a482-d27a436b90dc"
---
# The "Lokal" Advantage: Home Assistant Integrations Built by Malaysians

In my previous post, I talked about why hiring a "pro" for Home Assistant is a mismatch. One of the strongest arguments for the DIY route is the ability to integrate local context.

Standard smart home hubs are built for global markets. They don't know your TNB tariff block, and they certainly don't know when Maghrib is in Kajang. The Malaysian Home Assistant community has filled this gap with custom-built integrations.

Here are some of the most impactful local integrations that turn a "smart house" into a "Malaysian smart home."

### 1. Mastering the "Kita Beli Beras" (Utility & Energy)

Energy and utility monitoring is a hobby for some, but in Malaysia, it's about managing the monthly bill and keeping the household running smoothly.
* **[TNB Calculator](https://github.com/salihinsaealal/home-assistant-tnb-calculator) (by Cikgu Salihin):** This is a must-have. It tracks your consumption and applies the exact TNB tariff brackets—including NEM Rakyat credits—in real-time.
* **[myTNB](https://github.com/danieyal/ha-mytnb) (by Latiff Danieyal):** Integrates with your official myTNB accounts, allowing you to monitor Tenaga Nasional Berhad electricity accounts, tracking kWh consumption, billing costs, bill history, and daily breakdowns.
* **[myTNB Smart Meter](https://github.com/feiming/homeassistant-MyTNB) (by Fei Ming):** Directly connects to your TNB smart meter account to pull 30-minute interval energy usage and daily costs straight into Home Assistant.
* **[Air Selangor](https://github.com/zubir2k/homeassistant-airselangor) (by Zubir Jamal):** Track your water bills, usage history, outstanding balance, payment records, and scheduled/unscheduled water disruption notices for all accounts linked to your Air Selangor login.
* **[PAIP - Air Pahang](https://github.com/zubir2k/homeassistant-paip) (by Zubir Jamal):** For households in Pahang, monitor your Pengurusan Air Pahang Berhad accounts, meter usage, and bills without needing to log into external portals.
* **[Gas Renew](https://github.com/zubir2k/homeassistant-gasrenew) (by Zubir Jamal):** Never get caught halfway frying chicken with an empty cooking gas cylinder! This tracks your LPG cylinder replenishment dates and estimates remaining days so you can order a refill before it runs dry.
* **[SPFM - Sunway Property Facility Management](https://github.com/zubir2k/homeassistant-spfm) (by Zubir Jamal):** For residents and owners in Sunway-managed properties, this connects to the SPFM Selfcare portal to track maintenance fees, sinking funds, and billing statements.
* **[SAJ Monitor](https://github.com/LowKey88/SAJMonitor) (by Hisyam Nasir):** For those running SAJ Solar Inverters, this integration pulls your PV generation and battery levels directly into your HA dashboard.

### 2. Automotive, EV & Public Transport (Kereta, Motor & Bas)

Bringing Malaysian transport, EV charging, and commuting convenience right to your smart home.
* **[Proton e.MAS](https://github.com/KaiHongTan/proton-emas-home-assistant) (by Kai Hong Tan):** Seamlessly bridges the official Proton e.MAS telematics/API into Home Assistant. Perfect for monitoring battery SoC, remaining range, charging status, and climate control directly from your dashboard. Especially handy for timing home charging around solar surplus or off-peak utility tariffs.
* **[Proton Link](https://github.com/jimmy93/protonlink-ha) (by Jimmy):** Connects your connected Proton vehicle (X50, X70, S70, X90) to Home Assistant via Proton Link telematics. Monitor vehicle status, location, fuel levels, and odometer from your dashboard.
* **[Rapid Bus Tracker](https://github.com/zubir2k/homeassistant-rapidbus) (by Zubir Jamal):** Taps into official Data.gov.my GTFS Realtime feeds to show live bus positions, route paths, and arrival ETAs for Rapid KL, MRT Feeder buses, and Rapid Penang. No more waiting under the hot Malaysian sun at the bus stop—time your departure right when the bus is nearby.

### 3. Climate & Appliances (Sejukkan Rumah & Basuh Baju)

Local hardware and tailored UI cards for typical Malaysian household gear.
* **[Go Daikin](https://github.com/doubleukay/godaikin-ha) (by doubleukay):** Integrates Daikin air conditioners sold in Malaysia that use the GO DAIKIN app, giving you complete climate control (cool, dry, fan, temperatures, presets) and energy consumption tracking.
* **[HaiSmart Laundry Card](https://github.com/kucau0901/haismart-laundry-card/) (by Dr Yusri Salleh):** A dedicated Lovelace dashboard card for the Haier twin washer + dryer laundry centre (via haismart), showing real-time cycle status, countdown timers, and safe start/pause controls.

### 4. Spiritual, Health & Lifestyle Integration

A home should reflect the routines and well-being of the people living in it.
* **[eSolat Takwim](https://github.com/zubir2k/homeassistant-esolattakwim) (by Zubir Jamal):** Pulls precise prayer times and Islamic Hijri dates based on JAKIM data for your home zone. You can use these to automate "Silent Mode" on your smart speakers or adjust lighting for prayer times.
* **[eSolat GPS](https://github.com/zubir2k/homeassistant-esolatgps) (by Zubir Jamal):** While eSolat Takwim is tuned for your static home zone, eSolat GPS dynamically calculates JAKIM prayer times based on your live GPS location (`person` or `device_tracker`). Perfect for commuters, travelers, and balik-kampung road trips across state borders.
* **[MySolat](https://github.com/mysolat/homeassistant) (by Khairi Adnan):** Another prayer time integration based on JAKIM with built-in controls like audio selection and volume.
* **[Daily Hadith](https://github.com/zubir2k/homeassistant-dailyhadith) (by Zubir Jamal):** Brings a touch of mindfulness to your morning by displaying daily authentic hadiths from Sunnah.com (in Malay and English) on your smart screens or wall dashboards.
* **[Intervals.icu](https://github.com/salihinsaealal/intervals-homeassistant) (by Cikgu Salihin):** Seamlessly pulls your endurance fitness and athletic training analytics (fitness load, fatigue, form) from Intervals.icu into Home Assistant.
* **[Xert](https://github.com/salihinsaealal/xert-homeassistant) (by Cikgu Salihin):** Brings adaptive training advisor metrics, threshold power, and workout data from Xert into your smart home dashboard.

### 5. AI, Environmental Quality, and Automation

Local environmental data and localized automation give your home actionable context.
* **[Malaysia Weather](https://github.com/zubir2k/homeassistant-malaysiaweather) (by Dr Yusri Salleh & Zubir Jamal):** Pulls live observations, regional forecasts, and localized rain/thunderstorm warnings straight from MetMalaysia.
* **[Malaysia Air Quality Status (APIMS)](https://github.com/zubir2k/homeassistant-malaysiaairquality) (by Zubir Jamal):** Real-time Air Pollutant Index (API / IPU) from the Department of Environment (JAS) APIMS network across Malaysia. Ideal for automating indoor air purifiers or sending notifications during haze season.
* **[Evolution API (WhatsApp)](https://github.com/salihinsaealal/evolution-api-homeassistant) (by Cikgu Salihin & Zubir Jamal):** Malaysian households run on WhatsApp. This integration turns WhatsApp into a first-class notification and interactive messaging channel for your Home Assistant automations.
* **[Jarvis Home Assistant](https://github.com/kucau0901/jarvis-home-assistant) (by Dr Yusri Salleh):** Streams live Home Assistant state changes and context into Jarvis AI assistants as events happen in the home.
* **[HA AI Cost Meter](https://github.com/kucau0901/ha-ai-cost-meter) (by Dr Yusri Salleh):** Exact provider-reported AI token usage and shadow cost metering for LLM integrations running inside Home Assistant.
* **[Plate Recognizer](https://github.com/zubir2k/homeassistant-platerecognizer) (by Zubir Jamal):** License plate recognition (ALPR/ANPR) using camera snapshots. Seamlessly automate autogate triggers for family cars and log visitor vehicle arrivals.

### 6. Hardware Hacks & Just for Fun 🧸

Because smart home automations don't always have to be about electricity bills and utility meters!
* **[Furby Connect](https://github.com/zubir2k/homeassistant-furbyconnect) (by Zubir Jamal):** Brought your dusty 2016 Hasbro Furby Connect out of storage and into Home Assistant via Bluetooth Low Energy (BLE). Control reactions, sounds, and make it speak or react to your home automations.

## How to Install These

Most of these are available as Custom Components via the Home Assistant Community Store (HACS). You don't need to be a developer to use them; you just need to be a DIYer who knows how to add a GitHub repository to your setup.

## Join the Community

You don’t have to figure this out alone. The Malaysian Home Assistant community is incredibly active and helpful. Whether you are stuck on a TNB sensor configuration or looking for the best Zigbee smart switches available in local shops, these are the best places to ask:

- Facebook Group: [Home Assistant Malaysia](https://www.facebook.com/groups/homeassistantmalaysia) — Great for seeing others' dashboard inspirations and hardware reviews.
- Telegram Channel: [HASSMalaysia](https://t.me/HAssMalaysia) — Perfect for real-time troubleshooting and quick questions.

## Conclusion: Support Local Devs

These tools exist because local developers spent their personal time building solutions for our community. If you use these, head over to their GitHub repos, give them a Star, and report any bugs you find.
Building a smart home in Malaysia isn't just about buying the right gadgets. It's about using the right "lokal" logic.
