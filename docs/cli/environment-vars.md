---
description: All the environment variables that can be used with snaper.
---

# Environment variables

### SNAPER_ENCRYPTION_KEY

(Optional) Contains the plain text encryption key. It's recommended to use encryption file as set up during `snaper init`.

### SNAPER_ENCRYPTION_KEY_FILE

(Optional) Contains the path to the file holding encryption key. You should define it using `snaper init` command, unless you know what you are doing

### AWS_ACCESS_KEY_ID

(Optional) Contains the S3 bucket access key.

### AWS_SECRET_ACCESS_KEY

(Optional) Contains the S3 bucket secret key.

### DATASHELTER_BUCKET

(Optional) Contains the bucket name.

### PGPASSWORD

(Optional) Contains the password for the configured PostgreSQL database. Takes precedence over configured value.

### MYSQL_PASSWORD

(Optional) Contains the password for the configured MySQL database. Takes precedence over configured value.

### MONGODB_PASSWORD

(Optional) Contains the password for the configured MongoDB database. Takes precedence over configured value.