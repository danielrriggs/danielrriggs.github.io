Appium Desktop:
https://github.com/appium/appium-desktop/releases

Appium Inspector:
https://github.com/appium/appium-inspector/releases

Setup ADB - https://developer.android.com/studio/command-line/adb
Add your SDK Location Path (get the SDK Location Path from: Android Studio -> Tools -> SDK Manager -> Android Sdk Location) to Path. Ex: `C:\Users\<yourUserName>\AppData\Local\Android\Sdk\platform-tools`

It may be necessary to set these environment variables:
%ANDROID_HOME%\platform - `C:\Users\<userName>\AppData\Local\Android\Sdk\platform-tools`
%ANDROID_HOME%\tools - `C:\Users\<userName>\AppData\Local\Android\Sdk\tools`
ANDROID_HOME - `C:\Users\<userName>\AppData\Local\Android\Sdk`
And, add to Path: `C:\Users\<userName>\AppData\Local\Android\Sdk\platform-tools`

Wishlist:
- Run Appium tests in pipeline - http://93days.me/running-javascript-appium-on-azure-devops/
