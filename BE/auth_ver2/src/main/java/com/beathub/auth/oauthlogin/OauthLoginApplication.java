package com.beathub.auth.oauthlogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
public class OauthLoginApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(OauthLoginApplication.class);
        app.addListeners(new ApplicationPidFileWriter());
        app.run(args);
    }

}
