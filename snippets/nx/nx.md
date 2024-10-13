# NX Snippets

### Create a new workspace with TypeScript and Vite as a bundler

```js
nx create-nx-workspace@latest myorg --preset=ts --bundler=vite
```

### Genearte a new react app with vite as a bundler

```js
nx generate @nx/react:application my-react-app --bundler=vite
```

### Generate a new TypeScript library with vite as a bundler

```js
nx generate @nx/js:lib shared-styles --bundler=vite
```

```js
nx g @nx/js:library shared-functions --directory=libs
```

### Bash

```bash
tree | grep -v 'node_modules' | grep -v '@' > ./ai/tree.md

podman-compose exec db psql -U postgres
podman-compose exec db psql -U leadx_user -d leadx_db
```

### Javascript

Enables importing SCSS files from a library.

```js
    resolve: {
        alias: {
            '@altrix/shared-styles': resolve(
                __dirname,
                '../../../libs/shared-styles/src/lib',
            ),
        },
    },

```
