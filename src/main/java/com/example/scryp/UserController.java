package com.example.scryp;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.File;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import jakarta.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
public class UserController
{
    private final UserService userService;
    public UserController(UserService userService)
    {
        this.userService = userService;
    }
    @Autowired
    UserRepository userRepository;
    // request to get all user
    @GetMapping("/user")
    public Page<UserResponseDTO> getAllUser( Pageable pageable) {
        Page<UserResponseDTO> allUser = userService.getAllUser(pageable);
        return allUser;
    }
    // request to find user by Id
    @GetMapping("/user/{id}")
    public User getUserById(@RequestParam int id)
    {
        return userService.findUserById(id);
    }
   // request to delete user by ID
    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable int id )
    {  userService.deleteUser(id);
        return  "User Deleted Successfully";
    }
    //request to update user details
    @PatchMapping ("/user/{id}")
    public ResponseEntity<User> updatePartialUser(@PathVariable int id, @RequestBody User user ) {
       User checkUser = userService.findUserById(id);
       if(user!=null)
       {User updatedUser = userService.updatePartialUser(id, user);
        return ResponseEntity.ok(updatedUser);}
       else{return ResponseEntity.notFound().build();}
    }
   // Request to upload phot
   @PostMapping("/upload")
   public String uploadFile(
           @RequestParam("file")
           MultipartFile file
   )throws IOException
   {

       String email =
               SecurityContextHolder
                       .getContext()
                       .getAuthentication()
                       .getName();

       User user =
               userRepository.findByEmail(email);

       String folderPath =
               "E:\\uploads\\";

       File folder =
               new File(folderPath);

       if(!folder.exists())
       {
           folder.mkdir();
       }

       String fileName =
               System.currentTimeMillis()
                       + "_"
                       + file.getOriginalFilename();

       String filePath =
               folderPath + fileName;

       file.transferTo(
               new File(filePath)
       );

       // SAVE RELATIVE PATH

       user.setProfilePhoto(
               "uploads/" + fileName
       );

       userRepository.save(user);

       return "Photo Uploaded Successfully";

   }
    // request to check verification of Email
    @GetMapping("/verify")
    public String verification(@RequestParam String token)
    {
        return userService.verifyEmail(token);
    }
    // request to change password
    @PostMapping("/forgot-password")
    public String forgotPassword(
            @RequestParam String email
    )
    {
        return userService.forgotPassword(email);
    }
    // request to get the profile of current logged in user
    @GetMapping("/my-profile")
    public ProfileDTO getMyProfile()
    {
        String email =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication()
                        .getName();

        return userService
                .getMyProfile(email);
    }
    // request to addd bulk users
    @PostMapping("/bulk-users")
    public String bulkCreateUsers(
            @RequestBody List<CreateUserDTO> users)
    {
        for(CreateUserDTO dto : users)
        {
            userService.register(dto);
        }

        return "Bulk users added";
    }
    // api to give full object of the logged in user
    @GetMapping("/user/me")
    public User getLoggedInUser() {

        String email =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication()
                        .getName();

        return userRepository
                .findByEmail(email);
    }

}