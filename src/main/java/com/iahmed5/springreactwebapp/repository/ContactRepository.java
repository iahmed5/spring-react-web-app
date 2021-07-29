package com.iahmed5.springreactwebapp.repository;

import com.iahmed5.springreactwebapp.model.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Long> {


}
