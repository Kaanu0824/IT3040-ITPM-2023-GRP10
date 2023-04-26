const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "1b480aaad89dfc46c817586955036c93747da027",
    options: {
      "sonar.projectName": "SEJ027-node-project",
      "sonar.projectDescription": "Here I can add a description of my project",
      "sonar.projectKey": "SEJ027-node-project",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit()
);
