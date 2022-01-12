package com.hjl.rollingpaper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NoteController {

    @GetMapping("/user/note")
    public String toNote(){
        return "index";
    }
}

