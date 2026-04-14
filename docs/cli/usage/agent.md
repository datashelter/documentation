---
description: Manage the Snaper agent runtime and service
---

# agent

The `agent` command group manages the Snaper agent: a long-running process that executes scheduled backups, serves the remote browse index, and reacts to remote commands. Subcommands let you run it in foreground, install it as a system service, control its lifecycle, and inspect its health.

```
Manage the Snaper agent runtime and service

Usage:
  snaper agent [command]

Available Commands:
  info        Display agent service information
  install     Install the Snaper agent as a service
  reset       Reset local and remote browse index data
  restart     restart the agent service
  run         Run the Snaper agent in foreground
  run-backups Run all scheduled backups immediately
  start       start the agent service
  status      status the agent service
  stop        stop the agent service
  uninstall   Uninstall the Snaper agent service

Flags:
  -h, --help   help for agent
```

## run

Runs the agent in the foreground. Use this for testing, debugging, or when you manage the process yourself. The agent honors `SIGINT` and `SIGTERM` for graceful shutdown.

```
Run the Snaper agent in foreground

Usage:
  snaper agent run [flags]

Flags:
  -h, --help   help for run
```

## run-backups

Triggers every scheduled backup defined in `config.yaml` immediately, once, then exits. Useful to bypass the schedule for an ad-hoc run without starting the full agent loop.

```
Run all scheduled backups immediately

Usage:
  snaper agent run-backups [flags]

Flags:
  -h, --help   help for run-backups
```

## install

Installs the agent as a background service. By default, Snaper picks the best available process manager on the host (`systemd`, then `supervisord`, then a manual fallback). Use `--mode` to force a specific one.

```
Install the Snaper agent as a service

Usage:
  snaper agent install [flags]

Flags:
  -h, --help          help for install
      --mode string   Preferred process manager (auto|systemd|supervisord|manual) (default "auto")
```

## uninstall

Removes the agent service installation (systemd unit or supervisord program file) created by `agent install`. Stops the service first if it is running.

```
Uninstall the Snaper agent service

Usage:
  snaper agent uninstall [flags]

Flags:
  -h, --help   help for uninstall
```

## start

Starts the installed agent service through the underlying process manager.

```
start the agent service

Usage:
  snaper agent start [flags]

Flags:
  -h, --help   help for start
```

## stop

Stops the installed agent service through the underlying process manager.

```
stop the agent service

Usage:
  snaper agent stop [flags]

Flags:
  -h, --help   help for stop
```

## restart

Restarts the installed agent service through the underlying process manager.

```
restart the agent service

Usage:
  snaper agent restart [flags]

Flags:
  -h, --help   help for restart
```

## status

Displays the current state of the agent service and a health snapshot: browse indexing progress, queued/running/stuck tasks, last remote poll, and last remote command received. Add `--json` to get the full structured payload, suitable for monitoring integrations.

```
status the agent service

Usage:
  snaper agent status [flags]

Flags:
  -h, --help   help for status
      --json   Output detailed status as JSON
```

## info

Prints installation details for the currently configured service: mode, unit or supervisor config path, and the manual command to run the agent yourself if needed.

```
Display agent service information

Usage:
  snaper agent info [flags]

Flags:
  -h, --help   help for info
```

## reset

Wipes the local and remote browse index data so the agent can rebuild them from scratch on the next run. The agent must be stopped before running this command.

```
Reset local and remote browse index data

Usage:
  snaper agent reset [flags]

Flags:
  -h, --help   help for reset
```

::: callout warning
`agent reset` deletes the remote browse index. The index will be rebuilt on the next agent run, which may take time on large backups.
:::
