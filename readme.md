To repro the `concurrently` bug, run `yarn install` and then `yarn start`.

You should get prefixes of `foo` and `bar` respectively, but instead you get `start-foo` and `start-bar`.
