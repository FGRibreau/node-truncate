Truncate
==================

[![CI](https://github.com/FGRibreau/node-truncate/actions/workflows/ci.yaml/badge.svg)](https://github.com/FGRibreau/node-truncate/actions/workflows/ci.yaml) [![Downloads](http://img.shields.io/npm/dm/truncate.svg)](https://www.npmjs.com/package/truncate) [![available-for-advisory](https://img.shields.io/badge/available%20for%20consulting%20advisory-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) [![Twitter Follow](https://img.shields.io/twitter/follow/fgribreau.svg?style=flat)](https://twitter.com/FGRibreau) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github) [![Slack](https://img.shields.io/badge/Slack-Join%20our%20tech%20community-17202A?logo=slack)](https://join.slack.com/t/fgribreau/shared_invite/zt-edpjwt2t-Zh39mDUMNQ0QOr9qOj~jrg)

Truncate text and keeps urls safe.

## NPM
Install the module with: `npm install truncate`

## ❤️ Shameless plug

- [Open-Source self-hostable or fully-managed **webhook as a service**](https://www.hook0.com/)
- [**Charts, simple as a URL**. No more server-side rendering pain, 1 url = 1 chart](https://image-charts.com)
- [Looking for a managed Keycloak IAM ?](https://www.cloud-iam.com/)

## Usage

```javascript
// Browser
String.truncate("1234 http://google.com hey :)", 2) === "12…"
```

```javascript
// NodeJS
> truncate = require('truncate');
> truncate("1234 http://google.com hey :)", 4);
"1234…"
> truncate("1234 http://google.com hey :)", 4, {ellipsis:null}); // or ellipsis:''
"1234"
> truncate("1234 http://google.com hey :)", 6);
"1234 http://google.com…"
> truncate("1234 http://google.com hey :)", 100);
"1234 http://google.com hey :)"
```

## [Changelog](/CHANGELOG.md)

## Donate

I maintain this project in my free time, if it helped you please support my work via [paypal](https://paypal.me/fgribreau) or [bitcoins](https://www.coinbase.com/fgribreau), thanks a lot!

## License
Copyright (c) 2014 Francois-Guillaume Ribreau
Licensed under the MIT license.
