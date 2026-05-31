package com.example.scryp;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.core.context.SecurityContextHolder;
import jakarta.validation.Valid;
import java.util.List;
@CrossOrigin
@RestController
public class ProjectRequestController {
    private final UserService userService;

    public ProjectRequestController(UserService userService)
    {
        this.userService = userService;
    }
// request to send the request for work
     @PostMapping("/request/send")
     public String sendRequest(@Valid @RequestBody ProjectRequestDTO dto)
     {
         String email = SecurityContextHolder
                 .getContext()
                 .getAuthentication()
                 .getName();
         return userService.sendRequest(dto,email);
     }
// request to update the status of request recieved
    @PatchMapping("/project-request/{id}")
    public String updateProjectRequestStatus(@PathVariable int id , @RequestParam String status)
    {
        return userService.updateProjectRequestStatus(id,status);
    }

    // request to see all the sent requests
    @GetMapping("/client/requests")
    public List<ClientRequestDTO>
    getClientRequests()
    {

        String email =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication()
                        .getName();

        return userService
                .getClientRequest(email);

    }
// request to see all the request recieved by the freelancer
    @GetMapping("/freelancer/requests")
    public List<FreelancerRequestDTO> getFreelancerRequests()
    {
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return userService.getFreelancerRequest(email);
    }
}
