<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>



<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense][license-shield]][license-url]
[![CI][ci-shield]][ci-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Twodrop/Podium">
    <img src="public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Podium</h3>

  <p align="center">
    Write your speech, see how long it takes to say, and read it from a built-in teleprompter.
    <br />
    <a href="https://github.com/Twodrop/Podium"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://twodrop.github.io/Podium/">View Demo</a>
    &middot;
    <a href="https://github.com/Twodrop/Podium/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/Twodrop/Podium/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Podium is a small web app for anyone preparing a speech or presentation. You write (or paste) your
speech into the editor, and Podium analyzes it as you type: how many words and sentences it has,
how long the words and sentences are on average, which words you repeat the most, and based on
your speaking pace, how long it will take to deliver.

When you are ready to practice, open the teleprompter. After a short countdown it scrolls through
your speech at exactly the pace you chose, so it finishes when your estimated speaking time runs
out. You can pause, resume, restart or exit at any time.

Your draft is saved automatically in the browser, so it is still there the next time you open the
page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Requirements

| ID  | Requirement                                                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| R1  | The user can write or paste a speech into a text editor.                                                                                       |
| R2  | The app shows the number of characters, words and sentences in the speech, updated as the user types.                                         |
| R3  | The app shows the average word length and average sentence length of the speech.                                                              |
| R4  | The app shows the ten most frequently used words in the speech (ignoring "a" and "i").                                                         |
| R5  | The app shows an estimated speaking time (mm:ss) based on the chosen speaking pace.                                                            |
| R6  | The user can choose a speaking pace with the presets Slow (100), Normal (130) and Fast (160) words per minute, or enter a custom value.       |
| R7  | A custom pace must be a number from 50 to 300 words per minute. An invalid value shows an error message and the previous pace is kept.        |
| R8  | The speech is saved automatically in the browser and restored when the page is reloaded.                                                      |
| R9  | The user can open a teleprompter that, after a 3 second countdown, scrolls through the speech over the estimated speaking time.               |
| R10 | The teleprompter can be paused, resumed, restarted and exited. Only the controls that are valid in the current state are enabled.            |
| R11 | The teleprompter cannot be started when the speech is empty.                                                                                   |

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![TypeScript][TypeScript]][TypeScript-url]
* [![Vite][Vite]][Vite-url]
* [![Vitest][Vitest]][Vitest-url]
* Native [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (custom elements + shadow DOM), no framework
* [glyphalyze](https://github.com/Twodrop/glyphalyze) - text analysis (word/sentence counts, averages, reading time, frequent words)
* [flowstate-mini-js](https://github.com/Abbas288/flowstate-mini-js) - finite state machine that drives the teleprompter

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The app is deployed to GitHub Pages at **https://twodrop.github.io/Podium/**, so you don't need to
install anything to use it. To run it locally, follow the steps below.

### Prerequisites

* [Node.js](https://nodejs.org/) 24.12.0 or later (includes npm)
  ```sh
  node --version
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Twodrop/Podium.git
   cd Podium
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```
4. Open the URL Vite prints in the terminal (by default http://localhost:5173/Podium/)

#### Other scripts

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run build`        | Type check and build for production to `dist/` |
| `npm run preview`      | Serve the production build locally             |
| `npm test`             | Run the unit tests in watch mode               |
| `npm run test:run`     | Run the unit tests once                        |
| `npm run typecheck`    | Type check without emitting files              |
| `npm run lint`         | Lint the source code with ESLint               |
| `npm run format:check` | Check formatting with Prettier                 |

Every push to `main` runs type checking, linting, formatting checks, tests and a build in GitHub
Actions, and then deploys the build to GitHub Pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. **Write your speech.** Type or paste it into the text area. The report below the editor updates
   as you type.
2. **Set your pace.** Click *Slow*, *Normal* or *Fast*, or type your own words-per-minute value
   (50-300). The estimated speaking time updates right away.
3. **Review the report.** Check the speaking time, the word and sentence counts, the average
   lengths, and the list of your most frequent words to spot repetition.
4. **Practice with the teleprompter.** Click *Open Teleprompter*, then *Start*. After "Get ready…"
   the text starts scrolling. Use *Pause*, *Resume*, *Restart* and *Exit* to control it.

A 5000-word sample speech is included in [`sample-speeches/5000-words.txt`](sample-speeches/5000-words.txt)
if you want something to try it out with.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Speech editor with live analysis
- [x] Speaking pace presets and custom pace with validation
- [x] Estimated speaking time
- [x] Automatic draft saving
- [x] Teleprompter with countdown, pause, resume, restart and exit
- [ ] Split the speech into sections and show the speaking time for each section
- [ ] Adjustable teleprompter text size

See the [open issues](https://github.com/Twodrop/Podium/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome. If you have a suggestion that would make Podium better, please fork the
repo and create a pull request, or open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Make sure `npm run lint`, `npm run format:check` and `npm run test:run` pass
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Unlicense (public domain). See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Robin Helander - rehswe@gmail.com

Project Link: [https://github.com/Twodrop/Podium](https://github.com/Twodrop/Podium)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [flowstate-mini-js](https://github.com/Abbas288/flowstate-mini-js) by Abbas288, used for the teleprompter state machine
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* Built as part of the course 1DV610 at Linnaeus University

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Twodrop/Podium.svg?style=for-the-badge
[contributors-url]: https://github.com/Twodrop/Podium/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Twodrop/Podium.svg?style=for-the-badge
[forks-url]: https://github.com/Twodrop/Podium/network/members
[stars-shield]: https://img.shields.io/github/stars/Twodrop/Podium.svg?style=for-the-badge
[stars-url]: https://github.com/Twodrop/Podium/stargazers
[issues-shield]: https://img.shields.io/github/issues/Twodrop/Podium.svg?style=for-the-badge
[issues-url]: https://github.com/Twodrop/Podium/issues
[license-shield]: https://img.shields.io/github/license/Twodrop/Podium.svg?style=for-the-badge
[license-url]: https://github.com/Twodrop/Podium/blob/main/LICENSE
[ci-shield]: https://img.shields.io/github/actions/workflow/status/Twodrop/Podium/ci.yml?branch=main&style=for-the-badge&label=CI
[ci-url]: https://github.com/Twodrop/Podium/actions/workflows/ci.yml
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vite.dev/
[Vitest]: https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev/
