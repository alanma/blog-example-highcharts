package uk.co.brightnorth;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class Initialiser implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        //no-op
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        //no-op
    }
}
