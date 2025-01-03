module.exports = {
    src_folders: ["tests/App.spec.js"],
    output_folder: "report",
    webdriver: {
      start_process: true,
      server_path: require("chromedriver").path,
      port: 9515,
    },
    test_settings: {
      default: {
        launch_url: "http://localhost:8002",
        skip_testcases_on_fail: false,
        desiredCapabilities: {
          browserName: "chrome",
          chromeOptions: {
            args: [
              "headless",
              "no-sandbox",
              "disable-gpu",
              "window-size=1280,800",
              "disable-dev-shm-usage"
            ],
          },
        },
      },
    },
  };
  