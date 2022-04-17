# 🌤 descript weather

_In an interview with [Descript][descript], I was asked to build a weather dashboard. Here is my solution._

[![vercel][vercel-badge]][vercel]
[![github actions][github-actions-badge]][github-actions]
[![codecov][codecov-badge]][codecov]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

## ❓ question

Build a weather dashboard where the user can add and remove locations to view the weather. Locations should be added by zip code. The dashboard should display the temperature and the air quality for each location. Use the [OpenWeatherMap][open-weather] API to retrieve the weather information.

_BONUS_: Once a location has been added, refresh its weather data every five seconds.

## 🤔 assumptions

Everything made sense, I made no assumptions!

## 💀 execution

```bash
git clone https://github.com/bradgarropy/descript-weather.git
cd descript-weather
npm install
npm start
```

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/descript-weather/commits?author=bradgarropy" title="Code">💻</a> <a href="#design-bradgarropy" title="Design">🎨</a> <a href="https://github.com/bradgarropy/descript-weather/commits?author=bradgarropy" title="Documentation">📖</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/bradgarropy/descript-weather/commits?author=bradgarropy" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[vercel]: https://vercel.com/bradgarropy/descript-weather
[vercel-badge]: https://img.shields.io/github/deployments/bradgarropy/descript-weather/production?label=vercel&style=flat-square
[github-actions]: https://github.com/bradgarropy/descript-weather/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/descript-weather/%F0%9F%A7%AA%20test?style=flat-square
[codecov]: https://app.codecov.io/gh/bradgarropy/descript-weather
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/descript-weather?style=flat-square
[contributing]: https://github.com/bradgarropy/descript-weather/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-Contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/descript-weather?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[descript]: https://descript.com
[open-weather]: https://openweathermap.org
