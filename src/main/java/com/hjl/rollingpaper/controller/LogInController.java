package com.hjl.rollingpaper.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LogInController {

    @PostMapping("/api/loginsend")
    public String sendPostData(@RequestParam(value = "email") String email,@RequestParam(value = "password") String password ) {
        return "당신이 입력한 이메일은? " + email + "\n" + "당신이 입력한 비밀번호는?  " + password;
    }
}
