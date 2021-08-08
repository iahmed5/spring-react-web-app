package com.iahmed5.springreactwebapp.controller;

import com.iahmed5.springreactwebapp.model.Contact;
import com.iahmed5.springreactwebapp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactRepository repository;

    @GetMapping
    private List<Contact> getContacts() {
        return (List<Contact>) repository.findAll();
    }

    @PostMapping
    private ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        Contact addedContact = repository.save(contact);
        System.out.println(addedContact.toString());
        return ResponseEntity.ok().body(addedContact);
    }
}
