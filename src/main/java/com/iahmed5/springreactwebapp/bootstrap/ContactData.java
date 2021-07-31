package com.iahmed5.springreactwebapp.bootstrap;

import com.iahmed5.springreactwebapp.model.Contact;
import com.iahmed5.springreactwebapp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ContactData implements CommandLineRunner {
    @Autowired
    private ContactRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Contact("Sajid", "Kareem", "sajid.k@gmail.com"));
    }
}
