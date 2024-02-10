# How is compression achieved with Snaper ?

We use the ZSTD algorithm to compress all files sent to S3 (*this feature can be optionally disabled*).

We chose this algorithm because it offers one of the best speed-to-compression ratios.