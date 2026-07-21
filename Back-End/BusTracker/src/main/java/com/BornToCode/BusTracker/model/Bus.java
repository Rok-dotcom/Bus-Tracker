package com.BornToCode.BusTracker.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String route;
    private String busNo;
    private String currentlocation;
    private String msg;
    private String postTime;



}
