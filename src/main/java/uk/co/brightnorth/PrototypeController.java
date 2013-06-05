package uk.co.brightnorth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PrototypeController {

    @RequestMapping("/")
    public String home() {
        return "chart";
    }

}