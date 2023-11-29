// package com.bridge.faciliwise.rest;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// import com.bridge.faciliwise.service.WorkOrderService;

// @RestController
// @CrossOrigin(origins = "http://localhost:4200")
// @RequestMapping(value = "/workOrderService", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
// public class WorkOrderController {

//     @Autowired
//     WorkOrderService workOrderService;

//     @GetMapping("/getAllWorkordersByUserId")
// public ResponseEntity<Object> getWorkOrdersByUserId() {
//     try {
//         // retrieve User Id from some OAuth service
//         System.out.println("Getting to controller!");
//         String userId = "12345678";
//         return ResponseEntity.ok().body(this.workOrderService.getWorkOrdersByUserId(userId));
//     } catch (Exception exception) {
//         exception.printStackTrace();
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                 .body("{\"message\": \"Failed to retrieve workorders based on user ID\"}");
//     }
// }
// }

package com.bridge.faciliwise.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bridge.faciliwise.service.WorkOrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/work-order-service", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
public class WorkOrderController {

    @Autowired
    WorkOrderService workOrderService;

    // Endpoint for Email Request
    // Try to send email, throw exception if failed
    @GetMapping("/get-user-orders")
    public ResponseEntity<Object> getWorkOrdersByUserId() {
        try {
            // retrieve User Id from some OAuth service
            System.out.println("Getting to controller!");
            String userId = "12345678";
            return ResponseEntity.ok().body(this.workOrderService.getWorkOrdersByUserId(userId));
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"message\": \"Failed to retrieve workorders based on user ID\"}");
        }
    }
}