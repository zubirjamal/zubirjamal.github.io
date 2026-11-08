---
layout: page
title: Zee Link Privacy Policy
permalink: /zeelink/privacy/
---

_Last updated: 8 November 2026_

Zee Link is a personal, non-commercial Android app by Zubir Jamal. It lets you ask questions through your smart glasses and get spoken answers from tools you connect yourself (for example, prayer times). This policy explains what the app does with your data.

## The short version

- No account and no sign-up for Zee Link itself.
- Your voice is turned into text to answer your question. Audio is **not recorded or stored**.
- Location and photos are **optional**, used only to answer you, and never stored by Zee Link.
- Your settings and API keys stay **on your phone**, encrypted with the Android Keystore.
- Your questions go **only to the services you configure**. They never go to us.
- No ads, no analytics, no tracking, and nothing is sold.

## What the app processes

**Voice and text.** When you start Zee Link or tap to talk, the app listens through your glasses' microphone (or your phone's microphone). Speech is converted to text by the glasses' speech service or by your phone's speech recogniser. The text is used to answer that one question. Zee Link does not save audio files.

**Questions and answers.** To answer, the app sends your question's text, plus the results of any tools it calls, to:

- the AI model provider you choose in Settings (for example Meta, Google Gemini, OpenAI, OpenRouter, or your own server such as Ollama), and
- the MCP servers you add (for example eSolat).

Those services handle your data under **their own** privacy policies. Please check them before you connect them.

**Settings and keys.** Server addresses, model choices and API keys are stored only on your device. Keys are encrypted with the Android Keystore. Uninstalling the app deletes them.

**Recent conversation log.** The app keeps a short log of recent questions, answers and tool calls on your device so you can see what happened. It never leaves your phone, and you can clear it in the app or by uninstalling.

**Location (optional).** If you turn on location sharing, the app adds your approximate location (rounded to about 100 m) and nearby town name to each question, so your tools can answer for where you are (for example, local prayer times or the nearest mosque). If you set up location zones (such as Home or Office), the app checks your location in the background and asks your assistant a question you wrote when you arrive. Location is sent only to the AI provider and MCP servers you configure, and you can switch it off in Settings at any time.

**Photos (optional).** When you use Vision, the app takes one photo with your glasses or phone camera and sends it with your question to the AI provider you chose. Photos are not saved by Zee Link.

## Glasses connection

Zee Link connects to your glasses through the Meta AI app using Meta's Wearables Device Access Toolkit. Meta's own terms and privacy policy cover the Meta AI app and your glasses. Zee Link turns off the toolkit's optional analytics.

## Permissions

- **Microphone**: to hear your question, only while listening.
- **Bluetooth**: to connect to your glasses and play answers through them.
- **Internet**: to reach the AI provider and MCP servers you configure.
- **Location** (optional): to make answers location-aware and to run location zones.
- **Camera** (optional): for Vision questions.
- **Notifications**: to show that Zee Link is listening in the background.

## Children

Zee Link is not directed at children under 13.

## Changes

If this policy changes, the new version will be posted on this page with a new date.

## Contact

Questions? Email [myname.is@zubirjamal.com](mailto:myname.is@zubirjamal.com).
