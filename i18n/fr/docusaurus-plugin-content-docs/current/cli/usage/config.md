---
sidebar_position: 2
description: Commandes liées à la configuration de snaper
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# config

<Tabs groupId="cmd_options">
  <TabItem value="validate" label="Validate">
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
  </TabItem>
  <TabItem value="fetch" label="Fetch">
        ```
        Synchronize config file with remote storage

        Usage:
          snaper config fetch [flags]

        Examples:
        snaper config fetch

        Flags:
          -h, --help   help for fetch
        ```
  </TabItem>
</Tabs>
