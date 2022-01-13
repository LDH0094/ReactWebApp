package com.hjl.rollingpaper.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * from User where email = ?1 AND password = ?2", nativeQuery = true)
   String findByEmailNPwd(String email, String password);

}
