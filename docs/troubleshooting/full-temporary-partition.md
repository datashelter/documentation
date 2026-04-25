---
description: "Snaper stores temporary files for compression/encryption in your /tmp partition. Files smaller than 10MB process in RAM; larger ones use disk. Adjust general.tmp_file_threshold in config.yaml to change this threshold."
---

# Why is my temporary partition full of Snaper files?

We need to store temporary files to perform compression or encryption on your data, as it cannot be processed as a stream.

By default, we process files smaller than 10 MB in RAM and larger ones using your temporary partition. You can modify this behavior by editing the `general.tmp_file_threshold` configuration value in _~/.config/snaper/config.yaml_.

After your file is uploaded, Snaper automatically removes it from your temporary partition.
