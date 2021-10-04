package com.beeveloper.beathub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;

@SpringBootApplication
public class BeathubApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(BeathubApplication.class);
		app.addListeners(new ApplicationPidFileWriter());
		app.run(args);
	}
}
