const {
  shareAll,
  withModuleFederationPlugin,
  share
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "questionnaire",
  filename: "questionnaireRemoteEntry.js",
  exposes: {
    "./Module": "./src/app/questionnaire/questionnaire.module.ts",
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
    }
  })
});
