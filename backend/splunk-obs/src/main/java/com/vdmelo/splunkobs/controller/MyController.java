package com.vdmelo.splunkobs.controller;

import com.vdmelo.splunkobs.service.MySplunkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class MyController {

    @Autowired
    private MySplunkService mySplunkService;

    @GetMapping(path = "log")
    public String logTest() {

        return mySplunkService.logTest();
    }
}
