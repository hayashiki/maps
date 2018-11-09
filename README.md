<div style="text-align: center">
  <img src="https://www.harvestprofit.com/logo.png" alt="Harvest Profit"></img>
</div>

[![CircleCI](https://circleci.com/gh/HarvestProfit/marketingplan/tree/master.svg?style=svg&circle-token=063f22ab4772f42625bb60807b90fe9e26142e3e)](https://circleci.com/gh/HarvestProfit/marketingplan/tree/master) [![codecov](https://codecov.io/gh/HarvestProfit/marketingplan/branch/master/graph/badge.svg?token=8NflzHcSpe)](https://codecov.io/gh/HarvestProfit/marketingplan)

## Getting Started

### Prerequisites
Please install the following:
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - Feel free to use [RVM](https://rvm.io/) or [Rbenv (recommended)](https://github.com/rbenv/rbenv) for version management
- [NodeJS](https://nodejs.org/en/)
  - Feel free to use [NVM](https://github.com/creationix/nvm) or [Nodenv (recommended)](https://github.com/nodenv/nodenv) for version management
- [Postgres.app](https://postgresapp.com/)

In order to run the project in development, you'll need to install the
required RubyGems, NPM modules, and set up your Postgres database:

```bash
bundle install
yarn install
rails db:setup
```

Problems getting everything setup? Check for the following gem problems
- [pg](https://stackoverflow.com/a/20226895)
- [eventmachine](https://github.com/eventmachine/eventmachine/issues/661#issuecomment-182531919)

### Linting

We use linters for [static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis). I would highly encourage you to consider using them for all coding projects, not just this one.

You can use the following command to install our linters for [Atom, our preferred code editor](https://atom.io/):
```bash
apm install linter linter-eslint linter-rubocop language-babel
```

#### Rubocop
We use [RuboCop](http://rubocop.readthedocs.io/en/latest/) as our ruby linter.

Run the following to install RubyCop globally:
```shell
gem install rubocop
```

#### Eslint
We use [ESLint](https://eslint.org/) as our javascript linter. For existing javascript, we use [ESLint recommended rules](https://eslint.org/docs/rules/).

For our React components, We use a subset of the [AirBnB Javascript rules](https://github.com/airbnb/javascript), and their [React Javascript Rules](https://github.com/airbnb/javascript/tree/master/react).Our only consistent exception: we treat `.js` and `.jsx` as the same file type. **Please use `.js` as your file extensions when creating React components.**

To install eslint in [atom](https://atom.io/), install [`linter`](https://atom.io/packages/linter),  [`linter-eslint`](https://atom.io/packages/linter-eslint), and [`language-babel`](https://atom.io/packages/language-babel).

### Running in Development

A rake command is included to start up Postgres.app
if it isn't running already and then start the Rails
app with Puma at <http://localhost:3000>.

```bash
$ rails start
```

**Important note**

We cache the node_modules directory in development, along with most webpack configurations.

If you update a configuration option, or add a webpack plugin, you may want to run `yarn run clean` to clean your compiled node_modules cache.


### Testing
Our Application runs tests via [Rspec](http://rspec.info/) and [Jest](https://facebook.github.io/jest/), and runs those tests on every commit via [CircleCI](https://circleci.com/gh/HarvestProfit).

#### Rspec
Rspec tests can be found in the [spec](./spec) directory. We have a few different test types, but the important distinction is between [system tests](./spec/system), and all other tests.

System tests simulate a user on the website interacting with components.

Non-system tests (unit/integration) tests components indirectly, in ruby.

#### Jest
Jest tests can be found in [/app/frontend/bundles/Application/__tests__](./app/frontend/bundles/Application/__tests__).

We do report coverage. It can be reviewed [here](https://codecov.io/gh/HarvestProfit/marketingplan).

## Initial Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nhorob67/marketingplan)
