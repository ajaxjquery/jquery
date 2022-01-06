var client = new ClientJS(); // Create A New Client Object
var fingerprint = client.getFingerprint();
var userAgent = client.getUserAgent();
var browser = client.getBrowser();
var browserVersion = client.getBrowserVersion();
var engine = client.getEngine();
var engineVersion = client.getEngineVersion();
var OS = client.getOS();
var osVersion = client.getOSVersion();
var device = client.getDevice();
var deviceType = client.getDeviceType();
var deviceVendor = client.getDeviceVendor();
var CPU = client.getCPU();
var isMobile = client.isMobile();
var isMobileAndroid = client.isMobileAndroid();
var isMobileWindows = client.isMobileWindows();
var isMobileIOS = client.isMobileIOS();
var screenPrint = client.getScreenPrint();
var currentResolution = client.getCurrentResolution();
var availableResolution = client.getAvailableResolution();
var plugins = client.getPlugins();
var isJava = client.isJava();
var javaVersion = client.getJavaVersion();
var isFlash = client.isFlash();
var flashVersion = client.getFlashVersion();
var isSilverlight = client.isSilverlight();
var silverlightVersion = client.getSilverlightVersion();
var isMimeTypes = client.isMimeTypes();
var mimeTypes = client.getMimeTypes();
var fonts = client.getFonts();
var isLocalStorage = client.isLocalStorage();
var isSessionStorage = client.isSessionStorage();
var isCookie = client.isCookie();
var timeZone = client.getTimeZone();
var language = client.getLanguage();
var isCanvas = client.isCanvas();
var canvasPrint = client.getCanvasPrint();
var ram = navigator.deviceMemory;
var cores = navigator.hardwareConcurrency;
console.log("fingerprint: " + fingerprint);
document.cookie = "session=," + fingerprint;
// localStorage.setItem('sessions', fingerprint);
const cat = localStorage.getItem('sessions');
console.log('cat at ' + cat);
console.log("os :" + OS + " version " + osVersion);
console.log("device :" + device + "type : " + deviceType + "vendor :" + deviceVendor);
console.log("useragent :" + userAgent);
console.log('browser :' + browser + " version :" + browserVersion + " engine :" + engine + " version :" + engineVersion);
console.log("cpu :" + CPU + " cores :" + cores);
console.log("timezone :" + timeZone + " language :" + language);
console.log("current resolution: " + currentResolution);
console.log("available resolution: " + availableResolution);
function getVideoCardInfo() {
const gl = document.createElement('canvas').getContext('webgl');
if (!gl) {
  return {
    error: "no webgl",
  };
}
const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
return debugInfo ? {
  vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
  renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
} : {
  error: "no WEBGL_debug_renderer_info",
};
}

console.log(getVideoCardInfo());
console.log("gc vendor :" + getVideoCardInfo().vendor + " renderer :" + getVideoCardInfo().renderer);


var ip

function getip(json) {
  ip = json.ip;
}
var api_key = "at_6IxrucSGcMsPcQHrvCFjhvZXqP2GK";
$(function() {
  $.ajax({
      url: "https://geo.ipify.org/api/v1",
      dataType: "json",
      data: {
          apiKey: api_key,
          ipAddress: ip
      },
      success: function(data) {
          console.log(data);
      }

  });
});
