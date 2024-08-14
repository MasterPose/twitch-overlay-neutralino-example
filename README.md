# Twitch Overlay Neutralino Template

Example on how to make your Twitch Overlay run a local server to include as browser source inside OBS.

Check the [Twitch Plugin for Construct 3](https://masterpose.itch.io/twitch-c3).

## How to add your project?

Install [Neutralino CLI tool](https://neutralino.js.org/docs/getting-started/your-first-neutralinojs-app#step-0-installing-neu-cli) with

```
npm install -g @neutralinojs/neu
```

Export your Construct 3 project as a HTML build.

Unzip the package inside the `resources/overlay/` so the index.html is inside `resources/overlay/index.html`.

## How to compile?

Run your project with:

```
neu run
```

Compile for distribution with:

```
neu build
```

A `resources.neu` and a binary for each different platform will be generated. To distribute, just grab the `resources.neu` and pair it with the binary you want to distribute. For example, if you are releasing the overlay for Windows, you can zip the `overlay-win_x64.exe` and the `resources.neu` together, both the binary and `resources.neu` are needed to run the program.

Learn more at [Neutralino Docs](https://neutralino.js.org/docs/distribution/overview).