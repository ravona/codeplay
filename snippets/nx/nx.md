# NX

## Snippets

### create a new workspace with TypeScript and Vite as a bundler

```js
nx create-nx-workspace@latest myorg --preset=ts --bundler=vite
```

### genearte a new react app with vite as a bundler

```js
nx generate @nx/react:application my-react-app --bundler=vite
```

### generate a new TypeScript library with vite as a bundler

```js
nx generate @nx/js:lib shared-styles --bundler=vite
```

```js
nx g @nx/js:library shared-functions --directory=libs
```
