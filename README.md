# Env Kit for Node Development

## Installation

```
npm install --save env-kit
```

## Usage

### For TypeScript

```ts
import envKit from 'env-kit';
```

### For Node

```js
const envKit = require('env-kit');
```

### Pick

Pick environment variables

```ts
const { API_URL, API_KEY } = envKit.pick(['API_URL', 'API_KEY']);
```

### Get

Get all environment variables

```ts
const allEnvVars = envKit.get();
```

Get one environment variable

```ts
const API_URL = envKit.get('API_URL');
const API_KEY = envKit.get('API_KEY');
```
