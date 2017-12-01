# github-search
A simple React Native app for searching GitHub users.

## Installation
This app uses [Expo](https://expo.io/) in development. For the best experience, download the Expo mobile app and the Expo XDE - this will allow you to test on both emulators / simulators and your own device. For more information, check out [Expo's Tools documentation](https://expo.io/tools).

```bash
git clone https://github.com/parkerziegler/github-search.git
cd github-search
yarn install
```

Then just open the project in the Expo XDE, and you should be good to go!

You will also need to create a file in the root named `config.js`. Here you need to export a custom GitHub token like so:
```javascript
export const token = '<YOUR_API_TOKEN>';
```

To generate a GitHub token for your account, read [these instructions](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

## Purpose
This app is a good staging ground for beginners to get familiar with common practices in React Native. It uses v4 of the GitHub API to query GitHub user and repository data. The v4 API uses GraphQL, so this app is also a good place for beginners to familiarize themselves with writing GraphQL queries.

## Contributing
While this app may not have a commercial purpose in the long term, it's an excellent place for getting going with React Native and GraphQL. If you're interested in contributing to make this repository more friendly for beginners, please reach out on Twitter @parker_ziegler.