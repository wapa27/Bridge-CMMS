package com.bridge.faciliwise.rest;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value="/workorders", produces = MediaType.APPLICATION_JSON_VALUE, method=RequestMethod.GET)
public class WorkOrderController {
    public ResponseEntity<Object> getUserWorkorders() {
        try {
            
        }
    }
}
