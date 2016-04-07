package au.com.reza;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

import au.com.reza.entity.Wall;

@RestController
@EnableAutoConfiguration
public class WallController {

	@RequestMapping(value="/addComment", method=RequestMethod.POST)
    public long addCommentToWall(@RequestBody Wall wall) {
		// TODO save message and return the message id
		System.out.println(wall.getComment());
        return 313;
    }

	@RequestMapping(value="/addReply", method=RequestMethod.POST)
    public void addReply(@RequestParam("reply") String reply, @RequestParam("commentId") String commentId) {
		// TODO save message and return the message id
		System.out.println(reply);
		System.out.println(commentId);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WallController.class, args);
    }

}   
