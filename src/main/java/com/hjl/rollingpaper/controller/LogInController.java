package com.hjl.rollingpaper.controller;


import com.hjl.rollingpaper.domain.user.UserRepository;
import com.hjl.rollingpaper.dto.UserSaveRequestDto;
import com.hjl.rollingpaper.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class LogInController {

    private final UserRepository userRepository;
    private final UserService userService;

    @PostMapping("/user/login")
    public String checkUserData(@RequestParam(value = "email") String email, @RequestParam(value = "password") String password ) {
        List<String> userInfo = userRepository.findByEmailNPwd(email, password); //"asdasd,asdasd,asd,asd" ["asdasd","asdasd"]
        try{
            if (userInfo.get(1).equals(email) && userInfo.get(3).equals(password)){
                return "이메일은: "+ email;
            }
        }
        catch (IndexOutOfBoundsException e){
            System.out.println("/LogInController/checkUserData/ 해당 이메일 패스워드 없음");
        }
        return null;
    }

    @PostMapping("/user/signup")
    public Long save(@RequestBody UserSaveRequestDto requestDto){
        return userService.save(requestDto);
    }
}
