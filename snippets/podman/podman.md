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
podman rm -f $(podman ps -aq)  # Remove all existing containers
```

```bash
podman system prune -a --volumes
podman system prune --all
```
