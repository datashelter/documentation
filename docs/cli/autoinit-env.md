# Automatic Configuration via Environment Variables

Since version v3.12.0, Snaper can start without requiring manual initialization (`snaper init`) or a pre-existing configuration file. If no configuration file is found, Snaper will automatically attempt to generate one based on a set of environment variables.

## Why this change?

This functionality significantly simplifies the deployment of Snaper in environments where managing configuration files is impractical or impossible:
- Ephemeral Docker containers (CI/CD, one-off jobs, etc.)
- Orchestrators like Kubernetes (using `Secret` and `ConfigMap`)
- Shared server environments or shared hosting (execution via cron)
- Automation scenarios where initialization must be fully scripted

## How it works

- At startup, if the Snaper configuration file does not exist, it will be automatically generated from the environment variables (listed below).
- If all required variables are present, execution proceeds normally, and the configuration file is saved for future runs.
- If some required variables are missing, Snaper stops and indicates which variables need to be added.

## Supported Environment Variables

**Required** variables:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DATASHELTER_BUCKET`

**Optional** recommended variables:
- `SNAPER_ENCRYPTION_KEY`: encryption key (automatically persisted)
- `SNAPER_MANAGE_CRONTABS`: to disable automatic crontab management (`false`, `0`)

## Usage Examples

### 1. Docker

One-off execution:
```sh
docker run --rm \
  -e AWS_ACCESS_KEY_ID=AKIA... \
  -e AWS_SECRET_ACCESS_KEY=secret \
  -e DATASHELTER_BUCKET=my-bucket \
  -e SNAPER_ENCRYPTION_KEY=my-encryption-key \
  datashelter/snaper:latest snaper backup
```

### 2. Docker Compose

```yaml
services:
  snaper:
    image: datashelter/snaper:latest
    environment:
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
      - DATASHELTER_BUCKET=${DATASHELTER_BUCKET}
      - SNAPER_ENCRYPTION_KEY=${SNAPER_ENCRYPTION_KEY}
```

### 3. Kubernetes

Inject variables via a `Secret`:

```yaml
envFrom:
  - secretRef:
      name: snaper-secret
```

## Key Considerations

- If a required variable is missing, Snaper displays a clear error with the list of variables to add.
- If you provide an encryption key (`SNAPER_ENCRYPTION_KEY`), it will be persisted to disk: ensure the configuration directory is secured.
- For persistent environments, you can mount a volume to retain the automatically generated configuration file.

## Security

- Prefer using native secret management systems (Docker secrets, Kubernetes Secrets, etc.) to inject sensitive variables.
- Avoid exposing keys in source code, images, or logs.
