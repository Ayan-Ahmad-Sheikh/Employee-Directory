package com.employee.directory.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Allow all endpoints
                        .allowedOrigins("https://employee-directory-rho-silk.vercel.app/") // Allow your React frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // HTTP methods
                        .allowedHeaders("*") // All headers allowed
                        .allowCredentials(true); // If cookies/token used
            }
        };
    }
}
