const {
  shareAll,
  withModuleFederationPlugin,
  share
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "profile",
  filename: "profileRemoteEntry.js",
  exposes: {
    "./Module": "./src/app/profile/profile.module.ts",
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
  }),
});
