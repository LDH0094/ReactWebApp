package com.hjl.rollingpaper.domain.post;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Post {

    @Id
    private Long id;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String name;

    @Builder
    public Post(Long id, String text, String time, String color, String name) {
        this.id = id;
        this.text = text;
        this.time = time;
        this.color = color;
        this.name = name;
    }

    public void update(String text){
        this.text = text;
    }
}
