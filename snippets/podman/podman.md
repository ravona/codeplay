```bash
podman volume rm $(podman volume ls -q) -f
```

```bash
podman rmi $(podman images -qa) -f
```

```bash
podman build --no-cache -t your-image-name .
```

```bash
podman system prune -a --volumes
```
