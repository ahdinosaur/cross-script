# cross-script

cross-platform command script as subset of bash

```shell
npm install --save cross-script
```

created so i can run the following to rebuild electron apps cross-platform (fixing [ssbc/patchwork#513](https://github.com/ssbc/patchwork/pull/513)):

```shell
npm rebuild --runtime=electron --target=$(electron -v) --abi=$(electron --abi) --disturl=https://atom.io/download/atom-shell
```

## example

```shell
cross-script echo '${NODE_ENV}' '$(node -v)'
test v6.2.1
```

## usage

### `cross-script <command> [args...]`

where each argument can be:

- `anything`
- `${ENVIRONMENT_VARIABLE}`
- `$(command substitution)`

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.