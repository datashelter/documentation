---
description: Configuration related commands
---


# config

::: tabs

    == tab "Validate"
                ```
                Ensure ~/.config/snaper/config.yaml validity

                Usage:
                  snaper config validate [flags]

                Examples:
                snaper config validate --validate-s3

                Flags:
                  -h, --help          help for validate
                      --validate-s3   Ensure S3 credentials are valid
                ```


    == tab "Fetch"
                ```
                Synchronize config file with remote storage

                Usage:
                  snaper config fetch [flags]

                Examples:
                snaper config fetch

                Flags:
                  -h, --help   help for fetch
                ```


    == tab "Push"
                ```
                Push local config file to remote storage (not recommended)

                Usage:
                  snaper config push [flags]

                Examples:
                snaper config push

                Flags:
                  -h, --help   help for push
                ```


:::
