# Why does my temporary partition is full of snaper files?

We need to store temporary files to perform compression or encryption on your data as it can’t be processed as a stream.

By default, we process your files smaller than 10Mo in RAM and bigger ones using your temporary partition. You can modify this behavior by editing `general.tmp_file_threshold` configuration value in _~/.config/snaper/config.yaml_

After your file is uploaded, snaper automatically removes it from your temporary partition