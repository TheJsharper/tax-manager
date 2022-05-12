package com.jsharper.vatcalculator;

import com.jsharper.rest.HelloController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = HelloController.class)
public class VatCalculatorBackendApplication {

	public static void main(String[] args) {
		System.out.println("Helllo Worldnp");
		SpringApplication.run(VatCalculatorBackendApplication.class, args);
	}

}
