### Create a new workspace with TypeScript and Vite as a bundler

```js
pnpx create-nx-workspace@latest myorg --preset=ts --bundler=vite
```

### Create a new react app with vite as a bundler

```js
nx generate @nx/react:application my-react-app --bundler=vite
```

### Create a new TypeScript library with vite as a bundler

```js
nx generate @nx/js:lib shared-styles --bundler=vite
```
