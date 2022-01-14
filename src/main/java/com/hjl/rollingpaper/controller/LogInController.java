package com.hjl.rollingpaper.controller;


import com.hjl.rollingpaper.domain.user.UserRepository;
import com.hjl.rollingpaper.dto.UserSaveRequestDto;
import com.hjl.rollingpaper.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class LogInController {

    private final UserRepository userRepository;
    private final UserService userService;


    @PostMapping("/api/users/login")
    public String checkUserData(@RequestBody UserSaveRequestDto requestDto) {
        String userInfo = userRepository.findByEmailNPwd(requestDto.getEmail(), requestDto.getPassword()); //query 를 string으로 저장.
        String[] temp = userInfo.split(","); //저장된 String값을 ,으로 잘라서 List로
        List<String> userArray = Arrays.asList(temp); // "
        try{
            if (userArray.get(1).equals(requestDto.getEmail()) && userArray.get(3).equals(requestDto.getPassword())){
                System.out.println("OK");
                return userArray.get(2); //ok리턴값을 프론트에서 받으면 유저의 이메일과 같이 페이지 이동. requestDto.getName은 프론트에서 보낸거라 empty임 항상.
            }
        }
        catch (IndexOutOfBoundsException e){
            System.out.println("/LogInController/checkUserData/ 해당 이메일 패스워드 없음");
        }
        System.out.println(userRepository.findByEmailNPwd(requestDto.getEmail(), requestDto.getPassword()));
        return null;
    }

    @PostMapping("/api/users/signup")
    public Long save(@RequestBody UserSaveRequestDto requestDto){
        return userService.save(requestDto);
    }
}
