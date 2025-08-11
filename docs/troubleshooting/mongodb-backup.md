# Common MongoDB Issues

### *Server selection error: context deadline exceeded, current topology: Type: ReplicaSetNoPrimary*

```bash
ERRO[0010] unable to connect to the database mydb: Failed to connect to mongodb://admin:***@127.0.0.1:27027/mydb?appName=snaper-v3.8.4: failed to ping MongoDB: server selection error: context deadline exceeded, current topology: { Type: ReplicaSetNoPrimary, Servers: [{ Addr: localhost:27017, Type: Unknown, Last error: dial tcp [::1]:27017: connect: connection refused }, ] }
```

This error typically occurs when using the default MongoDB configuration. It happens because the server is expecting to connect to a replica set, but no primary node is available or reachable.

**Solution:**
Use the `--direct-connection` parameter to connect directly to the MongoDB instance without relying on replica set discovery.


### *Authentication error during connection handshake: unable to authenticate using mechanism "SCRAM-SHA-1"*

```bash
ERRO[0000] unable to dump database mydb: error while performing the database dump: exit status 1 (executed=/usr/bin/mongodump --uri=mongodb://127.0.0.1:27027/mydb?appName=snaper-v3.8.4&authSource=admin&directConnection=true --archive=/tmp/snaper/dump-mydb2765302789, output=2025-03-29T10:48:41.555+0000     Failed: can't create session: failed to connect to mongodb://127.0.0.1:27027/mydb?appName=snaper-v3.8.4&authSource=admin&directConnection=true: connection() error occurred during connection handshake: auth error: sasl conversation error: unable to authenticate using mechanism "SCRAM-SHA-1": (AuthenticationFailed) Authentication failed.
```

This error indicates that authentication to the MongoDB server has failed. Common causes include:
- Incorrect username or password.
- The `--auth-db` parameter is being used, but the target database is not configured for authentication.

**Solutions:**

- Double-check the credentials used for connecting to the database.
- If your MongoDB instance does **not** require authentication, try removing the `--auth-db` (or `authSource`) parameter.

If you're certain no authentication is needed and no credentials are passed, try running the command again **without** the `--auth-db` argument.
If the issue persists, review the Snaper launch parameters by editing the config file located at:
`~/.config/snaper/config.yaml`
