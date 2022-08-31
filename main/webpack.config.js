const {
  shareAll,
  withModuleFederationPlugin,
  share,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    profile: "http://localhost:4201/profileRemoteEntry.js",
    questionnaire: "http://localhost:4202/questionnaireRemoteEntry.js",
  },

  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
    "@angular/material": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
    "bootstrap": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",      
    },
  })
  /*{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  } */,
});
