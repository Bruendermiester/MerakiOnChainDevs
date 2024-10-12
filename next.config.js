/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

nodejs_bundling_options = NodejsBundlingOptions(esbuild_version="0.21.5")

some_lambda = NodejsFunction(
    scope=self,
    ...
    bundling=nodejs_bundling_options,
)