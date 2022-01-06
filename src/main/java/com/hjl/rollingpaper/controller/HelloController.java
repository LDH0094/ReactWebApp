package com.hjl.rollingpaper.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    //간단하게 백엔드와 프론트엔드가 잘 작동하는지 확인.
    //실행시키고
    //http://localhost:8080/api/hello 를 입력하면 api호출이 정상적으로 작동한다.
    //이걸 React web에 전달할 예정
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}