package com.BornToCode.BusTracker.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String route;
    private String busNo;
    private String currentlocation;
    private String msg;

    public Bus(int id, String route, String busNo, String currentlocation, String msg) {
        this.id = id;
        this.route = route;
        this.busNo = busNo;
        this.currentlocation = currentlocation;
        this.msg = msg;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public String getBusNo() {
        return busNo;
    }

    public void setBusNo(String busNo) {
        this.busNo = busNo;
    }

    public String getCurrentlocation() {
        return currentlocation;
    }

    public void setCurrentlocation(String currentlocation) {
        this.currentlocation = currentlocation;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "route='" + route + '\'' +
                ", bus_No='" + busNo + '\'' +
                ", current_location='" + currentlocation + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }

}
