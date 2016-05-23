# google-analytics-beautify

人肉反编译 https://www.google-analytics.com/analytics_debug.js

# last update

2016.MAR.23

# HOWTO

1. 运行 `npm run keepup`，会同步最新的 analytics_debug.js 文件
2. 然后执行 `git diff jsbeautifier.org.js`，即可查看这期间更新了些什么
3. 然后到 `analytics_debug.beautify.js` 把这些 `diff` 更新进去；如果尚未反编译，则直接覆盖；如果已经反编译，则需人肉升级

# Refs

1. [Official: Document](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
2. [Official: JavaScript Tracking Snippet Unminifed](https://developers.google.com/analytics/devguides/collection/analyticsjs/tracking-snippet-reference#tracking-snippet-minified)
3. https://github.com/LeZuse/ga-unobfuscated
4. https://github.com/fex-team/alogs

# MIT License
